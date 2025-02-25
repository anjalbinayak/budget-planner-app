import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
  doc,
} from "firebase/firestore";
import { db, auth } from "./firebase.js";

import { GoogleGenerativeAI } from "@google/generative-ai";
import QRCode from "qrcode";

const email = JSON.parse(localStorage.getItem("email"));

if (!email) {
  window.location.href = "index.html";
}

// Chatbot Elements
const chatbotModal = document.getElementById("chatbotModal");
const closeChatbotBtn = document.getElementById("closeChatbot");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChat");
const chatbotMessages = document.getElementById("chatbotMessages");

// Transactions Elements
const addTransactionBtn = document.getElementById("addTransactionBtn");
const transactionModal = document.getElementById("transactionModal");
const transactionForm = document.getElementById("transactionForm");
const cancelBtn = document.getElementById("cancelBtn");
const transactionsList = document.getElementById("transactionsList");

const generateQRCodeButton = document.getElementById("generateQRCodeBtn");

generateQRCodeButton.addEventListener("click", () => {
  document.getElementById("qrcode").style.display = "block";
  showQRCode();
});

// Logout button functionality

// Add Transaction Button
addTransactionBtn.addEventListener("click", () => {
  transactionModal.classList.add("active");
});

// Cancel Button
cancelBtn.addEventListener("click", () => {
  transactionModal.classList.remove("active");
  transactionForm.reset();
});

// Submit Transaction Form
transactionForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = auth.currentUser;
  if (!user) {
    showToast("Please sign in first", "error");
    return;
  }
  try {
    const description = document.getElementById("description").value;
    const amount = Number.parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    await addDoc(collection(db, "transactions"), {
      userId: user.uid,
      description: description,
      amount: amount,
      type: type,
      date: serverTimestamp(),
    });

    transactionModal.classList.remove("active");
    transactionForm.reset();
    showToast("Transaction added successfully!");
    await loadTransactions();
  } catch (error) {
    showToast("Error adding transaction: " + error.message, "error");
  }
});

auth.onAuthStateChanged(async (user) => {
  if (user) {
    await loadTransactions();
  }
});
// Load Transactions Function
const loadTransactions = async () => {
  const user = auth.currentUser;

  if (!user) return;

  try {
    const transactionsQuery = query(
      collection(db, "transactions"),
      where("userId", "==", user.uid)
    );

    const snapshot = await getDocs(transactionsQuery);

    const transactions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    let totalIncome = 0;
    let totalExpenses = 0;
    transactionsList.innerHTML = "";

    if (snapshot.empty) {
      transactionsList.innerHTML = "No transactions yet";
      return;
    }

    transactions.forEach((singleDoc) => {
      const data = singleDoc;
      if (data.type === "income") {
        totalIncome += Number.parseFloat(data.amount);
      } else {
        totalExpenses += Number.parseFloat(data.amount);
      }

      const div = document.createElement("div");
      div.className = `transaction ${data.type}`;
      div.innerHTML = `${data.description} ${
        data.type === "income" ? "+" : "-"
      }$${Number.parseFloat(data.amount).toFixed(2)}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", async () => {
        await deleteDoc(doc(db, "transactions", singleDoc.id));

        showToast("Transaction deleted successfully!");
        loadTransactions();
      });

      div.appendChild(deleteBtn);
      transactionsList.appendChild(div);
    });

    showToast("Transaction loaded successfully!", "info");

    document.getElementById("totalBalance").textContent = `$${(
      totalIncome - totalExpenses
    ).toFixed(2)}`;
    document.getElementById(
      "totalIncome"
    ).textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById(
      "totalExpenses"
    ).textContent = `$${totalExpenses.toFixed(2)}`;
  } catch (error) {
    showToast("Error loading transactions: " + error.message, "error");
  } finally {
  }
};

// Chatbot Functionality
document.getElementById("chatbotButton").addEventListener("click", () => {
  chatbotModal.classList.toggle("hidden");
});

closeChatbotBtn.addEventListener("click", () => {
  chatbotModal.classList.add("hidden");
});

sendChatBtn.addEventListener("click", async () => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  displayMessage("You", userMessage);
  chatInput.value = "";

  try {
    const response = await callGeminiAI(userMessage);
    displayMessage("Gemini AI", response);
  } catch (error) {
    showToast("Error processing chat request: " + error.message, "error");
  }
});

async function callGeminiAI(message) {
  try {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyAb5n4-5OqHL9V0DE8ImoTv8dg-ltoALXU"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    return result.response.text();
  } catch (error) {
    console.error("Error calling Gemini AI:", error);
    return "Error: Unable to process your request. Please try again later.";
  }
}

function displayMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "chat-message";
  messageDiv.innerHTML = `${sender}: ${message}`;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Toast Function
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.getElementById("toastContainer").appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

const refreshBtn = document.getElementById("refresh-txn");
refreshBtn &&
  refreshBtn.addEventListener("click", async () => {
    refreshBtn.classList.add("rotate");
    setTimeout(() => {
      refreshBtn.classList.remove("rotate");
    }, 2000);
    await loadTransactions();
  });

function showQRCode() {
  QRCode.toDataURL(
    "https://anjalbinayak.github.io/budget-planner-app/",
    function (err, url) {
      document.getElementById("qrImage").src = url;
    }
  );
}

console.log("Script loaded and executed");

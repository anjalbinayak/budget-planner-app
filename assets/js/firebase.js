import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJdMviZ0eu11A05Oi9L7B996kfK2w2DA4",
  authDomain: "web-trends-budget-planner.firebaseapp.com",
  projectId: "web-trends-budget-planner",
  storageBucket: "web-trends-budget-planner.firebasestorage.app",
  messagingSenderId: "762738551106",
  appId: "1:762738551106:web:996409f29e6be01dcd40db",
  measurementId: "G-GW3L8C42PD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

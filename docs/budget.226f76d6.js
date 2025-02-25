// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"duGzK":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "00109bdb226f76d6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"azFBe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _firestore = require("firebase/firestore");
var _firebaseJs = require("./firebase.js");
var _generativeAi = require("@google/generative-ai");
var _qrcode = require("qrcode");
var _qrcodeDefault = parcelHelpers.interopDefault(_qrcode);
const email = JSON.parse(localStorage.getItem("email"));
if (!email) window.location.href = "index.html";
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
generateQRCodeButton.addEventListener("click", ()=>{
    document.getElementById("qrcode").style.display = "block";
    showQRCode();
});
// Logout button functionality
// Add Transaction Button
addTransactionBtn.addEventListener("click", ()=>{
    transactionModal.classList.add("active");
});
// Cancel Button
cancelBtn.addEventListener("click", ()=>{
    transactionModal.classList.remove("active");
    transactionForm.reset();
});
// Submit Transaction Form
transactionForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const user = (0, _firebaseJs.auth).currentUser;
    if (!user) {
        showToast("Please sign in first", "error");
        return;
    }
    try {
        const description = document.getElementById("description").value;
        const amount = Number.parseFloat(document.getElementById("amount").value);
        const type = document.getElementById("type").value;
        await (0, _firestore.addDoc)((0, _firestore.collection)((0, _firebaseJs.db), "transactions"), {
            userId: user.uid,
            description: description,
            amount: amount,
            type: type,
            date: (0, _firestore.serverTimestamp)()
        });
        transactionModal.classList.remove("active");
        transactionForm.reset();
        showToast("Transaction added successfully!");
        await loadTransactions();
    } catch (error) {
        showToast("Error adding transaction: " + error.message, "error");
    }
});
(0, _firebaseJs.auth).onAuthStateChanged(async (user)=>{
    if (user) await loadTransactions();
});
// Load Transactions Function
const loadTransactions = async ()=>{
    const user = (0, _firebaseJs.auth).currentUser;
    if (!user) return;
    try {
        const transactionsQuery = (0, _firestore.query)((0, _firestore.collection)((0, _firebaseJs.db), "transactions"), (0, _firestore.where)("userId", "==", user.uid));
        const snapshot = await (0, _firestore.getDocs)(transactionsQuery);
        const transactions = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        let totalIncome = 0;
        let totalExpenses = 0;
        transactionsList.innerHTML = "";
        if (snapshot.empty) {
            transactionsList.innerHTML = "No transactions yet";
            return;
        }
        transactions.forEach((singleDoc)=>{
            const data = singleDoc;
            if (data.type === "income") totalIncome += Number.parseFloat(data.amount);
            else totalExpenses += Number.parseFloat(data.amount);
            const div = document.createElement("div");
            div.className = `transaction ${data.type}`;
            div.innerHTML = `${data.description} ${data.type === "income" ? "+" : "-"}$${Number.parseFloat(data.amount).toFixed(2)}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";
            deleteBtn.className = "delete-btn";
            deleteBtn.addEventListener("click", async ()=>{
                await (0, _firestore.deleteDoc)((0, _firestore.doc)((0, _firebaseJs.db), "transactions", singleDoc.id));
                showToast("Transaction deleted successfully!");
                loadTransactions();
            });
            div.appendChild(deleteBtn);
            transactionsList.appendChild(div);
        });
        showToast("Transaction loaded successfully!", "info");
        document.getElementById("totalBalance").textContent = `$${(totalIncome - totalExpenses).toFixed(2)}`;
        document.getElementById("totalIncome").textContent = `$${totalIncome.toFixed(2)}`;
        document.getElementById("totalExpenses").textContent = `$${totalExpenses.toFixed(2)}`;
    } catch (error) {
        showToast("Error loading transactions: " + error.message, "error");
    } finally{}
};
// Chatbot Functionality
document.getElementById("chatbotButton").addEventListener("click", ()=>{
    chatbotModal.classList.toggle("hidden");
});
closeChatbotBtn.addEventListener("click", ()=>{
    chatbotModal.classList.add("hidden");
});
sendChatBtn.addEventListener("click", async ()=>{
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
        const genAI = new (0, _generativeAi.GoogleGenerativeAI)("AIzaSyAb5n4-5OqHL9V0DE8ImoTv8dg-ltoALXU");
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });
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
    setTimeout(()=>toast.remove(), 3000);
}
const refreshBtn = document.getElementById("refresh-txn");
refreshBtn && refreshBtn.addEventListener("click", async ()=>{
    refreshBtn.classList.add("rotate");
    setTimeout(()=>{
        refreshBtn.classList.remove("rotate");
    }, 2000);
    await loadTransactions();
});
function showQRCode() {
    (0, _qrcodeDefault.default).toDataURL("https://anjalbinayak.github.io/budget-planner-app/", function(err, url) {
        document.getElementById("qrImage").src = url;
    });
}
console.log("Script loaded and executed");

},{"firebase/firestore":"8A4BC","./firebase.js":"38sjH","@google/generative-ai":"gKJrW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","qrcode":"lB7MY"}],"gKJrW":[function(require,module,exports,__globalThis) {
/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlockReason", ()=>BlockReason);
parcelHelpers.export(exports, "ChatSession", ()=>ChatSession);
parcelHelpers.export(exports, "DynamicRetrievalMode", ()=>DynamicRetrievalMode);
parcelHelpers.export(exports, "ExecutableCodeLanguage", ()=>ExecutableCodeLanguage);
parcelHelpers.export(exports, "FinishReason", ()=>FinishReason);
parcelHelpers.export(exports, "FunctionCallingMode", ()=>FunctionCallingMode);
parcelHelpers.export(exports, "GenerativeModel", ()=>GenerativeModel);
parcelHelpers.export(exports, "GoogleGenerativeAI", ()=>GoogleGenerativeAI);
parcelHelpers.export(exports, "GoogleGenerativeAIError", ()=>GoogleGenerativeAIError);
parcelHelpers.export(exports, "GoogleGenerativeAIFetchError", ()=>GoogleGenerativeAIFetchError);
parcelHelpers.export(exports, "GoogleGenerativeAIRequestInputError", ()=>GoogleGenerativeAIRequestInputError);
parcelHelpers.export(exports, "GoogleGenerativeAIResponseError", ()=>GoogleGenerativeAIResponseError);
parcelHelpers.export(exports, "HarmBlockThreshold", ()=>HarmBlockThreshold);
parcelHelpers.export(exports, "HarmCategory", ()=>HarmCategory);
parcelHelpers.export(exports, "HarmProbability", ()=>HarmProbability);
parcelHelpers.export(exports, "Outcome", ()=>Outcome);
parcelHelpers.export(exports, "POSSIBLE_ROLES", ()=>POSSIBLE_ROLES);
parcelHelpers.export(exports, "SchemaType", ()=>SchemaType);
parcelHelpers.export(exports, "TaskType", ()=>TaskType);
var SchemaType;
(function(SchemaType) {
    /** String type. */ SchemaType["STRING"] = "string";
    /** Number type. */ SchemaType["NUMBER"] = "number";
    /** Integer type. */ SchemaType["INTEGER"] = "integer";
    /** Boolean type. */ SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */ SchemaType["ARRAY"] = "array";
    /** Object type. */ SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @public
 */ var ExecutableCodeLanguage;
(function(ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */ var Outcome;
(function(Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */ Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */ Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */ Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */ Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Possible roles.
 * @public
 */ const POSSIBLE_ROLES = [
    "user",
    "model",
    "function",
    "system"
];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */ var HarmCategory;
(function(HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */ var HarmBlockThreshold;
(function(HarmBlockThreshold) {
    // Threshold is unspecified.
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    // Content with NEGLIGIBLE will be allowed.
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    // Content with NEGLIGIBLE and LOW will be allowed.
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    // All content will be allowed.
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */ var HarmProbability;
(function(HarmProbability) {
    // Probability is unspecified.
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    // Content has a negligible chance of being unsafe.
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    // Content has a low chance of being unsafe.
    HarmProbability["LOW"] = "LOW";
    // Content has a medium chance of being unsafe.
    HarmProbability["MEDIUM"] = "MEDIUM";
    // Content has a high chance of being unsafe.
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */ var BlockReason;
(function(BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */ var FinishReason;
(function(FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */ var TaskType;
(function(TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */ var FunctionCallingMode;
(function(FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */ var DynamicRetrievalMode;
(function(DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Basic error type for this SDK.
 * @public
 */ class GoogleGenerativeAIError extends Error {
    constructor(message){
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */ class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */ class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails){
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */ class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */ const PACKAGE_VERSION = "0.21.0";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function(Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions){
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) url += "?alt=sse";
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */ function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) clientHeaders.push(requestOptions.apiClient);
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) try {
            customHeaders = new Headers(customHeaders);
        } catch (e) {
            throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
        }
        for (const [headerName, headerValue] of customHeaders.entries()){
            if (headerName === "x-goog-api-key") throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            else if (headerName === "x-goog-api-client") throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), {
            method: "POST",
            headers: await getHeaders(url),
            body
        })
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, // Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    } catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) await handleResponseNotOk(response, url);
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    } catch (e) {
    // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */ function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) setTimeout(()=>controller.abort(), requestOptions.timeout);
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) requestOptions.signal.addEventListener("abort", ()=>{
            controller.abort();
        });
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */ function addHelpers(response) {
    response.text = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning text from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            if (hadBadFinishReason(response.candidates[0])) throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            return getText(response);
        } else if (response.promptFeedback) throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        return "";
    };
    /**
     * TODO: remove at next major version
     */ response.functionCall = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            if (hadBadFinishReason(response.candidates[0])) throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            console.warn(`response.functionCall() is deprecated. ` + `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        } else if (response.promptFeedback) throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        return undefined;
    };
    response.functionCalls = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            if (hadBadFinishReason(response.candidates[0])) throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            return getFunctionCalls(response);
        } else if (response.promptFeedback) throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */ function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
        if (part.text) textStrings.push(part.text);
        if (part.executableCode) textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
        if (part.codeExecutionResult) textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
    }
    if (textStrings.length > 0) return textStrings.join("");
    else return "";
}
/**
 * Returns functionCall of first candidate.
 */ function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts)if (part.functionCall) functionCalls.push(part.functionCall);
    }
    if (functionCalls.length > 0) return functionCalls;
    else return undefined;
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE
];
function hadBadFinishReason(candidate) {
    return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) message += ` due to ${response.promptFeedback.blockReason}`;
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) message += `: ${response.promptFeedback.blockReasonMessage}`;
    } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) message += `: ${firstCandidate.finishMessage}`;
        }
    }
    return message;
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
typeof SuppressedError === "function" && SuppressedError;
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */ function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
        fatal: true
    }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2)
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) return addHelpers(aggregateResponses(allResponses));
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while(true){
            const { value, done } = yield __await(reader.read());
            if (done) break;
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */ function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start (controller) {
            let currentText = "";
            return pump();
            function pump() {
                return reader.read().then(({ value, done })=>{
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while(match){
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        } catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                });
            }
        }
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */ function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
    };
    for (const response of responses){
        if (response.candidates) for (const candidate of response.candidates){
            const i = candidate.index;
            if (!aggregatedResponse.candidates) aggregatedResponse.candidates = [];
            if (!aggregatedResponse.candidates[i]) aggregatedResponse.candidates[i] = {
                index: candidate.index
            };
            // Keep overwriting, the last one will be final
            aggregatedResponse.candidates[i].citationMetadata = candidate.citationMetadata;
            aggregatedResponse.candidates[i].groundingMetadata = candidate.groundingMetadata;
            aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
            aggregatedResponse.candidates[i].finishMessage = candidate.finishMessage;
            aggregatedResponse.candidates[i].safetyRatings = candidate.safetyRatings;
            /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */ if (candidate.content && candidate.content.parts) {
                if (!aggregatedResponse.candidates[i].content) aggregatedResponse.candidates[i].content = {
                    role: candidate.content.role || "user",
                    parts: []
                };
                const newPart = {};
                for (const part of candidate.content.parts){
                    if (part.text) newPart.text = part.text;
                    if (part.functionCall) newPart.functionCall = part.functionCall;
                    if (part.executableCode) newPart.executableCode = part.executableCode;
                    if (part.codeExecutionResult) newPart.codeExecutionResult = part.codeExecutionResult;
                    if (Object.keys(newPart).length === 0) newPart.text = "";
                    aggregatedResponse.candidates[i].content.parts.push(newPart);
                }
            }
        }
        if (response.usageMetadata) aggregatedResponse.usageMetadata = response.usageMetadata;
    }
    return aggregatedResponse;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse
    };
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) return undefined;
    else if (typeof input === "string") return {
        role: "system",
        parts: [
            {
                text: input
            }
        ]
    };
    else if (input.text) return {
        role: "system",
        parts: [
            input
        ]
    };
    else if (input.parts) {
        if (!input.role) return {
            role: "system",
            parts: input.parts
        };
        else return input;
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") newParts = [
        {
            text: request
        }
    ];
    else {
        for (const partOrString of request)if (typeof partOrString === "string") newParts.push({
            text: partOrString
        });
        else newParts.push(partOrString);
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */ function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = {
        role: "user",
        parts: []
    };
    const functionContent = {
        role: "function",
        parts: []
    };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts)if ("functionResponse" in part) {
        functionContent.parts.push(part);
        hasFunctionContent = true;
    } else {
        userContent.parts.push(part);
        hasUserContent = true;
    }
    if (hasUserContent && hasFunctionContent) throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    if (!hasUserContent && !hasFunctionContent) throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    if (hasUserContent) return userContent;
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: []
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        formattedGenerateContentRequest.contents = params.contents;
    } else if (containsGenerateContentRequest) formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [
            content
        ];
    }
    return {
        generateContentRequest: formattedGenerateContentRequest
    };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) formattedRequest = params;
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = {
            contents: [
                content
            ]
        };
    }
    if (params.systemInstruction) formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return {
            content
        };
    }
    return params;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult"
];
const VALID_PARTS_PER_ROLE = {
    user: [
        "text",
        "inlineData"
    ],
    function: [
        "functionResponse"
    ],
    model: [
        "text",
        "functionCall",
        "executableCode",
        "codeExecutionResult"
    ],
    // System instructions shouldn't be in history anyway.
    system: [
        "text"
    ]
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history){
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        if (!POSSIBLE_ROLES.includes(role)) throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        if (!Array.isArray(parts)) throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        if (parts.length === 0) throw new GoogleGenerativeAIError("Each Content should have at least one part");
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0
        };
        for (const part of parts){
            for (const key of VALID_PART_FIELDS)if (key in part) countFields[key] += 1;
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS){
            if (!validParts.includes(key) && countFields[key] > 0) throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
        }
        prevContent = true;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do not log a message for this error.
 */ const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */ class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}){
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */ async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions)).then((result)=>{
            var _a;
            if (result.response.candidates && result.response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({
                    parts: [],
                    // Response seems to come back without a role set.
                    role: "model"
                }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
            }
            finalResult = result;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>streamPromise)// This must be handled to avoid unhandled rejection, but jump
        // to the final catch block with a label to not log this error.
        .catch((_ignored)=>{
            throw new Error(SILENT_ERROR);
        }).then((streamResult)=>streamResult.response).then((response)=>{
            if (response.candidates && response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) responseContent.role = "model";
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
            }
        }).catch((e)=>{
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) // Users do not have access to _sendPromise to catch errors
            // downstream from streamPromise, so they should not throw.
            console.error(e);
        });
        return streamPromise;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request)=>{
        return Object.assign(Object.assign({}, request), {
            model
        });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
        requests: requestsWithModel
    }), requestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Class for generative model APIs.
 * @public
 */ class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}){
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) // Models may be named "models/model-name" or "tunedModels/model-name"
        this.model = modelParams.model;
        else // If path is not included, assume it's a non-tuned model.
        this.model = `models/${modelParams.model}`;
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */ startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Top-level class for this SDK
 * @public
 */ class GoogleGenerativeAI {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */ getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) throw new GoogleGenerativeAIError(`Must provide a model name. ` + `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */ getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        if (!cachedContent.model) throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */ const disallowedDuplicates = [
            "model",
            "systemInstruction"
        ];
        for (const key of disallowedDuplicates)if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
            if (key === "model") {
                const modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
                const cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
                if (modelParamsComp === cachedContentComp) continue;
            }
            throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` + ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
            model: cachedContent.model,
            tools: cachedContent.tools,
            toolConfig: cachedContent.toolConfig,
            systemInstruction: cachedContent.systemInstruction,
            cachedContent
        });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lB7MY":[function(require,module,exports,__globalThis) {
const canPromise = require("da1f68cc1fc16077");
const QRCode = require("8c6cf49ef2287430");
const CanvasRenderer = require("8a60cf7722cc14ce");
const SvgRenderer = require("f6fcc816b915ba37");
function renderCanvas(renderFunc, canvas, text, opts, cb) {
    const args = [].slice.call(arguments, 1);
    const argsNum = args.length;
    const isLastArgCb = typeof args[argsNum - 1] === 'function';
    if (!isLastArgCb && !canPromise()) throw new Error('Callback required as last argument');
    if (isLastArgCb) {
        if (argsNum < 2) throw new Error('Too few arguments provided');
        if (argsNum === 2) {
            cb = text;
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 3) {
            if (canvas.getContext && typeof cb === 'undefined') {
                cb = opts;
                opts = undefined;
            } else {
                cb = opts;
                opts = text;
                text = canvas;
                canvas = undefined;
            }
        }
    } else {
        if (argsNum < 1) throw new Error('Too few arguments provided');
        if (argsNum === 1) {
            text = canvas;
            canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
            opts = text;
            text = canvas;
            canvas = undefined;
        }
        return new Promise(function(resolve, reject) {
            try {
                const data = QRCode.create(text, opts);
                resolve(renderFunc(data, canvas, opts));
            } catch (e) {
                reject(e);
            }
        });
    }
    try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
    } catch (e) {
        cb(e);
    }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
// only svg for now.
exports.toString = renderCanvas.bind(null, function(data, _, opts) {
    return SvgRenderer.render(data, opts);
});

},{"da1f68cc1fc16077":"9FrZa","8c6cf49ef2287430":"20hbG","8a60cf7722cc14ce":"2oGFV","f6fcc816b915ba37":"7Akrj"}],"9FrZa":[function(require,module,exports,__globalThis) {
// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
module.exports = function() {
    return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};

},{}],"20hbG":[function(require,module,exports,__globalThis) {
const Utils = require("4cf6a8173d9f3a2");
const ECLevel = require("2ad62f61c352884c");
const BitBuffer = require("87d5a6270eb1dc26");
const BitMatrix = require("91abc94f777368cc");
const AlignmentPattern = require("9737c3939ab85d95");
const FinderPattern = require("cee3d371e219e45e");
const MaskPattern = require("8700c8c682afabf3");
const ECCode = require("65ad903a6ba3e");
const ReedSolomonEncoder = require("1e8e447afb4d169c");
const Version = require("8a4a19af97836d80");
const FormatInfo = require("26720f9d94c9e268");
const Mode = require("7b6429a248ecc51f");
const Segments = require("1368d0fa14524351");
/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/ /**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupFinderPattern(matrix, version) {
    const size = matrix.size;
    const pos = FinderPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -1; r <= 7; r++){
            if (row + r <= -1 || size <= row + r) continue;
            for(let c = -1; c <= 7; c++){
                if (col + c <= -1 || size <= col + c) continue;
                if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
                else matrix.set(row + r, col + c, false, true);
            }
        }
    }
}
/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */ function setupTimingPattern(matrix) {
    const size = matrix.size;
    for(let r = 8; r < size - 8; r++){
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
    }
}
/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupAlignmentPattern(matrix, version) {
    const pos = AlignmentPattern.getPositions(version);
    for(let i = 0; i < pos.length; i++){
        const row = pos[i][0];
        const col = pos[i][1];
        for(let r = -2; r <= 2; r++){
            for(let c = -2; c <= 2; c++)if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
            else matrix.set(row + r, col + c, false, true);
        }
    }
}
/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */ function setupVersionInfo(matrix, version) {
    const size = matrix.size;
    const bits = Version.getEncodedBits(version);
    let row, col, mod;
    for(let i = 0; i < 18; i++){
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
    }
}
/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */ function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
    const size = matrix.size;
    const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
    let i, mod;
    for(i = 0; i < 15; i++){
        mod = (bits >> i & 1) === 1;
        // vertical
        if (i < 6) matrix.set(i, 8, mod, true);
        else if (i < 8) matrix.set(i + 1, 8, mod, true);
        else matrix.set(size - 15 + i, 8, mod, true);
        // horizontal
        if (i < 8) matrix.set(8, size - i - 1, mod, true);
        else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
        else matrix.set(8, 15 - i - 1, mod, true);
    }
    // fixed module
    matrix.set(size - 8, 8, 1, true);
}
/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */ function setupData(matrix, data) {
    const size = matrix.size;
    let inc = -1;
    let row = size - 1;
    let bitIndex = 7;
    let byteIndex = 0;
    for(let col = size - 1; col > 0; col -= 2){
        if (col === 6) col--;
        while(true){
            for(let c = 0; c < 2; c++)if (!matrix.isReserved(row, col - c)) {
                let dark = false;
                if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
                matrix.set(row, col - c, dark);
                bitIndex--;
                if (bitIndex === -1) {
                    byteIndex++;
                    bitIndex = 7;
                }
            }
            row += inc;
            if (row < 0 || size <= row) {
                row -= inc;
                inc = -inc;
                break;
            }
        }
    }
}
/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */ function createData(version, errorCorrectionLevel, segments) {
    // Prepare data buffer
    const buffer = new BitBuffer();
    segments.forEach(function(data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);
        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        // add binary data sequence to buffer
        data.write(buffer);
    });
    // Calculate required number of bits
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    // Add a terminator.
    // If the bit string is shorter than the total number of required bits,
    // a terminator of up to four 0s must be added to the right side of the string.
    // If the bit string is more than four bits shorter than the required number of bits,
    // add four 0s to the end.
    if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
    // If the bit string is fewer than four bits shorter, add only the number of 0s that
    // are needed to reach the required number of bits.
    // After adding the terminator, if the number of bits in the string is not a multiple of 8,
    // pad the string on the right with 0s to make the string's length a multiple of 8.
    while(buffer.getLengthInBits() % 8 !== 0)buffer.putBit(0);
    // Add pad bytes if the string is still shorter than the total number of required bits.
    // Extend the buffer to fill the data capacity of the symbol corresponding to
    // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
    // and 00010001 (0x11) alternately.
    const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
    for(let i = 0; i < remainingByte; i++)buffer.put(i % 2 ? 0x11 : 0xEC, 8);
    return createCodewords(buffer, version, errorCorrectionLevel);
}
/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */ function createCodewords(bitBuffer, version, errorCorrectionLevel) {
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewords = totalCodewords - ecTotalCodewords;
    // Total number of blocks
    const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
    // Calculate how many blocks each group should contain
    const blocksInGroup2 = totalCodewords % ecTotalBlocks;
    const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
    const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
    const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
    // Number of EC codewords is the same for both groups
    const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
    // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
    const rs = new ReedSolomonEncoder(ecCount);
    let offset = 0;
    const dcData = new Array(ecTotalBlocks);
    const ecData = new Array(ecTotalBlocks);
    let maxDataSize = 0;
    const buffer = new Uint8Array(bitBuffer.buffer);
    // Divide the buffer into the required number of blocks
    for(let b = 0; b < ecTotalBlocks; b++){
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);
        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
    }
    // Create final data
    // Interleave the data and error correction codewords from each block
    const data = new Uint8Array(totalCodewords);
    let index = 0;
    let i, r;
    // Add data codewords
    for(i = 0; i < maxDataSize; i++){
        for(r = 0; r < ecTotalBlocks; r++)if (i < dcData[r].length) data[index++] = dcData[r][i];
    }
    // Apped EC codewords
    for(i = 0; i < ecCount; i++)for(r = 0; r < ecTotalBlocks; r++)data[index++] = ecData[r][i];
    return data;
}
/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */ function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
    let segments;
    if (Array.isArray(data)) segments = Segments.fromArray(data);
    else if (typeof data === 'string') {
        let estimatedVersion = version;
        if (!estimatedVersion) {
            const rawSegments = Segments.rawSplit(data);
            // Estimate best version that can contain raw splitted segments
            estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments = Segments.fromString(data, estimatedVersion || 40);
    } else throw new Error('Invalid data');
    // Get the min version that can contain data
    const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
    // If no version is found, data cannot be stored
    if (!bestVersion) throw new Error('The amount of data is too big to be stored in a QR Code');
    // If not specified, use min version as default
    if (!version) version = bestVersion;
    else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + '.\n');
    const dataBits = createData(version, errorCorrectionLevel, segments);
    // Allocate matrix buffer
    const moduleCount = Utils.getSymbolSize(version);
    const modules = new BitMatrix(moduleCount);
    // Add function modules
    setupFinderPattern(modules, version);
    setupTimingPattern(modules);
    setupAlignmentPattern(modules, version);
    // Add temporary dummy bits for format info just to set them as reserved.
    // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
    // since the masking operation must be performed only on the encoding region.
    // These blocks will be replaced with correct values later in code.
    setupFormatInfo(modules, errorCorrectionLevel, 0);
    if (version >= 7) setupVersionInfo(modules, version);
    // Add data codewords
    setupData(modules, dataBits);
    if (isNaN(maskPattern)) // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
    // Apply mask pattern
    MaskPattern.applyMask(maskPattern, modules);
    // Replace format info bits with correct values
    setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
    return {
        modules: modules,
        version: version,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern,
        segments: segments
    };
}
/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */ exports.create = function create(data, options) {
    if (typeof data === 'undefined' || data === '') throw new Error('No input text');
    let errorCorrectionLevel = ECLevel.M;
    let version;
    let mask;
    if (typeof options !== 'undefined') {
        // Use higher error correction level as default
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
    }
    return createSymbol(data, version, errorCorrectionLevel, mask);
};

},{"4cf6a8173d9f3a2":"iXLHI","2ad62f61c352884c":"kbPwo","87d5a6270eb1dc26":"kiPfj","91abc94f777368cc":"fTjkX","9737c3939ab85d95":"1o9KB","cee3d371e219e45e":"dc6Ma","8700c8c682afabf3":"fyimH","65ad903a6ba3e":"5yWYH","1e8e447afb4d169c":"47Qq0","8a4a19af97836d80":"a8ag2","26720f9d94c9e268":"iThdR","7b6429a248ecc51f":"f1e9A","1368d0fa14524351":"4tKki"}],"iXLHI":[function(require,module,exports,__globalThis) {
let toSJISFunction;
const CODEWORDS_COUNT = [
    0,
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
];
/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */ exports.getSymbolSize = function getSymbolSize(version) {
    if (!version) throw new Error('"version" cannot be null or undefined');
    if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
    return version * 4 + 17;
};
/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */ exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
    return CODEWORDS_COUNT[version];
};
/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */ exports.getBCHDigit = function(data) {
    let digit = 0;
    while(data !== 0){
        digit++;
        data >>>= 1;
    }
    return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
    if (typeof f !== 'function') throw new Error('"toSJISFunc" is not a valid function.');
    toSJISFunction = f;
};
exports.isKanjiModeEnabled = function() {
    return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
    return toSJISFunction(kanji);
};

},{}],"kbPwo":[function(require,module,exports,__globalThis) {
exports.L = {
    bit: 1
};
exports.M = {
    bit: 0
};
exports.Q = {
    bit: 3
};
exports.H = {
    bit: 2
};
function fromString(string) {
    if (typeof string !== 'string') throw new Error('Param is not a string');
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'l':
        case 'low':
            return exports.L;
        case 'm':
        case 'medium':
            return exports.M;
        case 'q':
        case 'quartile':
            return exports.Q;
        case 'h':
        case 'high':
            return exports.H;
        default:
            throw new Error('Unknown EC Level: ' + string);
    }
}
exports.isValid = function isValid(level) {
    return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{}],"kiPfj":[function(require,module,exports,__globalThis) {
function BitBuffer() {
    this.buffer = [];
    this.length = 0;
}
BitBuffer.prototype = {
    get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
    },
    put: function(num, length) {
        for(let i = 0; i < length; i++)this.putBit((num >>> length - i - 1 & 1) === 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        this.length++;
    }
};
module.exports = BitBuffer;

},{}],"fTjkX":[function(require,module,exports,__globalThis) {
/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */ function BitMatrix(size) {
    if (!size || size < 1) throw new Error('BitMatrix size must be defined and greater than 0');
    this.size = size;
    this.data = new Uint8Array(size * size);
    this.reservedBit = new Uint8Array(size * size);
}
/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */ BitMatrix.prototype.set = function(row, col, value, reserved) {
    const index = row * this.size + col;
    this.data[index] = value;
    if (reserved) this.reservedBit[index] = true;
};
/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */ BitMatrix.prototype.get = function(row, col) {
    return this.data[row * this.size + col];
};
/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */ BitMatrix.prototype.xor = function(row, col, value) {
    this.data[row * this.size + col] ^= value;
};
/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */ BitMatrix.prototype.isReserved = function(row, col) {
    return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

},{}],"1o9KB":[function(require,module,exports,__globalThis) {
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */ const getSymbolSize = require("3fa093180e62a22a").getSymbolSize;
/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */ exports.getRowColCoords = function getRowColCoords(version) {
    if (version === 1) return [];
    const posCount = Math.floor(version / 7) + 2;
    const size = getSymbolSize(version);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [
        size - 7
    ] // Last coord is always (size - 7)
    ;
    for(let i = 1; i < posCount - 1; i++)positions[i] = positions[i - 1] - intervals;
    positions.push(6) // First coord is always 6
    ;
    return positions.reverse();
};
/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const coords = [];
    const pos = exports.getRowColCoords(version);
    const posLength = pos.length;
    for(let i = 0; i < posLength; i++)for(let j = 0; j < posLength; j++){
        // Skip if position is occupied by finder patterns
        if (i === 0 && j === 0 || // top-left
        i === 0 && j === posLength - 1 || // bottom-left
        i === posLength - 1 && j === 0) continue;
        coords.push([
            pos[i],
            pos[j]
        ]);
    }
    return coords;
};

},{"3fa093180e62a22a":"iXLHI"}],"dc6Ma":[function(require,module,exports,__globalThis) {
const getSymbolSize = require("6ec9ae5660047293").getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */ exports.getPositions = function getPositions(version) {
    const size = getSymbolSize(version);
    return [
        // top-left
        [
            0,
            0
        ],
        // top-right
        [
            size - FINDER_PATTERN_SIZE,
            0
        ],
        // bottom-left
        [
            0,
            size - FINDER_PATTERN_SIZE
        ]
    ];
};

},{"6ec9ae5660047293":"iXLHI"}],"fyimH":[function(require,module,exports,__globalThis) {
/**
 * Data mask pattern reference
 * @type {Object}
 */ exports.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */ const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
};
/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */ exports.isValid = function isValid(mask) {
    return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};
/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */ exports.from = function from(value) {
    return exports.isValid(value) ? parseInt(value, 10) : undefined;
};
/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/ exports.getPenaltyN1 = function getPenaltyN1(data) {
    const size = data.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for(let row = 0; row < size; row++){
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for(let col = 0; col < size; col++){
            let module = data.get(row, col);
            if (module === lastCol) sameCountCol++;
            else {
                if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
                lastCol = module;
                sameCountCol = 1;
            }
            module = data.get(col, row);
            if (module === lastRow) sameCountRow++;
            else {
                if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
                lastRow = module;
                sameCountRow = 1;
            }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
};
/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */ exports.getPenaltyN2 = function getPenaltyN2(data) {
    const size = data.size;
    let points = 0;
    for(let row = 0; row < size - 1; row++)for(let col = 0; col < size - 1; col++){
        const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
        if (last === 4 || last === 0) points++;
    }
    return points * PenaltyScores.N2;
};
/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */ exports.getPenaltyN3 = function getPenaltyN3(data) {
    const size = data.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for(let row = 0; row < size; row++){
        bitsCol = bitsRow = 0;
        for(let col = 0; col < size; col++){
            bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
            bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
        }
    }
    return points * PenaltyScores.N3;
};
/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */ exports.getPenaltyN4 = function getPenaltyN4(data) {
    let darkCount = 0;
    const modulesCount = data.data.length;
    for(let i = 0; i < modulesCount; i++)darkCount += data.data[i];
    const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k * PenaltyScores.N4;
};
/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */ function getMaskAt(maskPattern, i, j) {
    switch(maskPattern){
        case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
            return i % 2 === 0;
        case exports.Patterns.PATTERN010:
            return j % 3 === 0;
        case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
            return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
            return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
            throw new Error('bad maskPattern:' + maskPattern);
    }
}
/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */ exports.applyMask = function applyMask(pattern, data) {
    const size = data.size;
    for(let col = 0; col < size; col++)for(let row = 0; row < size; row++){
        if (data.isReserved(row, col)) continue;
        data.xor(row, col, getMaskAt(pattern, row, col));
    }
};
/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */ exports.getBestMask = function getBestMask(data, setupFormatFunc) {
    const numPatterns = Object.keys(exports.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for(let p = 0; p < numPatterns; p++){
        setupFormatFunc(p);
        exports.applyMask(p, data);
        // Calculate penalty
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        // Undo previously applied mask
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
        }
    }
    return bestPattern;
};

},{}],"5yWYH":[function(require,module,exports,__globalThis) {
const ECLevel = require("7baaa530584d1bc4");
const EC_BLOCKS_TABLE = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
];
const EC_CODEWORDS_TABLE = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
];
/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */ exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};
/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */ exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
    switch(errorCorrectionLevel){
        case ECLevel.L:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
            return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
            return undefined;
    }
};

},{"7baaa530584d1bc4":"kbPwo"}],"47Qq0":[function(require,module,exports,__globalThis) {
const Polynomial = require("742a7ee6d6a2d145");
function ReedSolomonEncoder(degree) {
    this.genPoly = undefined;
    this.degree = degree;
    if (this.degree) this.initialize(this.degree);
}
/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */ ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
    // create an irreducible generator polynomial
    this.degree = degree;
    this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */ ReedSolomonEncoder.prototype.encode = function encode(data) {
    if (!this.genPoly) throw new Error('Encoder not initialized');
    // Calculate EC for this data block
    // extends data size to data+genPoly size
    const paddedData = new Uint8Array(data.length + this.degree);
    paddedData.set(data);
    // The error correction codewords are the remainder after dividing the data codewords
    // by a generator polynomial
    const remainder = Polynomial.mod(paddedData, this.genPoly);
    // return EC data blocks (last n byte, where n is the degree of genPoly)
    // If coefficients number in remainder are less than genPoly degree,
    // pad with 0s to the left to reach the needed number of coefficients
    const start = this.degree - remainder.length;
    if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
    }
    return remainder;
};
module.exports = ReedSolomonEncoder;

},{"742a7ee6d6a2d145":"dxhHI"}],"dxhHI":[function(require,module,exports,__globalThis) {
const GF = require("780c74029318268c");
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */ exports.mul = function mul(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for(let i = 0; i < p1.length; i++)for(let j = 0; j < p2.length; j++)coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    return coeff;
};
/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */ exports.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while(result.length - divisor.length >= 0){
        const coeff = result[0];
        for(let i = 0; i < divisor.length; i++)result[i] ^= GF.mul(divisor[i], coeff);
        // remove all zeros from buffer head
        let offset = 0;
        while(offset < result.length && result[offset] === 0)offset++;
        result = result.slice(offset);
    }
    return result;
};
/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */ exports.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([
        1
    ]);
    for(let i = 0; i < degree; i++)poly = exports.mul(poly, new Uint8Array([
        1,
        GF.exp(i)
    ]));
    return poly;
};

},{"780c74029318268c":"2JC5s"}],"2JC5s":[function(require,module,exports,__globalThis) {
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256) /**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */ ;
(function initTables() {
    let x = 1;
    for(let i = 0; i < 255; i++){
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1 // multiply by 2
        ;
        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) x ^= 0x11D;
    }
    // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
    // stay inside the bounds (because we will mainly use this table for the multiplication of
    // two GF numbers, no more).
    // @see {@link mul}
    for(let i = 255; i < 512; i++)EXP_TABLE[i] = EXP_TABLE[i - 255];
})();
/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.log = function log(n) {
    if (n < 1) throw new Error('log(' + n + ')');
    return LOG_TABLE[n];
};
/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */ exports.exp = function exp(n) {
    return EXP_TABLE[n];
};
/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */ exports.mul = function mul(x, y) {
    if (x === 0 || y === 0) return 0;
    // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
    // @see {@link initTables}
    return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

},{}],"a8ag2":[function(require,module,exports,__globalThis) {
const Utils = require("f67b02cdf61cb7c6");
const ECCode = require("777da0d92c463f2e");
const ECLevel = require("acd5b4fcd696edf3");
const Mode = require("5303c314c4a688d7");
const VersionCheck = require("663d0e03da8b2897");
// Generator polynomial used to encode version information
const G18 = 7973;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
    }
    return undefined;
}
function getReservedBitsCount(mode, version) {
    // Character count indicator + mode indicator bits
    return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
    let totalBits = 0;
    segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
    });
    return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
    for(let currentVersion = 1; currentVersion <= 40; currentVersion++){
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
    }
    return undefined;
}
/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */ exports.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) return parseInt(value, 10);
    return defaultValue;
};
/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */ exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
    if (!VersionCheck.isValid(version)) throw new Error('Invalid QR Code version');
    // Use Byte mode as default
    if (typeof mode === 'undefined') mode = Mode.BYTE;
    // Total codewords for this QR code version (Data + Error correction)
    const totalCodewords = Utils.getSymbolTotalCodewords(version);
    // Total number of error correction codewords
    const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
    // Total number of data codewords
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode === Mode.MIXED) return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
    // Return max number of storable codewords
    switch(mode){
        case Mode.NUMERIC:
            return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
            return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
            return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
            return Math.floor(usableBits / 8);
    }
};
/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */ exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
    let seg;
    const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
    if (Array.isArray(data)) {
        if (data.length > 1) return getBestVersionForMixedData(data, ecl);
        if (data.length === 0) return 1;
        seg = data[0];
    } else seg = data;
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};
/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */ exports.getEncodedBits = function getEncodedBits(version) {
    if (!VersionCheck.isValid(version) || version < 7) throw new Error('Invalid QR Code version');
    let d = version << 12;
    while(Utils.getBCHDigit(d) - G18_BCH >= 0)d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
    return version << 12 | d;
};

},{"f67b02cdf61cb7c6":"iXLHI","777da0d92c463f2e":"5yWYH","acd5b4fcd696edf3":"kbPwo","5303c314c4a688d7":"f1e9A","663d0e03da8b2897":"enfTX"}],"f1e9A":[function(require,module,exports,__globalThis) {
const VersionCheck = require("488660fac9162579");
const Regex = require("a23fd227d32f3622");
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */ exports.NUMERIC = {
    id: 'Numeric',
    bit: 1,
    ccBits: [
        10,
        12,
        14
    ]
};
/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */ exports.ALPHANUMERIC = {
    id: 'Alphanumeric',
    bit: 2,
    ccBits: [
        9,
        11,
        13
    ]
};
/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */ exports.BYTE = {
    id: 'Byte',
    bit: 4,
    ccBits: [
        8,
        16,
        16
    ]
};
/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */ exports.KANJI = {
    id: 'Kanji',
    bit: 8,
    ccBits: [
        8,
        10,
        12
    ]
};
/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */ exports.MIXED = {
    bit: -1
};
/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */ exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
    if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
    if (!VersionCheck.isValid(version)) throw new Error('Invalid version: ' + version);
    if (version >= 1 && version < 10) return mode.ccBits[0];
    else if (version < 27) return mode.ccBits[1];
    return mode.ccBits[2];
};
/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */ exports.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr)) return exports.KANJI;
    else return exports.BYTE;
};
/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */ exports.toString = function toString(mode) {
    if (mode && mode.id) return mode.id;
    throw new Error('Invalid mode');
};
/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */ exports.isValid = function isValid(mode) {
    return mode && mode.bit && mode.ccBits;
};
/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */ function fromString(string) {
    if (typeof string !== 'string') throw new Error('Param is not a string');
    const lcStr = string.toLowerCase();
    switch(lcStr){
        case 'numeric':
            return exports.NUMERIC;
        case 'alphanumeric':
            return exports.ALPHANUMERIC;
        case 'kanji':
            return exports.KANJI;
        case 'byte':
            return exports.BYTE;
        default:
            throw new Error('Unknown mode: ' + string);
    }
}
/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */ exports.from = function from(value, defaultValue) {
    if (exports.isValid(value)) return value;
    try {
        return fromString(value);
    } catch (e) {
        return defaultValue;
    }
};

},{"488660fac9162579":"enfTX","a23fd227d32f3622":"3Bqru"}],"enfTX":[function(require,module,exports,__globalThis) {
/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */ exports.isValid = function isValid(version) {
    return !isNaN(version) && version >= 1 && version <= 40;
};

},{}],"3Bqru":[function(require,module,exports,__globalThis) {
const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
    return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
    return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
    return TEST_ALPHANUMERIC.test(str);
};

},{}],"iThdR":[function(require,module,exports,__globalThis) {
const Utils = require("eeca831a42e85d6c");
const G15 = 1335;
const G15_MASK = 21522;
const G15_BCH = Utils.getBCHDigit(G15);
/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */ exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
    const data = errorCorrectionLevel.bit << 3 | mask;
    let d = data << 10;
    while(Utils.getBCHDigit(d) - G15_BCH >= 0)d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
    // xor final data with mask pattern in order to ensure that
    // no combination of Error Correction Level and data mask pattern
    // will result in an all-zero data string
    return (data << 10 | d) ^ G15_MASK;
};

},{"eeca831a42e85d6c":"iXLHI"}],"4tKki":[function(require,module,exports,__globalThis) {
const Mode = require("45f6d4bff9d2fc72");
const NumericData = require("73109cbf4f3c309d");
const AlphanumericData = require("5320016e34c30467");
const ByteData = require("fd16f8f25b581951");
const KanjiData = require("8a7b84039f1cf0d2");
const Regex = require("79379a3a8f3c26bb");
const Utils = require("66903ca51bd2ea1d");
const dijkstra = require("3b9f47d541e7d71f");
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */ function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
}
/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */ function getSegments(regex, mode, str) {
    const segments = [];
    let result;
    while((result = regex.exec(str)) !== null)segments.push({
        data: result[0],
        index: result.index,
        mode: mode,
        length: result[0].length
    });
    return segments;
}
/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */ function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
    } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
    }).map(function(obj) {
        return {
            data: obj.data,
            mode: obj.mode,
            length: obj.length
        };
    });
}
/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */ function getSegmentBitsLength(length, mode) {
    switch(mode){
        case Mode.NUMERIC:
            return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
            return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
            return KanjiData.getBitsLength(length);
        case Mode.BYTE:
            return ByteData.getBitsLength(length);
    }
}
/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
        }
        acc.push(curr);
        return acc;
    }, []);
}
/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */ function buildNodes(segs) {
    const nodes = [];
    for(let i = 0; i < segs.length; i++){
        const seg = segs[i];
        switch(seg.mode){
            case Mode.NUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.ALPHANUMERIC,
                        length: seg.length
                    },
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.ALPHANUMERIC:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: seg.length
                    }
                ]);
                break;
            case Mode.KANJI:
                nodes.push([
                    seg,
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
                break;
            case Mode.BYTE:
                nodes.push([
                    {
                        data: seg.data,
                        mode: Mode.BYTE,
                        length: getStringByteLength(seg.data)
                    }
                ]);
        }
    }
    return nodes;
}
/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */ function buildGraph(nodes, version) {
    const table = {};
    const graph = {
        start: {}
    };
    let prevNodeIds = [
        'start'
    ];
    for(let i = 0; i < nodes.length; i++){
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for(let j = 0; j < nodeGroup.length; j++){
            const node = nodeGroup[j];
            const key = '' + i + j;
            currentNodeIds.push(key);
            table[key] = {
                node: node,
                lastCount: 0
            };
            graph[key] = {};
            for(let n = 0; n < prevNodeIds.length; n++){
                const prevNodeId = prevNodeIds[n];
                if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
                    graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
                    table[prevNodeId].lastCount += node.length;
                } else {
                    if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
                    graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
                    ;
                }
            }
        }
        prevNodeIds = currentNodeIds;
    }
    for(let n = 0; n < prevNodeIds.length; n++)graph[prevNodeIds[n]].end = 0;
    return {
        map: graph,
        table: table
    };
}
/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */ function buildSingleSegment(data, modesHint) {
    let mode;
    const bestMode = Mode.getBestModeForData(data);
    mode = Mode.from(modesHint, bestMode);
    // Make sure data can be encoded
    if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
    // Use Mode.BYTE if Kanji support is disabled
    if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
    switch(mode){
        case Mode.NUMERIC:
            return new NumericData(data);
        case Mode.ALPHANUMERIC:
            return new AlphanumericData(data);
        case Mode.KANJI:
            return new KanjiData(data);
        case Mode.BYTE:
            return new ByteData(data);
    }
}
/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */ exports.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
        if (typeof seg === 'string') acc.push(buildSingleSegment(seg, null));
        else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
        return acc;
    }, []);
};
/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */ exports.fromString = function fromString(data, version) {
    const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version);
    const path = dijkstra.find_path(graph.map, 'start', 'end');
    const optimizedSegs = [];
    for(let i = 1; i < path.length - 1; i++)optimizedSegs.push(graph.table[path[i]].node);
    return exports.fromArray(mergeSegments(optimizedSegs));
};
/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */ exports.rawSplit = function rawSplit(data) {
    return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

},{"45f6d4bff9d2fc72":"f1e9A","73109cbf4f3c309d":"c44F8","5320016e34c30467":"cdBOf","fd16f8f25b581951":"ediQ9","8a7b84039f1cf0d2":"gphIw","79379a3a8f3c26bb":"3Bqru","66903ca51bd2ea1d":"iXLHI","3b9f47d541e7d71f":"lDJz9"}],"c44F8":[function(require,module,exports,__globalThis) {
const Mode = require("29134b0b0820b091");
function NumericData(data) {
    this.mode = Mode.NUMERIC;
    this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
    return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
    return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
    let i, group, value;
    // The input data string is divided into groups of three digits,
    // and each group is converted to its 10-bit binary equivalent.
    for(i = 0; i + 3 <= this.data.length; i += 3){
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
    }
    // If the number of input digits is not an exact multiple of three,
    // the final one or two digits are converted to 4 or 7 bits respectively.
    const remainingNum = this.data.length - i;
    if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
    }
};
module.exports = NumericData;

},{"29134b0b0820b091":"f1e9A"}],"cdBOf":[function(require,module,exports,__globalThis) {
const Mode = require("9c7c9b869570f846");
/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */ const ALPHA_NUM_CHARS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
];
function AlphanumericData(data) {
    this.mode = Mode.ALPHANUMERIC;
    this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
    return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
    return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
    return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
    let i;
    // Input data characters are divided into groups of two characters
    // and encoded as 11-bit binary codes.
    for(i = 0; i + 2 <= this.data.length; i += 2){
        // The character value of the first character is multiplied by 45
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
    }
    // If the number of input data characters is not a multiple of two,
    // the character value of the final character is encoded as a 6-bit binary number.
    if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
};
module.exports = AlphanumericData;

},{"9c7c9b869570f846":"f1e9A"}],"ediQ9":[function(require,module,exports,__globalThis) {
const Mode = require("a20a51f6cd184253");
function ByteData(data) {
    this.mode = Mode.BYTE;
    if (typeof data === 'string') this.data = new TextEncoder().encode(data);
    else this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
    return length * 8;
};
ByteData.prototype.getLength = function getLength() {
    return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
    return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer) {
    for(let i = 0, l = this.data.length; i < l; i++)bitBuffer.put(this.data[i], 8);
};
module.exports = ByteData;

},{"a20a51f6cd184253":"f1e9A"}],"gphIw":[function(require,module,exports,__globalThis) {
const Mode = require("b935cfd1cd03a1f6");
const Utils = require("ca4944585cc8d12d");
function KanjiData(data) {
    this.mode = Mode.KANJI;
    this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
    return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
    return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
    return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer) {
    let i;
    // In the Shift JIS system, Kanji characters are represented by a two byte combination.
    // These byte values are shifted from the JIS X 0208 values.
    // JIS X 0208 gives details of the shift coded representation.
    for(i = 0; i < this.data.length; i++){
        let value = Utils.toSJIS(this.data[i]);
        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9FFC) // Subtract 0x8140 from Shift JIS value
        value -= 0x8140;
        else if (value >= 0xE040 && value <= 0xEBBF) // Subtract 0xC140 from Shift JIS value
        value -= 0xC140;
        else throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);
        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
    }
};
module.exports = KanjiData;

},{"b935cfd1cd03a1f6":"f1e9A","ca4944585cc8d12d":"iXLHI"}],"lDJz9":[function(require,module,exports,__globalThis) {
'use strict';
/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/ var dijkstra = {
    single_source_shortest_paths: function(graph, s, d) {
        // Predecessor map for each node that has been encountered.
        // node ID => predecessor node ID
        var predecessors = {};
        // Costs of shortest paths from s to all nodes encountered.
        // node ID => cost
        var costs = {};
        costs[s] = 0;
        // Costs of shortest paths from s to all nodes encountered; differs from
        // `costs` in that it provides easy access to the node that currently has
        // the known shortest path from s.
        // XXX: Do we actually need both `costs` and `open`?
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while(!open.empty()){
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;
            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};
            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for(v in adjacent_nodes)if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v];
                // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
                // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === 'undefined';
                if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                    costs[v] = cost_of_s_to_u_plus_cost_of_e;
                    open.push(v, cost_of_s_to_u_plus_cost_of_e);
                    predecessors[v] = u;
                }
            }
        }
        if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
            var msg = [
                'Could not find a path from ',
                s,
                ' to ',
                d,
                '.'
            ].join('');
            throw new Error(msg);
        }
        return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while(u){
            nodes.push(u);
            predecessor = predecessors[u];
            u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
    },
    find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    },
    /**
   * A very naive priority queue implementation.
   */ PriorityQueue: {
        make: function(opts) {
            var T = dijkstra.PriorityQueue, t = {}, key;
            opts = opts || {};
            for(key in T)if (T.hasOwnProperty(key)) t[key] = T[key];
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
        },
        default_sorter: function(a, b) {
            return a.cost - b.cost;
        },
        /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */ push: function(value, cost) {
            var item = {
                value: value,
                cost: cost
            };
            this.queue.push(item);
            this.queue.sort(this.sorter);
        },
        /**
     * Return the highest priority element in the queue.
     */ pop: function() {
            return this.queue.shift();
        },
        empty: function() {
            return this.queue.length === 0;
        }
    }
};
module.exports = dijkstra;

},{}],"2oGFV":[function(require,module,exports,__globalThis) {
const Utils = require("5b3f7c513802d6c7");
function clearCanvas(ctx, canvas, size) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!canvas.style) canvas.style = {};
    canvas.height = size;
    canvas.width = size;
    canvas.style.height = size + 'px';
    canvas.style.width = size + 'px';
}
function getCanvasElement() {
    try {
        return document.createElement('canvas');
    } catch (e) {
        throw new Error('You need to specify a canvas element');
    }
}
exports.render = function render(qrData, canvas, options) {
    let opts = options;
    let canvasEl = canvas;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!canvas) canvasEl = getCanvasElement();
    opts = Utils.getOptions(opts);
    const size = Utils.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext('2d');
    const image = ctx.createImageData(size, size);
    Utils.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
    let opts = options;
    if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = undefined;
    }
    if (!opts) opts = {};
    const canvasEl = exports.render(qrData, canvas, opts);
    const type = opts.type || 'image/png';
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
};

},{"5b3f7c513802d6c7":"6rMWz"}],"6rMWz":[function(require,module,exports,__globalThis) {
function hex2rgba(hex) {
    if (typeof hex === 'number') hex = hex.toString();
    if (typeof hex !== 'string') throw new Error('Color should be defined as hex string');
    let hexCode = hex.slice().replace('#', '').split('');
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error('Invalid hex color: ' + hex);
    // Convert from short to long form (fff -> ffffff)
    if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
        return [
            c,
            c
        ];
    }));
    // Add default alpha value
    if (hexCode.length === 6) hexCode.push('F', 'F');
    const hexValue = parseInt(hexCode.join(''), 16);
    return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: '#' + hexCode.slice(0, 6).join('')
    };
}
exports.getOptions = function getOptions(options) {
    if (!options) options = {};
    if (!options.color) options.color = {};
    const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : undefined;
    const scale = options.scale || 4;
    return {
        width: width,
        scale: width ? 4 : scale,
        margin: margin,
        color: {
            dark: hex2rgba(options.color.dark || '#000000ff'),
            light: hex2rgba(options.color.light || '#ffffffff')
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
    };
};
exports.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data = qr.modules.data;
    const scale = exports.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [
        opts.color.light,
        opts.color.dark
    ];
    for(let i = 0; i < symbolSize; i++)for(let j = 0; j < symbolSize; j++){
        let posDst = (i * symbolSize + j) * 4;
        let pxColor = opts.color.light;
        if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
    }
};

},{}],"7Akrj":[function(require,module,exports,__globalThis) {
const Utils = require("c36bbcf663291acc");
function getColorAttrib(color, attrib) {
    const alpha = color.a / 255;
    const str = attrib + '="' + color.hex + '"';
    return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
    let str = cmd + x;
    if (typeof y !== 'undefined') str += ' ' + y;
    return str;
}
function qrToPath(data, size, margin) {
    let path = '';
    let moveBy = 0;
    let newRow = false;
    let lineLength = 0;
    for(let i = 0; i < data.length; i++){
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
            lineLength++;
            if (!(i > 0 && col > 0 && data[i - 1])) {
                path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
                moveBy = 0;
                newRow = false;
            }
            if (!(col + 1 < size && data[i + 1])) {
                path += svgCmd('h', lineLength);
                lineLength = 0;
            }
        } else moveBy++;
    }
    return path;
}
exports.render = function render(qrData, options, cb) {
    const opts = Utils.getOptions(options);
    const size = qrData.modules.size;
    const data = qrData.modules.data;
    const qrcodesize = size + opts.margin * 2;
    const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
    const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
    const viewBox = 'viewBox="0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
    const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
    const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
    if (typeof cb === 'function') cb(null, svgTag);
    return svgTag;
};

},{"c36bbcf663291acc":"6rMWz"}]},["duGzK","azFBe"], "azFBe", "parcelRequire94c2")

//# sourceMappingURL=budget.226f76d6.js.map

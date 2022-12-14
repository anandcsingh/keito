(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[361],{

/***/ 3160:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/rank",
      function () {
        return __webpack_require__(7639);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ sections_RankTiles; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./components/sections/partials/RankItem.js



const propTypes = {
    martialArtShortName: (prop_types_default()).string,
    rank: (prop_types_default()).string,
    martialArt: (prop_types_default()).string,
    certified: (prop_types_default()).bool
};
const defaultProps = {
    martialArtShortName: "",
    rank: "",
    martialArt: "",
    certified: false
};
const RankItem = (param)=>{
    let { martialArtShortName , rank , martialArt , certified , ...props } = param;
    const verifiedClasses = certified ? "verified-ma" : "unverified-ma";
    const verifiedCheckClasses = certified ? "check" : "uncheck";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "tiles-item",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: verifiedClasses,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: martialArtShortName,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "pl-8 pt-8  ".concat(verifiedCheckClasses),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mt-auto mb-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "mt-24 fw-500 tt-u",
                                children: rank
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-xs",
                                children: martialArt
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ var partials_RankItem = (RankItem);

// EXTERNAL MODULE: ./modules/firestore.js
var firestore = __webpack_require__(6525);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/esm/index.esm.js
var index_esm = __webpack_require__(9828);
// EXTERNAL MODULE: ./modules/Authentication.js
var Authentication = __webpack_require__(4557);
;// CONCATENATED MODULE: ./components/sections/RankTiles.js








const RankTiles = ()=>{
    const [error, setError] = (0,react.useState)(null);
    const [isLoaded, setIsLoaded] = (0,react.useState)(false);
    const [items, setItems] = (0,react.useState)([]);
    (0,react.useEffect)(()=>{
        (async ()=>{
            var address = Authentication/* default.address */.Z.address != "" ? Authentication/* default.address */.Z.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
            const docRef = (0,index_esm/* doc */.JU)(firestore/* database */.F, "users", address);
            const docSnap = await (0,index_esm/* getDoc */.QT)(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setIsLoaded(true);
                setItems(docSnap.data().martialArts);
            } else {
                setIsLoaded(true);
                setError("Could not find Martial Arts. Click the plus button to add one.");
            }
        })();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "section",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "section-inner",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "tiles-wrap",
                    children: [
                        items.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(partials_RankItem, {
                                martialArtShortName: i.martialArtShortName,
                                rank: i.rank,
                                martialArt: i.martialArt,
                                certified: i.certified
                            }, index)),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: "addrank",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "tiles-item",
                                title: "Add new Martial Art",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "ma-add-btn",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "pl-8 pt-8 text-sm",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ var sections_RankTiles = (RankTiles);


/***/ }),

/***/ 4557:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pages_zkappWorkerClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9963);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6400);


const Authentication = {
    loggedIn: false,
    zkClient: null,
    authentication: null,
    hasWallet: null,
    hasBeenSetup: false,
    accountExists: false,
    currentNum: null,
    publicKey: null,
    zkappPublicKey: null,
    creatingTransaction: false,
    snarkyLoaded: false,
    showRequestingAccount: false,
    showCreateWallet: false,
    fundAccount: false,
    showLoadingContracts: false,
    setZkClient: function(client) {
        this.zkClient = client;
    },
    loadSnarky: async function() {
        await this.zkClient.loadSnarkyJS();
        await this.zkClient.setActiveInstanceToBerkeley();
        this.snarkyLoaded = true;
        return true;
    },
    checkForWallet: async function() {
        const mina = window.mina;
        this.hasWallet = mina != null;
        return this.hasWallet;
    },
    login: async function() {
        try {
            const mina = window.mina;
            this.address = (await mina.requestAccounts())[0];
            this.loggedIn = true;
            return {
                success: true
            };
        } catch (e) {
            this.loggedIn = false;
            var result = {
                success: false
            };
            if (e.message == "user reject") {
                result.error = e.message;
                result.message = "You cancelled connection with Mina wallet!";
            } else if (e.message == "please create or restore wallet first") {
                result.error = e.message;
                result.message = "Please create or restore a wallet first!";
            }
            return result;
        }
    },
    doesAccountExist: async function() {
        const publicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_1__/* .PublicKey.fromBase58 */ .nh.fromBase58(this.address);
        const res = await this.zkClient.fetchAccount({
            publicKey: publicKey
        });
        this.fundAccount = res.error != null;
        return !this.fundAccount;
    },
    setupContracts: async function() {
        await this.zkClient.loadContract();
        await this.zkClient.compileContract();
        const contractAddress = "B62qqEme9EYMj3KC4vSXij2vAwt8qxLiKLsrHPprQeYXXmjTFUH16wF";
        const zkappPublicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_1__/* .PublicKey.fromBase58 */ .nh.fromBase58(contractAddress);
        await this.zkClient.initZkappInstance(zkappPublicKey);
        this.hasBeenSetup = true;
        return true;
    },
    getNum: async function() {
        if (this.hasBeenSetup) {
            const zkappPublicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_1__/* .PublicKey.fromBase58 */ .nh.fromBase58("B62qqEme9EYMj3KC4vSXij2vAwt8qxLiKLsrHPprQeYXXmjTFUH16wF");
            await this.zkClient.fetchAccount({
                publicKey: zkappPublicKey
            });
            const currentNum = await this.zkClient.getNum();
            console.log("current state:", currentNum.toString());
        } else {
            console.log("has not been setup");
        }
    },
    address: "",
    getShortAddress: function() {
        return this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 5, this.address.length);
    }
};
/* harmony default export */ __webpack_exports__["Z"] = (Authentication);


/***/ }),

/***/ 6525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ database; }
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3977);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9828);
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtuS9orJ_XKD8Z0OM0kqTwlITVkm3ct_4",
    authDomain: "keito-7e506.firebaseapp.com",
    projectId: "keito-7e506",
    storageBucket: "keito-7e506.appspot.com",
    messagingSenderId: "632520103184",
    appId: "1:632520103184:web:3b67a3ca5c5ba30b0d4195"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const database = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(app);


/***/ }),

/***/ 7639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Rank; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_sections_RankTiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9685);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_2__);



function Rank() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sections_RankTiles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
}


/***/ }),

/***/ 8285:
/***/ (function() {

function loadCOIServiceWorker() {
    if ( true && window.location.hostname != "localhost") {
        const coi = window.document.createElement("script");
        coi.setAttribute("src", "/keito/coi-serviceworker.min.js");
        window.document.head.appendChild(coi);
    }
}
loadCOIServiceWorker();


/***/ }),

/***/ 9963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ZkappWorkerClient; }
/* harmony export */ });
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);

class ZkappWorkerClient {
    // ---------------------------------------------------------------------------------------
    loadSnarkyJS() {
        return this._call("loadSnarkyJS", {});
    }
    setActiveInstanceToBerkeley() {
        return this._call("setActiveInstanceToBerkeley", {});
    }
    loadContract() {
        return this._call("loadContract", {});
    }
    compileContract() {
        return this._call("compileContract", {});
    }
    fetchAccount(param) {
        let { publicKey  } = param;
        const result = this._call("fetchAccount", {
            publicKey58: publicKey.toBase58()
        });
        return result;
    }
    initZkappInstance(publicKey) {
        return this._call("initZkappInstance", {
            publicKey58: publicKey.toBase58()
        });
    }
    async getNum() {
        const result = await this._call("getNum", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    createUpdateTransaction() {
        return this._call("createUpdateTransaction", {});
    }
    proveUpdateTransaction() {
        return this._call("proveUpdateTransaction", {});
    }
    async getTransactionJSON() {
        const result = await this._call("getTransactionJSON", {});
        return result;
    }
    _call(fn, args) {
        return new Promise((resolve, reject)=>{
            this.promises[this.nextId] = {
                resolve,
                reject
            };
            const message = {
                id: this.nextId,
                fn,
                args
            };
            this.worker.postMessage(message);
            this.nextId++;
        });
    }
    constructor(){
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(812), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
}



/***/ }),

/***/ 2703:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,16,321,52,774,888,179], function() { return __webpack_exec__(3160); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
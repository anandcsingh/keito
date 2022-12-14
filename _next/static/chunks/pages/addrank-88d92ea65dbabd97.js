(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[87],{

/***/ 3972:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/addrank",
      function () {
        return __webpack_require__(604);
      }
    ]);
    if(false) {}
  

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

/***/ 604:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AddRank; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./modules/Authentication.js
var Authentication = __webpack_require__(4557);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 39 modules
var axios = __webpack_require__(594);
// EXTERNAL MODULE: ./modules/firestore.js
var firestore = __webpack_require__(6525);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/esm/index.esm.js
var index_esm = __webpack_require__(9828);
;// CONCATENATED MODULE: ./modules/UserApiClient.js



const UserApiClient = function() {
    return {
        addMartialArt: async function(address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("Address " + address);
            const docRef = (0,index_esm/* doc */.JU)(firestore/* database */.F, "users", address);
            const docSnap = await (0,index_esm/* getDoc */.QT)(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                user = docSnap.data();
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank);
            } else {
                return createEmptyUser(address, martialArt, martialArtShortName, rank);
            }
            await axios/* default.get */.Z.get("api/user/".concat(address)).then((r)=>user = r.data).catch((e)=>console.log(e.message));
            if (user == null) return createEmptyUser(address, martialArt, martialArtShortName, rank);
            else return addIfNotThere(user, address, martialArt, martialArtShortName, rank);
        },
        getUser: async function(address) {
            var user = null;
            console.log("Address " + address);
            await axios/* default.get */.Z.get("api/user/".concat(address)).then((r)=>user = r.data).catch((e)=>console.log(e.message));
            return user;
        }
    };
    async function createEmptyUser(address, martialArt, martialArtShortName, rank) {
        const result = {};
        await axios/* default.post */.Z.post("api/user", {
            address,
            martialArts: [
                {
                    martialArt,
                    rank,
                    martialArtShortName,
                    certified: false
                }
            ]
        }).then((response)=>{
            if (response.status == 200) {
                result.success = true;
                result.message = "Martial Art ".concat(martialArt, " and rank ").concat(rank, " added.");
            } else {
                result.success = false;
                result.message = response.statusText;
            }
        }).catch((error)=>{
            result.success = false;
            result.message = error.message;
        });
        return result;
    }
    ;
    async function addIfNotThere(user, address, martialArt, martialArtShortName, rank) {
        var _user_martialArts;
        var found = false;
        const result = {};
        if (!user.martialArts) {
            user.martialArts = [];
        }
        for(var i = 0; i < ((_user_martialArts = user.martialArts) === null || _user_martialArts === void 0 ? void 0 : _user_martialArts.length); i++){
            if (user.martialArts[i].martialArt == martialArt) {
                found = true;
            }
        }
        if (!found) {
            user.martialArts.push({
                martialArt,
                rank,
                martialArtShortName,
                certified: false
            });
        } else {
            result.success = false;
            result.message = "Martial Art ".concat(martialArt, " already added, you can only get promoted by a qualifed instructor.");
            return result;
        }
        await axios/* default.put */.Z.put("api/user/".concat(address), user).then((response)=>{
            if (response.status == 200) {
                result.success = true;
                result.message = "Martial Art ".concat(martialArt, " and rank ").concat(rank, " added.");
            } else {
                result.success = false;
                result.message = response.statusText;
            }
        }).catch((error)=>{
            result.success = false;
            result.message = error.message;
        });
        return result;
    }
    ;
};
/* harmony default export */ var modules_UserApiClient = (UserApiClient);

// EXTERNAL MODULE: ./pages/reactCOIServiceWorker.ts
var reactCOIServiceWorker = __webpack_require__(8285);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./pages/addrank.page.tsx






function AddRank() {
    let [state, setState] = (0,react.useState)({
        addSuccess: false,
        addAttempt: false,
        addMessage: ""
    });
    const addClicked = async (event)=>{
        var address = Authentication/* default.address */.Z.address != "" ? Authentication/* default.address */.Z.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
        event.preventDefault();
        const { martialArt , rank  } = event.target.elements;
        console.log("ma " + martialArt);
        const result = await modules_UserApiClient().addMartialArt(address, martialArt.options[martialArt.selectedIndex].text, martialArt.value, rank.value);
        console.log(result);
        setState({
            ...state,
            addAttempt: true,
            addSuccess: result.success,
            addMessage: result.message
        });
    };
    return(//<AuthPage>
    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "section",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "section-header",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container-xs",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "mt-0 mb-16",
                                children: "Add Martial Art and Rank"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children:  true ? /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                            onSubmit: addClicked,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mb-16",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: "form-label",
                                                htmlFor: "martialArt",
                                                children: "Martial Art"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                id: "martialArt",
                                                name: "martialArt",
                                                className: "form-select",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        hidden: true,
                                                        children: "Choose your Martial Art"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "ibjjf",
                                                        children: "Brazilian Jiu Jitsu"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "itf",
                                                        children: "Taekwon-Do"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        value: "wkf",
                                                        children: "Karate"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mb-16",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: "form-label",
                                                htmlFor: "rank",
                                                children: "Rank"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                id: "rank",
                                                name: "rank",
                                                className: "form-select",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        hidden: true,
                                                        children: "Choose your Rank"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "White"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "Yellow"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "Green"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "Blue"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "Purple"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "Brown"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "Black"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                                        children: "Coral"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mt-24",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "button-group",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        type: "submit",
                                                        className: "button button-primary button-wide-mobile",
                                                        children: "Submit"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        href: "rank",
                                                        className: "button-link text-xs",
                                                        children: "Cancel"
                                                    })
                                                ]
                                            }),
                                            state.addAttempt && state.addMessage != null && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "form-hint",
                                                children: state.addMessage
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ 0
                    })
                ]
            })
        })
    }));
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



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,16,321,52,594,774,888,179], function() { return __webpack_exec__(3972); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
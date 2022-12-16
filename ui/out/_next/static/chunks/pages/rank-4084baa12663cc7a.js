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

/***/ 4377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9329);
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5439);
/* harmony import */ var _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3051);
/* harmony import */ var _pages_rankedWorkerClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8240);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7294);
/* harmony import */ var _modules_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5542);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6400);













const AuthPage = (param)=>{
    let { children  } = param;
    // load from Authentication values
    //Authentication.getNum();
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({
        authentication: null,
        hasWallet: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].hasWallet */ .Z.hasWallet,
        hasBeenSetup: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].hasBeenSetup */ .Z.hasBeenSetup,
        accountExists: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].accountExists */ .Z.accountExists,
        currentNum: null,
        publicKey: null,
        zkappPublicKey: null,
        creatingTransaction: false,
        snarkyLoaded: _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].sn */ .Z.sn,
        showRequestingAccount: false,
        showCreateWallet: false,
        showFundAccount: false,
        showLoadingContracts: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        (async ()=>{
            if (!_modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].loggedIn */ .Z.loggedIn) {
                if (!state.hasBeenSetup) {
                    const zkappWorkerClient = new _pages_rankedWorkerClient__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
                    _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].setZkClient */ .Z.setZkClient(zkappWorkerClient);
                    const loadedSnarky = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].loadSnarky */ .Z.loadSnarky();
                    setState({
                        ...state,
                        snarkyLoaded: true
                    });
                    const hasWallet = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].checkForWallet */ .Z.checkForWallet();
                    if (!hasWallet) {
                        setState({
                            ...state,
                            hasWallet: false,
                            snarkyLoaded: true
                        });
                        return;
                    } else {
                        setState({
                            ...state,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: true
                        });
                    }
                    const loginResult = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].login */ .Z.login();
                    if (loginResult.error == "user reject") {
                        (0,_modules_Snackbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)("You cancelled connection with Mina wallet!", 1500);
                    } else if (loginResult.error == "please create or restore wallet first") {
                        setState({
                            ...state,
                            showCreateWallet: true,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                    }
                    const accountExists = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].doesAccountExist */ .Z.doesAccountExist();
                    if (!accountExists) {
                        setState({
                            ...state,
                            showFundAccount: true,
                            showCreateWallet: false,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                    } else {
                        setState({
                            ...state,
                            showLoadingContracts: true,
                            showFundAccount: false,
                            showCreateWallet: false,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                        const hasBeenSetup = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].setupContracts */ .Z.setupContracts();
                        setState({
                            ...state,
                            hasBeenSetup: hasBeenSetup,
                            showLoadingContracts: false,
                            showFundAccount: false,
                            showCreateWallet: false,
                            hasWallet: true,
                            snarkyLoaded: true,
                            showRequestingAccount: false
                        });
                    }
                }
            }
        })();
    }, []);
    const loginClicked = async ()=>{
        try {
            const loggedIn = await _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].login */ .Z.login();
            if (loggedIn) {
                next_router__WEBPACK_IMPORTED_MODULE_8___default().push("/dashboard");
            }
        } catch (e) {
            console.log("Login Failed", e.message);
            if (e.message == "user reject") {
                (0,_modules_Snackbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)("You cancelled connection with Mina wallet!", 1500);
            }
        }
    // const loggedIn = Authentication.login();
    // if (Authentication.loggedIn) {
    //   Router.push('/dashboard')
    // }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "keito-page",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "keito-content-wrap",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        hideExtraNav: false,
                        navPosition: "right",
                        className: "reveal-from-bottom",
                        hideNav: false,
                        hideSignin: false,
                        bottomOuterDivider: false,
                        bottomDivider: false
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                        className: "site-content",
                        children: !state.hasBeenSetup ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                            className: "hero section center-content has-top-divider",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "container-sm",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hero-inner section-inner",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hero-content",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                                className: "mt-0 mb-16 reveal-from-bottom",
                                                "data-reveal-delay": "200",
                                                children: "Getting things ready..."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "container-xs",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "".concat(!state.snarkyLoaded || state.showRequestingAccount || state.showLoadingContracts ? "loading-snarky" : "", " m-0 mb-32 reveal-from-bottom login-subtext p-16"),
                                                        "data-reveal-delay": "400",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    display: state.snarkyLoaded ? "none" : "block"
                                                                },
                                                                children: [
                                                                    "Loading ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-color-primary",
                                                                        children: "SnarkyJS"
                                                                    }),
                                                                    "..."
                                                                ]
                                                            }),
                                                            state.hasWallet != null && !state.hasWallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "text-color-warning",
                                                                children: [
                                                                    "Could not find a wallet. Install Auro wallet here ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                                        href: "https://www.aurowallet.com/",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: "Auro wallet"
                                                                    })
                                                                ]
                                                            }),
                                                            state.showRequestingAccount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                children: "Requesting account"
                                                            }),
                                                            state.showCreateWallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-color-warning",
                                                                children: "Please create or restore a wallet first!"
                                                            }),
                                                            state.showFundAccount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "text-color-warning",
                                                                children: [
                                                                    "Your account does not exist, visit the ",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                                        href: "https://faucet.minaprotocol.com/",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: "faucet"
                                                                    }),
                                                                    " to fund it"
                                                                ]
                                                            }),
                                                            state.showLoadingContracts && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                children: "Loading contracts..."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "reveal-from-bottom login-btn-container",
                                                        "data-reveal-delay": "600"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            children: children
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "footer-container",
                topOuterDivider: false,
                topDivider: false
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["Z"] = (AuthPage);


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
// EXTERNAL MODULE: ./modules/Authentication.js + 1 modules
var Authentication = __webpack_require__(3051);
// EXTERNAL MODULE: ./modules/Rank.ts
var Rank = __webpack_require__(2581);
// EXTERNAL MODULE: ./modules/RankedV1ContractVerifier.ts
var RankedV1ContractVerifier = __webpack_require__(4910);
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
    const rankVerifier = new RankedV1ContractVerifier/* RankedV1ContractVerifier */.K(Authentication/* default.zkClient */.Z.zkClient);
    const ma = new Rank/* Rank */.y();
    ma.address = Authentication/* default.address */.Z.address;
    ma.martialArt = martialArtShortName;
    ma.rank = rank;
    const verified = true; // rankVerifier.verify(new Rank());
    const verifiedClasses = verified ? "verified-ma" : "unverified-ma";
    const verifiedCheckClasses = verified ? "check" : "uncheck";
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
;// CONCATENATED MODULE: ./components/sections/RankTiles.js








const RankTiles = ()=>{
    const [error, setError] = (0,react.useState)(null);
    const [isLoaded, setIsLoaded] = (0,react.useState)(false);
    const [items, setItems] = (0,react.useState)([]);
    const [maCount, setMaCount] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        (async ()=>{
            var address = Authentication/* default.address */.Z.address != "" ? Authentication/* default.address */.Z.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
            const docRef = (0,index_esm/* doc */.JU)(firestore/* database */.F, "users", address);
            const docSnap = await (0,index_esm/* getDoc */.QT)(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const ma = docSnap.data().martialArts;
                setIsLoaded(true);
                setItems(ma);
                setMaCount(ma.length);
                setError(ma.length > 0 ? null : "Could not find any Martial Arts. Click the plus button to add one.");
            } else {
                setIsLoaded(true);
                setError("Could not find any Martial Arts. Click the plus button to add one.");
            }
        })();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "section",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rank-messages",
                        children: [
                            !isLoaded && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "loading-snarky m-0 mb-32 reveal-from-bottom login-subtext p-16",
                                "data-reveal-delay": "400",
                                children: "Loading Martial Arts..."
                            }),
                            isLoaded && (maCount == 0 || error != null) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "m-0 mb-32 reveal-from-bottom login-subtext p-16",
                                "data-reveal-delay": "400",
                                children: error
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                ]
            })
        })
    });
};
/* harmony default export */ var sections_RankTiles = (RankTiles);


/***/ }),

/***/ 2581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": function() { return /* binding */ Rank; }
/* harmony export */ });
class Rank {
}


/***/ }),

/***/ 4910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": function() { return /* binding */ RankedV1ContractVerifier; }
/* harmony export */ });
/* harmony import */ var _Rank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2581);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6525);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9828);




class RankedV1ContractVerifier {
    async promote(certifier, newRank) {
        const currentRank = await this.getCurrentRank(newRank.address, newRank.martialArt);
        const currentField = this.getHashFromRank(currentRank);
        const newField = this.getHashFromRank(newRank);
        await this.zkClient.createCertifyTransaction(currentRank.martialArt, certifier, currentField, newField);
    }
    async getCurrentRank(address, martialArt) {
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .doc */ .JU)(_firestore__WEBPACK_IMPORTED_MODULE_1__/* .database */ .F, "users", address.toBase58());
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .getDoc */ .QT)(docRef);
        if (docSnap.exists()) {
            const ma = docSnap.data().martialArts;
            for(var i = 0; i < ma.length; i++){
                let one = ma[i];
                if (one.martialArtShortName == martialArt) {
                    let rank = new _Rank__WEBPACK_IMPORTED_MODULE_3__/* .Rank */ .y();
                    rank.address = address;
                    rank.martialArt = one.martialArtShortName;
                    rank.rank = one.martialArtShortName;
                    return rank;
                }
            }
        }
        return new _Rank__WEBPACK_IMPORTED_MODULE_3__/* .Rank */ .y();
    }
    getHashFromRank(rank) {
        const stringData = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .CircuitString.fromString */ ._G.fromString(JSON.stringify(rank));
        const fields = stringData.toFields();
        const data = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash(fields);
        return data;
    }
    constructor(zkClient){
        this.verify = (rank)=>{
            const rankField = this.getHashFromRank(rank);
            const verify = false;
            let martialArtHash;
            if (rank.martialArt == "ibjjf") martialArtHash = this.zkClient.getIbjjf();
            if (rank.martialArt == "itf") martialArtHash = this.zkClient.getItf();
            if (rank.martialArt == "wkf") martialArtHash = this.zkClient.getWkf();
            return rankField.toString() == martialArtHash.toString();
        };
        this.zkClient = zkClient;
    }
}


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
/* harmony import */ var _components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4377);
/* harmony import */ var _components_sections_RankTiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9685);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3__);




function Rank() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sections_RankTiles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
}


/***/ }),

/***/ 8240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ RankedWorkerClient; }
/* harmony export */ });
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);

class RankedWorkerClient {
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
    async getInstructor() {
        const result = await this._call("getInstructor", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromJSON */ .nh.fromJSON(JSON.parse(result));
    }
    async getIbjjf() {
        const result = await this._call("getIbjjf", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    async getItf() {
        const result = await this._call("getIbjjf", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    async getWkf() {
        const result = await this._call("getIbjjf", {});
        return snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field.fromJSON */ .gN.fromJSON(JSON.parse(result));
    }
    createUpdateBlackBeltTransaction(newBlackBelt) {
        return this._call("createUpdateBlackBeltTransaction", {
            newBlackBelt
        });
    }
    createCertifyTransaction(martialArt, certifier, userOldData, userNewData) {
        return this._call("createCertifyTransaction", {
            martialArt,
            certifier,
            userOldData,
            userNewData
        });
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
        this.worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(372), __webpack_require__.b)));
        this.promises = {};
        this.nextId = 0;
        this.worker.onmessage = (event)=>{
            this.promises[event.data.id].resolve(event.data.data);
            delete this.promises[event.data.id];
        };
    }
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

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* unused reexport */ __webpack_require__(3121)


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,16,863,675,52,893,774,888,179], function() { return __webpack_exec__(3160); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
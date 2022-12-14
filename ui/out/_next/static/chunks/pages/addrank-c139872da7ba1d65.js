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
/* harmony import */ var _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4557);
/* harmony import */ var _pages_zkappWorkerClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9963);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7294);
/* harmony import */ var _modules_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5542);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6400);












const AuthPage = (param)=>{
    let { children  } = param;
    // load from Authentication values
    _modules_Authentication__WEBPACK_IMPORTED_MODULE_6__/* ["default"].getNum */ .Z.getNum();
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
                    const zkappWorkerClient = new _pages_zkappWorkerClient__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z();
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
                        (0,_modules_Snackbar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)("You cancelled connection with Mina wallet!", 1500);
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
                (0,_modules_Snackbar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)("You cancelled connection with Mina wallet!", 1500);
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
// EXTERNAL MODULE: ./components/auth/AuthPage.js
var AuthPage = __webpack_require__(4377);
// EXTERNAL MODULE: ./modules/Authentication.js
var Authentication = __webpack_require__(4557);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 39 modules
var axios = __webpack_require__(594);
;// CONCATENATED MODULE: ./modules/UserApiClient.js

const UserApiClient = function() {
    return {
        addMartialArt: async function(address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("Address " + address);
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

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./pages/addrank.page.tsx






function AddRank() {
    const address = Authentication/* default.address */.Z.address;
    let [state, setState] = (0,react.useState)({
        addSuccess: false,
        addAttempt: false,
        addMessage: ""
    });
    const addClicked = async (event)=>{
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthPage/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
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
        })
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,863,675,518,893,774,888,179], function() { return __webpack_exec__(3972); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
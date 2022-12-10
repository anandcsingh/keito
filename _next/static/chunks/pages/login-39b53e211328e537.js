(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[459],{

/***/ 4250:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/login",
      function () {
        return __webpack_require__(870);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout_Header; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/partials/Logo.js




const Logo = (param)=>{
    let { className , ...props } = param;
    const classes = classnames_default()("brand", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ...props,
        className: classes,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
            className: "m-0",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/welcome",
                children: "Ranked"
            })
        })
    });
};
/* harmony default export */ var partials_Logo = (Logo);

;// CONCATENATED MODULE: ./modules/profile.js
const Profile = {
    address: "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR",
    getShortAddress: function() {
        return this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 5, this.address.length);
    },
    loggedIn: false
};
/* harmony default export */ var profile = ((/* unused pure expression or super */ null && (Profile)));

// EXTERNAL MODULE: ./modules/Authentication.js
var Authentication = __webpack_require__(4557);
;// CONCATENATED MODULE: ./modules/Snackbar.js
const Snackbar = (text, duration)=>{
    const div = document.createElement("div");
    div.setAttribute("style", "-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;animation: fadein 0.5s, fadeout 0.5s 2.5s;;min-width: 250px;margin-left: -125px; background-color: rgba(0, 0, 0, 0.257); color: #fff; text-align: center; border-radius: 2px; padding: 16px; position: fixed; z-index: 1; left: 50%;top: 70px;");
    const node = document.createTextNode(text);
    div.appendChild(node);
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(div);
    setTimeout(function() {
        body.removeChild(div);
    }, duration);
};
/* harmony default export */ var modules_Snackbar = (Snackbar);

// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(1163);
;// CONCATENATED MODULE: ./components/layout/Header.js










const propTypes = {
    navPosition: (prop_types_default()).string,
    hideNav: (prop_types_default()).bool,
    hideExtraNav: (prop_types_default()).bool,
    hideSignin: (prop_types_default()).bool,
    bottomOuterDivider: (prop_types_default()).bool,
    bottomDivider: (prop_types_default()).bool
};
const defaultProps = {
    navPosition: "",
    hideNav: false,
    hideExtraNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false
};
const Header = (param)=>{
    let { className , navPosition , hideNav , hideExtraNav , hideSignin , bottomOuterDivider , bottomDivider , ...props } = param;
    console.log(Authentication/* default.loggedIn */.Z.loggedIn);
    const [isActive, setIsactive] = (0,react.useState)(false);
    const nav = (0,react.useRef)(null);
    const hamburger = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        isActive && openMenu();
        document.addEventListener("keydown", keyPress);
        document.addEventListener("click", clickOutside);
        return ()=>{
            document.removeEventListener("keydown", keyPress);
            document.removeEventListener("click", clickOutside);
            closeMenu();
        };
    });
    const openMenu = ()=>{
        document.body.classList.add("off-nav-is-active");
        nav.current.style.maxHeight = nav.current.scrollHeight + "px";
        setIsactive(true);
    };
    const copyAndClose = (e)=>{
        navigator.clipboard.writeText(e.currentTarget.title);
        modules_Snackbar("Copied wallet address", 1500);
        closeMenu();
    };
    const closeMenu = ()=>{
        document.body.classList.remove("off-nav-is-active");
        nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
    };
    const keyPress = (e)=>{
        isActive && e.keyCode === 27 && closeMenu();
    };
    const clickOutside = (e)=>{
        if (!nav.current) return;
        if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
        closeMenu();
    };
    const classes = classnames_default()("site-header", bottomOuterDivider && "has-bottom-divider", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
        ...props,
        className: classes,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()("site-header-inner", bottomDivider && "has-bottom-divider"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(partials_Logo, {}),
                    !hideNav && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                ref: hamburger,
                                className: "header-nav-toggle",
                                onClick: isActive ? closeMenu : openMenu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "screen-reader",
                                        children: "Menu"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "hamburger",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "hamburger-inner"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                                ref: nav,
                                className: classnames_default()("header-nav", isActive && "is-active"),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "header-nav-inner",
                                    children: [
                                        !hideExtraNav && /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: classnames_default()("list-reset text-xs", navPosition && "header-nav-center"),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        className: "button button-dark button-wide-mobile button-sm",
                                                        href: "#0",
                                                        onClick: closeMenu,
                                                        children: "Rank"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        className: "button button-dark button-wide-mobile button-sm",
                                                        href: "#0",
                                                        onClick: closeMenu,
                                                        children: "Lineage"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                        className: "button button-dark button-wide-mobile button-sm",
                                                        href: "#0",
                                                        onClick: closeMenu,
                                                        children: "Students"
                                                    })
                                                })
                                            ]
                                        }),
                                        !hideSignin && /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            className: "list-reset header-nav-right",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                children: !Authentication/* default.loggedIn */.Z.loggedIn || (0,router.useRouter)().pathname == "/welcome" ? /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "dashboard",
                                                    className: "button button-primary button-wide-mobile button-sm",
                                                    onClick: closeMenu,
                                                    children: "Launch App"
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                        className: "button button-dark rounded auth-address",
                                                        title: Authentication/* default.address */.Z.address,
                                                        onClick: copyAndClose,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: Authentication/* default.getShortAddress */.Z.getShortAddress()
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
/* harmony default export */ var layout_Header = (Header);


/***/ }),

/***/ 4557:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const Authentication = {
    loggedIn: false,
    login: function() {
        this.loggedIn = true;
    },
    address: "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR",
    getShortAddress: function() {
        return this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 5, this.address.length);
    }
};
/* harmony default export */ __webpack_exports__["Z"] = (Authentication);


/***/ }),

/***/ 870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7541);
/* harmony import */ var _modules_Authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4557);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function Login() {
    const loginClicked = ()=>{
        const loggedIn = _modules_Authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"].login */ .Z.login();
        if (_modules_Authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"].loggedIn */ .Z.loggedIn) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/dashboard");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                hideExtraNav: true,
                navPosition: "right",
                className: "reveal-from-bottom",
                hideNav: false,
                hideSignin: true,
                bottomOuterDivider: false,
                bottomDivider: false
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                className: "site-content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: "hero section center-content has-top-divider",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "container-sm",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "hero-inner section-inner",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hero-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "mt-0 mb-16 reveal-from-bottom",
                                        "data-reveal-delay": "200",
                                        children: [
                                            "Login to ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-color-primary",
                                                children: "keito"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "container-xs",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "m-0 mb-32 reveal-from-bottom",
                                                "data-reveal-delay": "400",
                                                children: [
                                                    "Login into to the ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-color-primary",
                                                        children: "keito"
                                                    }),
                                                    " zkapp with your Mina wallet"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "reveal-from-bottom",
                                                "data-reveal-delay": "600",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                    className: "login-btn button button-primary",
                                                    href: "#",
                                                    onClick: loginClicked,
                                                    children: "Login"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [960,774,888,179], function() { return __webpack_exec__(4250); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
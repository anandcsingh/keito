(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[26],{

/***/ 9637:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/dashboard",
      function () {
        return __webpack_require__(4895);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7331:
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
                href: "/",
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
/* harmony default export */ var profile = (Profile);

;// CONCATENATED MODULE: ./components/layout/Header.js







const propTypes = {
    navPosition: (prop_types_default()).string,
    hideNav: (prop_types_default()).bool,
    hideSignin: (prop_types_default()).bool,
    bottomOuterDivider: (prop_types_default()).bool,
    bottomDivider: (prop_types_default()).bool
};
const defaultProps = {
    navPosition: "",
    hideNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false
};
const Header = (param)=>{
    let { className , navPosition , hideNav , hideSignin , bottomOuterDivider , bottomDivider , ...props } = param;
    console.log(profile.loggedIn);
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
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "header-nav-inner",
                                    children: !hideSignin && /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                        className: "list-reset header-nav-right",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: profile.loggedIn ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    class: "button button-dark rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                            src: "/auro.svg",
                                                            class: "mr-12 auro-login-img",
                                                            width: 20,
                                                            height: 20
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            children: profile.getShortAddress()
                                                        })
                                                    ]
                                                })
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "dashboard",
                                                className: "button button-primary button-wide-mobile button-sm",
                                                onClick: closeMenu,
                                                children: "Launch App"
                                            })
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
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
/* harmony default export */ var layout_Header = (Header);


/***/ }),

/***/ 4895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/layout/Header.js + 2 modules
var Header = __webpack_require__(7331);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./components/layout/AuthenticatedPage.js



const AuthenticatedPage = (param)=>{
    let { children  } = param;
    const loggedIn = false;
    if (!loggedIn) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
            children: "Please log IN"
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: children
        });
    }
};
/* harmony default export */ var layout_AuthenticatedPage = (AuthenticatedPage);

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
    const verifiedClasses = certified ? "verified-bjj gold" : "unverified-bjj";
    const verifiedCheckClasses = certified ? "check" : "uncheck";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "tiles-item",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: verifiedClasses,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pl-8 pt-8 ".concat(verifiedCheckClasses),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: "/".concat(martialArtShortName, ".png"),
                        className: "p-4",
                        width: 50,
                        height: 50
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "mt-24 tt-u",
                        children: rank
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-xs",
                        children: martialArt
                    })
                ]
            })
        })
    });
};
/* harmony default export */ var partials_RankItem = (RankItem);

;// CONCATENATED MODULE: ./components/sections/RankTiles.js



const RankTiles = ()=>{
    const items = [
        {
            certified: true,
            shortName: "ibjjf",
            rank: "Red Belt",
            martialArt: "Brazilian Jiu Jitsu"
        },
        {
            certified: false,
            shortName: "itf",
            rank: "Green Belt",
            martialArt: "Taekwon-Do"
        },
        {
            certified: true,
            shortName: "wkf",
            rank: "Yellow Belt",
            martialArt: "Karate"
        }
    ];
    const tiles = items.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(partials_RankItem, {
            martialArtShortName: i.shortName,
            rank: i.rank,
            martialArt: i.martialArt,
            certified: i.certified
        }, index));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "section",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "section-inner",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "tiles-wrap",
                    children: [
                        tiles,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
                    ]
                })
            })
        })
    });
};
/* harmony default export */ var sections_RankTiles = (RankTiles);

;// CONCATENATED MODULE: ./pages/dashboard.page.tsx




function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(layout_AuthenticatedPage, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Header/* default */.Z, {
                    navPosition: "right",
                    className: "reveal-from-bottom",
                    hideNav: false,
                    hideSignin: false,
                    bottomOuterDivider: false,
                    bottomDivider: false
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                    className: "site-content",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(sections_RankTiles, {})
                })
            ]
        })
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [678,774,888,179], function() { return __webpack_exec__(9637); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
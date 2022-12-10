(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[832],{

/***/ 6109:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/welcome",
      function () {
        return __webpack_require__(8012);
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
/* harmony default export */ var profile = (Profile);

// EXTERNAL MODULE: ./modules/Authentication.js
var Authentication = __webpack_require__(4557);
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

/***/ 2929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ sections_Hero; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./utils/SectionProps.js

// Props shared by all sections
const SectionShared = {
    types: {
        topOuterDivider: (prop_types_default()).bool,
        bottomOuterDivider: (prop_types_default()).bool,
        topDivider: (prop_types_default()).bool,
        bottomDivider: (prop_types_default()).bool,
        hasBgColor: (prop_types_default()).bool,
        invertColor: (prop_types_default()).bool
    },
    defaults: {
        topOuterDivider: false,
        bottomOuterDivider: false,
        topDivider: false,
        bottomDivider: false,
        hasBgColor: false,
        invertColor: false
    }
};
// Default section props
const SectionProps = {
    types: {
        ...SectionShared.types
    },
    defaults: {
        ...SectionShared.defaults
    }
};
// Section split props
const SectionSplitProps = {
    types: {
        ...SectionShared.types,
        invertMobile: (prop_types_default()).bool,
        invertDesktop: (prop_types_default()).bool,
        alignTop: (prop_types_default()).bool,
        imageFill: (prop_types_default()).bool
    },
    defaults: {
        ...SectionShared.defaults,
        invertMobile: false,
        invertDesktop: false,
        alignTop: false,
        imageFill: false
    }
};
// Section tiles props
const SectionTilesProps = {
    types: {
        ...SectionShared.types,
        pushLeft: (prop_types_default()).bool
    },
    defaults: {
        ...SectionShared.defaults,
        pushLeft: false
    }
};

;// CONCATENATED MODULE: ./components/elements/ButtonGroup.js



const ButtonGroup = (param)=>{
    let { className , ...props } = param;
    const classes = classnames_default()("button-group", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ...props,
        className: classes
    });
};
/* harmony default export */ var elements_ButtonGroup = (ButtonGroup);

;// CONCATENATED MODULE: ./components/elements/Button.js




const propTypes = {
    tag: (prop_types_default()).elementType,
    color: (prop_types_default()).string,
    size: (prop_types_default()).string,
    loading: (prop_types_default()).bool,
    wide: (prop_types_default()).bool,
    wideMobile: (prop_types_default()).bool,
    disabled: (prop_types_default()).bool
};
const defaultProps = {
    tag: "button",
    color: "",
    size: "",
    loading: false,
    wide: false,
    wideMobile: false,
    disabled: false
};
const Button = (param)=>{
    let { className , tag , color , size , loading , wide , wideMobile , disabled , ...props } = param;
    const classes = classnames_default()("button", color && "button-".concat(color), size && "button-".concat(size), loading && "is-loading", wide && "button-block", wideMobile && "button-wide-mobile", className);
    const Component = tag;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
        ...props,
        className: classes,
        disabled: disabled
    });
};
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
/* harmony default export */ var elements_Button = (Button);

;// CONCATENATED MODULE: ./components/elements/Modal.js




const Modal_propTypes = {
    children: (prop_types_default()).node,
    handleClose: (prop_types_default()).func.isRequired,
    show: (prop_types_default()).bool.isRequired,
    closeHidden: (prop_types_default()).bool,
    video: (prop_types_default()).string,
    videoTag: prop_types_default().oneOf([
        "iframe",
        "video"
    ])
};
const Modal_defaultProps = {
    children: null,
    show: false,
    closeHidden: false,
    video: "",
    videoTag: "iframe"
};
const Modal = (param)=>{
    let { className , children , handleClose , show , closeHidden , video , videoTag , ...props } = param;
    (0,react.useEffect)(()=>{
        document.addEventListener("keydown", keyPress);
        document.addEventListener("click", stopProgagation);
        return ()=>{
            document.removeEventListener("keydown", keyPress);
            document.removeEventListener("click", stopProgagation);
        };
    });
    (0,react.useEffect)(()=>{
        handleBodyClass();
    }, [
        props.show
    ]);
    const handleBodyClass = ()=>{
        if (document.querySelectorAll(".modal.is-active").length) {
            document.body.classList.add("modal-is-active");
        } else {
            document.body.classList.remove("modal-is-active");
        }
    };
    const keyPress = (e)=>{
        e.keyCode === 27 && handleClose(e);
    };
    const stopProgagation = (e)=>{
        e.stopPropagation();
    };
    const classes = classnames_default()("modal", show && "is-active", video && "modal-video", className);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: show && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...props,
            className: classes,
            onClick: handleClose,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "modal-inner",
                onClick: stopProgagation,
                children: video ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "responsive-video",
                    children: videoTag === "iframe" ? /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                        title: "video",
                        src: video,
                        frameBorder: "0",
                        allowFullScreen: true
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
                        className: "modal-inner",
                        autoPlay: true,
                        loop: true,
                        src: video
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        !closeHidden && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "modal-close",
                            "aria-label": "close",
                            onClick: handleClose
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "modal-content",
                            children: children
                        })
                    ]
                })
            })
        })
    });
};
Modal.propTypes = Modal_propTypes;
Modal.defaultProps = Modal_defaultProps;
/* harmony default export */ var elements_Modal = (Modal);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/sections/Hero.js









const Hero_propTypes = {
    ...SectionProps.types
};
const Hero_defaultProps = {
    ...SectionProps.defaults
};
const Hero = (param)=>{
    let { className , topOuterDivider , bottomOuterDivider , topDivider , bottomDivider , hasBgColor , invertColor , ...props } = param;
    const [videoModalActive, setVideomodalactive] = (0,react.useState)(false);
    const openModal = (e)=>{
        e.preventDefault();
        setVideomodalactive(true);
    };
    const closeModal = (e)=>{
        e.preventDefault();
        setVideomodalactive(false);
    };
    const outerClasses = classnames_default()("hero section center-content", topOuterDivider && "has-top-divider", bottomOuterDivider && "has-bottom-divider", hasBgColor && "has-bg-color", invertColor && "invert-color", className);
    const innerClasses = classnames_default()("hero-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        ...props,
        className: outerClasses,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container-sm",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: innerClasses,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "hero-content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                className: "mt-0 mb-16 reveal-from-bottom",
                                "data-reveal-delay": "200",
                                children: [
                                    "Trusted rank ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-color-primary",
                                        children: "promotions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "container-xs",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "m-0 mb-32 reveal-from-bottom",
                                        "data-reveal-delay": "400",
                                        children: "Martial Artists worldwide can prove and share their rank, promote sutdents to new a new rank or even revoke it"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "reveal-from-bottom",
                                        "data-reveal-delay": "600",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(elements_ButtonGroup, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                    href: "dashboard",
                                                    className: "button button-primary button-wide-mobile",
                                                    children: "Launch App"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(elements_Button, {
                                                    tag: "a",
                                                    color: "dark",
                                                    wideMobile: true,
                                                    href: "https://github.com/anandcsingh/keito",
                                                    children: "View on Github"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "hero-figure reveal-from-bottom illustration-element-01",
                        "data-reveal-value": "20px",
                        "data-reveal-delay": "800",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            "data-video": "./../../assets/images/promotion1.mp4",
                            href: "#0",
                            "aria-controls": "video-modal",
                            onClick: openModal,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: "has-shadow",
                                src: "promotion2.jpg",
                                alt: "Hero",
                                width: 896,
                                height: 504
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(elements_Modal, {
                        id: "video-modal",
                        show: videoModalActive,
                        handleClose: closeModal,
                        video: "promotion3.mp4",
                        videoTag: "video"
                    })
                ]
            })
        })
    });
};
Hero.propTypes = Hero_propTypes;
Hero.defaultProps = Hero_defaultProps;
/* harmony default export */ var sections_Hero = (Hero);


/***/ }),

/***/ 4557:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const Authentication = {
    loggedIn: false,
    login: function() {
        this.loggedIn = true;
    }
};
/* harmony default export */ __webpack_exports__["Z"] = (Authentication);


/***/ }),

/***/ 8012:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Welcome; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7331);
/* harmony import */ var _components_sections_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2929);



function Welcome() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                navPosition: "right",
                className: "reveal-from-bottom",
                hideNav: false,
                hideSignin: false,
                bottomOuterDivider: false,
                bottomDivider: false
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                className: "site-content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sections_Hero__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "illustration-section-01",
                    topOuterDivider: null,
                    bottomOuterDivider: false,
                    topDivider: false,
                    bottomDivider: false,
                    hasBgColor: false,
                    invertColor: false
                })
            })
        ]
    });
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [678,675,774,888,179], function() { return __webpack_exec__(6109); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
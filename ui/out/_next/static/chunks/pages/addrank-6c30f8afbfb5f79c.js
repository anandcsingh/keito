(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[87],{

/***/ 3972:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/addrank",
      function () {
        return __webpack_require__(6470);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 6470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddRank; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4377);
/* harmony import */ var _modules_Authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3051);
/* harmony import */ var _modules_UserApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4953);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7294);







function AddRank() {
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
        addSuccess: false,
        addAttempt: false,
        addMessage: ""
    });
    const addClicked = async (event)=>{
        var address = _modules_Authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].address */ .Z.address != "" ? _modules_Authentication__WEBPACK_IMPORTED_MODULE_3__/* ["default"].address */ .Z.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
        event.preventDefault();
        const { martialArt , rank  } = event.target.elements;
        console.log("ma " + martialArt);
        const result = await (0,_modules_UserApiClient__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().addMartialArt(address, martialArt.options[martialArt.selectedIndex].text, martialArt.value, rank.value);
        console.log(result);
        setState({
            ...state,
            addAttempt: true,
            addSuccess: result.success,
            addMessage: result.message
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
            className: "section",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "section-inner",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "section-header",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "container-xs",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    className: "mt-0 mb-16",
                                    children: "Add Martial Art and Rank"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            children:  true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                                onSubmit: addClicked,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                    className: "form-label",
                                                    htmlFor: "martialArt",
                                                    children: "Martial Art"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                    id: "martialArt",
                                                    name: "martialArt",
                                                    className: "form-select",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            hidden: true,
                                                            children: "Choose your Martial Art"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            value: "ibjjf",
                                                            children: "Brazilian Jiu Jitsu"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            value: "itf",
                                                            children: "Taekwon-Do"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            value: "wkf",
                                                            children: "Karate"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                    className: "form-label",
                                                    htmlFor: "rank",
                                                    children: "Rank"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                    id: "rank",
                                                    name: "rank",
                                                    className: "form-select",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            hidden: true,
                                                            children: "Choose your Rank"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "White Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Yellow Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Green Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Blue Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Purple Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Brown Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Black Belt"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
                                                            children: "Coral Belt"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-24",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "button-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                            type: "submit",
                                                            className: "button button-primary button-wide-mobile",
                                                            children: "Submit"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "rank",
                                                            className: "button-link text-xs",
                                                            children: "Cancel"
                                                        })
                                                    ]
                                                }),
                                                state.addAttempt && state.addMessage != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
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
/******/ __webpack_require__.O(0, [829,16,863,675,52,518,893,869,774,888,179], function() { return __webpack_exec__(3972); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
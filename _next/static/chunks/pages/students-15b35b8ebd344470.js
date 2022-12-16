(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[609],{

/***/ 6307:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/students",
      function () {
        return __webpack_require__(7841);
      }
    ]);
    if(false) {}
  

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

/***/ 7841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Students; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_AuthPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4377);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7294);
/* harmony import */ var _modules_Authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3051);
/* harmony import */ var _modules_RankedV1ContractVerifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4910);
/* harmony import */ var _modules_Rank__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2581);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6400);
/* harmony import */ var _modules_UserApiClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4953);










function Students() {
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        addSuccess: false,
        addAttempt: false,
        addMessage: ""
    });
    const promoteStudent = async (event)=>{
        var address = _modules_Authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].address */ .Z.address != "" ? _modules_Authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].address */ .Z.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
        event.preventDefault();
        const { martialArt , rank , student  } = event.target.elements;
        const rankVerifier = new _modules_RankedV1ContractVerifier__WEBPACK_IMPORTED_MODULE_6__/* .RankedV1ContractVerifier */ .K(_modules_Authentication__WEBPACK_IMPORTED_MODULE_5__/* ["default"].zkClient */ .Z.zkClient);
        const ma = new _modules_Rank__WEBPACK_IMPORTED_MODULE_9__/* .Rank */ .y();
        ma.address = snarkyjs__WEBPACK_IMPORTED_MODULE_7__/* .PublicKey.fromBase58 */ .nh.fromBase58(student.value);
        ma.martialArt = martialArt.value;
        ma.rank = rank.value;
        const cert = snarkyjs__WEBPACK_IMPORTED_MODULE_7__/* .PublicKey.fromBase58 */ .nh.fromBase58(address);
        const verified = await rankVerifier.promote(cert, rank);
        console.log("ma " + martialArt);
        const result = await (0,_modules_UserApiClient__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)().addMartialArt(address, martialArt.options[martialArt.selectedIndex].text, martialArt.value, rank.value);
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
                                    children: "Promote your student"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            children:  true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                                onSubmit: promoteStudent,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-16",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                    className: "form-label",
                                                    htmlFor: "student",
                                                    children: "Student Address"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                    type: "text",
                                                    id: "student",
                                                    name: "student",
                                                    className: "form-input"
                                                })
                                            ]
                                        }),
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
/******/ __webpack_require__.O(0, [829,16,863,675,52,518,893,869,774,888,179], function() { return __webpack_exec__(6307); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
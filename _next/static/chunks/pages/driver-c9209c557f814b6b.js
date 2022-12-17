(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[747],{

/***/ 3454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ref, ref1;
module.exports = ((ref = __webpack_require__.g.process) == null ? void 0 : ref.env) && typeof ((ref1 = __webpack_require__.g.process) == null ? void 0 : ref1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(7663);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 785:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/driver",
      function () {
        return __webpack_require__(3728);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 4953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(594);
/* harmony import */ var _modules_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6525);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9828);



const UserApiClient = function() {
    return {
        addMartialArt: async function(address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("begin add ma here Address " + address);
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                user = docSnap.data();
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank, false);
            } else {
                console.log("NO Document data:");
                return createEmptyUser(address, martialArt, martialArtShortName, rank);
            }
        },
        getUser: async function(address) {
            var user = null;
            console.log("Address " + address);
            await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get("api/user/".concat(address)).then((r)=>user = r.data).catch((e)=>console.log(e.message));
            return user;
        },
        promoteStudent: async function(address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("promo");
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            if (docSnap.exists()) {
                user = docSnap.data();
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank, true);
            } else {
                let result = {};
                result.success = false;
                result.message = "Student not found with address ".concat(address, ". Ensure you entered the correct address or ask the student to join Ranked.");
                return result;
            }
        }
    };
    async function createEmptyUser(address, martialArt, martialArtShortName, rank) {
        let result = {};
        try {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const data = {
                address,
                martialArts: [
                    {
                        martialArt,
                        rank,
                        martialArtShortName,
                        certified: false
                    }
                ]
            };
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .setDoc */ .pl)(docRef, data);
            console.log("first add");
            result.success = true;
            result.message = "Martial Art ".concat(martialArt, " and rank ").concat(rank, " added.");
        } catch (error) {
            result.success = false;
            result.message = error.message;
        }
        return result;
    }
    ;
    async function addIfNotThere(user, address, martialArt, martialArtShortName, rank, allowUpdate) {
        let result = {};
        try {
            var _user_martialArts;
            var found = false;
            var foundMaIndex = -1;
            console.log("adding if not there");
            if (!user.martialArts) {
                user.martialArts = [];
            }
            for(var i = 0; i < ((_user_martialArts = user.martialArts) === null || _user_martialArts === void 0 ? void 0 : _user_martialArts.length); i++){
                if (user.martialArts[i].martialArt == martialArt) {
                    found = true;
                    foundMaIndex = i;
                }
            }
            if (!found) {
                user.martialArts.push({
                    martialArt,
                    rank,
                    martialArtShortName,
                    certified: false
                });
            } else if (found && allowUpdate) {
                user.martialArts[foundMaIndex] = {
                    martialArt,
                    rank,
                    martialArtShortName,
                    certified: false
                };
            } else {
                result.success = false;
                result.message = "Martial Art ".concat(martialArt, " already added, you can only get promoted by a qualifed instructor.");
            }
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_0__/* .database */ .F, "users", address);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDoc */ .QT)(docRef);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .setDoc */ .pl)(docRef, user);
            result.success = true;
            result.message = allowUpdate ? result.message = "Student ".concat(address, " promoted to ").concat(rank, " in Martial Art ").concat(martialArt, ".") : result.message;
        } catch (error) {
            result.success = false;
            result.message = error.message;
        }
        return result;
        await axios__WEBPACK_IMPORTED_MODULE_2__/* ["default"].put */ .Z.put("api/user/".concat(address), user).then((response)=>{
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
/* harmony default export */ __webpack_exports__["Z"] = (UserApiClient);


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

/***/ 3728:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ db; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6400);
/* harmony import */ var _modules_UserApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4953);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8285);
/* harmony import */ var _reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reactCOIServiceWorker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rankedWorkerClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8240);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9828);
/* harmony import */ var _modules_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6525);
// Delete record for user address
// change instructor
// verify 








function db() {
    let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        zkappWorkerClient: null,
        zkappPublicKey: null,
        hasWallet: null,
        hasBeenSetup: false,
        accountExists: false,
        query: "",
        onchain: "",
        json: "",
        deleteAddress: "",
        instructorAddress: "",
        queried: false,
        onchained: false,
        currentInstructor: "",
        sampleJson: ""
    });
    const sj = {
        "address": "B62qoGMg2RLUiJrpdXxydg9jZik4sfT7s9NgYESTToRLhpYNeGddr7z",
        "martialArt": "wkf",
        "rank": "Black Belt"
    };
    const samplej = JSON.stringify(sj);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            if (!state.hasBeenSetup) {
                const zkappWorkerClient = new _rankedWorkerClient__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z();
                console.log("Loading SnarkyJS...");
                await zkappWorkerClient.loadSnarkyJS();
                console.log("done");
                await zkappWorkerClient.setActiveInstanceToBerkeley();
                const mina = window.mina;
                if (mina == null) {
                    setState({
                        ...state,
                        hasWallet: false
                    });
                    return;
                }
                const publicKeyBase58 = (await mina.requestAccounts())[0];
                const publicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_2__/* .PublicKey.fromBase58 */ .nh.fromBase58(publicKeyBase58);
                console.log("using key", publicKey.toBase58());
                console.log("checking if account exists...");
                const res = await zkappWorkerClient.fetchAccount({
                    publicKey: publicKey
                });
                const accountExists = res.error == null;
                await zkappWorkerClient.loadContract();
                console.log("compiling zkApp");
                await zkappWorkerClient.compileContract();
                console.log("zkApp compiled");
                const zkappPublicKey = snarkyjs__WEBPACK_IMPORTED_MODULE_2__/* .PublicKey.fromBase58 */ .nh.fromBase58("B62qiijS17F93uaP4EGAXPgXKwm9B9YoqUuYRfuMrnoCSGnQ23Y4NBG");
                await zkappWorkerClient.initZkappInstance(zkappPublicKey);
                console.log("getting zkApp state...");
                await zkappWorkerClient.fetchAccount({
                    publicKey: zkappPublicKey
                });
                const currentNum = await zkappWorkerClient.getIbjjf();
                console.log("current ibjjf:", currentNum.toString());
                const currentInstructor = await zkappWorkerClient.getInstructor();
                console.log("current instructor: ", currentInstructor.toBase58());
                setState({
                    ...state,
                    zkappWorkerClient,
                    hasWallet: true,
                    hasBeenSetup: true,
                    zkappPublicKey,
                    accountExists
                });
            }
        })();
    }, []);
    const handleStudentChange = async (e)=>{
        setState({
            ...state,
            deleteAddress: e.target.value
        });
    };
    const handleInstrutorChange = async (e)=>{
        setState({
            ...state,
            instructorAddress: e.target.value
        });
    };
    const handleJsonChange = async (e)=>{
        setState({
            ...state,
            json: e.target.value
        });
    };
    // const handleQueryChange = async (e: any) => {
    //     setState({ ...state, query: e.target.value });
    // }
    // const handleOnchainChange = async (e: any) => {
    //     setState({ ...state, onchain: e.target.value });
    // }
    const checkDB = async (event)=>{
        event.preventDefault();
        console.log("checking DB...");
        var input = JSON.parse(state.json);
        (0,_modules_UserApiClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().addMartialArt(input.address, input.martialArt, input.martialArt, input.rank);
        console.log("added");
        setState({
            ...state,
            queried: true,
            onchained: true
        });
    };
    const deleteData = async (event)=>{
        event.preventDefault();
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__/* .doc */ .JU)(_modules_firestore__WEBPACK_IMPORTED_MODULE_7__/* .database */ .F, "users", state.deleteAddress);
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__/* .deleteDoc */ .oe)(docRef);
    };
    const verifyRank = async (event)=>{
        event.preventDefault();
        console.log("verifying rank...");
        console.log(state.json);
        var input = JSON.parse(state.json);
        const promotion1stringData = snarkyjs__WEBPACK_IMPORTED_MODULE_2__/* .CircuitString.fromString */ ._G.fromString(JSON.stringify(input));
        const promotion1fields = promotion1stringData.toFields();
        const promotion1Data = snarkyjs__WEBPACK_IMPORTED_MODULE_2__/* .Poseidon.hash */ .jm.hash(promotion1fields);
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const currentNum = await state.zkappWorkerClient.getRank(input.martialArt);
        console.log("current state:", currentNum.toString());
        console.log("new state:", promotion1Data.toString());
        console.log("Valid?: ", promotion1Data.toString() == currentNum.toString());
        setState({
            ...state,
            onchained: true,
            queried: true,
            onchain: currentNum.toString(),
            query: promotion1Data.toString()
        });
    };
    const getCurrentInstructor = async (event)=>{
        event.preventDefault();
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        const instructor = await state.zkappWorkerClient.getInstructor();
        setState({
            ...state,
            currentInstructor: instructor.toBase58()
        });
    };
    const changeInstructor = async (event)=>{
        var _state_zkappPublicKey;
        event.preventDefault();
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        console.log("contract address:", (_state_zkappPublicKey = state.zkappPublicKey) === null || _state_zkappPublicKey === void 0 ? void 0 : _state_zkappPublicKey.toBase58());
        const blackbelt = snarkyjs__WEBPACK_IMPORTED_MODULE_2__/* .PublicKey.fromBase58 */ .nh.fromBase58(state.instructorAddress);
        console.log("sending blackbelt as: ", blackbelt.toBase58());
        await state.zkappWorkerClient.createUpdateBlackBeltTransaction(blackbelt);
        console.log("creating proof...");
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        await state.zkappWorkerClient.proveUpdateTransaction();
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        console.log("getting Transaction JSON...");
        const transactionJSON = await state.zkappWorkerClient.getTransactionJSON();
        let transactionFee = 0.1;
        await state.zkappWorkerClient.fetchAccount({
            publicKey: state.zkappPublicKey
        });
        console.log("requesting send transaction...");
        const { hash  } = await window.mina.sendTransaction({
            transaction: transactionJSON,
            feePayer: {
                fee: transactionFee,
                memo: ""
            }
        });
        console.log("See transaction at https://berkeley.minaexplorer.com/transaction/" + hash);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
            className: "site-content",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                className: "hero section has-top-divider",
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "text-color-primary",
                                            children: "Ranked"
                                        }),
                                        " companion"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "container-xs",
                                    children: [
                                        !state.hasBeenSetup && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                            children: "Loading SnarkyJS..."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "reveal-from-bottom",
                                            "data-reveal-delay": "600",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mb-32",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                    className: "form-label",
                                                                    htmlFor: "instructor",
                                                                    children: "Instructor Address"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                    type: "text",
                                                                    id: "instructor",
                                                                    onChange: handleInstrutorChange,
                                                                    name: "instructor",
                                                                    placeholder: "Enter new Instructor Address",
                                                                    className: "form-input"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "button-group mt-16 mb-32",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                            className: "button button-primary button-wide-mobile",
                                                                            onClick: changeInstructor,
                                                                            children: "Change Instructor"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                            className: "button button-dark button-wide-mobile",
                                                                            onClick: getCurrentInstructor,
                                                                            children: "Current Instructor"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    children: state.currentInstructor
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "has-top-divider pt-32 ",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mb-16",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                        className: "form-label",
                                                                        htmlFor: "student",
                                                                        children: "Delete student DB ranks"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                        type: "text",
                                                                        id: "student",
                                                                        onChange: handleStudentChange,
                                                                        name: "student",
                                                                        placeholder: "Enter student address to remove ranks",
                                                                        className: "form-input"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "button-group mt-16",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                            className: "button button-primary button-wide-mobile",
                                                                            onClick: deleteData,
                                                                            children: "Delete student data "
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "has-top-divider pt-32 ",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mb-16",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        children: "Possible Martial Arts: ibjjf, itf, wkf"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                                                                        className: "form-label",
                                                                        htmlFor: "json",
                                                                        children: "Compare rank on-chain. "
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                                                                        id: "json",
                                                                        name: "json",
                                                                        className: "form-input",
                                                                        onChange: handleJsonChange
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            "e.g. json",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                children: samplej
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "button-group mt-16",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                            className: "button button-primary button-wide-mobile",
                                                                            onClick: verifyRank,
                                                                            children: "Compare with on chain "
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "mt12",
                                                                        children: state.queried && state.onchained && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                                                            children: "On-chain"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                                                            children: state.onchain
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                                                            children: "JSON"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
                                                                                            children: state.query
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
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
    async getRank(martialArt) {
        const result = await this._call("getRank", {
            martialArt
        });
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

/***/ 7663:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [829,16,312,774,888,179], function() { return __webpack_exec__(785); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
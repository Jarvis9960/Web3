"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/kenburns",{

/***/ "./src/layout/Message.js":
/*!*******************************!*\
  !*** ./src/layout/Message.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"D:\\\\AjileDone-Technologies\\\\public\\\\src\\\\layout\\\\Message.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar nameArrays = [\"Aarav\", \"Aarya\", \"Abha\", \"Aditi\", \"Advait\", \"Aishwarya\", \"Akash\", \"Amrita\", \"Ananya\", \"Anika\", \"Anil\", \"Anisha\", \"Ankit\", \"Anupam\", \"Arjun\", \"Asha\", \"Ashok\", \"Avani\", \"Ayush\", \"Bhavesh\", \"Chaitanya\", \"Charu\", \"Chetan\", \"Daksha\", \"Darshan\", \"Deepak\", \"Devika\", \"Dhruv\", \"Divya\", \"Ekta\", \"Ganesh\", \"Gaurav\", \"Gayatri\", \"Harish\", \"Heena\", \"Himanshu\", \"Isha\", \"Jai\", \"Jaya\", \"Jayesh\", \"Juhi\", \"Kabir\", \"Kamala\", \"Karan\", \"Kavita\", \"Keshav\", \"Khushi\", \"Kirti\", \"Krishna\", \"Kumar\", \"Kusum\", \"Lakshmi\", \"Madhav\", \"Madhu\", \"Mahesh\", \"Manish\", \"Mansi\", \"Maya\", \"Mihir\", \"Mira\", \"Mohini\", \"Mohan\", \"Mohini\", \"Naina\", \"Nakul\", \"Neha\", \"Niharika\", \"Nikita\", \"Nishant\", \"Nisha\", \"Nitin\", \"Pallavi\", \"Pankaj\", \"Pooja\", \"Prakash\", \"Praveen\", \"Preeti\", \"Priya\", \"Rahul\", \"Raj\", \"Rajesh\", \"Rakesh\", \"Rama\", \"Ramakant\", \"Ranjit\", \"Ravi\", \"Ritu\", \"Rohit\", \"Rupali\", \"Sagar\", \"Sakshi\", \"Saloni\", \"Sameer\", \"Sanjay\", \"Santosh\", \"Sarika\", \"Seema\", \"Shalini\", \"Shashank\", \"Sheetal\", \"Shiv\", \"Shreya\", \"Sneha\", \"Sonam\", \"Sonal\", \"Sudhir\", \"Suman\", \"Sunita\", \"Suresh\", \"Swati\", \"Tanvi\", \"Tarun\", \"Trisha\", \"Uma\", \"Umesh\", \"Upasana\", \"Utkarsh\", \"Ved\", \"Vidya\", \"Vikram\", \"Vinay\", \"Vineet\", \"Vinita\", \"Vipul\", \"Vivek\", \"Yash\", \"Yashika\", \"Zoya\"];\nvar randomToken = [5, 6, 7, 8, 9, 10, 11, 12];\n\nvar Message = function Message() {\n  _s();\n\n  var _useState = useState(\"\"),\n      _useState2 = (0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = useState(0),\n      _useState4 = (0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      token = _useState4[0],\n      setToken = _useState4[1];\n\n  useEffect(function () {\n    var interval = setInterval(function () {\n      var randomNameGenerator = Math.floor(Math.random() * 120);\n      var randomTokenGenrator = Math.floor(Math.random() * 8);\n      setName(nameArrays[randomNameGenerator]);\n      setToken(randomToken[randomTokenGenrator]);\n    }, 2500); // Clean up the interval on component unmount\n\n    return function () {\n      return clearInterval(interval);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"sticky-container\",\n    children: [name, \" Just Claim \", token, \" Bajrangi token Just 5 sec ago\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 152,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Message, \"sIbenHY6//ZPwipmq842yvZVsMM=\");\n\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\nvar _c;\n\n$RefreshReg$(_c, \"Message\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtELENBdEJEOztHQUFNSjs7S0FBQUE7QUF3Qk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9NZXNzYWdlLmpzPzZiZGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmFtZUFycmF5cyA9IFtcclxuICBcIkFhcmF2XCIsXHJcbiAgXCJBYXJ5YVwiLFxyXG4gIFwiQWJoYVwiLFxyXG4gIFwiQWRpdGlcIixcclxuICBcIkFkdmFpdFwiLFxyXG4gIFwiQWlzaHdhcnlhXCIsXHJcbiAgXCJBa2FzaFwiLFxyXG4gIFwiQW1yaXRhXCIsXHJcbiAgXCJBbmFueWFcIixcclxuICBcIkFuaWthXCIsXHJcbiAgXCJBbmlsXCIsXHJcbiAgXCJBbmlzaGFcIixcclxuICBcIkFua2l0XCIsXHJcbiAgXCJBbnVwYW1cIixcclxuICBcIkFyanVuXCIsXHJcbiAgXCJBc2hhXCIsXHJcbiAgXCJBc2hva1wiLFxyXG4gIFwiQXZhbmlcIixcclxuICBcIkF5dXNoXCIsXHJcbiAgXCJCaGF2ZXNoXCIsXHJcbiAgXCJDaGFpdGFueWFcIixcclxuICBcIkNoYXJ1XCIsXHJcbiAgXCJDaGV0YW5cIixcclxuICBcIkRha3NoYVwiLFxyXG4gIFwiRGFyc2hhblwiLFxyXG4gIFwiRGVlcGFrXCIsXHJcbiAgXCJEZXZpa2FcIixcclxuICBcIkRocnV2XCIsXHJcbiAgXCJEaXZ5YVwiLFxyXG4gIFwiRWt0YVwiLFxyXG4gIFwiR2FuZXNoXCIsXHJcbiAgXCJHYXVyYXZcIixcclxuICBcIkdheWF0cmlcIixcclxuICBcIkhhcmlzaFwiLFxyXG4gIFwiSGVlbmFcIixcclxuICBcIkhpbWFuc2h1XCIsXHJcbiAgXCJJc2hhXCIsXHJcbiAgXCJKYWlcIixcclxuICBcIkpheWFcIixcclxuICBcIkpheWVzaFwiLFxyXG4gIFwiSnVoaVwiLFxyXG4gIFwiS2FiaXJcIixcclxuICBcIkthbWFsYVwiLFxyXG4gIFwiS2FyYW5cIixcclxuICBcIkthdml0YVwiLFxyXG4gIFwiS2VzaGF2XCIsXHJcbiAgXCJLaHVzaGlcIixcclxuICBcIktpcnRpXCIsXHJcbiAgXCJLcmlzaG5hXCIsXHJcbiAgXCJLdW1hclwiLFxyXG4gIFwiS3VzdW1cIixcclxuICBcIkxha3NobWlcIixcclxuICBcIk1hZGhhdlwiLFxyXG4gIFwiTWFkaHVcIixcclxuICBcIk1haGVzaFwiLFxyXG4gIFwiTWFuaXNoXCIsXHJcbiAgXCJNYW5zaVwiLFxyXG4gIFwiTWF5YVwiLFxyXG4gIFwiTWloaXJcIixcclxuICBcIk1pcmFcIixcclxuICBcIk1vaGluaVwiLFxyXG4gIFwiTW9oYW5cIixcclxuICBcIk1vaGluaVwiLFxyXG4gIFwiTmFpbmFcIixcclxuICBcIk5ha3VsXCIsXHJcbiAgXCJOZWhhXCIsXHJcbiAgXCJOaWhhcmlrYVwiLFxyXG4gIFwiTmlraXRhXCIsXHJcbiAgXCJOaXNoYW50XCIsXHJcbiAgXCJOaXNoYVwiLFxyXG4gIFwiTml0aW5cIixcclxuICBcIlBhbGxhdmlcIixcclxuICBcIlBhbmthalwiLFxyXG4gIFwiUG9vamFcIixcclxuICBcIlByYWthc2hcIixcclxuICBcIlByYXZlZW5cIixcclxuICBcIlByZWV0aVwiLFxyXG4gIFwiUHJpeWFcIixcclxuICBcIlJhaHVsXCIsXHJcbiAgXCJSYWpcIixcclxuICBcIlJhamVzaFwiLFxyXG4gIFwiUmFrZXNoXCIsXHJcbiAgXCJSYW1hXCIsXHJcbiAgXCJSYW1ha2FudFwiLFxyXG4gIFwiUmFuaml0XCIsXHJcbiAgXCJSYXZpXCIsXHJcbiAgXCJSaXR1XCIsXHJcbiAgXCJSb2hpdFwiLFxyXG4gIFwiUnVwYWxpXCIsXHJcbiAgXCJTYWdhclwiLFxyXG4gIFwiU2Frc2hpXCIsXHJcbiAgXCJTYWxvbmlcIixcclxuICBcIlNhbWVlclwiLFxyXG4gIFwiU2FuamF5XCIsXHJcbiAgXCJTYW50b3NoXCIsXHJcbiAgXCJTYXJpa2FcIixcclxuICBcIlNlZW1hXCIsXHJcbiAgXCJTaGFsaW5pXCIsXHJcbiAgXCJTaGFzaGFua1wiLFxyXG4gIFwiU2hlZXRhbFwiLFxyXG4gIFwiU2hpdlwiLFxyXG4gIFwiU2hyZXlhXCIsXHJcbiAgXCJTbmVoYVwiLFxyXG4gIFwiU29uYW1cIixcclxuICBcIlNvbmFsXCIsXHJcbiAgXCJTdWRoaXJcIixcclxuICBcIlN1bWFuXCIsXHJcbiAgXCJTdW5pdGFcIixcclxuICBcIlN1cmVzaFwiLFxyXG4gIFwiU3dhdGlcIixcclxuICBcIlRhbnZpXCIsXHJcbiAgXCJUYXJ1blwiLFxyXG4gIFwiVHJpc2hhXCIsXHJcbiAgXCJVbWFcIixcclxuICBcIlVtZXNoXCIsXHJcbiAgXCJVcGFzYW5hXCIsXHJcbiAgXCJVdGthcnNoXCIsXHJcbiAgXCJWZWRcIixcclxuICBcIlZpZHlhXCIsXHJcbiAgXCJWaWtyYW1cIixcclxuICBcIlZpbmF5XCIsXHJcbiAgXCJWaW5lZXRcIixcclxuICBcIlZpbml0YVwiLFxyXG4gIFwiVmlwdWxcIixcclxuICBcIlZpdmVrXCIsXHJcbiAgXCJZYXNoXCIsXHJcbiAgXCJZYXNoaWthXCIsXHJcbiAgXCJab3lhXCIsXHJcbl07XHJcblxyXG5jb25zdCByYW5kb21Ub2tlbiA9IFs1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXTtcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCByYW5kb21OYW1lR2VuZXJhdG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIwKTtcclxuICAgICAgY29uc3QgcmFuZG9tVG9rZW5HZW5yYXRvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xyXG5cclxuICAgICAgc2V0TmFtZShuYW1lQXJyYXlzW3JhbmRvbU5hbWVHZW5lcmF0b3JdKTtcclxuICAgICAgc2V0VG9rZW4ocmFuZG9tVG9rZW5bcmFuZG9tVG9rZW5HZW5yYXRvcl0pO1xyXG4gICAgfSwgMjUwMCk7XHJcblxyXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGludGVydmFsIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktY29udGFpbmVyXCI+XHJcbiAgICAgIHtuYW1lfSBKdXN0IENsYWltIHt0b2tlbn0gQmFqcmFuZ2kgdG9rZW4gSnVzdCA1IHNlYyBhZ29cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xyXG4iXSwibmFtZXMiOlsibmFtZUFycmF5cyIsInJhbmRvbVRva2VuIiwiTWVzc2FnZSIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ0b2tlbiIsInNldFRva2VuIiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJhbmRvbU5hbWVHZW5lcmF0b3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Ub2tlbkdlbnJhdG9yIiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/Message.js\n");

/***/ })

});
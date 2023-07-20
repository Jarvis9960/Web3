"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var _src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/layout/PageBanner */ \"./src/layout/PageBanner.js\");\n/* harmony import */ var _src_utilits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utilits */ \"./src/utilits.js\");\n/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Loading */ \"./src/components/Loading.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"D:\\\\AjileDone-Technologies\\\\public\\\\pages\\\\blog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Blog = function Blog() {\n  _s();\n\n  var sort = 3;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      state = _useState2[0],\n      setstate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      blogs = _useState3[0],\n      setBlogs = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      page = _useState4[0],\n      setPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(6),\n      limit = _useState5[0],\n      setLimit = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      blogData = _useState6[0],\n      setBlogData = _useState6[1]; // const [page, setPage] = React.useState(1);\n\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      loading = _useState7[0],\n      setLoading = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      percentCompleted = _useState8[0],\n      setPercentComplete = _useState8[1];\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var list = document.querySelectorAll(\".neoh_fn_moving_blog ul li\");\n    (0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.pagination)(\".neoh_fn_moving_blog ul li\", sort, active);\n    setstate((0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.getPagination)(list.length, sort));\n  }, [active]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n      method: \"get\",\n      url: \"https://bajrangi-backend.onrender.com/api/getallblogs?page=\".concat(page),\n      onDownloadProgress: function onDownloadProgress(progressEvent) {\n        console.log(progressEvent);\n        var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n        setPercentComplete(percentCompleted);\n      }\n    }).then(function (res) {\n      setBlogData([].concat((0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blogData), (0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data.savedBlog)));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, [page]);\n  console.log(percentCompleted);\n\n  var convertDate = function convertDate(e) {\n    var date = new Date(e);\n    date = date.toLocaleString();\n    return date;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageName: \"Blog\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      pageName: \"Blog\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"neoh_fn_blog_page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          isLoading: true,\n          progress: 20\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), blogData && blogData.map(function (e) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"neoh_fn_moving_blog\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                  className: \"item\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_date\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                      children: convertDate(e.createdAt)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h3\", {\n                    className: \"fn_title\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      href: {\n                        pathname: \"/blog-single\",\n                        query: {\n                          blogId: e._id\n                        }\n                      },\n                      children: e.Title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 76,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 75,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_desc\",\n                    children: e.ShortDescription\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 87,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_read\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      href: {\n                        pathname: \"/blog-single\",\n                        query: {\n                          blogId: e._id\n                        }\n                      },\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                        className: \"neoh_fn_button only_text\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                          className: \"text\",\n                          children: \"Read More\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 98,\n                          columnNumber: 31\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 97,\n                        columnNumber: 29\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 89,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 88,\n                    columnNumber: 25\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 19\n            }, _this)\n          }, e._id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 17\n          }, _this);\n        }), blogData.length >= limit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"buttons fn_desc\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            onClick: function onClick() {\n              setPage(page + 1);\n              setLimit(limit + 6);\n            },\n            className: \"neoh_fn_buttons only_text\",\n            children: \"Load more\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 13\n        }, _this) : null]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Blog, \"NHMYx8VBxfML+QcnFfTQkmZb5so=\");\n\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEZELENBM0lEOztHQUFNVjs7S0FBQUE7QUE0SU4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tIFwiLi4vc3JjL2xheW91dC9QYWdlQmFubmVyXCI7XHJcbmltcG9ydCB7IGdldFBhZ2luYXRpb24sIHBhZ2luYXRpb24gfSBmcm9tIFwiLi4vc3JjL3V0aWxpdHNcIjtcclxuaW1wb3J0IExvYWRpbmdQcm9ncmVzcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4ge1xyXG4gIGxldCBzb3J0ID0gMztcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoNik7XHJcbiAgY29uc3QgW2Jsb2dEYXRhLCBzZXRCbG9nRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BlcmNlbnRDb21wbGV0ZWQsIHNldFBlcmNlbnRDb21wbGV0ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRQYWdlKHZhbHVlKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmVvaF9mbl9tb3ZpbmdfYmxvZyB1bCBsaVwiKTtcclxuICAgIHBhZ2luYXRpb24oXCIubmVvaF9mbl9tb3ZpbmdfYmxvZyB1bCBsaVwiLCBzb3J0LCBhY3RpdmUpO1xyXG4gICAgc2V0c3RhdGUoZ2V0UGFnaW5hdGlvbihsaXN0Lmxlbmd0aCwgc29ydCkpO1xyXG4gIH0sIFthY3RpdmVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IGBodHRwczovL2JhanJhbmdpLWJhY2tlbmQub25yZW5kZXIuY29tL2FwaS9nZXRhbGxibG9ncz9wYWdlPSR7cGFnZX1gLFxyXG4gICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3NFdmVudClcclxuXHJcbiAgICAgICAgY29uc3QgcGVyY2VudENvbXBsZXRlZCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgICAocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbFxyXG4gICAgICAgICk7XHJcbiAgICAgICBcclxuICAgICAgICBzZXRQZXJjZW50Q29tcGxldGUocGVyY2VudENvbXBsZXRlZCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRCbG9nRGF0YShbLi4uYmxvZ0RhdGEsIC4uLnJlcy5kYXRhLnNhdmVkQmxvZ10pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfSwgW3BhZ2VdKTtcclxuXHJcbmNvbnNvbGUubG9nKHBlcmNlbnRDb21wbGV0ZWQpXHJcblxyXG4gIGxldCBjb252ZXJ0RGF0ZSA9IChlKSA9PiB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGUpO1xyXG4gICAgZGF0ZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHBhZ2VOYW1lPXtcIkJsb2dcIn0+XHJcbiAgICAgIDxQYWdlQmFubmVyIHBhZ2VOYW1lPXtcIkJsb2dcIn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZW9oX2ZuX2Jsb2dfcGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7LyogTW92aW5nIEJsb2cgTGlzdCBTaG9ydGNvZGUgKi99XHJcbiAgICAgICAgICA8TG9hZGluZ1Byb2dyZXNzIGlzTG9hZGluZz17dHJ1ZX0gcHJvZ3Jlc3M9ezIwfSAvPlxyXG4gICAgICAgICAge2Jsb2dEYXRhICYmXHJcbiAgICAgICAgICAgIGJsb2dEYXRhLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lb2hfZm5fbW92aW5nX2Jsb2dcIiBrZXk9e2UuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbl9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbnZlcnREYXRlKGUuY3JlYXRlZEF0KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZuX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2Jsb2ctc2luZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvZ0lkOiBlLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2UuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbl9kZXNjXCI+e2UuU2hvcnREZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZuX3JlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYmxvZy1zaW5nbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9nSWQ6IGUuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZW9oX2ZuX2J1dHRvbiBvbmx5X3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlJlYWQgTW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIHsvKiAhTW92aW5nIEJsb2cgTGlzdCBTaG9ydGNvZGUgKi99XHJcbiAgICAgICAgICB7LyogUGFnaW5hdGlvbiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm5lb2hfZm5fcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3N0YXRlICYmXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tYXAoKHMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke2FjdGl2ZSA9PT0gcyA/IFwiY3VycmVudFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiAhUGFnaW5hdGlvbiAqL31cclxuICAgICAgICAgIHtibG9nRGF0YS5sZW5ndGggPj0gbGltaXQgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBmbl9kZXNjXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgc2V0TGltaXQobGltaXQgKyA2KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZW9oX2ZuX2J1dHRvbnMgb25seV90ZXh0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2FkIG1vcmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiUGFnZUJhbm5lciIsImdldFBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiTG9hZGluZ1Byb2dyZXNzIiwiYXhpb3MiLCJCbG9nIiwic29ydCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInN0YXRlIiwic2V0c3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdCIsInNldExpbWl0IiwiYmxvZ0RhdGEiLCJzZXRCbG9nRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGVyY2VudENvbXBsZXRlZCIsInNldFBlcmNlbnRDb21wbGV0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJsaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwibWV0aG9kIiwidXJsIiwib25Eb3dubG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2F2ZWRCbG9nIiwiZXJyIiwiY29udmVydERhdGUiLCJlIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIm1hcCIsImNyZWF0ZWRBdCIsInBhdGhuYW1lIiwicXVlcnkiLCJibG9nSWQiLCJfaWQiLCJUaXRsZSIsIlNob3J0RGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});
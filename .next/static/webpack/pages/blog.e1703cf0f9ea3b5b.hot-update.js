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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var _src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/layout/PageBanner */ \"./src/layout/PageBanner.js\");\n/* harmony import */ var _src_utilits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utilits */ \"./src/utilits.js\");\n/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Loading */ \"./src/components/Loading.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"D:\\\\AjileDone-Technologies\\\\public\\\\pages\\\\blog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Blog = function Blog() {\n  _s();\n\n  var sort = 3;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      state = _useState2[0],\n      setstate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      blogs = _useState3[0],\n      setBlogs = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      page = _useState4[0],\n      setPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(6),\n      limit = _useState5[0],\n      setLimit = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      blogData = _useState6[0],\n      setBlogData = _useState6[1]; // const [page, setPage] = React.useState(1);\n\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      loading = _useState7[0],\n      setLoading = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      percentCompleted = _useState8[0],\n      setPercentComplete = _useState8[1];\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var list = document.querySelectorAll(\".neoh_fn_moving_blog ul li\");\n    (0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.pagination)(\".neoh_fn_moving_blog ul li\", sort, active);\n    setstate((0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.getPagination)(list.length, sort));\n  }, [active]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n      method: \"get\",\n      url: \"https://bajrangi-backend.onrender.com/api/getallblogs?page=\".concat(page),\n      onDownloadProgress: function onDownloadProgress(progressEvent) {\n        var percentCompleted = Math.round(progressEvent.event.loaded * 100 / progressEvent.event.total);\n        setPercentComplete(percentCompleted);\n      }\n    }).then(function (res) {\n      setBlogData([].concat((0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blogData), (0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data.savedBlog)));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, [page]);\n  console.log(percentCompleted);\n\n  var convertDate = function convertDate(e) {\n    var date = new Date(e);\n    date = date.toLocaleString();\n    return date;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageName: \"Blog\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      pageName: \"Blog\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"neoh_fn_blog_page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          isLoading: true,\n          progress: 20\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this), blogData && blogData.map(function (e) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"neoh_fn_moving_blog\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                  className: \"item\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_date\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                      children: convertDate(e.createdAt)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h3\", {\n                    className: \"fn_title\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      href: {\n                        pathname: \"/blog-single\",\n                        query: {\n                          blogId: e._id\n                        }\n                      },\n                      children: e.Title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 76,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 75,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_desc\",\n                    children: e.ShortDescription\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 87,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_read\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      href: {\n                        pathname: \"/blog-single\",\n                        query: {\n                          blogId: e._id\n                        }\n                      },\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                        className: \"neoh_fn_button only_text\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                          className: \"text\",\n                          children: \"Read More\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 98,\n                          columnNumber: 31\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 97,\n                        columnNumber: 29\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 89,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 88,\n                    columnNumber: 25\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 19\n            }, _this)\n          }, e._id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 17\n          }, _this);\n        }), blogData.length >= limit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"buttons fn_desc\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            onClick: function onClick() {\n              setPage(page + 1);\n              setLimit(limit + 6);\n            },\n            className: \"neoh_fn_buttons only_text\",\n            children: \"Load more\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 13\n        }, _this) : null]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Blog, \"NHMYx8VBxfML+QcnFfTQkmZb5so=\");\n\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBGRCxDQTNJRDs7R0FBTVY7O0tBQUFBO0FBNElOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cuanM/Y2JiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSBcIi4uL3NyYy9sYXlvdXQvUGFnZUJhbm5lclwiO1xyXG5pbXBvcnQgeyBnZXRQYWdpbmF0aW9uLCBwYWdpbmF0aW9uIH0gZnJvbSBcIi4uL3NyYy91dGlsaXRzXCI7XHJcbmltcG9ydCBMb2FkaW5nUHJvZ3Jlc3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQmxvZyA9ICgpID0+IHtcclxuICBsZXQgc29ydCA9IDM7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDYpO1xyXG4gIGNvbnN0IFtibG9nRGF0YSwgc2V0QmxvZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwZXJjZW50Q29tcGxldGVkLCBzZXRQZXJjZW50Q29tcGxldGVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0UGFnZSh2YWx1ZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5lb2hfZm5fbW92aW5nX2Jsb2cgdWwgbGlcIik7XHJcbiAgICBwYWdpbmF0aW9uKFwiLm5lb2hfZm5fbW92aW5nX2Jsb2cgdWwgbGlcIiwgc29ydCwgYWN0aXZlKTtcclxuICAgIHNldHN0YXRlKGdldFBhZ2luYXRpb24obGlzdC5sZW5ndGgsIHNvcnQpKTtcclxuICB9LCBbYWN0aXZlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgdXJsOiBgaHR0cHM6Ly9iYWpyYW5naS1iYWNrZW5kLm9ucmVuZGVyLmNvbS9hcGkvZ2V0YWxsYmxvZ3M/cGFnZT0ke3BhZ2V9YCxcclxuICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBwZXJjZW50Q29tcGxldGVkID0gTWF0aC5yb3VuZChcclxuICAgICAgICAgIChwcm9ncmVzc0V2ZW50LmV2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LmV2ZW50LnRvdGFsXHJcbiAgICAgICAgKTtcclxuICAgICAgIFxyXG4gICAgICAgIHNldFBlcmNlbnRDb21wbGV0ZShwZXJjZW50Q29tcGxldGVkKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEJsb2dEYXRhKFsuLi5ibG9nRGF0YSwgLi4ucmVzLmRhdGEuc2F2ZWRCbG9nXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9LCBbcGFnZV0pO1xyXG5cclxuY29uc29sZS5sb2cocGVyY2VudENvbXBsZXRlZClcclxuXHJcbiAgbGV0IGNvbnZlcnREYXRlID0gKGUpID0+IHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZSk7XHJcbiAgICBkYXRlID0gZGF0ZS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgcGFnZU5hbWU9e1wiQmxvZ1wifT5cclxuICAgICAgPFBhZ2VCYW5uZXIgcGFnZU5hbWU9e1wiQmxvZ1wifSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lb2hfZm5fYmxvZ19wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHsvKiBNb3ZpbmcgQmxvZyBMaXN0IFNob3J0Y29kZSAqL31cclxuICAgICAgICAgIDxMb2FkaW5nUHJvZ3Jlc3MgaXNMb2FkaW5nPXt0cnVlfSBwcm9ncmVzcz17MjB9IC8+XHJcbiAgICAgICAgICB7YmxvZ0RhdGEgJiZcclxuICAgICAgICAgICAgYmxvZ0RhdGEubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVvaF9mbl9tb3ZpbmdfYmxvZ1wiIGtleT17ZS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZuX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29udmVydERhdGUoZS5jcmVhdGVkQXQpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm5fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYmxvZy1zaW5nbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9nSWQ6IGUuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZuX2Rlc2NcIj57ZS5TaG9ydERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm5fcmVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9ibG9nLXNpbmdsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2dJZDogZS5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5lb2hfZm5fYnV0dG9uIG9ubHlfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+UmVhZCBNb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgey8qICFNb3ZpbmcgQmxvZyBMaXN0IFNob3J0Y29kZSAqL31cclxuICAgICAgICAgIHsvKiBQYWdpbmF0aW9uICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibmVvaF9mbl9wYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7c3RhdGUgJiZcclxuICAgICAgICAgICAgICAgIHN0YXRlLm1hcCgocywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7YWN0aXZlID09PSBzID8gXCJjdXJyZW50XCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZShzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgey8qICFQYWdpbmF0aW9uICovfVxyXG4gICAgICAgICAge2Jsb2dEYXRhLmxlbmd0aCA+PSBsaW1pdCA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGZuX2Rlc2NcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFBhZ2UocGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMaW1pdChsaW1pdCArIDYpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5lb2hfZm5fYnV0dG9ucyBvbmx5X3RleHRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvYWQgbW9yZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQYWdlQmFubmVyIiwiZ2V0UGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJMb2FkaW5nUHJvZ3Jlc3MiLCJheGlvcyIsIkJsb2ciLCJzb3J0IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwic3RhdGUiLCJzZXRzdGF0ZSIsImJsb2dzIiwic2V0QmxvZ3MiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0Iiwic2V0TGltaXQiLCJibG9nRGF0YSIsInNldEJsb2dEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwZXJjZW50Q29tcGxldGVkIiwic2V0UGVyY2VudENvbXBsZXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsImxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJtZXRob2QiLCJ1cmwiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwiTWF0aCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNhdmVkQmxvZyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjb252ZXJ0RGF0ZSIsImUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibWFwIiwiY3JlYXRlZEF0IiwicGF0aG5hbWUiLCJxdWVyeSIsImJsb2dJZCIsIl9pZCIsIlRpdGxlIiwiU2hvcnREZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});
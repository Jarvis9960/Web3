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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var _src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/layout/PageBanner */ \"./src/layout/PageBanner.js\");\n/* harmony import */ var _src_utilits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utilits */ \"./src/utilits.js\");\n/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Loading */ \"./src/components/Loading.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"D:\\\\AjileDone-Technologies\\\\public\\\\pages\\\\blog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Blog = function Blog() {\n  _s();\n\n  var sort = 3;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      state = _useState2[0],\n      setstate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      blogs = _useState3[0],\n      setBlogs = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      page = _useState4[0],\n      setPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(6),\n      limit = _useState5[0],\n      setLimit = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      blogData = _useState6[0],\n      setBlogData = _useState6[1]; // const [page, setPage] = React.useState(1);\n\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      loading = _useState7[0],\n      setLoading = _useState7[1]; // const [percentCompleted, setPercentComplete] = useState();\n\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var list = document.querySelectorAll(\".neoh_fn_moving_blog ul li\");\n    (0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.pagination)(\".neoh_fn_moving_blog ul li\", sort, active);\n    setstate((0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.getPagination)(list.length, sort));\n  }, [active]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setLoading(true);\n    (0,axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n      method: \"get\",\n      url: \"https://bajrangi-backend.onrender.com/api/getallblogs?page=\".concat(page)\n    }).then(function (res) {\n      setLoading(false);\n      setBlogData([].concat((0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blogData), (0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data.savedBlog)));\n    })[\"catch\"](function (err) {\n      console.log(err);\n      setLoading(false);\n    });\n  }, [page]);\n\n  var convertDate = function convertDate(e) {\n    var date = new Date(e);\n    date = date.toLocaleString();\n    return date;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageName: \"Blog\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      pageName: \"Blog\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"neoh_fn_blog_page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n          children: [blogData && blogData.map(function (e) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              className: \"neoh_fn_moving_blog\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                    className: \"item\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                      className: \"fn_date\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                        children: convertDate(e.createdAt)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 69,\n                        columnNumber: 31\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 68,\n                      columnNumber: 29\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h3\", {\n                      className: \"fn_title\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: {\n                          pathname: \"/blog-single\",\n                          query: {\n                            blogId: e._id\n                          }\n                        },\n                        children: e.Title\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 72,\n                        columnNumber: 31\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 71,\n                      columnNumber: 29\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                      className: \"fn_desc\",\n                      children: e.ShortDescription\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 29\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                      className: \"fn_read\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: {\n                          pathname: \"/blog-single\",\n                          query: {\n                            blogId: e._id\n                          }\n                        },\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                          className: \"neoh_fn_button only_text\",\n                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                            className: \"text\",\n                            children: \"Read More\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 94,\n                            columnNumber: 35\n                          }, _this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 93,\n                          columnNumber: 33\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 85,\n                        columnNumber: 31\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 84,\n                      columnNumber: 29\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 67,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 23\n              }, _this)\n            }, e._id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 21\n            }, _this);\n          }), blogData.length >= limit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"buttons fn_desc\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n              onClick: function onClick() {\n                setPage(page + 1);\n                setLimit(limit + 6);\n              },\n              className: \"neoh_fn_buttons only_text\",\n              children: \"Load more\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 17\n          }, _this) : null]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Blog, \"XeFajfvfdB7YrUyYF57RGc3+kMU=\");\n\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsbUNBQVMsRUFBQywwQkFBYjtBQUFBLGlEQUNFO0FBQU0scUNBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUEwQ1QsQ0FBQyxDQUFDUyxHQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBd0NELFdBekNELENBRkosRUFtRUc5QixRQUFRLENBQUNVLE1BQVQsSUFBbUJaLEtBQW5CLGdCQUNDO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG1DQUNFO0FBQ0UscUJBQU8sRUFBRSxtQkFBTTtBQUNiRCxnQkFBQUEsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFQO0FBQ0FHLGdCQUFBQSxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRCxlQUpIO0FBS0UsdUJBQVMsRUFBQywyQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsR0FZRyxJQS9FTjtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThGRCxDQXpJRDs7R0FBTVY7O0tBQUFBO0FBMElOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cuanM/Y2JiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSBcIi4uL3NyYy9sYXlvdXQvUGFnZUJhbm5lclwiO1xyXG5pbXBvcnQgeyBnZXRQYWdpbmF0aW9uLCBwYWdpbmF0aW9uIH0gZnJvbSBcIi4uL3NyYy91dGlsaXRzXCI7XHJcbmltcG9ydCBMb2FkaW5nUHJvZ3Jlc3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQmxvZyA9ICgpID0+IHtcclxuICBsZXQgc29ydCA9IDM7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDYpO1xyXG4gIGNvbnN0IFtibG9nRGF0YSwgc2V0QmxvZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbcGVyY2VudENvbXBsZXRlZCwgc2V0UGVyY2VudENvbXBsZXRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHNldFBhZ2UodmFsdWUpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZW9oX2ZuX21vdmluZ19ibG9nIHVsIGxpXCIpO1xyXG4gICAgcGFnaW5hdGlvbihcIi5uZW9oX2ZuX21vdmluZ19ibG9nIHVsIGxpXCIsIHNvcnQsIGFjdGl2ZSk7XHJcbiAgICBzZXRzdGF0ZShnZXRQYWdpbmF0aW9uKGxpc3QubGVuZ3RoLCBzb3J0KSk7XHJcbiAgfSwgW2FjdGl2ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICB1cmw6IGBodHRwczovL2JhanJhbmdpLWJhY2tlbmQub25yZW5kZXIuY29tL2FwaS9nZXRhbGxibG9ncz9wYWdlPSR7cGFnZX1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldEJsb2dEYXRhKFsuLi5ibG9nRGF0YSwgLi4ucmVzLmRhdGEuc2F2ZWRCbG9nXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW3BhZ2VdKTtcclxuXHJcbiAgbGV0IGNvbnZlcnREYXRlID0gKGUpID0+IHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZSk7XHJcbiAgICBkYXRlID0gZGF0ZS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgcGFnZU5hbWU9e1wiQmxvZ1wifT5cclxuICAgICAgPFBhZ2VCYW5uZXIgcGFnZU5hbWU9e1wiQmxvZ1wifSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lb2hfZm5fYmxvZ19wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8TG9hZGluZ1Byb2dyZXNzIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtibG9nRGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgYmxvZ0RhdGEubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZW9oX2ZuX21vdmluZ19ibG9nXCIga2V5PXtlLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZuX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbnZlcnREYXRlKGUuY3JlYXRlZEF0KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm5fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYmxvZy1zaW5nbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2dJZDogZS5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZuX2Rlc2NcIj57ZS5TaG9ydERlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZuX3JlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYmxvZy1zaW5nbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2dJZDogZS5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZW9oX2ZuX2J1dHRvbiBvbmx5X3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj5SZWFkIE1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgey8qICFNb3ZpbmcgQmxvZyBMaXN0IFNob3J0Y29kZSAqL31cclxuICAgICAgICAgICAgICB7LyogUGFnaW5hdGlvbiAqL31cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJuZW9oX2ZuX3BhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtzdGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgc3RhdGUubWFwKChzLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHthY3RpdmUgPT09IHMgPyBcImN1cnJlbnRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c31cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qICFQYWdpbmF0aW9uICovfVxyXG4gICAgICAgICAgICAgIHtibG9nRGF0YS5sZW5ndGggPj0gbGltaXQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMgZm5fZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaW1pdChsaW1pdCArIDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmVvaF9mbl9idXR0b25zIG9ubHlfdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2FkIG1vcmVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJQYWdlQmFubmVyIiwiZ2V0UGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJMb2FkaW5nUHJvZ3Jlc3MiLCJheGlvcyIsIkJsb2ciLCJzb3J0IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwic3RhdGUiLCJzZXRzdGF0ZSIsImJsb2dzIiwic2V0QmxvZ3MiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0Iiwic2V0TGltaXQiLCJibG9nRGF0YSIsInNldEJsb2dEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwibGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2F2ZWRCbG9nIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNvbnZlcnREYXRlIiwiZSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJtYXAiLCJjcmVhdGVkQXQiLCJwYXRobmFtZSIsInF1ZXJ5IiwiYmxvZ0lkIiwiX2lkIiwiVGl0bGUiLCJTaG9ydERlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});
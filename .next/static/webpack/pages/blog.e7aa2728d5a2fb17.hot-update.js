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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var _src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/layout/PageBanner */ \"./src/layout/PageBanner.js\");\n/* harmony import */ var _src_utilits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utilits */ \"./src/utilits.js\");\n/* harmony import */ var _src_components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Loading */ \"./src/components/Loading.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"D:\\\\AjileDone-Technologies\\\\public\\\\pages\\\\blog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Blog = function Blog() {\n  _s();\n\n  var sort = 3;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      state = _useState2[0],\n      setstate = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      blogs = _useState3[0],\n      setBlogs = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      page = _useState4[0],\n      setPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(6),\n      limit = _useState5[0],\n      setLimit = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      blogData = _useState6[0],\n      setBlogData = _useState6[1]; // const [page, setPage] = React.useState(1);\n\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      loading = _useState7[0],\n      setLoading = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      percentCompleted = _useState8[0],\n      setPercentComplete = _useState8[1];\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var list = document.querySelectorAll(\".neoh_fn_moving_blog ul li\");\n    (0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.pagination)(\".neoh_fn_moving_blog ul li\", sort, active);\n    setstate((0,_src_utilits__WEBPACK_IMPORTED_MODULE_5__.getPagination)(list.length, sort));\n  }, [active]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n      method: \"get\",\n      url: \"https://bajrangi-backend.onrender.com/api/getallblogs?page=\".concat(page)\n    }).then(function (res) {\n      setBlogData([].concat((0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(blogData), (0,D_AjileDone_Technologies_public_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res.data.savedBlog)));\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, [page]);\n  console.log(percentCompleted);\n\n  var convertDate = function convertDate(e) {\n    var date = new Date(e);\n    date = date.toLocaleString();\n    return date;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageName: \"Blog\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_layout_PageBanner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      pageName: \"Blog\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"neoh_fn_blog_page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_src_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), blogData && blogData.map(function (e) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"neoh_fn_moving_blog\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n                  className: \"item\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_date\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                      children: convertDate(e.createdAt)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 64,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 63,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h3\", {\n                    className: \"fn_title\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      href: {\n                        pathname: \"/blog-single\",\n                        query: {\n                          blogId: e._id\n                        }\n                      },\n                      children: e.Title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 67,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_desc\",\n                    children: e.ShortDescription\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 78,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n                    className: \"fn_read\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                      href: {\n                        pathname: \"/blog-single\",\n                        query: {\n                          blogId: e._id\n                        }\n                      },\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                        className: \"neoh_fn_button only_text\",\n                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n                          className: \"text\",\n                          children: \"Read More\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 89,\n                          columnNumber: 31\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 88,\n                        columnNumber: 29\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 80,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 25\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 19\n            }, _this)\n          }, e._id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 17\n          }, _this);\n        }), blogData.length >= limit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"buttons fn_desc\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            onClick: function onClick() {\n              setPage(page + 1);\n              setLimit(limit + 6);\n            },\n            className: \"neoh_fn_buttons only_text\",\n            children: \"Load more\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 13\n        }, _this) : null]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Blog, \"NHMYx8VBxfML+QcnFfTQkmZb5so=\");\n\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBTSxtQ0FBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQTBDVCxDQUFDLENBQUNTLEdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUF3Q0QsU0F6Q0QsQ0FKSixFQXFFR2hDLFFBQVEsQ0FBQ1ksTUFBVCxJQUFtQmQsS0FBbkIsZ0JBQ0M7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0U7QUFDRSxtQkFBTyxFQUFFLG1CQUFNO0FBQ2JELGNBQUFBLE9BQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNBRyxjQUFBQSxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRCxhQUpIO0FBS0UscUJBQVMsRUFBQywyQkFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FZRyxJQWpGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwRkQsQ0FsSUQ7O0dBQU1WOztLQUFBQTtBQW1JTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nLmpzP2NiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCIuLi9zcmMvbGF5b3V0L1BhZ2VCYW5uZXJcIjtcclxuaW1wb3J0IHsgZ2V0UGFnaW5hdGlvbiwgcGFnaW5hdGlvbiB9IGZyb20gXCIuLi9zcmMvdXRpbGl0c1wiO1xyXG5pbXBvcnQgTG9hZGluZ1Byb2dyZXNzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiB7XHJcbiAgbGV0IHNvcnQgPSAzO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZSg2KTtcclxuICBjb25zdCBbYmxvZ0RhdGEsIHNldEJsb2dEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcGVyY2VudENvbXBsZXRlZCwgc2V0UGVyY2VudENvbXBsZXRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHNldFBhZ2UodmFsdWUpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uZW9oX2ZuX21vdmluZ19ibG9nIHVsIGxpXCIpO1xyXG4gICAgcGFnaW5hdGlvbihcIi5uZW9oX2ZuX21vdmluZ19ibG9nIHVsIGxpXCIsIHNvcnQsIGFjdGl2ZSk7XHJcbiAgICBzZXRzdGF0ZShnZXRQYWdpbmF0aW9uKGxpc3QubGVuZ3RoLCBzb3J0KSk7XHJcbiAgfSwgW2FjdGl2ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIHVybDogYGh0dHBzOi8vYmFqcmFuZ2ktYmFja2VuZC5vbnJlbmRlci5jb20vYXBpL2dldGFsbGJsb2dzP3BhZ2U9JHtwYWdlfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0QmxvZ0RhdGEoWy4uLmJsb2dEYXRhLCAuLi5yZXMuZGF0YS5zYXZlZEJsb2ddKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH0sIFtwYWdlXSk7XHJcblxyXG5jb25zb2xlLmxvZyhwZXJjZW50Q29tcGxldGVkKVxyXG5cclxuICBsZXQgY29udmVydERhdGUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShlKTtcclxuICAgIGRhdGUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBwYWdlTmFtZT17XCJCbG9nXCJ9PlxyXG4gICAgICA8UGFnZUJhbm5lciBwYWdlTmFtZT17XCJCbG9nXCJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVvaF9mbl9ibG9nX3BhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgey8qIE1vdmluZyBCbG9nIExpc3QgU2hvcnRjb2RlICovfVxyXG4gICAgICAgICAgPExvYWRpbmdQcm9ncmVzcyAvPlxyXG4gICAgICAgICAge2Jsb2dEYXRhICYmXHJcbiAgICAgICAgICAgIGJsb2dEYXRhLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lb2hfZm5fbW92aW5nX2Jsb2dcIiBrZXk9e2UuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbl9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbnZlcnREYXRlKGUuY3JlYXRlZEF0KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZuX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2Jsb2ctc2luZ2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvZ0lkOiBlLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2UuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbl9kZXNjXCI+e2UuU2hvcnREZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZuX3JlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYmxvZy1zaW5nbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9nSWQ6IGUuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZW9oX2ZuX2J1dHRvbiBvbmx5X3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlJlYWQgTW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIHsvKiAhTW92aW5nIEJsb2cgTGlzdCBTaG9ydGNvZGUgKi99XHJcbiAgICAgICAgICB7LyogUGFnaW5hdGlvbiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm5lb2hfZm5fcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3N0YXRlICYmXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5tYXAoKHMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke2FjdGl2ZSA9PT0gcyA/IFwiY3VycmVudFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiAhUGFnaW5hdGlvbiAqL31cclxuICAgICAgICAgIHtibG9nRGF0YS5sZW5ndGggPj0gbGltaXQgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBmbl9kZXNjXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgc2V0TGltaXQobGltaXQgKyA2KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZW9oX2ZuX2J1dHRvbnMgb25seV90ZXh0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2FkIG1vcmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiUGFnZUJhbm5lciIsImdldFBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiTG9hZGluZ1Byb2dyZXNzIiwiYXhpb3MiLCJCbG9nIiwic29ydCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInN0YXRlIiwic2V0c3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdCIsInNldExpbWl0IiwiYmxvZ0RhdGEiLCJzZXRCbG9nRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGVyY2VudENvbXBsZXRlZCIsInNldFBlcmNlbnRDb21wbGV0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJsaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJzYXZlZEJsb2ciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY29udmVydERhdGUiLCJlIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIm1hcCIsImNyZWF0ZWRBdCIsInBhdGhuYW1lIiwicXVlcnkiLCJibG9nSWQiLCJfaWQiLCJUaXRsZSIsIlNob3J0RGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Hero = ()=>{\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchCount = async ()=>{\n        const res = await fetch(\"/api/plus-one\", {\n            method: \"GET\"\n        });\n        const data = await res.json();\n        setCount(data.sequence_value);\n    };\n    const incrementCount = async ()=>{\n        const res = await fetch(\"/api/plus-one\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n        setCount(data.sequence_value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCount();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4\",\n                    children: \"Total Count:\"\n                }, void 0, false, {\n                    fileName: \"/Users/apoorvsgaur/Desktop/plus-one/components/Hero.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg opacity-80 leading-relaxed\",\n                    children: count !== null ? count : \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/apoorvsgaur/Desktop/plus-one/components/Hero.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary btn-wide\",\n                    onClick: incrementCount,\n                    children: \"+1\"\n                }, void 0, false, {\n                    fileName: \"/Users/apoorvsgaur/Desktop/plus-one/components/Hero.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apoorvsgaur/Desktop/plus-one/components/Hero.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/apoorvsgaur/Desktop/plus-one/components/Hero.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hero, \"XeM2Swa48AXpsYvvdoNmFufJfaQ=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzRDO0FBRTVDLE1BQU1FLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1LLGFBQWE7UUFDakIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGlCQUFpQjtZQUFDQyxRQUFRO1FBQUs7UUFDdkQsTUFBTUMsT0FBTyxNQUFNSCxJQUFJSSxJQUFJO1FBQzNCTixTQUFTSyxLQUFLRSxjQUFjO0lBQzlCO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCLE1BQU1OLE1BQU0sTUFBTUMsTUFBTSxpQkFBaUI7WUFDdkNDLFFBQVE7WUFDUkssU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUNBLE1BQU1KLE9BQU8sTUFBTUgsSUFBSUksSUFBSTtRQUMzQk4sU0FBU0ssS0FBS0UsY0FBYztJQUM5QjtJQUVBVixnREFBU0EsQ0FBQztRQUNSSTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFHRixXQUFVOzhCQUE4RDs7Ozs7OzhCQUc1RSw4REFBQ0c7b0JBQUVILFdBQVU7OEJBQ1ZaLFVBQVUsT0FBT0EsUUFBUTs7Ozs7OzhCQUU1Qiw4REFBQ2dCO29CQUFPSixXQUFVO29CQUEyQkssU0FBU1I7OEJBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU05RTtHQXZDTVY7S0FBQUE7QUF5Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLnRzeD9lNzc5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBmZXRjaENvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3BsdXMtb25lJywge21ldGhvZDogJ0dFVCd9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRDb3VudChkYXRhLnNlcXVlbmNlX3ZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBpbmNyZW1lbnRDb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9wbHVzLW9uZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRDb3VudChkYXRhLnNlcXVlbmNlX3ZhbHVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ291bnQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gYmctYmFzZS0xMDAgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTE2IGxnOmdhcC0yMCBweC04IHB5LTggbGc6cHktMjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTAgbGc6Z2FwLTE0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgbGc6aXRlbXMtc3RhcnRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtNHhsIGxnOnRleHQtNnhsIHRyYWNraW5nLXRpZ2h0IG1kOi1tYi00XCI+XG4gICAgICAgICAgVG90YWwgQ291bnQ6XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgb3BhY2l0eS04MCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICB7Y291bnQgIT09IG51bGwgPyBjb3VudCA6ICdMb2FkaW5nLi4uJ31cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4td2lkZVwiIG9uQ2xpY2s9e2luY3JlbWVudENvdW50fT5cbiAgICAgICAgICArMVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZXJvIiwiY291bnQiLCJzZXRDb3VudCIsImZldGNoQ291bnQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwic2VxdWVuY2VfdmFsdWUiLCJpbmNyZW1lbnRDb3VudCIsImhlYWRlcnMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Hero.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/blog/edit";
exports.ids = ["pages/api/blog/edit"];
exports.modules = {

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/blog/edit.js":
/*!********************************!*\
  !*** ./pages/api/blog/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    const postsfolder = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), `/_posts/`);\n    if (true) {\n        if (req.method === \"POST\") {\n            const { date , title , tagline , preview , image  } = req.body.variables;\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(postsfolder + req.body.slug + \".md\", gray_matter__WEBPACK_IMPORTED_MODULE_2___default().stringify(req.body.content, {\n                date,\n                title,\n                tagline,\n                preview,\n                image\n            }), \"utf-8\", (err)=>console.log(err)\n            );\n            res.status(200).json({\n                status: \"DONE\"\n            });\n        } else {\n            res.status(200).json({\n                name: \"This route works in development mode only\"\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZy9lZGl0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0I7QUFDUTtBQUNLO0FBRWxCLFNBQVNHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTUMsV0FBVyxHQUFHTCwwQ0FBSSxDQUFDTSxPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsSUFBSUQsSUFBc0MsRUFBRTtRQUMxQyxJQUFJSCxHQUFHLENBQUNLLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDekIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRSxHQUFHVixHQUFHLENBQUNXLElBQUksQ0FBQ0MsU0FBUztZQUNuRWhCLG1EQUFZLENBQ1ZNLFdBQVcsR0FBR0YsR0FBRyxDQUFDVyxJQUFJLENBQUNHLElBQUksR0FBRyxLQUFLLEVBQ25DaEIsNERBQWdCLENBQUNFLEdBQUcsQ0FBQ1csSUFBSSxDQUFDSyxPQUFPLEVBQUU7Z0JBQ2pDVixJQUFJO2dCQUNKQyxLQUFLO2dCQUNMQyxPQUFPO2dCQUNQQyxPQUFPO2dCQUNQQyxLQUFLO2FBQ04sQ0FBQyxFQUNGLE9BQU8sRUFDUCxDQUFDTyxHQUFHLEdBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7WUFBQSxDQUMxQixDQUFDO1lBQ0ZoQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUQsTUFBTSxFQUFFLE1BQU07YUFBRSxDQUFDLENBQUM7U0FDMUMsTUFBTTtZQUNMbkIsR0FBRyxDQUNBbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7Z0JBQUVDLElBQUksRUFBRSwyQ0FBMkM7YUFBRSxDQUFDLENBQUM7U0FDaEU7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcG9ydGZvbGlvLXRlbXBsYXRlLy4vcGFnZXMvYXBpL2Jsb2cvZWRpdC5qcz80Yjg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgcG9zdHNmb2xkZXIgPSBqb2luKHByb2Nlc3MuY3dkKCksIGAvX3Bvc3RzL2ApO1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgICAgY29uc3QgeyBkYXRlLCB0aXRsZSwgdGFnbGluZSwgcHJldmlldywgaW1hZ2UgfSA9IHJlcS5ib2R5LnZhcmlhYmxlcztcclxuICAgICAgZnMud3JpdGVGaWxlKFxyXG4gICAgICAgIHBvc3RzZm9sZGVyICsgcmVxLmJvZHkuc2x1ZyArIFwiLm1kXCIsXHJcbiAgICAgICAgbWF0dGVyLnN0cmluZ2lmeShyZXEuYm9keS5jb250ZW50LCB7XHJcbiAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICB0YWdsaW5lLFxyXG4gICAgICAgICAgcHJldmlldyxcclxuICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFwidXRmLThcIixcclxuICAgICAgICAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiBcIkRPTkVcIiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAgIC5qc29uKHsgbmFtZTogXCJUaGlzIHJvdXRlIHdvcmtzIGluIGRldmVsb3BtZW50IG1vZGUgb25seVwiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJqb2luIiwibWF0dGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBvc3RzZm9sZGVyIiwicHJvY2VzcyIsImN3ZCIsIm1ldGhvZCIsImRhdGUiLCJ0aXRsZSIsInRhZ2xpbmUiLCJwcmV2aWV3IiwiaW1hZ2UiLCJib2R5IiwidmFyaWFibGVzIiwid3JpdGVGaWxlIiwic2x1ZyIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blog/edit.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blog/edit.js"));
module.exports = __webpack_exports__;

})();
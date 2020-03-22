webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/deepaligarg/Documents/comp sci/Next.js-Hacker-Rank/components/StoryList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "story-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 3
    }
  }, stories.map(function (story) {
    return __jsx("div", {
      className: "story",
      key: story.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 7
      }
    }, __jsx("h2", {
      className: "story-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: story.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 37
      }
    }, story.title)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.0831e158cf6ed48e4fff.hot-update.js.map
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
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
      lineNumber: 4,
      columnNumber: 3
    }
  }, stories.map(function (story) {
    return __jsx("div", {
      className: "story",
      key: story.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("h2", {
      className: "story-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: story.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 37
      }
    }, story.title)), __jsx("div", {
      className: "story-details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, story.points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/story?id=".concat(story.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 48
      }
    }, story.comments_count || 0, " comments"))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.070e71e0145445009893.hot-update.js.map
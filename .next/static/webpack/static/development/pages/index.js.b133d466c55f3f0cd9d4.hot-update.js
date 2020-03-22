webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/deepaligarg/Documents/comp sci/Next.js-Hacker-Rank/components/StoryList.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return __jsx("div", {
    className: "jsx-806133138" + " " + 'story-list',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-806133138" + " " + 'story',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("h2", {
      className: "jsx-806133138" + " " + 'story-title',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: story.url,
      className: "jsx-806133138",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 37
      }
    }, story.title)), __jsx("div", {
      className: "jsx-806133138" + " " + 'story-details',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "jsx-806133138",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, story.points || 0, " points "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/story?id=".concat(story.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "jsx-806133138",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 48
      }
    }, story.comments_count || 0, " comments"))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "806133138",
    __self: _this
  }, ".story-list.jsx-806133138{padding:0 1rem;}.story.jsx-806133138{padding:1em 0;}.story-title.jsx-806133138{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5rem;}.story-title.jsx-806133138 a.jsx-806133138{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-806133138 a.jsx-806133138:hover{color:#333;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVwYWxpZ2FyZy9Eb2N1bWVudHMvY29tcCBzY2kvTmV4dC5qcy1IYWNrZXItUmFuay9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHeUIsQUFHRCxBQUdDLEFBTUosQUFJRCxXQUhXLEFBSUksR0FiM0IsQ0FIQSxBQU1rQixnQkFDUCxTQUNZLHFCQUN2QixBQUlBLFVBSUQiLCJmaWxlIjoiL1VzZXJzL2RlZXBhbGlnYXJnL0RvY3VtZW50cy9jb21wIHNjaS9OZXh0LmpzLUhhY2tlci1SYW5rL2NvbXBvbmVudHMvU3RvcnlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgU3RvcnlMaXN0ID0gKHsgc3RvcmllcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdzdG9yeS1saXN0Jz5cbiAgICB7c3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5JyBrZXk9e3N0b3J5LmlkfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nc3RvcnktdGl0bGUnPjxhIGhyZWY9e3N0b3J5LnVybH0+e3N0b3J5LnRpdGxlfTwvYT48L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RvcnktZGV0YWlscyc+XG4gICAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHMgPC9zcGFuPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gfT48YT57c3RvcnkuY29tbWVudHNfY291bnQgfHwgMH0gY29tbWVudHM8L2E+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgIC5zdG9yeS1saXN0IHtcbiAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICB9XG4gICAgICAgLnN0b3J5IHtcbiAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgIH1cbiAgICAgICAuc3RvcnktdGl0bGUge1xuICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICB9XG4gICAgICAgLnN0b3J5LXRpdGxlIGEge1xuICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgfVxuICAgICAgIC5zdG9yeS10aXRsZSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIFxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5leHBvcnQgZGVmYXVsdCBTdG9yeUxpc3Q7Il19 */\n/*@ sourceURL=/Users/deepaligarg/Documents/comp sci/Next.js-Hacker-Rank/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.b133d466c55f3f0cd9d4.hot-update.js.map
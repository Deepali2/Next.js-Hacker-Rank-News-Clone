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
    className: "jsx-2345706532" + " " + 'story-list',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, stories.map(function (story) {
    return __jsx("div", {
      key: story.id,
      className: "jsx-2345706532" + " " + 'story',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("h2", {
      className: "jsx-2345706532" + " " + 'story-title',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: story.url,
      className: "jsx-2345706532",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 37
      }
    }, story.title)), __jsx("div", {
      className: "jsx-2345706532" + " " + 'story-details',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "jsx-2345706532",
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
      className: "jsx-2345706532",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 48
      }
    }, story.comments_count || 0, " comments"))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2345706532",
    __self: _this
  }, ".story-list.jsx-2345706532{padding:0 1rem;}.story.jsx-2345706532{padding:1em 0;}.story-title.jsx-2345706532{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5rem;}.story-title.jsx-2345706532 a.jsx-2345706532{color:#333;-webkit-text-decoration:none;text-decoration:none;}.story-title.jsx-2345706532 a.jsx-2345706532:hover{color:#333;-webkit-text-decoration:underline;text-decoration:underline;}.story-details.jsx-2345706532{font-size:0.8rem;font-weight:bold;}.story-details.jsx-2345706532 span.jsx-2345706532{margin-right:1em;}.story-details.jsx-2345706532 a.jsx-2345706532{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWVwYWxpZ2FyZy9Eb2N1bWVudHMvY29tcCBzY2kvTmV4dC5qcy1IYWNrZXItUmFuay9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHeUIsQUFHRCxBQUdDLEFBTUosQUFJRCxBQUlNLEFBSUEsQUFHSCxXQWRRLEFBSUksR0FiM0IsQUF3QnNCLENBM0J0QixBQU1rQixFQWNBLEFBSW5CLGNBakJZLEdBY1osTUFid0IscUJBQ3ZCLEFBSUEsR0FlRCxPQVhBIiwiZmlsZSI6Ii9Vc2Vycy9kZWVwYWxpZ2FyZy9Eb2N1bWVudHMvY29tcCBzY2kvTmV4dC5qcy1IYWNrZXItUmFuay9jb21wb25lbnRzL1N0b3J5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFN0b3J5TGlzdCA9ICh7IHN0b3JpZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nc3RvcnktbGlzdCc+XG4gICAge3N0b3JpZXMubWFwKHN0b3J5ID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdG9yeScga2V5PXtzdG9yeS5pZH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3N0b3J5LXRpdGxlJz48YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5LWRldGFpbHMnPlxuICAgICAgICAgIDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzIDwvc3Bhbj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P2lkPSR7c3RvcnkuaWR9YH0+PGE+e3N0b3J5LmNvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKX1cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAuc3RvcnktbGlzdCB7XG4gICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgfVxuICAgICAgIC5zdG9yeSB7XG4gICAgICAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICAgICB9XG4gICAgICAgLnN0b3J5LXRpdGxlIHtcbiAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgfVxuICAgICAgIC5zdG9yeS10aXRsZSBhIHtcbiAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgIH1cbiAgICAgICAuc3RvcnktdGl0bGUgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICAgIC5zdG9yeS1kZXRhaWxzIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLnN0b3J5LWRldGFpbHMgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgfVxuICAgICAgLnN0b3J5LWRldGFpbHMgYSB7XG4gICAgICAgIGNvbG9yOiAjNjYwMGZmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDsiXX0= */\n/*@ sourceURL=/Users/deepaligarg/Documents/comp sci/Next.js-Hacker-Rank/components/StoryList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryList);

/***/ })

})
//# sourceMappingURL=index.js.dd11729e4eadf076671a.hot-update.js.map
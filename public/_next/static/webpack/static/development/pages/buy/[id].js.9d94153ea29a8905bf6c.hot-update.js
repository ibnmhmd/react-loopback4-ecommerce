webpackHotUpdate("static\\development\\pages\\buy\\[id].js",{

/***/ "./components/stickyTopBar.js":
/*!************************************!*\
  !*** ./components/stickyTopBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\stickyTopBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function TopBarComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      showLogin = _useState[0],
      setShowLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      user = _useState2[0],
      setUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var userId = localStorage.getItem("userId");

    if (userId && "" !== userId) {
      setShowLogin(false);
      setUser("Amine Mahamat");
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "__topbar_nav_main hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "__topbar_nav_main_items pull-right hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, showLogin ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/signin-up/register');
    },
    tabIndex: "1",
    eventkey: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, " Sign In / Sign Up ") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "item",
    eventkey: 1,
    tabIndex: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, " Welcome ", user, " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/info/about-us');
    },
    eventkey: 6,
    href: "#",
    tabIndex: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, " About iShop "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "item",
    eventkey: 5,
    href: "#",
    tabIndex: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " Contact Us "))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopBarComponent);

/***/ })

})
//# sourceMappingURL=[id].js.9d94153ea29a8905bf6c.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/stickyTopBar.js":
/*!************************************!*\
  !*** ./components/stickyTopBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextAPI/cartContext */ "./components/contextAPI/cartContext.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\stickyTopBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function TopBarComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      showLogin = _useState[0],
      setShowLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_2__["CartContext"]),
      getCustomerProfile = _useContext.getCustomerProfile,
      loggedInUser = _useContext.loggedInUser;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userId = localStorage.getItem("userId");
    var profile = getCustomerProfile();
    var loggedIn = loggedInUser();
    console.log("profile :: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(profile));
    console.log(loggedIn);

    if (loggedIn) {
      setShowLogin(false);
      setUser("".concat(profile.firstName));
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    className: "__topbar_nav_main hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "__topbar_nav_main_items pull-right hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    variant: "success",
    id: "dropdown-basic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Hello, Amine"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
    href: "#/action-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
    href: "#/action-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Another action"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
    href: "#/action-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Something else")))), showLogin ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signin-up/register');
    },
    tabIndex: "1",
    eventkey: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " Sign In / Sign Up ") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    className: "item welcome",
    eventkey: 1,
    tabIndex: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " Hello : ", user, " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/info/about-us');
    },
    eventkey: 6,
    href: "#",
    tabIndex: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, " About iShop "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    className: "item",
    eventkey: 5,
    href: "#",
    tabIndex: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, " Contact Us "))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopBarComponent);

/***/ })

})
//# sourceMappingURL=index.js.2a988e02b1cbd8e5473d.hot-update.js.map
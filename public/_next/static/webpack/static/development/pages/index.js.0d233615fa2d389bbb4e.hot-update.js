webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/stickyTopBar.js":
/*!************************************!*\
  !*** ./components/stickyTopBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contextAPI/cartContext */ "./components/contextAPI/cartContext.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\stickyTopBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function TopBarComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      showLogin = _useState[0],
      setShowLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      getCustomerProfile = _useContext.getCustomerProfile,
      loggedInUser = _useContext.loggedInUser;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      signOut = _useContext2.signOut;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var userId = localStorage.getItem("userId");
    var profile = getCustomerProfile();
    var loggedIn = loggedInUser();
    console.log("profile :: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(profile));
    console.log(loggedIn);

    if (loggedIn) {
      setShowLogin(false);
      setUser("".concat(profile.firstName));
    }
  }, []);

  var logOut = function logOut() {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function logOut$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(signOut());

          case 2:
            response = _context.sent;
            console.log("response :: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(response));

            if (response.success) {
              setShowLogin(true);
              setUser("");
              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: "__topbar_nav_main hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "__topbar_nav_main_items pull-right hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, showLogin ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/signin-up/register');
    },
    tabIndex: "1",
    eventkey: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " Sign In / Sign Up ") : __jsx(User, {
    fullName: user,
    click: logOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/info/about-us');
    },
    eventkey: 6,
    href: "#",
    tabIndex: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, " About iShop "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    eventkey: 5,
    href: "#",
    tabIndex: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, " Contact Us "))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopBarComponent);

function User(prop) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Toggle, {
    variant: "success",
    id: "dropdown-basic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), " Hello, ", prop.fullName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Manage My Account"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Check My Order History"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Track My Open Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: prop.click,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Sign Out"))));
}

/***/ })

})
//# sourceMappingURL=index.js.0d233615fa2d389bbb4e.hot-update.js.map
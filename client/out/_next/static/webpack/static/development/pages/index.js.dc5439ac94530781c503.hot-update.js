webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/stickyTopBar.js":
/*!************************************!*\
  !*** ./components/stickyTopBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contextAPI/cartContext */ "./components/contextAPI/cartContext.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\stickyTopBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function TopBarComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      showLogin = _useState[0],
      setShowLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      getCustomerProfile = _useContext.getCustomerProfile,
      isLoggedInUser = _useContext.isLoggedInUser;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      signOut = _useContext2.signOut;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var profile = getCustomerProfile();
    var loggedIn = isLoggedInUser();

    if (loggedIn) {
      setShowLogin(false);
      setUser("".concat(profile.firstName));
    }
  }, []);

  var checkJWT = function checkJWT() {
    console.log("checking jwt ...");
  };

  var logOut = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return signOut();

            case 2:
              response = _context.sent;

              if (response.success) {
                setShowLogin(true);
                setUser("");
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function logOut() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: "__topbar_nav_main hidden-xs hidden-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "__topbar_nav_main_items pull-right hidden-xs hidden-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    eventkey: 5,
    tabIndex: "2",
    onClick: function onClick() {
      return checkJWT();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, " Check JWT "), showLogin ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/signin-up/register');
    },
    tabIndex: "1",
    eventkey: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 45
    }
  }, " Sign In / Sign Up ") : __jsx(User, {
    fullName: user,
    click: logOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/info/about-us');
    },
    eventkey: 6,
    href: "#",
    tabIndex: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 32
    }
  }, " About iShop "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    eventkey: 5,
    href: "#",
    tabIndex: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 32
    }
  }, " Contact Us "))));
}

_s(TopBarComponent, "rxQphccmxPBJ+TyGErGlempUqHk=");

_c = TopBarComponent;
/* harmony default export */ __webpack_exports__["default"] = (TopBarComponent);

function User(prop) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Toggle, {
    variant: "success",
    id: "dropdown-basic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 14
    }
  }, __jsx("i", {
    className: "fas fa-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 16
    }
  }), " Hello, ", prop.fullName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Manage My Account"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Check My Order History"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Track My Open Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: prop.click,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Sign Out"))));
}

_c2 = User;

var _c, _c2;

$RefreshReg$(_c, "TopBarComponent");
$RefreshReg$(_c2, "User");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0aWNreVRvcEJhci5qcyJdLCJuYW1lcyI6WyJUb3BCYXJDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsInVzZXIiLCJzZXRVc2VyIiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwiZ2V0Q3VzdG9tZXJQcm9maWxlIiwiaXNMb2dnZWRJblVzZXIiLCJzaWduT3V0IiwidXNlRWZmZWN0IiwicHJvZmlsZSIsImxvZ2dlZEluIiwiZmlyc3ROYW1lIiwiY2hlY2tKV1QiLCJjb25zb2xlIiwibG9nIiwibG9nT3V0IiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiUm91dGVyIiwicHVzaCIsIlVzZXIiLCJwcm9wIiwiZnVsbE5hbWUiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7O0FBRUEsU0FBU0EsZUFBVCxHQUNBO0FBQUE7O0FBQUEsa0JBQ3FDQyxzREFBUSxDQUFDLElBQUQsQ0FEN0M7QUFBQSxNQUNTQyxTQURUO0FBQUEsTUFDcUJDLFlBRHJCOztBQUFBLG1CQUUyQkYsc0RBQVEsQ0FBQyxFQUFELENBRm5DO0FBQUEsTUFFU0csSUFGVDtBQUFBLE1BRWdCQyxPQUZoQjs7QUFBQSxvQkFHa0RDLHdEQUFVLENBQUNDLG1FQUFELENBSDVEO0FBQUEsTUFHVUMsa0JBSFYsZUFHVUEsa0JBSFY7QUFBQSxNQUcrQkMsY0FIL0IsZUFHK0JBLGNBSC9COztBQUFBLHFCQUlzQkgsd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FKaEM7QUFBQSxNQUlVRyxPQUpWLGdCQUlVQSxPQUpWOztBQU1FQyx5REFBUyxDQUFDLFlBQUs7QUFDYixRQUFNQyxPQUFPLEdBQUdKLGtCQUFrQixFQUFsQztBQUNBLFFBQU1LLFFBQVEsR0FBR0osY0FBYyxFQUEvQjs7QUFDQSxRQUFHSSxRQUFILEVBQVk7QUFDTlYsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUUsYUFBTyxXQUFJTyxPQUFPLENBQUNFLFNBQVosRUFBUDtBQUNMO0FBQ0YsR0FQUSxFQU9QLEVBUE8sQ0FBVDs7QUFRQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ2pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNMLEdBRkQ7O0FBR0EsTUFBTUMsTUFBTTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1lSLE9BQU8sRUFEbkI7O0FBQUE7QUFDTFMsc0JBREs7O0FBRVgsa0JBQUdBLFFBQVEsQ0FBQ0MsT0FBWixFQUFvQjtBQUNkakIsNEJBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsdUJBQU8sQ0FBQyxFQUFELENBQVA7QUFDQWdCLGtFQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0w7O0FBTlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkosTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQVFJLFNBQU8sbUVBQ08sTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBRyx1Q0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUUsbURBQUY7QUFBTSxhQUFTLEVBQUcsd0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHVEQUFEO0FBQVMsYUFBUyxFQUFDLE1BQW5CO0FBQTBCLFlBQVEsRUFBRSxDQUFwQztBQUF3QyxZQUFRLEVBQUMsR0FBakQ7QUFBcUQsV0FBTyxFQUFLO0FBQUEsYUFBTUgsUUFBUSxFQUFkO0FBQUEsS0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxFQUVRYixTQUFTLEdBQUcsTUFBQyx1REFBRDtBQUFTLGFBQVMsRUFBQyxNQUFuQjtBQUEwQixXQUFPLEVBQUU7QUFBQSxhQUFNbUIsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLHFCQUFaLENBQU47QUFBQSxLQUFuQztBQUE2RSxZQUFRLEVBQUMsR0FBdEY7QUFBMEYsWUFBUSxFQUFLLENBQXZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQUgsR0FDVCxNQUFDLElBQUQ7QUFBTSxZQUFRLEVBQUlsQixJQUFsQjtBQUF3QixTQUFLLEVBQUljLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIUixFQUlPLE1BQUMsdURBQUQ7QUFBUyxhQUFTLEVBQUMsTUFBbkI7QUFBMEIsV0FBTyxFQUFFO0FBQUEsYUFBTUcsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGdCQUFaLENBQU47QUFBQSxLQUFuQztBQUF3RSxZQUFRLEVBQUUsQ0FBbEY7QUFBcUYsUUFBSSxFQUFDLEdBQTFGO0FBQThGLFlBQVEsRUFBQyxHQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpQLEVBS08sTUFBQyx1REFBRDtBQUFTLGFBQVMsRUFBQyxNQUFuQjtBQUEwQixZQUFRLEVBQUUsQ0FBcEM7QUFBdUMsUUFBSSxFQUFDLEdBQTVDO0FBQWdELFlBQVEsRUFBQyxHQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxQLENBRkosQ0FEUCxDQUFQO0FBYUw7O0dBdkNRdEIsZTs7S0FBQUEsZTtBQXdDTUEsOEVBQWY7O0FBQ0EsU0FBU3VCLElBQVQsQ0FBY0MsSUFBZCxFQUFtQjtBQUNqQixTQUFPLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsd0RBQUQsQ0FBVSxNQUFWO0FBQWlCLFdBQU8sRUFBQyxTQUF6QjtBQUFtQyxNQUFFLEVBQUMsZ0JBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixjQUMwQ0EsSUFBSSxDQUFDQyxRQUQvQyxDQURELEVBSUEsTUFBQyx3REFBRCxDQUFVLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQWUsUUFBSSxFQUFDLEVBQXBCO0FBQXdCLFdBQU8sRUFBRTtBQUFBLGFBQU1KLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURBLEVBRUEsTUFBQyx3REFBRCxDQUFVLElBQVY7QUFBZSxRQUFJLEVBQUMsR0FBcEI7QUFBd0IsV0FBTyxFQUFFO0FBQUEsYUFBTUQsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkEsRUFHQSxNQUFDLHdEQUFELENBQVUsSUFBVjtBQUFlLFFBQUksRUFBQyxHQUFwQjtBQUF3QixXQUFPLEVBQUU7QUFBQSxhQUFNRCxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFIQSxFQUlBLE1BQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQWUsUUFBSSxFQUFDLEdBQXBCO0FBQXdCLFdBQU8sRUFBR0UsSUFBSSxDQUFDRSxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBLENBSkEsQ0FESCxDQUFQO0FBYUQ7O01BZFFILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRjNTQzOWFjOTQ1MzA3ODFjNTAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLCB7dXNlU3RhdGUgLCB1c2VFZmZlY3QgLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gJy4vY29udGV4dEFQSS9jYXJ0Q29udGV4dCc7XHJcbmltcG9ydCB7XHJcbiAgICAgIE5hdmJhciwgTmF2LCBcclxuICAgICAgTmF2SXRlbSwgRHJvcGRvd25cclxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gVG9wQmFyQ29tcG9uZW50ICgpIFxyXG57XHJcbiAgY29uc3QgW3Nob3dMb2dpbiAsIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdXNlciAsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgeyBnZXRDdXN0b21lclByb2ZpbGUgLCBpc0xvZ2dlZEluVXNlciB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgY29uc3QgeyBzaWduT3V0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGdldEN1c3RvbWVyUHJvZmlsZSgpO1xyXG4gICAgY29uc3QgbG9nZ2VkSW4gPSBpc0xvZ2dlZEluVXNlcigpO1xyXG4gICAgaWYobG9nZ2VkSW4pe1xyXG4gICAgICAgICAgc2V0U2hvd0xvZ2luKGZhbHNlKTtcclxuICAgICAgICAgIHNldFVzZXIoYCR7cHJvZmlsZS5maXJzdE5hbWV9YCk7XHJcbiAgICB9XHJcbiAgfSxbXSk7XHJcbiAgY29uc3QgY2hlY2tKV1QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyBqd3QgLi4uXCIpXHJcbiAgfVxyXG4gIGNvbnN0IGxvZ091dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWduT3V0KCk7XHJcbiAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICBzZXRTaG93TG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFVzZXIoXCJcIik7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWUgPSBcIl9fdG9wYmFyX25hdl9tYWluIGhpZGRlbi14cyBoaWRkZW4tc21cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBoaWRlIG9uIHhzLCBzbSBhbmQgbWQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwgTmF2IGNsYXNzTmFtZSA9IFwiX190b3BiYXJfbmF2X21haW5faXRlbXMgcHVsbC1yaWdodCBoaWRkZW4teHMgaGlkZGVuLXNtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJpdGVtXCIgZXZlbnRrZXk9ezV9ICB0YWJJbmRleD1cIjJcIiBvbkNsaWNrID0geyAoKSA9PiBjaGVja0pXVCgpfT4gQ2hlY2sgSldUIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzaG93TG9naW4gPyA8TmF2SXRlbSBjbGFzc05hbWU9XCJpdGVtXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9zaWduaW4tdXAvcmVnaXN0ZXInKX0gdGFiSW5kZXg9XCIxXCIgZXZlbnRrZXkgPSB7IDIgfT4gU2lnbiBJbiAvIFNpZ24gVXAgPC9OYXZJdGVtPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXIgZnVsbE5hbWUgPSB7dXNlcn0gY2xpY2sgPSB7bG9nT3V0fS8+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2luZm8vYWJvdXQtdXMnKX0gZXZlbnRrZXk9ezZ9IGhyZWY9XCIjXCIgdGFiSW5kZXg9XCIzXCI+IEFib3V0IGlTaG9wIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIml0ZW1cIiBldmVudGtleT17NX0gaHJlZj1cIiNcIiB0YWJJbmRleD1cIjJcIj4gQ29udGFjdCBVcyA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIDwvPjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJDb21wb25lbnQ7XHJcbmZ1bmN0aW9uIFVzZXIocHJvcCl7XHJcbiAgcmV0dXJuIDxOYXZJdGVtID5cclxuICAgICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwic3VjY2Vzc1wiIGlkPVwiZHJvcGRvd24tYmFzaWNcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIj48L2k+IEhlbGxvLCB7cHJvcC5mdWxsTmFtZX1cclxuICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiXCIgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9Pk1hbmFnZSBNeSBBY2NvdW50PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PkNoZWNrIE15IE9yZGVyIEhpc3Rvcnk8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy8nKX0+VHJhY2sgTXkgT3BlbiBPcmRlcnM8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCIgb25DbGljaz17IHByb3AuY2xpY2sgfT5TaWduIE91dDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgIDwvTmF2SXRlbT5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
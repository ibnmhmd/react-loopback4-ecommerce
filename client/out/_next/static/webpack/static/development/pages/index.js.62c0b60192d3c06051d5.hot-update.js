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
/* harmony import */ var _classes_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/services */ "./components/classes/services.js");



var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\stickyTopBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var CHECK_JWT_URL = __webpack_require__(/*! ../api/config.property */ "./api/config.property.js").CHECK_JWT;

var service = new _classes_services__WEBPACK_IMPORTED_MODULE_6__["default"]();

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

  var checkJWT = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var headers, requestBody;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('iShopUserToken')
              };
              requestBody = {
                items: [{
                  name: 'Test',
                  price: 1234
                }],
                status: 'Submitted'
              };
              console.log("checking jwt ...");
              _context.next = 5;
              return service.post({
                url: CHECK_JWT_URL,
                requestBody: requestBody,
                headers: headers
              }).then(function (response) {
                console.log("success :: ");
                console.log(JSON.stringify(response));
              })["catch"](function (error) {
                console.error(error);
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkJWT() {
      return _ref.apply(this, arguments);
    };
  }();

  var logOut = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return signOut();

            case 2:
              response = _context2.sent;

              if (response.success) {
                setShowLogin(true);
                setUser("");
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function logOut() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: "__topbar_nav_main hidden-xs hidden-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "__topbar_nav_main_items pull-right hidden-xs hidden-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 45
    }
  }, " Sign In / Sign Up ") : __jsx(User, {
    fullName: user,
    click: logOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
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
      lineNumber: 60,
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
      lineNumber: 68,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Toggle, {
    variant: "success",
    id: "dropdown-basic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 14
    }
  }, __jsx("i", {
    className: "fas fa-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 16
    }
  }), " Hello, ", prop.fullName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
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
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Track My Open Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: prop.click,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0aWNreVRvcEJhci5qcyJdLCJuYW1lcyI6WyJDSEVDS19KV1RfVVJMIiwicmVxdWlyZSIsIkNIRUNLX0pXVCIsInNlcnZpY2UiLCJTZXJ2aWNlIiwiVG9wQmFyQ29tcG9uZW50IiwidXNlU3RhdGUiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsImdldEN1c3RvbWVyUHJvZmlsZSIsImlzTG9nZ2VkSW5Vc2VyIiwic2lnbk91dCIsInVzZUVmZmVjdCIsInByb2ZpbGUiLCJsb2dnZWRJbiIsImZpcnN0TmFtZSIsImNoZWNrSldUIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXF1ZXN0Qm9keSIsIml0ZW1zIiwibmFtZSIsInByaWNlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJsb2dPdXQiLCJzdWNjZXNzIiwiUm91dGVyIiwicHVzaCIsIlVzZXIiLCJwcm9wIiwiZnVsbE5hbWUiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQVAsQ0FBa0NDLFNBQXhEOztBQUVBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyx5REFBSixFQUFoQjs7QUFDQSxTQUFTQyxlQUFULEdBQ0E7QUFBQTs7QUFBQSxrQkFDcUNDLHNEQUFRLENBQUMsSUFBRCxDQUQ3QztBQUFBLE1BQ1NDLFNBRFQ7QUFBQSxNQUNxQkMsWUFEckI7O0FBQUEsbUJBRTJCRixzREFBUSxDQUFDLEVBQUQsQ0FGbkM7QUFBQSxNQUVTRyxJQUZUO0FBQUEsTUFFZ0JDLE9BRmhCOztBQUFBLG9C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LEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsY0FDMENBLElBQUksQ0FBQ0MsUUFEL0MsQ0FERCxFQUlBLE1BQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHdEQUFELENBQVUsSUFBVjtBQUFlLFFBQUksRUFBQyxFQUFwQjtBQUF3QixXQUFPLEVBQUU7QUFBQSxhQUFNSixrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUEsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQSxFQUVBLE1BQUMsd0RBQUQsQ0FBVSxJQUFWO0FBQWUsUUFBSSxFQUFDLEdBQXBCO0FBQXdCLFdBQU8sRUFBRTtBQUFBLGFBQU1ELGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZBLEVBR0EsTUFBQyx3REFBRCxDQUFVLElBQVY7QUFBZSxRQUFJLEVBQUMsR0FBcEI7QUFBd0IsV0FBTyxFQUFFO0FBQUEsYUFBTUQsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEEsRUFJQSxNQUFDLHdEQUFELENBQVUsSUFBVjtBQUFlLFFBQUksRUFBQyxHQUFwQjtBQUF3QixXQUFPLEVBQUdFLElBQUksQ0FBQ0UsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKQSxDQUpBLENBREgsQ0FBUDtBQWFEOztNQWRRSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42MmMwYjYwMTkyZDNjMDYwNTFkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlICwgdXNlRWZmZWN0ICwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuL2NvbnRleHRBUEkvY2FydENvbnRleHQnO1xyXG5pbXBvcnQge1xyXG4gICAgICBOYXZiYXIsIE5hdiwgXHJcbiAgICAgIE5hdkl0ZW0sIERyb3Bkb3duXHJcbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vY2xhc3Nlcy9zZXJ2aWNlcyc7XHJcbmNvbnN0IENIRUNLX0pXVF9VUkwgPSByZXF1aXJlKCcuLi9hcGkvY29uZmlnLnByb3BlcnR5JykuQ0hFQ0tfSldUO1xyXG5cclxuY29uc3Qgc2VydmljZSA9IG5ldyBTZXJ2aWNlKCk7XHJcbmZ1bmN0aW9uIFRvcEJhckNvbXBvbmVudCAoKSBcclxue1xyXG4gIGNvbnN0IFtzaG93TG9naW4gLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXIgLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHsgZ2V0Q3VzdG9tZXJQcm9maWxlICwgaXNMb2dnZWRJblVzZXIgfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGNvbnN0IHsgc2lnbk91dCB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBnZXRDdXN0b21lclByb2ZpbGUoKTtcclxuICAgIGNvbnN0IGxvZ2dlZEluID0gaXNMb2dnZWRJblVzZXIoKTtcclxuICAgIGlmKGxvZ2dlZEluKXtcclxuICAgICAgICAgIHNldFNob3dMb2dpbihmYWxzZSk7XHJcbiAgICAgICAgICBzZXRVc2VyKGAke3Byb2ZpbGUuZmlyc3ROYW1lfWApO1xyXG4gICAgfVxyXG4gIH0sW10pO1xyXG4gIGNvbnN0IGNoZWNrSldUID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbicgOiAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaVNob3BVc2VyVG9rZW4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgXHJcbiAgICAgICAgICAgIGl0ZW1zIDogW3sgbmFtZSA6ICdUZXN0JyAsIHByaWNlIDogMTIzNCB9XSxcclxuICAgICAgICAgICAgc3RhdHVzIDogJ1N1Ym1pdHRlZCdcclxuICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgand0IC4uLlwiKTtcclxuICAgICAgICBhd2FpdCBzZXJ2aWNlLnBvc3Qoe3VybCA6IENIRUNLX0pXVF9VUkwgLCByZXF1ZXN0Qm9keSwgaGVhZGVycyB9KS50aGVuKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgOjogXCIpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICB9KS5jYXRjaCggKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTsgXHJcbiAgfVxyXG4gIGNvbnN0IGxvZ091dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWduT3V0KCk7XHJcbiAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICBzZXRTaG93TG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFVzZXIoXCJcIik7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWUgPSBcIl9fdG9wYmFyX25hdl9tYWluIGhpZGRlbi14cyBoaWRkZW4tc21cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBoaWRlIG9uIHhzLCBzbSBhbmQgbWQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwgTmF2IGNsYXNzTmFtZSA9IFwiX190b3BiYXJfbmF2X21haW5faXRlbXMgcHVsbC1yaWdodCBoaWRkZW4teHMgaGlkZGVuLXNtXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJpdGVtXCIgZXZlbnRrZXk9ezV9ICB0YWJJbmRleD1cIjJcIiBvbkNsaWNrID0geyAoKSA9PiBjaGVja0pXVCgpfT4gQ2hlY2sgSldUIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzaG93TG9naW4gPyA8TmF2SXRlbSBjbGFzc05hbWU9XCJpdGVtXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9zaWduaW4tdXAvcmVnaXN0ZXInKX0gdGFiSW5kZXg9XCIxXCIgZXZlbnRrZXkgPSB7IDIgfT4gU2lnbiBJbiAvIFNpZ24gVXAgPC9OYXZJdGVtPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXIgZnVsbE5hbWUgPSB7dXNlcn0gY2xpY2sgPSB7bG9nT3V0fS8+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2luZm8vYWJvdXQtdXMnKX0gZXZlbnRrZXk9ezZ9IGhyZWY9XCIjXCIgdGFiSW5kZXg9XCIzXCI+IEFib3V0IGlTaG9wIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIml0ZW1cIiBldmVudGtleT17NX0gaHJlZj1cIiNcIiB0YWJJbmRleD1cIjJcIj4gQ29udGFjdCBVcyA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIDwvPjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJDb21wb25lbnQ7XHJcbmZ1bmN0aW9uIFVzZXIocHJvcCl7XHJcbiAgcmV0dXJuIDxOYXZJdGVtID5cclxuICAgICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwic3VjY2Vzc1wiIGlkPVwiZHJvcGRvd24tYmFzaWNcIj5cclxuICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIj48L2k+IEhlbGxvLCB7cHJvcC5mdWxsTmFtZX1cclxuICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiXCIgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9Pk1hbmFnZSBNeSBBY2NvdW50PC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PkNoZWNrIE15IE9yZGVyIEhpc3Rvcnk8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy8nKX0+VHJhY2sgTXkgT3BlbiBPcmRlcnM8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjXCIgb25DbGljaz17IHByb3AuY2xpY2sgfT5TaWduIE91dDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgIDwvTmF2SXRlbT5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
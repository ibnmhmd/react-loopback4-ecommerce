webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/contextAPI/cartContext.js":
/*!**********************************************!*\
  !*** ./components/contextAPI/cartContext.js ***!
  \**********************************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContext", function() { return CartContext; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\contextAPI\\cartContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var CartContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var CARTMANAGER = __webpack_require__(/*! ../../utils/cartManager */ "./utils/cartManager.js");

var USER = __webpack_require__(/*! ../../utils/customerManager */ "./utils/customerManager.js");

var SIZE = CARTMANAGER.getCartSize();

function CartContextProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(SIZE),
      cartSize = _useState[0],
      setSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(SIZE),
      wishlistSize = _useState2[0],
      setWishlistSize = _useState2[1];

  var addToCart = function addToCart(item, store) {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addToCart$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
              setTimeout(function () {
                switch (store) {
                  case "cart":
                    if (CARTMANAGER.addToCart(item)) {
                      resolve({
                        success: true,
                        cartSize: setSize(CARTMANAGER.getCartSize()),
                        message: "added to cart"
                      });
                    } else {
                      reject({
                        success: false,
                        cartSize: setSize(CARTMANAGER.getCartSize()),
                        message: "failed to add to cart"
                      });
                    }

                    break;

                  case "wishlist":
                    if (CARTMANAGER.addToWishlist(item)) {
                      resolve({
                        success: true,
                        wishlistSize: setWishlistSize(CARTMANAGER.getWishlistSize()),
                        message: "added to wishlist"
                      });
                    } else {
                      reject({
                        success: false,
                        wishlistSize: setWishlistSize(CARTMANAGER.getWishlistSize()),
                        message: "failed to add to wishlist"
                      });
                    }

                    break;

                  case "saveForLater":
                    if (CARTMANAGER.addToSavedForLater(item)) {
                      resolve({
                        success: true,
                        cartSize: setSize(CARTMANAGER.getSavedForLaterSize()),
                        message: "added to saved for later"
                      });
                    } else {
                      reject({
                        success: false,
                        cartSize: setSize(CARTMANAGER.getSavedForLaterSize()),
                        message: "failed to save for later"
                      });
                    }

                    break;

                  case "checkout":
                    if (CARTMANAGER.addToCheckout(item)) {
                      resolve({
                        success: true,
                        message: "Items have been successfully added to checkout ."
                      });
                    } else {
                      reject({
                        success: false,
                        message: "Failed to add to checkout ."
                      });
                    }

                    break;

                  default:
                    return getCart();
                }
              }, 2000);
            });
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(promise);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var addToSavedForLater = function addToSavedForLater(item) {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addToSavedForLater$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(addToCart(item, "saveForLater"));

          case 2:
            promise = _context2.sent;
            return _context2.abrupt("return", promise);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  var addToWishlist = function addToWishlist(item) {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addToWishlist$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(addToCart(item, "wishlist"));

          case 2:
            promise = _context3.sent;
            return _context3.abrupt("return", promise);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  var getCart = function getCart() {
    return CARTMANAGER.getCart();
  };

  var getSavedForLater = function getSavedForLater() {
    return CARTMANAGER.getSavedForLater();
  };

  var clearBasket = function clearBasket() {
    return CARTMANAGER.clearBasket();
  };

  var getCheckout = function getCheckout() {
    return CARTMANAGER.getCheckout();
  };

  var confirmBakset = function confirmBakset(basket) {
    CARTMANAGER.setBasketConfirmation(basket);
  };

  var getBasketConfirmation = function getBasketConfirmation() {
    return CARTMANAGER.getBasketConfirmation();
  };

  var getCartSize = function getCartSize() {
    return CARTMANAGER.getCartSize();
  };

  var getSavedForLaterSize = function getSavedForLaterSize() {
    return CARTMANAGER.getSavedForLaterSize();
  };

  var getWishlist = function getWishlist() {
    return CARTMANAGER.getWishlist();
  };

  var getWishlistSize = function getWishlistSize() {
    return CARTMANAGER.getWishlistSize();
  };

  var addToCheckout = function addToCheckout(items) {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addToCheckout$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(addToCart(items, "checkout"));

          case 2:
            promise = _context4.sent;
            return _context4.abrupt("return", promise);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  };

  var getCustomerProfile = function getCustomerProfile() {
    return USER.getCustomerProfile();
  };

  var loggedInUser = function loggedInUser() {
    return USER.isUserLoggedIn();
  };

  var deleteFromCart = function deleteFromCart(sku, store) {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteFromCart$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
              setTimeout(function () {
                switch (store) {
                  case "saveForLater":
                    if (CARTMANAGER.deleteFromSavedForLater(sku)) {
                      resolve({
                        success: true,
                        cartSize: setSize(CARTMANAGER.getSavedForLaterSize()),
                        message: "Item has been deleted."
                      });
                    } else {
                      reject({
                        success: false,
                        cartSize: setSize(CARTMANAGER.getSavedForLaterSize()),
                        message: "Error deleting item."
                      });
                    }

                    break;

                  case "cart":
                    if (CARTMANAGER.deleteFromCart(sku)) {
                      resolve({
                        success: true,
                        cartSize: setSize(CARTMANAGER.getCartSize()),
                        message: "Item has been deleted."
                      });
                    } else {
                      reject({
                        success: false,
                        cartSize: setSize(CARTMANAGER.getCartSize()),
                        message: "Error deleting item."
                      });
                    }

                    break;

                  case "wishlist":
                    if (CARTMANAGER.deleteFromWishlist(sku)) {
                      resolve({
                        success: true,
                        cartSize: setSize(CARTMANAGER.getWishlistSize()),
                        message: "Item has been deleted."
                      });
                    } else {
                      reject({
                        success: false,
                        cartSize: setSize(CARTMANAGER.getWishlistSize()),
                        message: "Error deleting item."
                      });
                    }

                    break;

                  default:
                    return null;
                }
              }, 2000);
            });
            _context5.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(promise);

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  };

  var deleteFromSavedForLater = function deleteFromSavedForLater(sku) {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteFromSavedForLater$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deleteFromCart(sku, "saveForLater"));

          case 2:
            promise = _context6.sent;
            return _context6.abrupt("return", promise);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  };

  var deleteFromWishlist = function deleteFromWishlist(sku) {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteFromWishlist$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deleteFromCart(sku, "wishlist"));

          case 2:
            promise = _context7.sent;
            return _context7.abrupt("return", promise);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    });
  };

  var signOut = function signOut() {
    var promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function signOut$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
              setTimeout(function () {
                if (USER.signOut()) {
                  resolve({
                    success: true,
                    message: "Successfully signed out"
                  });
                } else {
                  reject({
                    success: false
                  });
                }
              }, 1000);
            }));

          case 2:
            promise = _context8.sent;
            _context8.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(promise);

          case 5:
            return _context8.abrupt("return", _context8.sent);

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    });
  };

  return __jsx(CartContext.Provider, {
    value: {
      cartSize: cartSize,
      wishlistSize: wishlistSize,
      addToCart: addToCart,
      addToWishlist: addToWishlist,
      getCart: getCart,
      clearBasket: clearBasket,
      addToCheckout: addToCheckout,
      getCheckout: getCheckout,
      confirmBakset: confirmBakset,
      getBasketConfirmation: getBasketConfirmation,
      getCartSize: getCartSize,
      deleteFromCart: deleteFromCart,
      addToSavedForLater: addToSavedForLater,
      deleteFromSavedForLater: deleteFromSavedForLater,
      getSavedForLaterSize: getSavedForLaterSize,
      getSavedForLater: getSavedForLater,
      deleteFromWishlist: deleteFromWishlist,
      getWishlist: getWishlist,
      getWishlistSize: getWishlistSize,
      getCustomerProfile: getCustomerProfile,
      loggedInUser: loggedInUser,
      signOut: signOut
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (CartContextProvider);

/***/ }),

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    className: "__topbar_nav_main hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "__topbar_nav_main_items pull-right hidden-xs hidden-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
      lineNumber: 31
    },
    __self: this
  }, " Sign In / Sign Up ") : __jsx(User, {
    fullName: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
      lineNumber: 33
    },
    __self: this
  }, " About iShop "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "item",
    eventkey: 5,
    href: "#",
    tabIndex: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, " Contact Us "))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopBarComponent);

function User(prop) {
  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contextAPI_cartContext__WEBPACK_IMPORTED_MODULE_3__["CartContext"]),
      signOut = _useContext2.signOut;

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

            if (response.success) {
              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Toggle, {
    variant: "success",
    id: "dropdown-basic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), " Hello, ", prop.fullName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Manage My Account"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Check My Order History"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Track My Open Orders"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
    href: "#",
    onClick: function onClick() {
      return logOut();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Sign Out"))));
}

/***/ }),

/***/ "./utils/customerManager.js":
/*!**********************************!*\
  !*** ./utils/customerManager.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var getCustomerProfile = function getCustomerProfile() {
  var profile = localStorage.getItem("customerProfile");

  if (profile) {
    return JSON.parse(profile);
  } else {
    return {};
  }
};

var isUserLoggedIn = function isUserLoggedIn() {
  var profile = getCustomerProfile();

  if (profile && profile.status && "loggedIn" == profile.status) {
    return true;
  } else {
    return false;
  }
};

var signOut = function signOut() {
  clearItem("customerProfile");
  return true;
};

var clearItem = function clearItem(item) {
  localStorage.removeItem(item);
};

module.exports = {
  getCustomerProfile: getCustomerProfile,
  isUserLoggedIn: isUserLoggedIn,
  signOut: signOut
};

/***/ })

})
//# sourceMappingURL=index.js.f0a74c682139382cd92a.hot-update.js.map
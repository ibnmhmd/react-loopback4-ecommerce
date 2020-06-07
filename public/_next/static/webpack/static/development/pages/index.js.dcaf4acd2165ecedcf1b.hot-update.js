webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/cartManager.js":
/*!******************************!*\
  !*** ./utils/cartManager.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var getCartSize = function getCartSize() {
  var size = 0;

  if (true) {
    console.log('we are running on the client');

    if (localStorage.getItem("iShopCart")) {
      try {
        size = JSON.parse(localStorage.getItem("iShopCart")).length;
      } catch (error) {
        console.error("Error getting cart :: " + error);
      }
    } else {
      initCart("getCartSize");
    }
  } else {}

  return size;
};

var getSavedForLaterSize = function getSavedForLaterSize() {
  var size = 0;

  if (true) {
    console.log('we are running on the client');

    if (localStorage.getItem("iShopSavedForLater")) {
      try {
        size = JSON.parse(localStorage.getItem("iShopSavedForLater")).length;
      } catch (error) {
        console.error("Error getting cart :: " + error);
      }
    } else {
      initCart("getCartSize");
    }
  } else {}

  return size;
};

var addToCart = function addToCart(item) {
  var cartAdded = false;

  try {
    var cartData = getCart();
    cartData.push(item);
    resetItemByKey("iShopCart");
    localStorage.setItem("iShopCart", JSON.stringify(cartData));
    cartAdded = true;
  } catch (error) {
    console.error("Error adding to cart :: " + error);
  }

  return cartAdded;
};

var resetItemByKey = function resetItemByKey(key) {
  if (localStorage.getItem(key)) {
    localStorage.setItem(key, "");
  }
};

var deleteFromCart = function deleteFromCart(sku) {
  var cart = getCart(),
      deleted = false;

  if (cart.length > 0) {
    cart = cart.filter(function (_) {
      return _.sku !== sku;
    });
    resetItemByKey("iShopCart");
    localStorage.setItem("iShopCart", JSON.stringify(cart));
    deleted = true;
  }

  return deleted;
};

var deleteFromWishlist = function deleteFromWishlist(sku) {
  var cart = getWishlist(),
      deleted = false;

  if (cart.length > 0) {
    cart = cart.filter(function (_) {
      return _.sku !== sku;
    });
    resetItemByKey("iShopWishlist");
    localStorage.setItem("iShopWishlist", JSON.stringify(cart));
    deleted = true;
  }

  return deleted;
};

var getCart = function getCart() {
  if (getCartSize() !== 0) {
    return JSON.parse(localStorage.getItem("iShopCart"));
  } else {
    return new Array();
  }
};

var getWishlist = function getWishlist() {
  if (getWishlistSize() !== 0) {
    return JSON.parse(localStorage.getItem("iShopWishlist"));
  } else {
    return new Array();
  }
};

var getWishlistSize = function getWishlistSize() {
  var size = 0;

  if (true) {
    if (localStorage.getItem("iShopWishlist")) {
      try {
        size = JSON.parse(localStorage.getItem("iShopWishlist")).length;
      } catch (error) {
        console.error("Error getting cart :: " + error);
      }
    } else {
      initCart("iShopWishlist");
    }
  }

  return size;
};

var getSavedForLater = function getSavedForLater() {
  if (getSavedForLaterSize() !== 0) {
    return JSON.parse(localStorage.getItem("iShopSavedForLater"));
  } else {
    return new Array();
  }
};

var clearBasket = function clearBasket() {
  localStorage.removeItem("iShopCart");
  localStorage.removeItem("iShopSavedForLater");
  localStorage.removeItem("iShopSavedForLater");
};

var initCart = function initCart(caller) {
  localStorage.setItem("iShopSavedForLater", JSON.stringify([]));
  localStorage.setItem("iShopCart", JSON.stringify([]));
  localStorage.setItem("iShopWishlist", JSON.stringify([]));
  localStorage.setItem("iShopCartAudit", JSON.stringify({
    caller: caller,
    reason: "Empty cart initialization ."
  }));
};

var addToCheckout = function addToCheckout(items) {
  localStorage.setItem("iShopCheckoutCart", JSON.stringify([]));
  localStorage.setItem("iShopCheckoutCart", JSON.stringify(items));
  return true;
};

var getCheckout = function getCheckout() {
  return JSON.parse(localStorage.getItem("iShopCheckoutCart"));
};

var setBasketConfirmation = function setBasketConfirmation(item) {
  var basketConfirmation = localStorage.getItem("iShopBasketConfirmation");

  if (null !== basketConfirmation) {
    basketConfirmation = JSON.parse(basketConfirmation);
  } else {
    basketConfirmation = {};
  }

  basketConfirmation[item.key] = item.confirmed;
  localStorage.setItem("iShopBasketConfirmation", JSON.stringify(basketConfirmation));
};

var getBasketConfirmation = function getBasketConfirmation() {
  return JSON.parse(localStorage.getItem("iShopBasketConfirmation"));
};

var addToSavedForLater = function addToSavedForLater(item) {
  var cartAdded = false;

  try {
    var cartData = getSavedForLater();
    cartData.push(item);
    resetItemByKey("iShopSavedForLater");
    localStorage.setItem("iShopSavedForLater", JSON.stringify(cartData));
    cartAdded = true;
  } catch (error) {
    console.error("Error adding to saved for later :: " + error);
  }

  return cartAdded;
};

var addToWishlist = function addToWishlist(item) {
  var cartAdded = false;

  try {
    var cartData = getWishlist();
    cartData.push(item);
    resetItemByKey("iShopWishlist");
    localStorage.setItem("iShopWishlist", JSON.stringify(cartData));
    cartAdded = true;
  } catch (error) {
    console.error("Error adding to iShopWishlist :: " + error);
  }

  return cartAdded;
};

var deleteFromSavedForLater = function deleteFromSavedForLater(sku) {
  var cart = getSavedForLater(),
      deleted = false;

  if (cart.length > 0) {
    cart = cart.filter(function (_) {
      return _.sku !== sku;
    });
    resetItemByKey("iShopSavedForLater");
    localStorage.setItem("iShopSavedForLater", JSON.stringify(cart));
    deleted = true;
  }

  return deleted;
};

module.exports = {
  getCartSize: getCartSize,
  addToCart: addToCart,
  getCart: getCart,
  clearBasket: clearBasket,
  addToCheckout: addToCheckout,
  getCheckout: getCheckout,
  setBasketConfirmation: setBasketConfirmation,
  getBasketConfirmation: getBasketConfirmation,
  deleteFromCart: deleteFromCart,
  addToSavedForLater: addToSavedForLater,
  deleteFromSavedForLater: deleteFromSavedForLater,
  getSavedForLaterSize: getSavedForLaterSize,
  getSavedForLater: getSavedForLater,
  addToWishlist: addToWishlist,
  getWishlist: getWishlist,
  deleteFromWishlist: deleteFromWishlist,
  getWishlistSize: getWishlistSize
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jYXJ0TWFuYWdlci5qcyJdLCJuYW1lcyI6WyJnZXRDYXJ0U2l6ZSIsInNpemUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsImVycm9yIiwiaW5pdENhcnQiLCJnZXRTYXZlZEZvckxhdGVyU2l6ZSIsImFkZFRvQ2FydCIsIml0ZW0iLCJjYXJ0QWRkZWQiLCJjYXJ0RGF0YSIsImdldENhcnQiLCJwdXNoIiwicmVzZXRJdGVtQnlLZXkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwia2V5IiwiZGVsZXRlRnJvbUNhcnQiLCJza3UiLCJjYXJ0IiwiZGVsZXRlZCIsImZpbHRlciIsIl8iLCJkZWxldGVGcm9tV2lzaGxpc3QiLCJnZXRXaXNobGlzdCIsIkFycmF5IiwiZ2V0V2lzaGxpc3RTaXplIiwiZ2V0U2F2ZWRGb3JMYXRlciIsImNsZWFyQmFza2V0IiwicmVtb3ZlSXRlbSIsImNhbGxlciIsInJlYXNvbiIsImFkZFRvQ2hlY2tvdXQiLCJpdGVtcyIsImdldENoZWNrb3V0Iiwic2V0QmFza2V0Q29uZmlybWF0aW9uIiwiYmFza2V0Q29uZmlybWF0aW9uIiwiY29uZmlybWVkIiwiZ2V0QmFza2V0Q29uZmlybWF0aW9uIiwiYWRkVG9TYXZlZEZvckxhdGVyIiwiYWRkVG9XaXNobGlzdCIsImRlbGV0ZUZyb21TYXZlZEZvckxhdGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0RBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsTUFBSUMsSUFBSSxHQUFHLENBQVg7O0FBQ0EsWUFBbUM7QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaOztBQUNBLFFBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFILEVBQXFDO0FBQ2pDLFVBQUk7QUFDQ0osWUFBSSxHQUFHSyxJQUFJLENB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QUFPLEdBQUcsS0FBMUM7O0FBQ0EsTUFBR0QsSUFBSSxDQUFDaEIsTUFBTCxHQUFjLENBQWpCLEVBQW1CO0FBQ2ZnQixRQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQUNDLENBQUQsRUFBTztBQUFDLGFBQU9BLENBQUMsQ0FBQ0osR0FBRixLQUFVQSxHQUFqQjtBQUFxQixLQUF6QyxDQUFQO0FBQ0FMLGtCQUFjLENBQUMsb0JBQUQsQ0FBZDtBQUNBZCxnQkFBWSxDQUFDZSxPQUFiLENBQXFCLG9CQUFyQixFQUEwQ2IsSUFBSSxDQUFDYyxTQUFMLENBQWVJLElBQWYsQ0FBMUM7QUFDQUMsV0FBTyxHQUFHLElBQVY7QUFDSDs7QUFDRCxTQUFPQSxPQUFQO0FBQ0gsQ0FURDs7QUFVQXNCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmaEQsYUFBVyxFQUFYQSxXQURlO0FBRWZZLFdBQVMsRUFBVEEsU0FGZTtBQUdmSSxTQUFPLEVBQVBBLE9BSGU7QUFJZmlCLGFBQVcsRUFBWEEsV0FKZTtBQUtmSSxlQUFhLEVBQWJBLGFBTGU7QUFNZkUsYUFBVyxFQUFYQSxXQU5lO0FBT2ZDLHVCQUFxQixFQUFyQkEscUJBUGU7QUFRZkcsdUJBQXFCLEVBQXJCQSxxQkFSZTtBQVNmckIsZ0JBQWMsRUFBZEEsY0FUZTtBQVVmc0Isb0JBQWtCLEVBQWxCQSxrQkFWZTtBQVdmRSx5QkFBdUIsRUFBdkJBLHVCQVhlO0FBWWZuQyxzQkFBb0IsRUFBcEJBLG9CQVplO0FBYWZxQixrQkFBZ0IsRUFBaEJBLGdCQWJlO0FBY2ZhLGVBQWEsRUFBYkEsYUFkZTtBQWVmaEIsYUFBVyxFQUFYQSxXQWZlO0FBZ0JmRCxvQkFBa0IsRUFBbEJBLGtCQWhCZTtBQWlCZkcsaUJBQWUsRUFBZkE7QUFqQmUsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRjYWY0YWNkMjE2NWVjZWRjZjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRDYXJ0U2l6ZSA9ICgpID0+IHtcclxuICAgIGxldCBzaXplID0gMCA7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2UgYXJlIHJ1bm5pbmcgb24gdGhlIGNsaWVudCcpO1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BDYXJ0XCIpKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICBzaXplID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wQ2FydFwiKSkubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgY2FydCA6OiBcIisgZXJyb3IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgaW5pdENhcnQoXCJnZXRDYXJ0U2l6ZVwiKTtcclxuICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dlIGFyZSBydW5uaW5nIG9uIHRoZSBzZXJ2ZXInKTtcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHNpemU7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNhdmVkRm9yTGF0ZXJTaXplID0gKCkgPT4ge1xyXG4gICAgbGV0IHNpemUgPSAwIDtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZSBhcmUgcnVubmluZyBvbiB0aGUgY2xpZW50Jyk7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcFNhdmVkRm9yTGF0ZXJcIikpe1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgIHNpemUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BTYXZlZEZvckxhdGVyXCIpKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBjYXJ0IDo6IFwiKyBlcnJvciApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICBpbml0Q2FydChcImdldENhcnRTaXplXCIpO1xyXG4gICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2UgYXJlIHJ1bm5pbmcgb24gdGhlIHNlcnZlcicpO1xyXG4gICAgfSAgXHJcbiAgICByZXR1cm4gc2l6ZTtcclxufVxyXG5cclxuY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBjYXJ0QWRkZWQgPSBmYWxzZSA7XHJcbiAgICB0cnkgeyAgIFxyXG4gICAgICAgICAgICAgIGxldCBjYXJ0RGF0YSA9IGdldENhcnQoKTtcclxuICAgICAgICAgICAgICBjYXJ0RGF0YS5wdXNoKGl0ZW0pOyBcclxuICAgICAgICAgICAgICByZXNldEl0ZW1CeUtleShcImlTaG9wQ2FydFwiKTsgICAgXHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcENhcnRcIixKU09OLnN0cmluZ2lmeShjYXJ0RGF0YSkpO1xyXG4gICAgICAgICAgICAgIGNhcnRBZGRlZCA9IHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyB0byBjYXJ0IDo6IFwiKyBlcnJvciApO1xyXG4gICAgfVxyXG4gIHJldHVybiBjYXJ0QWRkZWQ7XHJcbn1cclxuXHJcbmNvbnN0IHJlc2V0SXRlbUJ5S2V5ID0gKGtleSkgPT4ge1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5ICwgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZGVsZXRlRnJvbUNhcnQgPSAoc2t1KSA9PiB7XHJcbiAgICBsZXQgY2FydCA9IGdldENhcnQoKSAsIGRlbGV0ZWQgPSBmYWxzZTtcclxuICAgIGlmKGNhcnQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgY2FydCA9IGNhcnQuZmlsdGVyKChfKSA9PiB7cmV0dXJuIF8uc2t1ICE9PSBza3V9KTtcclxuICAgICAgICByZXNldEl0ZW1CeUtleShcImlTaG9wQ2FydFwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wQ2FydFwiLEpTT04uc3RyaW5naWZ5KGNhcnQpKTsgICBcclxuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWxldGVkO1xyXG59XHJcbmNvbnN0IGRlbGV0ZUZyb21XaXNobGlzdCA9IChza3UpID0+IHtcclxuICAgIGxldCBjYXJ0ID0gZ2V0V2lzaGxpc3QoKSAsIGRlbGV0ZWQgPSBmYWxzZTtcclxuICAgIGlmKGNhcnQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgY2FydCA9IGNhcnQuZmlsdGVyKChfKSA9PiB7cmV0dXJuIF8uc2t1ICE9PSBza3V9KTtcclxuICAgICAgICByZXNldEl0ZW1CeUtleShcImlTaG9wV2lzaGxpc3RcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcFdpc2hsaXN0XCIsSlNPTi5zdHJpbmdpZnkoY2FydCkpOyAgIFxyXG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XHJcbn1cclxuY29uc3QgZ2V0Q2FydCA9ICgpID0+IHtcclxuICAgIGlmKGdldENhcnRTaXplKCkgIT09IDAgKXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wQ2FydFwiKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZ2V0V2lzaGxpc3QgPSAoKSA9PiB7XHJcbiAgICBpZihnZXRXaXNobGlzdFNpemUoKSAhPT0gMCApe1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BXaXNobGlzdFwiKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZ2V0V2lzaGxpc3RTaXplID0gKCkgPT4ge1xyXG4gICAgbGV0IHNpemUgPSAwIDtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BXaXNobGlzdFwiKSl7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgc2l6ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcFdpc2hsaXN0XCIpKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBjYXJ0IDo6IFwiKyBlcnJvciApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICBpbml0Q2FydChcImlTaG9wV2lzaGxpc3RcIik7XHJcbiAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIHJldHVybiBzaXplO1xyXG59XHJcbmNvbnN0IGdldFNhdmVkRm9yTGF0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZihnZXRTYXZlZEZvckxhdGVyU2l6ZSgpICE9PSAwICl7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcFNhdmVkRm9yTGF0ZXJcIikpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNsZWFyQmFza2V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJpU2hvcENhcnRcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImlTaG9wU2F2ZWRGb3JMYXRlclwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaVNob3BTYXZlZEZvckxhdGVyXCIpO1xyXG59XHJcbmNvbnN0IGluaXRDYXJ0ID0gKGNhbGxlcikgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcFNhdmVkRm9yTGF0ZXJcIiAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wQ2FydFwiICwgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BXaXNobGlzdFwiICwgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BDYXJ0QXVkaXRcIiAsIEpTT04uc3RyaW5naWZ5KHtjYWxsZXIgICwgcmVhc29uIDogXCJFbXB0eSBjYXJ0IGluaXRpYWxpemF0aW9uIC5cIn0pKTtcclxufVxyXG5jb25zdCBhZGRUb0NoZWNrb3V0ID0gKGl0ZW1zKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wQ2hlY2tvdXRDYXJ0XCIgLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcENoZWNrb3V0Q2FydFwiICwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5jb25zdCBnZXRDaGVja291dCA9ICgpID0+IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wQ2hlY2tvdXRDYXJ0XCIpKTtcclxufVxyXG5jb25zdCBzZXRCYXNrZXRDb25maXJtYXRpb24gPSAoaXRlbSkgPT4ge1xyXG4gIGxldCBiYXNrZXRDb25maXJtYXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wQmFza2V0Q29uZmlybWF0aW9uXCIpO1xyXG4gIGlmKG51bGwgIT09IGJhc2tldENvbmZpcm1hdGlvbiApIHtcclxuICAgIGJhc2tldENvbmZpcm1hdGlvbiA9IEpTT04ucGFyc2UoYmFza2V0Q29uZmlybWF0aW9uKTtcclxuICB9ZWxzZXtcclxuICAgIGJhc2tldENvbmZpcm1hdGlvbiA9IHt9O1xyXG4gIH1cclxuICBiYXNrZXRDb25maXJtYXRpb25baXRlbS5rZXldID0gaXRlbS5jb25maXJtZWQ7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcEJhc2tldENvbmZpcm1hdGlvblwiLCBKU09OLnN0cmluZ2lmeShiYXNrZXRDb25maXJtYXRpb24pKTtcclxufVxyXG5jb25zdCBnZXRCYXNrZXRDb25maXJtYXRpb24gPSAoKSA9PiB7XHJcbiAgIHJldHVybiBKU09OLnBhcnNlIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wQmFza2V0Q29uZmlybWF0aW9uXCIpKTtcclxufVxyXG5jb25zdCBhZGRUb1NhdmVkRm9yTGF0ZXIgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGNhcnRBZGRlZCA9IGZhbHNlIDtcclxuICAgIHRyeSB7ICAgXHJcbiAgICAgICAgICAgICAgbGV0IGNhcnREYXRhID0gZ2V0U2F2ZWRGb3JMYXRlcigpO1xyXG4gICAgICAgICAgICAgIGNhcnREYXRhLnB1c2goaXRlbSk7IFxyXG4gICAgICAgICAgICAgIHJlc2V0SXRlbUJ5S2V5KFwiaVNob3BTYXZlZEZvckxhdGVyXCIpOyAgICBcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wU2F2ZWRGb3JMYXRlclwiLEpTT04uc3RyaW5naWZ5KGNhcnREYXRhKSk7XHJcbiAgICAgICAgICAgICAgY2FydEFkZGVkID0gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHRvIHNhdmVkIGZvciBsYXRlciA6OiBcIisgZXJyb3IgKTtcclxuICAgIH1cclxuICByZXR1cm4gY2FydEFkZGVkO1xyXG59XHJcbmNvbnN0IGFkZFRvV2lzaGxpc3QgPSAoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGNhcnRBZGRlZCA9IGZhbHNlIDtcclxuICAgIHRyeSB7ICAgXHJcbiAgICAgICAgICAgICAgbGV0IGNhcnREYXRhID0gZ2V0V2lzaGxpc3QoKTtcclxuICAgICAgICAgICAgICBjYXJ0RGF0YS5wdXNoKGl0ZW0pOyBcclxuICAgICAgICAgICAgICByZXNldEl0ZW1CeUtleShcImlTaG9wV2lzaGxpc3RcIik7ICAgIFxyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BXaXNobGlzdFwiLEpTT04uc3RyaW5naWZ5KGNhcnREYXRhKSk7XHJcbiAgICAgICAgICAgICAgY2FydEFkZGVkID0gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHRvIGlTaG9wV2lzaGxpc3QgOjogXCIrIGVycm9yICk7XHJcbiAgICB9XHJcbiAgcmV0dXJuIGNhcnRBZGRlZDtcclxufVxyXG5jb25zdCBkZWxldGVGcm9tU2F2ZWRGb3JMYXRlciA9IChza3UpID0+IHtcclxuICAgIGxldCBjYXJ0ID0gZ2V0U2F2ZWRGb3JMYXRlcigpICwgZGVsZXRlZCA9IGZhbHNlO1xyXG4gICAgaWYoY2FydC5sZW5ndGggPiAwKXtcclxuICAgICAgICBjYXJ0ID0gY2FydC5maWx0ZXIoKF8pID0+IHtyZXR1cm4gXy5za3UgIT09IHNrdX0pO1xyXG4gICAgICAgIHJlc2V0SXRlbUJ5S2V5KFwiaVNob3BTYXZlZEZvckxhdGVyXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BTYXZlZEZvckxhdGVyXCIsSlNPTi5zdHJpbmdpZnkoY2FydCkpOyAgIFxyXG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZ2V0Q2FydFNpemUsXHJcbiAgYWRkVG9DYXJ0LFxyXG4gIGdldENhcnQsXHJcbiAgY2xlYXJCYXNrZXQsXHJcbiAgYWRkVG9DaGVja291dCxcclxuICBnZXRDaGVja291dCxcclxuICBzZXRCYXNrZXRDb25maXJtYXRpb24sXHJcbiAgZ2V0QmFza2V0Q29uZmlybWF0aW9uLFxyXG4gIGRlbGV0ZUZyb21DYXJ0LFxyXG4gIGFkZFRvU2F2ZWRGb3JMYXRlcixcclxuICBkZWxldGVGcm9tU2F2ZWRGb3JMYXRlcixcclxuICBnZXRTYXZlZEZvckxhdGVyU2l6ZSxcclxuICBnZXRTYXZlZEZvckxhdGVyLFxyXG4gIGFkZFRvV2lzaGxpc3QsXHJcbiAgZ2V0V2lzaGxpc3QsXHJcbiAgZGVsZXRlRnJvbVdpc2hsaXN0LFxyXG4gIGdldFdpc2hsaXN0U2l6ZVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
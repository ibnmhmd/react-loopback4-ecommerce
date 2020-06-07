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

  console.log("cart size :: " + size);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jYXJ0TWFuYWdlci5qcyJdLCJuYW1lcyI6WyJnZXRDYXJ0U2l6ZSIsInNpemUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsImVycm9yIiwiaW5pdENhcnQiLCJnZXRTYXZlZEZvckxhdGVyU2l6ZSIsImFkZFRvQ2FydCIsIml0ZW0iLCJjYXJ0QWRkZWQiLCJjYXJ0RGF0YSIsImdldENhcnQiLCJwdXNoIiwicmVzZXRJdGVtQnlLZXkiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwia2V5IiwiZGVsZXRlRnJvbUNhcnQiLCJza3UiLCJjYXJ0IiwiZGVsZXRlZCIsImZpbHRlciIsIl8iLCJkZWxldGVGcm9tV2lzaGxpc3QiLCJnZXRXaXNobGlzdCIsIkFycmF5IiwiZ2V0V2lzaGxpc3RTaXplIiwiZ2V0U2F2ZWRGb3JMYXRlciIsImNsZWFyQmFza2V0IiwicmVtb3ZlSXRlbSIsImNhbGxlciIsInJlYXNvbiIsImFkZFRvQ2hlY2tvdXQiLCJpdGVtcyIsImdldENoZWNrb3V0Iiwic2V0QmFza2V0Q29uZmlybWF0aW9uIiwiYmFza2V0Q29uZmlybWF0aW9uIiwiY29uZmlybWVkIiwiZ2V0QmFza2V0Q29uZmlybWF0aW9uIiwiYWRkVG9TYXZlZEZvckxhdGVyIiwiYWRkVG9XaXNobGlzdCIsImRlbGV0ZUZyb21TYXZlZEZvckxhdGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0RBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsTUFBSUMsSUFBSSxHQUFHLENBQVg7O0FBQ0EsWUFBbUM7QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaOztBQUNBLFFBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFILEVBQXFDO0FBQ2pDLFVBQUk7QUFDQ0osWUFBSSxHQUFHSyxJQUFJLENB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QUlDLElBQUksR0FBR1EsZ0JBQWdCLEVBQTNCO0FBQUEsTUFBZ0NQLE9BQU8sR0FBRyxLQUExQzs7QUFDQSxNQUFHRCxJQUFJLENBQUNoQixNQUFMLEdBQWMsQ0FBakIsRUFBbUI7QUFDZmdCLFFBQUksR0FBR0EsSUFBSSxDQUFDRSxNQUFMLENBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBQUMsYUFBT0EsQ0FBQyxDQUFDSixHQUFGLEtBQVVBLEdBQWpCO0FBQXFCLEtBQXpDLENBQVA7QUFDQUwsa0JBQWMsQ0FBQyxvQkFBRCxDQUFkO0FBQ0FkLGdCQUFZLENBQUNlLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTBDYixJQUFJLENBQUNjLFNBQUwsQ0FBZUksSUFBZixDQUExQztBQUNBQyxXQUFPLEdBQUcsSUFBVjtBQUNIOztBQUNELFNBQU9BLE9BQVA7QUFDSCxDQVREOztBQVVBc0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZoRCxhQUFXLEVBQVhBLFdBRGU7QUFFZlksV0FBUyxFQUFUQSxTQUZlO0FBR2ZJLFNBQU8sRUFBUEEsT0FIZTtBQUlmaUIsYUFBVyxFQUFYQSxXQUplO0FBS2ZJLGVBQWEsRUFBYkEsYUFMZTtBQU1mRSxhQUFXLEVBQVhBLFdBTmU7QUFPZkMsdUJBQXFCLEVBQXJCQSxxQkFQZTtBQVFmRyx1QkFBcUIsRUFBckJBLHFCQVJlO0FBU2ZyQixnQkFBYyxFQUFkQSxjQVRlO0FBVWZzQixvQkFBa0IsRUFBbEJBLGtCQVZlO0FBV2ZFLHlCQUF1QixFQUF2QkEsdUJBWGU7QUFZZm5DLHNCQUFvQixFQUFwQkEsb0JBWmU7QUFhZnFCLGtCQUFnQixFQUFoQkEsZ0JBYmU7QUFjZmEsZUFBYSxFQUFiQSxhQWRlO0FBZWZoQixhQUFXLEVBQVhBLFdBZmU7QUFnQmZELG9CQUFrQixFQUFsQkEsa0JBaEJlO0FBaUJmRyxpQkFBZSxFQUFmQTtBQWpCZSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjFiZGUwYTZmYWFjZmJkYzJlZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldENhcnRTaXplID0gKCkgPT4ge1xyXG4gICAgbGV0IHNpemUgPSAwIDtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZSBhcmUgcnVubmluZyBvbiB0aGUgY2xpZW50Jyk7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcENhcnRcIikpe1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgIHNpemUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BDYXJ0XCIpKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBjYXJ0IDo6IFwiKyBlcnJvciApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICBpbml0Q2FydChcImdldENhcnRTaXplXCIpO1xyXG4gICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2UgYXJlIHJ1bm5pbmcgb24gdGhlIHNlcnZlcicpO1xyXG4gICAgfSAgXHJcbiAgICBjb25zb2xlLmxvZyhcImNhcnQgc2l6ZSA6OiBcIisgc2l6ZSlcclxuICAgIHJldHVybiBzaXplO1xyXG59XHJcblxyXG5jb25zdCBnZXRTYXZlZEZvckxhdGVyU2l6ZSA9ICgpID0+IHtcclxuICAgIGxldCBzaXplID0gMCA7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2UgYXJlIHJ1bm5pbmcgb24gdGhlIGNsaWVudCcpO1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BTYXZlZEZvckxhdGVyXCIpKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICBzaXplID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wU2F2ZWRGb3JMYXRlclwiKSkubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgY2FydCA6OiBcIisgZXJyb3IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgaW5pdENhcnQoXCJnZXRDYXJ0U2l6ZVwiKTtcclxuICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dlIGFyZSBydW5uaW5nIG9uIHRoZSBzZXJ2ZXInKTtcclxuICAgIH0gIFxyXG4gICAgcmV0dXJuIHNpemU7XHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgY2FydEFkZGVkID0gZmFsc2UgO1xyXG4gICAgdHJ5IHsgICBcclxuICAgICAgICAgICAgICBsZXQgY2FydERhdGEgPSBnZXRDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgY2FydERhdGEucHVzaChpdGVtKTsgXHJcbiAgICAgICAgICAgICAgcmVzZXRJdGVtQnlLZXkoXCJpU2hvcENhcnRcIik7ICAgIFxyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BDYXJ0XCIsSlNPTi5zdHJpbmdpZnkoY2FydERhdGEpKTtcclxuICAgICAgICAgICAgICBjYXJ0QWRkZWQgPSB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgdG8gY2FydCA6OiBcIisgZXJyb3IgKTtcclxuICAgIH1cclxuICByZXR1cm4gY2FydEFkZGVkO1xyXG59XHJcblxyXG5jb25zdCByZXNldEl0ZW1CeUtleSA9IChrZXkpID0+IHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSAsIFwiXCIpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGRlbGV0ZUZyb21DYXJ0ID0gKHNrdSkgPT4ge1xyXG4gICAgbGV0IGNhcnQgPSBnZXRDYXJ0KCkgLCBkZWxldGVkID0gZmFsc2U7XHJcbiAgICBpZihjYXJ0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGNhcnQgPSBjYXJ0LmZpbHRlcigoXykgPT4ge3JldHVybiBfLnNrdSAhPT0gc2t1fSk7XHJcbiAgICAgICAgcmVzZXRJdGVtQnlLZXkoXCJpU2hvcENhcnRcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcENhcnRcIixKU09OLnN0cmluZ2lmeShjYXJ0KSk7ICAgXHJcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVsZXRlZDtcclxufVxyXG5jb25zdCBkZWxldGVGcm9tV2lzaGxpc3QgPSAoc2t1KSA9PiB7XHJcbiAgICBsZXQgY2FydCA9IGdldFdpc2hsaXN0KCkgLCBkZWxldGVkID0gZmFsc2U7XHJcbiAgICBpZihjYXJ0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGNhcnQgPSBjYXJ0LmZpbHRlcigoXykgPT4ge3JldHVybiBfLnNrdSAhPT0gc2t1fSk7XHJcbiAgICAgICAgcmVzZXRJdGVtQnlLZXkoXCJpU2hvcFdpc2hsaXN0XCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BXaXNobGlzdFwiLEpTT04uc3RyaW5naWZ5KGNhcnQpKTsgICBcclxuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWxldGVkO1xyXG59XHJcbmNvbnN0IGdldENhcnQgPSAoKSA9PiB7XHJcbiAgICBpZihnZXRDYXJ0U2l6ZSgpICE9PSAwICl7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcENhcnRcIikpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGdldFdpc2hsaXN0ID0gKCkgPT4ge1xyXG4gICAgaWYoZ2V0V2lzaGxpc3RTaXplKCkgIT09IDAgKXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wV2lzaGxpc3RcIikpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGdldFdpc2hsaXN0U2l6ZSA9ICgpID0+IHtcclxuICAgIGxldCBzaXplID0gMCA7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlTaG9wV2lzaGxpc3RcIikpe1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgIHNpemUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BXaXNobGlzdFwiKSkubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgY2FydCA6OiBcIisgZXJyb3IgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgaW5pdENhcnQoXCJpU2hvcFdpc2hsaXN0XCIpO1xyXG4gICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICByZXR1cm4gc2l6ZTtcclxufVxyXG5jb25zdCBnZXRTYXZlZEZvckxhdGVyID0gKCkgPT4ge1xyXG4gICAgaWYoZ2V0U2F2ZWRGb3JMYXRlclNpemUoKSAhPT0gMCApe1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaVNob3BTYXZlZEZvckxhdGVyXCIpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBjbGVhckJhc2tldCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaVNob3BDYXJ0XCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJpU2hvcFNhdmVkRm9yTGF0ZXJcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImlTaG9wU2F2ZWRGb3JMYXRlclwiKTtcclxufVxyXG5jb25zdCBpbml0Q2FydCA9IChjYWxsZXIpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BTYXZlZEZvckxhdGVyXCIgLCBKU09OLnN0cmluZ2lmeShbXSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcENhcnRcIiAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wV2lzaGxpc3RcIiAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wQ2FydEF1ZGl0XCIgLCBKU09OLnN0cmluZ2lmeSh7Y2FsbGVyICAsIHJlYXNvbiA6IFwiRW1wdHkgY2FydCBpbml0aWFsaXphdGlvbiAuXCJ9KSk7XHJcbn1cclxuY29uc3QgYWRkVG9DaGVja291dCA9IChpdGVtcykgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcENoZWNrb3V0Q2FydFwiICwgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BDaGVja291dENhcnRcIiAsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuY29uc3QgZ2V0Q2hlY2tvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcENoZWNrb3V0Q2FydFwiKSk7XHJcbn1cclxuY29uc3Qgc2V0QmFza2V0Q29uZmlybWF0aW9uID0gKGl0ZW0pID0+IHtcclxuICBsZXQgYmFza2V0Q29uZmlybWF0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcEJhc2tldENvbmZpcm1hdGlvblwiKTtcclxuICBpZihudWxsICE9PSBiYXNrZXRDb25maXJtYXRpb24gKSB7XHJcbiAgICBiYXNrZXRDb25maXJtYXRpb24gPSBKU09OLnBhcnNlKGJhc2tldENvbmZpcm1hdGlvbik7XHJcbiAgfWVsc2V7XHJcbiAgICBiYXNrZXRDb25maXJtYXRpb24gPSB7fTtcclxuICB9XHJcbiAgYmFza2V0Q29uZmlybWF0aW9uW2l0ZW0ua2V5XSA9IGl0ZW0uY29uZmlybWVkO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaVNob3BCYXNrZXRDb25maXJtYXRpb25cIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0Q29uZmlybWF0aW9uKSk7XHJcbn1cclxuY29uc3QgZ2V0QmFza2V0Q29uZmlybWF0aW9uID0gKCkgPT4ge1xyXG4gICByZXR1cm4gSlNPTi5wYXJzZSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpU2hvcEJhc2tldENvbmZpcm1hdGlvblwiKSk7XHJcbn1cclxuY29uc3QgYWRkVG9TYXZlZEZvckxhdGVyID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBjYXJ0QWRkZWQgPSBmYWxzZSA7XHJcbiAgICB0cnkgeyAgIFxyXG4gICAgICAgICAgICAgIGxldCBjYXJ0RGF0YSA9IGdldFNhdmVkRm9yTGF0ZXIoKTtcclxuICAgICAgICAgICAgICBjYXJ0RGF0YS5wdXNoKGl0ZW0pOyBcclxuICAgICAgICAgICAgICByZXNldEl0ZW1CeUtleShcImlTaG9wU2F2ZWRGb3JMYXRlclwiKTsgICAgXHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpU2hvcFNhdmVkRm9yTGF0ZXJcIixKU09OLnN0cmluZ2lmeShjYXJ0RGF0YSkpO1xyXG4gICAgICAgICAgICAgIGNhcnRBZGRlZCA9IHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyB0byBzYXZlZCBmb3IgbGF0ZXIgOjogXCIrIGVycm9yICk7XHJcbiAgICB9XHJcbiAgcmV0dXJuIGNhcnRBZGRlZDtcclxufVxyXG5jb25zdCBhZGRUb1dpc2hsaXN0ID0gKGl0ZW0pID0+IHtcclxuICAgIGxldCBjYXJ0QWRkZWQgPSBmYWxzZSA7XHJcbiAgICB0cnkgeyAgIFxyXG4gICAgICAgICAgICAgIGxldCBjYXJ0RGF0YSA9IGdldFdpc2hsaXN0KCk7XHJcbiAgICAgICAgICAgICAgY2FydERhdGEucHVzaChpdGVtKTsgXHJcbiAgICAgICAgICAgICAgcmVzZXRJdGVtQnlLZXkoXCJpU2hvcFdpc2hsaXN0XCIpOyAgICBcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wV2lzaGxpc3RcIixKU09OLnN0cmluZ2lmeShjYXJ0RGF0YSkpO1xyXG4gICAgICAgICAgICAgIGNhcnRBZGRlZCA9IHRydWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyB0byBpU2hvcFdpc2hsaXN0IDo6IFwiKyBlcnJvciApO1xyXG4gICAgfVxyXG4gIHJldHVybiBjYXJ0QWRkZWQ7XHJcbn1cclxuY29uc3QgZGVsZXRlRnJvbVNhdmVkRm9yTGF0ZXIgPSAoc2t1KSA9PiB7XHJcbiAgICBsZXQgY2FydCA9IGdldFNhdmVkRm9yTGF0ZXIoKSAsIGRlbGV0ZWQgPSBmYWxzZTtcclxuICAgIGlmKGNhcnQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgY2FydCA9IGNhcnQuZmlsdGVyKChfKSA9PiB7cmV0dXJuIF8uc2t1ICE9PSBza3V9KTtcclxuICAgICAgICByZXNldEl0ZW1CeUtleShcImlTaG9wU2F2ZWRGb3JMYXRlclwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlTaG9wU2F2ZWRGb3JMYXRlclwiLEpTT04uc3RyaW5naWZ5KGNhcnQpKTsgICBcclxuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWxldGVkO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGdldENhcnRTaXplLFxyXG4gIGFkZFRvQ2FydCxcclxuICBnZXRDYXJ0LFxyXG4gIGNsZWFyQmFza2V0LFxyXG4gIGFkZFRvQ2hlY2tvdXQsXHJcbiAgZ2V0Q2hlY2tvdXQsXHJcbiAgc2V0QmFza2V0Q29uZmlybWF0aW9uLFxyXG4gIGdldEJhc2tldENvbmZpcm1hdGlvbixcclxuICBkZWxldGVGcm9tQ2FydCxcclxuICBhZGRUb1NhdmVkRm9yTGF0ZXIsXHJcbiAgZGVsZXRlRnJvbVNhdmVkRm9yTGF0ZXIsXHJcbiAgZ2V0U2F2ZWRGb3JMYXRlclNpemUsXHJcbiAgZ2V0U2F2ZWRGb3JMYXRlcixcclxuICBhZGRUb1dpc2hsaXN0LFxyXG4gIGdldFdpc2hsaXN0LFxyXG4gIGRlbGV0ZUZyb21XaXNobGlzdCxcclxuICBnZXRXaXNobGlzdFNpemVcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
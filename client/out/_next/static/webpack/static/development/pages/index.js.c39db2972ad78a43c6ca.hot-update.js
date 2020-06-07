webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/classes/services.js":
/*!****************************************!*\
  !*** ./components/classes/services.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Service; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");





var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var Service = /*#__PURE__*/function () {
  function Service() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Service);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Service, [{
    key: "post",
    value: function () {
      var _post = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {
        var headers, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = params.headers ? params.headers : {
                  'Content-Type': 'application/json'
                };
                _context.next = 3;
                return axios.post(params.url, params.requestBody, headers);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response;

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function post(_x) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(params) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get(params.url, params.headers);

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response;

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function get(_x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return Service;
}();



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NsYXNzZXMvc2VydmljZXMuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiU2VydmljZSIsInBhcmFtcyIsImhlYWRlcnMiLCJwb3N0IiwidXJsIiwicmVxdWVzdEJvZHkiLCJyZXNwb25zZSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7SUFDcUJDLE87Ozs7Ozs7O29OQUVMQyxNOzs7Ozs7QUFDREMsdUIsR0FBVUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRCxNQUFNLENBQUNDLE9BQXhCLEdBQWtDO0FBQUUsa0NBQWdCO0FBQWxCLGlCOzt1QkFDM0JKLEtBQUssQ0FBQ0ssSUFBTixDQUFXRixNQUFNLENBQUNHLEdBQWxCLEVBQXdCSCxNQUFNLENBQUNJLFdBQS9CLEVBQTRDSCxPQUE1QyxDOzs7QUFBakJJLHdCOzt1QkFDT0EsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvTkFFUEwsTTs7Ozs7Ozt1QkFDZ0JILEtBQUssQ0FBQ1MsR0FBTixDQUFVTixNQUFNLENBQUNHLEdBQWpCLEVBQXNCSCxNQUFNLENBQUNDLE9BQTdCLEM7OztBQUFqQkksd0I7O3VCQUNPQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMzlkYjI5NzJhZDc4YTQzYzZjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlIHtcclxuXHJcbiAgICBhc3luYyBwb3N0IChwYXJhbXMpIHtcclxuICAgICAgICAgY29uc3QgaGVhZGVycyA9IHBhcmFtcy5oZWFkZXJzID8gcGFyYW1zLmhlYWRlcnMgOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfTtcclxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHBhcmFtcy51cmwgLCBwYXJhbXMucmVxdWVzdEJvZHksIGhlYWRlcnMgKTtcclxuICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0IChwYXJhbXMpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChwYXJhbXMudXJsLCBwYXJhbXMuaGVhZGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
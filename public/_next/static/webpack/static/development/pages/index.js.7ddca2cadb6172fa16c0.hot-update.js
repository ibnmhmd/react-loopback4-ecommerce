webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head */ "./components/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contextAPI_routingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contextAPI/routingContext */ "./components/contextAPI/routingContext.js");
/* harmony import */ var _classes_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/services */ "./components/classes/services.js");
/* harmony import */ var _errorFallbackComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./errorFallbackComponent */ "./components/errorFallbackComponent.js");



var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\nav.js",
    _s = $RefreshSig$(),
    _this2 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var api = __webpack_require__(/*! ../api/config.property */ "./api/config.property.js").GET_NAV_MENUS;

var service = new _classes_services__WEBPACK_IMPORTED_MODULE_7__["default"]();
var links = [{
  href: 'https://github.com/segmentio/create-next-app',
  label: 'Github'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

function Nav() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      route = _useState[0],
      setRoute = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      navigationMenu = _useState2[0],
      setNavigationMenus = _useState2[1];

  var routeContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contextAPI_routingContext__WEBPACK_IMPORTED_MODULE_6__["RouteContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var getNavMenus = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var query, url, headers, navigationMenus;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = {
                  fields: {
                    id: true,
                    menus: true
                  }
                };
                url = "".concat(api, "?filter=").concat(JSON.stringify(query));
                headers = {
                  headers: {
                    accepts: 'application/json'
                  }
                };
                navigationMenus = {};
                _context.next = 6;
                return service.get({
                  url: url,
                  headers: headers
                }).then(function (menus) {
                  if (menus.data && menus.data[0]) {
                    sessionStorage.setItem("navMenus", JSON.stringify(menus.data[0]));
                    navigationMenus = menus.data[0];
                  }
                })["catch"](function (err) {
                  console.error("Error :: " + err);
                });

              case 6:
                return _context.abrupt("return", navigationMenus);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getNavMenus() {
        return _ref.apply(this, arguments);
      };
    }();

    var navs = sessionStorage.getItem("navMenus");
    var navigationMenus = [];

    if (!navs) {
      navigationMenus = getNavMenus();
      navigationMenus = navigationMenus.menus;
    } else {
      navigationMenus = JSON.parse(navs).menus;
    }

    setNavigationMenus(navigationMenus ? navigationMenus : []);
    setTimeout(function () {
      $(".mega-dropdown").hover(function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
        $(this).toggleClass('open');
      }, function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
        $(this).toggleClass('open');
      });
    }, 1000);
  }, []);
  return __jsx(_errorFallbackComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "__navbar_main_bar_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "container navbar navbar-default __navbar_main_bar float-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "collapse navbar-collapse js-navbar-collapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 14
    }
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 14
    }
  }, navigationMenu.map(function (nav, index) {
    if (nav.show) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("li", {
        className: nav.rootClass && nav.rootClass,
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: nav.as && nav.as,
        as: nav.as && nav.as,
        "data-toggle": nav.toggle && nav.toggle,
        className: nav.innerClass && nav.innerClass,
        key: index + 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 32
        }
      }, nav.name.toUpperCase(), nav.children ? __jsx("span", {
        className: "caret",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 74
        }
      }) : null), nav.children ? __jsx(RenderChildren, {
        parent: nav,
        key: index + 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 36
        }
      }) : null));
    }
  }))))));
}

_s(Nav, "t6UpP0kq/7yotrALPvFbYMdvORg=");

_c = Nav;

var RenderChildren = function RenderChildren(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "dropdown-menu mega-dropdown-menu",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 12
    }
  }, props.parent.children.map(function (child, key) {
    if (child.show) {
      return __jsx("li", {
        className: "col-sm-3",
        key: key,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }
      }, child.requireInnerSliders ? __jsx(RenderInnerChildrenWithSliders, {
        child: child,
        key: key + 1,
        parent: props.parent,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 34
        }
      }) : __jsx(RenderInnerChildren, {
        child: child,
        key: key + 1,
        parent: props.parent,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 34
        }
      }));
    }
  })));
};

_c2 = RenderChildren;

var RenderInnerChildren = function RenderInnerChildren(props) {
  return __jsx("ul", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "dropdown-header",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, props.child.name.toUpperCase()), props.child.children.map(function (child, key) {
    return __jsx("li", {
      key: key,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: key,
      href: props.parent.navigationMapper,
      as: "".concat(props.parent.as, "-").concat(child.name),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 42
      }
    }, __jsx("a", {
      className: "hover-orange",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 140
      }
    }, child.name.toUpperCase())), " ");
  }));
};

_c3 = RenderInnerChildren;

var RenderInnerChildrenWithSliders = function RenderInnerChildrenWithSliders(props) {
  return __jsx("ul", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "dropdown-header",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 14
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: props.parent.href && props.parent.href,
    passHref: true,
    as: "".concat(props.parent.as, "-").concat(props.child.name),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 47
    }
  }, __jsx("a", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 157
    }
  }, props.child.name.toUpperCase()))), __jsx("div", {
    id: "".concat(props.child.root, "-").concat(props.child.name),
    className: "carousel slide",
    "data-ride": "carousel",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "carousel-inner",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, props.child.children.map(function (child, index) {
    return __jsx("div", {
      className: child["class"] && child["class"],
      key: index,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 32
      }
    }, __jsx("a", {
      key: index,
      href: "/products/[id]",
      as: "/products/".concat(child.name),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: child.image,
      className: "img-responsive",
      alt: child.name,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 106
      }
    })), __jsx("h4", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 33
      }
    }, __jsx("small", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }, child.name.toUpperCase(), " ")), __jsx("button", {
      className: "btn btn-primary",
      type: "button",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 33
      }
    }, child.price, " AED"), " ", __jsx("button", {
      href: "#",
      className: "btn btn-default",
      type: "button",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 110
      }
    }, __jsx("span", {
      className: "glyphicon glyphicon-heart",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 169
      }
    }), " Add to Wishlist"));
  })), __jsx("a", {
    className: "left carousel-control",
    href: "#".concat(props.child.root, "-").concat(props.child.name),
    role: "button",
    "data-slide": "prev",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-left",
    "aria-hidden": "true",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 42
    }
  }), __jsx("span", {
    className: "sr-only",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 42
    }
  }, "Previous")), __jsx("a", {
    className: "right carousel-control",
    href: "#".concat(props.child.root, "-").concat(props.child.name),
    role: "button",
    "data-slide": "next",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 18
    }
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-right",
    "aria-hidden": "true",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 42
    }
  }), __jsx("span", {
    className: "sr-only",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 42
    }
  }, "Next"))), __jsx("li", {
    className: "divider",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }), __jsx("li", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "hover-orange",
    href: "/products/".concat(props.child.root, "-").concat(props.child.name),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "View all Collection ", __jsx("span", {
    className: "glyphicon glyphicon-chevron-right pull-right",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 129
    }
  }))));
};

_c4 = RenderInnerChildrenWithSliders;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(Nav));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Nav");
$RefreshReg$(_c2, "RenderChildren");
$RefreshReg$(_c3, "RenderInnerChildren");
$RefreshReg$(_c4, "RenderInnerChildrenWithSliders");
$RefreshReg$(_c5, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6WyJhcGkiLCJyZXF1aXJlIiwiR0VUX05BVl9NRU5VUyIsInNlcnZpY2UiLCJTZXJ2aWNlIiwibGlua3MiLCJocmVmIiwibGFiZWwiLCJtYXAiLCJsaW5rIiwia2V5IiwiTmF2IiwidXNlU3RhdGUiLCJyb3V0ZSIsInNldFJvdXRlIiwibmF2aWdhdGlvbk1lbnUiLCJzZXROYXZpZ2F0aW9uTWVudXMiLCJyb3V0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUm91dGVDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0TmF2TWVudXMiLCJxdWVyeSIsImZpZWxkcyIsImlkIiwibWVudXMiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImFjY2VwdHMiLCJuYXZpZ2F0aW9uTWVudXMiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm5hdnMiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRUaW1lb3V0IiwiJCIsImhvdmVyIiwibm90Iiwic3RvcCIsInNsaWRlRG93biIsInRvZ2dsZUNsYXNzIiwic2xpZGVVcCIsIm5hdiIsImluZGV4Iiwic2hvdyIsInJvb3RDbGFzcyIsImFzIiwidG9nZ2xlIiwiaW5uZXJDbGFzcyIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImNoaWxkcmVuIiwiUmVuZGVyQ2hpbGRyZW4iLCJwcm9wcyIsInBhcmVudCIsImNoaWxkIiwicmVxdWlyZUlubmVyU2xpZGVycyIsIlJlbmRlcklubmVyQ2hpbGRyZW4iLCJuYXZpZ2F0aW9uTWFwcGVyIiwiUmVuZGVySW5uZXJDaGlsZHJlbldpdGhTbGlkZXJzIiwicm9vdCIsImltYWdlIiwicHJpY2UiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGeEIsQ0FkRCxDQUZKLEVBcUJFO0FBQUksYUFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUk7QUFBRyxhQUFTLEVBQUUsY0FBZDtBQUE2QixRQUFJLHNCQUFpQkksS0FBSyxDQUFDRSxLQUFOLENBQVlLLElBQTdCLGNBQXFDUCxLQUFLLENBQUNFLEtBQU4sQ0FBWU4sSUFBakQsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBOEc7QUFBTSxhQUFTLEVBQUMsOENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUcsQ0FBSixDQXRCRixDQUFSO0FBd0JILENBekJEOztNQUFNVSw4QjtBQTJCUyxxRUFBQUksNENBQUssQ0FBQ0MsSUFBTixDQUFXOUQsR0FBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43ZGRjYTJjYWRiNjE3MmZhMTZjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnLi9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCAsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgIHsgUm91dGVDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0QVBJL3JvdXRpbmdDb250ZXh0JztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vY2xhc3Nlcy9zZXJ2aWNlcyc7XG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuL2Vycm9yRmFsbGJhY2tDb21wb25lbnQnO1xuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vYXBpL2NvbmZpZy5wcm9wZXJ0eScpLkdFVF9OQVZfTUVOVVM7XG5jb25zdCBzZXJ2aWNlID0gbmV3IFNlcnZpY2UoKTtcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vY3JlYXRlLW5leHQtYXBwJywgbGFiZWw6ICdHaXRodWInIH1cbl0ubWFwKGxpbmsgPT4ge1xubGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuIGZ1bmN0aW9uIE5hdiAoKSB7XG4gICAgY29uc3QgWyByb3V0ZSAsIHNldFJvdXRlIF0gPSB1c2VTdGF0ZSh7IH0pIDtcbiAgICBjb25zdCBbbmF2aWdhdGlvbk1lbnUgLCBzZXROYXZpZ2F0aW9uTWVudXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdXRlQ29udGV4dCA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgXG4gICAgICBjb25zdCBnZXROYXZNZW51cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lbnVzOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IGAke2FwaX0/ZmlsdGVyPSR7SlNPTi5zdHJpbmdpZnkocXVlcnkpfWA7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICBhY2NlcHRzOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgIH1cbiAgICAgICAgIGxldCBuYXZpZ2F0aW9uTWVudXMgPSB7fTtcbiAgICAgICAgYXdhaXQgc2VydmljZS5nZXQoeyB1cmwgOiB1cmwgLCBoZWFkZXJzIH0pLnRoZW4oKG1lbnVzKSA9PiB7XG4gICAgICAgICBpZihtZW51cy5kYXRhICYmIG1lbnVzLmRhdGFbMF0pe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIm5hdk1lbnVzXCIsSlNPTi5zdHJpbmdpZnkobWVudXMuZGF0YVswXSkpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbk1lbnVzID0gbWVudXMuZGF0YVswXTtcbiAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciA6OiBcIiArIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmF2aWdhdGlvbk1lbnVzO1xuICAgICAgfVxuICAgICAgICBsZXQgbmF2cyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJuYXZNZW51c1wiKVxuICAgICAgICBsZXQgbmF2aWdhdGlvbk1lbnVzID0gW107XG4gICAgICAgIGlmKCFuYXZzKXtcbiAgICAgICAgICBuYXZpZ2F0aW9uTWVudXMgPSBnZXROYXZNZW51cygpO1xuICAgICAgICAgIG5hdmlnYXRpb25NZW51cyA9IG5hdmlnYXRpb25NZW51cy5tZW51cztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbmF2aWdhdGlvbk1lbnVzID0gSlNPTi5wYXJzZShuYXZzKS5tZW51cztcbiAgICAgICAgfVxuICAgICAgICAgIHNldE5hdmlnYXRpb25NZW51cyhuYXZpZ2F0aW9uTWVudXMgPyBuYXZpZ2F0aW9uTWVudXMgOiBbXSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiLm1lZ2EtZHJvcGRvd25cIikuaG92ZXIoICAgICAgICAgIFxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bi1tZW51JywgdGhpcykubm90KCcuaW4gLmRyb3Bkb3duLW1lbnUnKS5zdG9wKHRydWUsdHJ1ZSkuc2xpZGVEb3duKFwiNDAwXCIpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpOyAgICAgICAgXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnLCB0aGlzKS5ub3QoJy5pbiAuZHJvcGRvd24tbWVudScpLnN0b3AodHJ1ZSx0cnVlKS5zbGlkZVVwKFwiNDAwXCIpO1xuICAgICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpOyAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICB9LFtdKTsgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfX25hdmJhcl9tYWluX2Jhcl93cmFwcGVyXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBuYXZiYXIgbmF2YmFyLWRlZmF1bHQgX19uYXZiYXJfbWFpbl9iYXIgZmxvYXQtcGFuZWxcIj4gICAgICAgICAgXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganMtbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgIHsvKioqKiBzdGFydCBsb29waW5nIG5hdmlnYXRpb24gYXJyYXkgKioqKi99XG4gICAgICAgICAgICAgICAgIHsgbmF2aWdhdGlvbk1lbnUubWFwKChuYXYgLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihuYXYuc2hvdyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm48PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSB7bmF2LnJvb3RDbGFzcyAmJiBuYXYucm9vdENsYXNzfSBrZXkgPSB7aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWYgPSB7bmF2LmFzICYmIG5hdi5hc30gYXMgPSB7bmF2LmFzICYmIG5hdi5hcyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT17bmF2LnRvZ2dsZSYmbmF2LnRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID17bmF2LmlubmVyQ2xhc3MgJiYgbmF2LmlubmVyQ2xhc3N9IGtleSA9e2luZGV4KzF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdi5uYW1lLnRvVXBwZXJDYXNlKCl9e25hdi5jaGlsZHJlbiA/IDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCI+PC9zcGFuPjpudWxsfTwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYXYuY2hpbGRyZW4gPyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyQ2hpbGRyZW4gcGFyZW50ID17bmF2fSBrZXkgPXtpbmRleCsyfSAvPjogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+KVxufVxuXG5jb25zdCBSZW5kZXJDaGlsZHJlbiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgbWVnYS1kcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICB7IHByb3BzLnBhcmVudC5jaGlsZHJlbi5tYXAoKGNoaWxkICwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGQuc2hvdyl7XG4gICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwiY29sLXNtLTNcIiBrZXkgPXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hpbGQucmVxdWlyZUlubmVyU2xpZGVycyA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbmRlcklubmVyQ2hpbGRyZW5XaXRoU2xpZGVycyBjaGlsZCA9IHtjaGlsZH0ga2V5ID0ge2tleSsxfSBwYXJlbnQgPSB7cHJvcHMucGFyZW50fS8+OiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJJbm5lckNoaWxkcmVuIGNoaWxkID0ge2NoaWxkfSBrZXkgPSB7a2V5KzF9IHBhcmVudCA9IHtwcm9wcy5wYXJlbnR9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbn1cblxuY29uc3QgUmVuZGVySW5uZXJDaGlsZHJlbiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24taGVhZGVyXCI+e3Byb3BzLmNoaWxkLm5hbWUudG9VcHBlckNhc2UoKX08L2xpPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGQuY2hpbGRyZW4ubWFwKChjaGlsZCAsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICg8bGkga2V5ID17a2V5fT48TGluayBrZXkgPXtrZXl9IGhyZWY9IHtwcm9wcy5wYXJlbnQubmF2aWdhdGlvbk1hcHBlcn0gYXMgPSB7YCR7cHJvcHMucGFyZW50LmFzfS0ke2NoaWxkLm5hbWV9YH0gPjxhIGNsYXNzTmFtZSA9XCJob3Zlci1vcmFuZ2VcIj57Y2hpbGQubmFtZS50b1VwcGVyQ2FzZSgpfTwvYT48L0xpbms+IDwvbGk+KTsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbn1cbmNvbnN0IFJlbmRlcklubmVyQ2hpbGRyZW5XaXRoU2xpZGVycyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAgPHVsPlxuICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1oZWFkZXJcIj4gPExpbmsgaHJlZj0ge3Byb3BzLnBhcmVudC5ocmVmICYmIHByb3BzLnBhcmVudC5ocmVmfSBwYXNzSHJlZiBhcyA9IHtgJHtwcm9wcy5wYXJlbnQuYXN9LSR7cHJvcHMuY2hpbGQubmFtZX1gfT48YT57cHJvcHMuY2hpbGQubmFtZS50b1VwcGVyQ2FzZSgpfTwvYT48L0xpbms+PC9saT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17YCR7cHJvcHMuY2hpbGQucm9vdH0tJHtwcm9wcy5jaGlsZC5uYW1lfWB9IGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkLmNoaWxkcmVuLm1hcCgoY2hpbGQgLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSB7IGNoaWxkLmNsYXNzICYmIGNoaWxkLmNsYXNzIH0ga2V5ID0ge2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5ID0ge2luZGV4fSBocmVmPSBcIi9wcm9kdWN0cy9baWRdXCIgYXMgPSB7YC9wcm9kdWN0cy8ke2NoaWxkLm5hbWV9YH0+PGltZyBzcmM9IHtjaGlsZC5pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIiBhbHQ9IHtjaGlsZC5uYW1lfS8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PHNtYWxsPnsgY2hpbGQubmFtZS50b1VwcGVyQ2FzZSgpIH0gPC9zbWFsbD48L2g0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+e2NoaWxkLnByaWNlfSBBRUQ8L2J1dHRvbj4gPGJ1dHRvbiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIj48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWhlYXJ0XCI+PC9zcGFuPiBBZGQgdG8gV2lzaGxpc3Q8L2J1dHRvbj4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxlZnQgY2Fyb3VzZWwtY29udHJvbFwiIGhyZWY9e2AjJHtwcm9wcy5jaGlsZC5yb290fS0ke3Byb3BzLmNoaWxkLm5hbWV9YH0gcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmlnaHQgY2Fyb3VzZWwtY29udHJvbFwiIGhyZWY9e2AjJHtwcm9wcy5jaGlsZC5yb290fS0ke3Byb3BzLmNoaWxkLm5hbWV9YH0gcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWUgPVwiaG92ZXItb3JhbmdlXCIgaHJlZiA9IHtgL3Byb2R1Y3RzLyR7cHJvcHMuY2hpbGQucm9vdH0tJHtwcm9wcy5jaGlsZC5uYW1lfWB9PlZpZXcgYWxsIENvbGxlY3Rpb24gPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IHB1bGwtcmlnaHRcIj48L3NwYW4+PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE5hdikiXSwic291cmNlUm9vdCI6IiJ9
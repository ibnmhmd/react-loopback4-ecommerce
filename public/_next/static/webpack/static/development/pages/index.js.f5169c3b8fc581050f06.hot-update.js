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

    setNavigationMenus(navigationMenus);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6WyJhcGkiLCJyZXF1aXJlIiwiR0VUX05BVl9NRU5VUyIsInNlcnZpY2UiLCJTZXJ2aWNlIiwibGlua3MiLCJocmVmIiwibGFiZWwiLCJtYXAiLCJsaW5rIiwia2V5IiwiTmF2IiwidXNlU3RhdGUiLCJyb3V0ZSIsInNldFJvdXRlIiwibmF2aWdhdGlvbk1lbnUiLCJzZXROYXZpZ2F0aW9uTWVudXMiLCJyb3V0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUm91dGVDb250ZXh0IiwidXNlRWZmZWN0IiwiZ2V0TmF2TWVudXMiLCJxdWVyeSIsImZpZWxkcyIsImlkIiwibWVudXMiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImFjY2VwdHMiLCJuYXZpZ2F0aW9uTWVudXMiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm5hdnMiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRUaW1lb3V0IiwiJCIsImhvdmVyIiwibm90Iiwic3RvcCIsInNsaWRlRG93biIsInRvZ2dsZUNsYXNzIiwic2xpZGVVcCIsIm5hdiIsImluZGV4Iiwic2hvdyIsInJvb3RDbGFzcyIsImFzIiwidG9nZ2xlIiwiaW5uZXJDbGFzcyIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImNoaWxkcmVuIiwiUmVuZGVyQ2hpbGRyZW4iLCJwcm9wcyIsInBhcmVudCIsImNoaWxkIiwicmVxdWlyZUlubmVyU2xpZGVycyIsIlJlbmRlcklubmVyQ2hpbGRyZW4iLCJuYXZpZ2F0aW9uTWFwcGVyIiwiUmVuZGVySW5uZXJDaGlsZHJlbldpdGhTbGlkZXJzIiwicm9vdCIsImltYWdlIiwicHJpY2UiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7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LFlBRnhCLENBZEQsQ0FGSixFQXFCRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsYUFBUyxFQUFFLGNBQWQ7QUFBNkIsUUFBSSxzQkFBaUJJLEtBQUssQ0FBQ0UsS0FBTixDQUFZSyxJQUE3QixjQUFxQ1AsS0FBSyxDQUFDRSxLQUFOLENBQVlOLElBQWpELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQThHO0FBQU0sYUFBUyxFQUFDLDhDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlHLENBQUosQ0F0QkYsQ0FBUjtBQXdCSCxDQXpCRDs7TUFBTVUsOEI7QUEyQlMscUVBQUFJLDRDQUFLLENBQUNDLElBQU4sQ0FBVzlELEdBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZjUxNjljM2I4ZmM1ODEwNTBmMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4vaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICB7IFJvdXRlQ29udGV4dCB9IGZyb20gJy4vY29udGV4dEFQSS9yb3V0aW5nQ29udGV4dCc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL2NsYXNzZXMvc2VydmljZXMnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9lcnJvckZhbGxiYWNrQ29tcG9uZW50JztcbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uL2FwaS9jb25maWcucHJvcGVydHknKS5HRVRfTkFWX01FTlVTO1xuY29uc3Qgc2VydmljZSA9IG5ldyBTZXJ2aWNlKCk7XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vc2VnbWVudGlvL2NyZWF0ZS1uZXh0LWFwcCcsIGxhYmVsOiAnR2l0aHViJyB9XG5dLm1hcChsaW5rID0+IHtcbmxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcbiBmdW5jdGlvbiBOYXYgKCkge1xuICAgIGNvbnN0IFsgcm91dGUgLCBzZXRSb3V0ZSBdID0gdXNlU3RhdGUoeyB9KSA7XG4gICAgY29uc3QgW25hdmlnYXRpb25NZW51ICwgc2V0TmF2aWdhdGlvbk1lbnVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByb3V0ZUNvbnRleHQgPSB1c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIFxuICAgICAgY29uc3QgZ2V0TmF2TWVudXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBtZW51czogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBgJHthcGl9P2ZpbHRlcj0ke0pTT04uc3RyaW5naWZ5KHF1ZXJ5KX1gO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgYWNjZXB0czogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICB9XG4gICAgICAgICBsZXQgbmF2aWdhdGlvbk1lbnVzID0ge307XG4gICAgICAgIGF3YWl0IHNlcnZpY2UuZ2V0KHsgdXJsIDogdXJsICwgaGVhZGVycyB9KS50aGVuKChtZW51cykgPT4ge1xuICAgICAgICAgaWYobWVudXMuZGF0YSAmJiBtZW51cy5kYXRhWzBdKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJuYXZNZW51c1wiLEpTT04uc3RyaW5naWZ5KG1lbnVzLmRhdGFbMF0pKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb25NZW51cyA9IG1lbnVzLmRhdGFbMF07XG4gICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgOjogXCIgKyBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRpb25NZW51cztcbiAgICAgIH1cbiAgICAgICAgbGV0IG5hdnMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibmF2TWVudXNcIilcbiAgICAgICAgbGV0IG5hdmlnYXRpb25NZW51cyA9IFtdO1xuICAgICAgICBpZighbmF2cyl7XG4gICAgICAgICAgbmF2aWdhdGlvbk1lbnVzID0gZ2V0TmF2TWVudXMoKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uTWVudXMgPSBuYXZpZ2F0aW9uTWVudXMubWVudXM7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIG5hdmlnYXRpb25NZW51cyA9IEpTT04ucGFyc2UobmF2cykubWVudXM7XG4gICAgICAgIH1cbiAgICAgICAgICBzZXROYXZpZ2F0aW9uTWVudXMobmF2aWdhdGlvbk1lbnVzKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIubWVnYS1kcm9wZG93blwiKS5ob3ZlciggICAgICAgICAgXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnLCB0aGlzKS5ub3QoJy5pbiAuZHJvcGRvd24tbWVudScpLnN0b3AodHJ1ZSx0cnVlKS5zbGlkZURvd24oXCI0MDBcIik7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7ICAgICAgICBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24tbWVudScsIHRoaXMpLm5vdCgnLmluIC5kcm9wZG93bi1tZW51Jykuc3RvcCh0cnVlLHRydWUpLnNsaWRlVXAoXCI0MDBcIik7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7ICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgIH0sW10pOyAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl9fbmF2YmFyX21haW5fYmFyX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG5hdmJhciBuYXZiYXItZGVmYXVsdCBfX25hdmJhcl9tYWluX2JhciBmbG9hdC1wYW5lbFwiPiAgICAgICAgICBcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqcy1uYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgey8qKioqIHN0YXJ0IGxvb3BpbmcgbmF2aWdhdGlvbiBhcnJheSAqKioqL31cbiAgICAgICAgICAgICAgICAgeyBuYXZpZ2F0aW9uTWVudS5tYXAoKG5hdiAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5hdi5zaG93KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IHtuYXYucm9vdENsYXNzICYmIG5hdi5yb290Q2xhc3N9IGtleSA9IHtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZiA9IHtuYXYuYXMgJiYgbmF2LmFzfSBhcyA9IHtuYXYuYXMgJiYgbmF2LmFzIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPXtuYXYudG9nZ2xlJiZuYXYudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPXtuYXYuaW5uZXJDbGFzcyAmJiBuYXYuaW5uZXJDbGFzc30ga2V5ID17aW5kZXgrMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2Lm5hbWUudG9VcHBlckNhc2UoKX17bmF2LmNoaWxkcmVuID8gPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIj48L3NwYW4+Om51bGx9PC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hdi5jaGlsZHJlbiA/ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJDaGlsZHJlbiBwYXJlbnQgPXtuYXZ9IGtleSA9e2luZGV4KzJ9IC8+OiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT4pXG59XG5cbmNvbnN0IFJlbmRlckNoaWxkcmVuID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBtZWdhLWRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgIHsgcHJvcHMucGFyZW50LmNoaWxkcmVuLm1hcCgoY2hpbGQgLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihjaGlsZC5zaG93KXtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJjb2wtc20tM1wiIGtleSA9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGlsZC5yZXF1aXJlSW5uZXJTbGlkZXJzID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVySW5uZXJDaGlsZHJlbldpdGhTbGlkZXJzIGNoaWxkID0ge2NoaWxkfSBrZXkgPSB7a2V5KzF9IHBhcmVudCA9IHtwcm9wcy5wYXJlbnR9Lz46IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbmRlcklubmVyQ2hpbGRyZW4gY2hpbGQgPSB7Y2hpbGR9IGtleSA9IHtrZXkrMX0gcGFyZW50ID0ge3Byb3BzLnBhcmVudH0vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxufVxuXG5jb25zdCBSZW5kZXJJbm5lckNoaWxkcmVuID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1oZWFkZXJcIj57cHJvcHMuY2hpbGQubmFtZS50b1VwcGVyQ2FzZSgpfTwvbGk+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZC5jaGlsZHJlbi5tYXAoKGNoaWxkICwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXkgPXtrZXl9PjxMaW5rIGtleSA9e2tleX0gaHJlZj0ge3Byb3BzLnBhcmVudC5uYXZpZ2F0aW9uTWFwcGVyfSBhcyA9IHtgJHtwcm9wcy5wYXJlbnQuYXN9LSR7Y2hpbGQubmFtZX1gfSA+PGEgY2xhc3NOYW1lID1cImhvdmVyLW9yYW5nZVwiPntjaGlsZC5uYW1lLnRvVXBwZXJDYXNlKCl9PC9hPjwvTGluaz4gPC9saT4pOyAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxufVxuY29uc3QgUmVuZGVySW5uZXJDaGlsZHJlbldpdGhTbGlkZXJzID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuICA8dWw+XG4gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLWhlYWRlclwiPiA8TGluayBocmVmPSB7cHJvcHMucGFyZW50LmhyZWYgJiYgcHJvcHMucGFyZW50LmhyZWZ9IHBhc3NIcmVmIGFzID0ge2Ake3Byb3BzLnBhcmVudC5hc30tJHtwcm9wcy5jaGlsZC5uYW1lfWB9PjxhPntwcm9wcy5jaGlsZC5uYW1lLnRvVXBwZXJDYXNlKCl9PC9hPjwvTGluaz48L2xpPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgJHtwcm9wcy5jaGlsZC5yb290fS0ke3Byb3BzLmNoaWxkLm5hbWV9YH0gY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGQuY2hpbGRyZW4ubWFwKChjaGlsZCAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9IHsgY2hpbGQuY2xhc3MgJiYgY2hpbGQuY2xhc3MgfSBrZXkgPSB7aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBrZXkgPSB7aW5kZXh9IGhyZWY9IFwiL3Byb2R1Y3RzL1tpZF1cIiBhcyA9IHtgL3Byb2R1Y3RzLyR7Y2hpbGQubmFtZX1gfT48aW1nIHNyYz0ge2NoaWxkLmltYWdlfSBjbGFzc05hbWU9XCJpbWctcmVzcG9uc2l2ZVwiIGFsdD0ge2NoaWxkLm5hbWV9Lz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND48c21hbGw+eyBjaGlsZC5uYW1lLnRvVXBwZXJDYXNlKCkgfSA8L3NtYWxsPjwvaDQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj57Y2hpbGQucHJpY2V9IEFFRDwvYnV0dG9uPiA8YnV0dG9uIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24taGVhcnRcIj48L3NwYW4+IEFkZCB0byBXaXNobGlzdDwvYnV0dG9uPiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVmdCBjYXJvdXNlbC1jb250cm9sXCIgaHJlZj17YCMke3Byb3BzLmNoaWxkLnJvb3R9LSR7cHJvcHMuY2hpbGQubmFtZX1gfSByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyaWdodCBjYXJvdXNlbC1jb250cm9sXCIgaHJlZj17YCMke3Byb3BzLmNoaWxkLnJvb3R9LSR7cHJvcHMuY2hpbGQubmFtZX1gfSByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZSA9XCJob3Zlci1vcmFuZ2VcIiBocmVmID0ge2AvcHJvZHVjdHMvJHtwcm9wcy5jaGlsZC5yb290fS0ke3Byb3BzLmNoaWxkLm5hbWV9YH0+VmlldyBhbGwgQ29sbGVjdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQgcHVsbC1yaWdodFwiPjwvc3Bhbj48L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTmF2KSJdLCJzb3VyY2VSb290IjoiIn0=
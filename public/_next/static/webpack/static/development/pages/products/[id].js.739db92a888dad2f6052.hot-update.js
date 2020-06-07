webpackHotUpdate("static\\development\\pages\\products\\[id].js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./components/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contextAPI_routingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contextAPI/routingContext */ "./components/contextAPI/routingContext.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var navigation = __webpack_require__(/*! ../utils/products */ "./utils/products.js").getNavMenu();

var links = [{
  href: 'https://github.com/segmentio/create-next-app',
  label: 'Github'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      route = _useState[0],
      setRoute = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(navigation),
      navigationMenu = _useState2[0],
      setNavigationMenus = _useState2[1];

  var routeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contextAPI_routingContext__WEBPACK_IMPORTED_MODULE_4__["RouteContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log("nav init" + navigationMenu.length);
    $(".mega-dropdown").hover(function () {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
      $(this).toggleClass('open');
    }, function () {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
      $(this).toggleClass('open');
    });
    console.log(routeContext);
  }, []);

  var setRouteConfig = function setRouteConfig(config) {
    debugger;
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/products/productListing'); //-- routeContext.routeConfig.setRouteConfig(config);
  };

  return __jsx("div", {
    className: "__navbar_main_bar_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("nav", {
    className: "container navbar navbar-default __navbar_main_bar float-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "collapse navbar-collapse js-navbar-collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("ul", {
    className: "nav navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, navigationMenu.map(function (nav, index) {
    if (nav.show) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("li", {
        className: nav.rootClass && nav.rootClass,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("a", {
        href: nav.as && nav.as,
        as: nav.as && nav.as,
        "data-toggle": nav.toggle && nav.toggle,
        className: nav.innerClass && nav.innerClass,
        key: index + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, nav.name.toUpperCase(), nav.children ? __jsx("span", {
        className: "caret",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }) : null), nav.children ? __jsx(RenderChildren, {
        parent: nav,
        key: index + 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }) : null));
    }
  }), __jsx("li", {
    className: "dropdown mega-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "dropdown-toggle",
    "data-toggle": "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Kids ", __jsx("span", {
    className: "caret",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx("ul", {
    className: "dropdown-menu mega-dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("li", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Features"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Auto Carousel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Carousel Control")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Left & Right Navigation")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Four Columns Grid")), __jsx("li", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Fonts"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Glyphicon")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Google Fonts")))), __jsx("li", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Plus"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Navbar Inverse")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Pull Right Elements")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Coloured Headers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Primary Buttons & Default")))), __jsx("li", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Much more"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Easy to Customize")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Calls to action")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Custom Fonts")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Slide down on Hover")))), __jsx("li", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Women Collection"), __jsx("div", {
    id: "womenCollection",
    className: "carousel slide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("img", {
    src: "http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection",
    className: "img-responsive",
    alt: "product 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Summer dress floral prints")), __jsx("button", {
    className: "btn btn-primary",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "49,99 \u20AC"), " ", __jsx("button", {
    href: "#",
    className: "btn btn-default",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), " Add to Wishlist")), __jsx("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("img", {
    src: "http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection",
    className: "img-responsive",
    alt: "product 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Gold sandals with shiny touch")), __jsx("button", {
    className: "btn btn-primary",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "9,99 \u20AC"), " ", __jsx("button", {
    href: "#",
    className: "btn btn-default",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), " Add to Wishlist")), __jsx("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("img", {
    src: "http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection",
    className: "img-responsive",
    alt: "product 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Denin jacket stamped")), __jsx("button", {
    className: "btn btn-primary",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "49,99 \u20AC"), " ", __jsx("button", {
    href: "#",
    className: "btn btn-default",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), " Add to Wishlist"))), __jsx("a", {
    className: "left carousel-control",
    href: "#womenCollection",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-left",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "right carousel-control",
    href: "#womenCollection",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-right",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Next"))), __jsx("li", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "View all Collection ", __jsx("span", {
    className: "glyphicon glyphicon-chevron-right pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))))))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Store locator")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Events")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "__navbar_offer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Today's Offer"))))));
}

var RenderChildren = function RenderChildren(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(props);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("ul", {
    className: "dropdown-menu mega-dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, props.parent.children.map(function (child, key) {
    console.log(child);

    if (child.show) {
      return __jsx("li", {
        className: "col-sm-3",
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, child.requireInnerSliders ? __jsx(RenderInnerChildrenWithSliders, {
        child: child,
        key: key + 1,
        parent: props.parent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }) : __jsx(RenderInnerChildren, {
        child: child,
        key: key + 1,
        parent: props.parent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }));
    }
  })));
};

var RenderInnerChildren = function RenderInnerChildren(props) {
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, props.child.name.toUpperCase()), props.child.children.map(function (child, key) {
    return __jsx("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: key,
      href: props.parent.navigationMapper,
      as: "".concat(props.parent.as, "-").concat(child.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("a", {
      className: "hover-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, child.name.toUpperCase())), " ");
  }));
};

var RenderInnerChildrenWithSliders = function RenderInnerChildrenWithSliders(props) {
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.parent.href && props.parent.href,
    passHref: true,
    as: "".concat(props.parent.as, "-").concat(props.child.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, props.child.name.toUpperCase()))), __jsx("div", {
    id: "".concat(props.child.root, "-").concat(props.child.name),
    className: "carousel slide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, props.child.children.map(function (child, index) {
    return __jsx("div", {
      className: child["class"] && child["class"],
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("a", {
      key: index,
      href: "/products/[id]",
      as: "/products/".concat(child.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("img", {
      src: child.image,
      className: "img-responsive",
      alt: child.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, child.name.toUpperCase(), " ")), __jsx("button", {
      className: "btn btn-primary",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, child.price, " AED"), " ", __jsx("button", {
      href: "#",
      className: "btn btn-default",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("span", {
      className: "glyphicon glyphicon-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }), " Add to Wishlist"));
  })), __jsx("a", {
    className: "left carousel-control",
    href: "#".concat(props.child.root, "-").concat(props.child.name),
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-left",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "right carousel-control",
    href: "#".concat(props.child.root, "-").concat(props.child.name),
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-right",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Next"))), __jsx("li", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("a", {
    className: "hover-orange",
    href: "/products/".concat(props.child.root, "-").concat(props.child.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "View all Collection ", __jsx("span", {
    className: "glyphicon glyphicon-chevron-right pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Nav));

/***/ })

})
//# sourceMappingURL=[id].js.739db92a888dad2f6052.hot-update.js.map
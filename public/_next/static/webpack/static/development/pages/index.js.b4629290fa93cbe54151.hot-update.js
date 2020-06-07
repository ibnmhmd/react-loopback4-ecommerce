webpackHotUpdate("static\\development\\pages\\index.js",{

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
  })))));
}

var RenderChildren = function RenderChildren(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(props);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("ul", {
    className: "dropdown-menu mega-dropdown-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
          lineNumber: 76
        },
        __self: this
      }, child.requireInnerSliders ? __jsx(RenderInnerChildrenWithSliders, {
        child: child,
        key: key + 1,
        parent: props.parent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }) : __jsx(RenderInnerChildren, {
        child: child,
        key: key + 1,
        parent: props.parent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
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
      lineNumber: 89
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, props.child.name.toUpperCase()), props.child.children.map(function (child, key) {
    return __jsx("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: key,
      href: props.parent.navigationMapper,
      as: "".concat(props.parent.as, "-").concat(child.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("a", {
      className: "hover-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, child.name.toUpperCase())), " ");
  }));
};

var RenderInnerChildrenWithSliders = function RenderInnerChildrenWithSliders(props) {
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("li", {
    className: "dropdown-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.parent.href && props.parent.href,
    passHref: true,
    as: "".concat(props.parent.as, "-").concat(props.child.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, props.child.name.toUpperCase()))), __jsx("div", {
    id: "".concat(props.child.root, "-").concat(props.child.name),
    className: "carousel slide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, props.child.children.map(function (child, index) {
    return __jsx("div", {
      className: child["class"] && child["class"],
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("a", {
      key: index,
      href: "/products/[id]",
      as: "/products/".concat(child.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("img", {
      src: child.image,
      className: "img-responsive",
      alt: child.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, child.name.toUpperCase(), " ")), __jsx("button", {
      className: "btn btn-primary",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, child.price, " AED"), " ", __jsx("button", {
      href: "#",
      className: "btn btn-default",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("span", {
      className: "glyphicon glyphicon-heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
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
      lineNumber: 110
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-left",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "right carousel-control",
    href: "#".concat(props.child.root, "-").concat(props.child.name),
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("span", {
    className: "glyphicon glyphicon-chevron-right",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Next"))), __jsx("li", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("a", {
    className: "hover-orange",
    href: "/products/".concat(props.child.root, "-").concat(props.child.name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "View all Collection ", __jsx("span", {
    className: "glyphicon glyphicon-chevron-right pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Nav));

/***/ }),

/***/ "./utils/products.js":
/*!***************************!*\
  !*** ./utils/products.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var product = new Array(),
    obj = {},
    brands = ["Guice", "Nike", "Sony", "Sony", "Promate", "Casio"];
var prices = [319.25, 690.23, 2399.00, 248.99, 109.99, 179.10];
var was = [400.50, 800.00, 2500.00, 279.00, 150.00, 249.99];
var qty = [4, 5, 3, 5, 7, 10];
var avail = [3, 7, 2, 20, 8, 7];
var ratings = [4.3, 4.6, 3.7, 4, 3.7, 4.1];
var comments = [587, 1254, 3004, 874, 4512, 8745];
var skus = ["ISHRT7845541224", "RVFX788874471", "SON54587454112", "SON5458745417845", "SON545874748717845", "CAS34455875411"];
var thumb = ["https://m.media-amazon.com/images/I/61S4x8xHdSL._AC_AA100_.jpg", "https://m.media-amazon.com/images/I/61ncStLn5HL._AC_AA100_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_UL100_SR100,100_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_UL160_SR160,160_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_UL160_SR160,160_.jpg", "https://images-eu.ssl-images-amazon.com/images/I/41HmCff7LjL._AC_SY200_.jpg"];
var bigImg = ["https://images-na.ssl-images-amazon.com/images/I/61S4x8xHdSL._AC_SX569_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61ncStLn5HL._AC_SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_SX569_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71rlEAupcPL._AC_SY500_.jpg"];
var name = ["EZVIZ HD Wi-Fi Smart Door Viewer Camera with PIR, Doorbell Camera, 2018 CES Innovation", "AMOCAM Video Door Phone System, 7 Inch Clear LCD Monitor Wired Video Intercom Doorbell Kits", "Sony PlayStation 4 Pro 1TB Console (Black)", "Sony PS4 Dualshock 4 Controller, Black (Official Version)", "YP Select Ps4 Wireless Controller With Dual Vibration Bluetooth Gamepad for PlayStation 4 Pro Gaming Remote Control White", "Casio Casual Analog Display Watch For Men MTP-VD01D-1EVUDF"];
/*********** browse categories *************/

var browseCategories = [{
  category: "accessories",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"
}, {
  category: "women",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/female-270x340.jpg"
}, {
  category: "games",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/gaming-270x340.jpg"
}, {
  category: "computers",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/laptop-270x340.jpg"
}, {
  category: "mobiles",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/mobiles-270x340.jpg"
}, {
  category: "men",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-2-270x340.png"
}, {
  category: "shoes",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-4-270x340.png"
}, {
  category: "electronics",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"
}, {
  category: "kids",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-3-270x340.png"
}];

for (var i = 0; i < name.length; i++) {
  obj = {};
  obj.name = name[i];
  obj.oldPrice = was[i];
  obj.newPrice = prices[i];
  obj.brand = brands[i];
  obj.img = thumb[i];
  obj.qty = qty[i];
  obj.availableQty = avail[i];
  obj.selectedQty = 1;
  obj.bigImg = bigImg[i];
  obj.sku = skus[i];
  obj.ratings = ratings[i];
  obj.comments = comments[i];
  product.push(obj);
}

var nav = [{
  name: "home",
  path: "/",
  rootClass: "__navbar_home_link",
  show: true,
  href: "/",
  as: "/"
}, {
  name: "men",
  rootNavigation: "products",
  navigationMapper: "/products/[id]",
  show: true,
  as: "/products/men",
  href: "/products/[id]",
  rootClass: "dropdown mega-dropdown",
  innerClass: "dropdown-toggle",
  toggle: true,
  toggleClass: "dropdown",
  children: [{
    name: "collections",
    type: "collections",
    requireInnerSliders: true,
    root: "men",
    show: true,
    children: [{
      image: "https://images-eu.ssl-images-amazon.com/images/I/51RZAz12utL._AA200_.jpg",
      name: "Summer dress floral prints",
      price: 49.99,
      "class": "item active"
    }, {
      image: "https://images-eu.ssl-images-amazon.com/images/I/51nvv5VSUsL._AA200_.jpg",
      name: "Fifth Sun Official Liverpool FC Vintage Reds Men's Tee, Heather, Medium",
      price: 75.50,
      "class": "item"
    }, {
      image: "https://images-eu.ssl-images-amazon.com/images/I/41aese32iYL._AA200_.jpg",
      name: "DADIJIER Brogue Ankle Boot for Men Motorcycle Boots Genuine Leather Lace up ...",
      price: 238.00,
      "class": "item"
    }]
  }, {
    name: "clothing",
    type: "clothing",
    show: true,
    requireInnerSliders: false,
    children: [{
      show: true,
      name: "all clothing"
    }, {
      show: true,
      name: "tees & polos"
    }, {
      show: true,
      name: "shirts"
    }, {
      show: true,
      name: "sports wear"
    }, {
      show: true,
      name: "jeans"
    }, {
      show: true,
      name: "shorts"
    }, {
      show: true,
      name: "pants"
    }, {
      show: true,
      name: "under wear"
    }]
  }, {
    name: "shoes",
    type: "shoes",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all shoes"
    }, {
      show: true,
      name: "loafers & slip-ons"
    }, {
      show: true,
      name: "boots"
    }, {
      show: true,
      name: "sandals"
    }, {
      show: true,
      name: "formal shoes"
    }, {
      show: true,
      name: "casual shoes"
    }]
  }, {
    name: "watches & accessories",
    type: "watches & accessories",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all accessories"
    }, {
      show: true,
      name: "sunglasses"
    }, {
      show: true,
      name: "jewellery"
    }, {
      show: true,
      name: "bags and wallets"
    }, {
      show: true,
      name: "luggage sets"
    }, {
      show: true,
      name: "casual shoes"
    }]
  }]
}, {
  name: "women",
  rootNavigation: "products",
  navigationMapper: "/products/[id]",
  show: true,
  as: "/products/women",
  href: "/products/[id]",
  rootClass: "dropdown mega-dropdown",
  innerClass: "dropdown-toggle",
  toggle: true,
  toggleClass: "dropdown",
  children: [{
    name: "clothing",
    type: "clothing",
    show: true,
    requireInnerSliders: false,
    children: [{
      show: true,
      name: "all clothing"
    }, {
      show: true,
      name: "shirts, tops & tees"
    }, {
      show: true,
      name: "dresses"
    }, {
      show: true,
      name: "arabian wear"
    }, {
      show: true,
      name: "sports wear"
    }, {
      show: true,
      name: "jeans"
    }, {
      show: true,
      name: "skirts"
    }, {
      show: true,
      name: "jackets & coats"
    }, {
      show: true,
      name: "underwear, lingerie & sleepwear"
    }]
  }, {
    name: "shoes",
    type: "shoes",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all shoes"
    }, {
      show: true,
      name: "loafers & slip-ons"
    }, {
      show: true,
      name: "boots"
    }, {
      show: true,
      name: "sandals"
    }, {
      show: true,
      name: "flats"
    }, {
      show: true,
      name: "pumps"
    }]
  }, {
    name: "watches & accessories",
    type: "watches & accessories",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all accessories"
    }, {
      show: true,
      name: "sunglasses"
    }, {
      show: true,
      name: "jewellery"
    }, {
      show: true,
      name: "bags and wallets"
    }, {
      show: true,
      name: "luggage sets"
    }, {
      show: true,
      name: "body care"
    }, {
      show: true,
      name: "make-up"
    }]
  }, {
    name: "collections",
    type: "collections",
    requireInnerSliders: true,
    root: "women",
    show: true,
    children: [{
      image: "https://images-eu.ssl-images-amazon.com/images/I/317TZPdju8L._AA200_.jpg",
      name: "Roberto Cavalli Paradiso - perfumes for women - Eau de Parfum, 75ml",
      price: 103.58,
      "class": "item active"
    }, {
      image: "https://images-eu.ssl-images-amazon.com/images/I/41MadHhMcjL._AC_SX184_.jpg",
      name: "Wish by Chopard for Women - Eau de Parfum, 75 ml",
      price: 65.50,
      "class": "item"
    }, {
      image: "https://images-eu.ssl-images-amazon.com/images/I/51--WVEXjdL._AC_SX184_.jpg",
      name: "Roberto Cavalli - perfumes for women - Eau de Parfum, 50ML",
      price: 83.00,
      "class": "item"
    }]
  }]
}, {
  name: "electronics",
  rootNavigation: "products",
  navigationMapper: "/products/[id]",
  show: true,
  as: "/products/electronics",
  href: "/products/[id]",
  rootClass: "dropdown mega-dropdown",
  innerClass: "dropdown-toggle",
  toggle: true,
  toggleClass: "dropdown",
  children: [{
    name: "mobiles",
    type: "mobiles",
    show: true,
    requireInnerSliders: false,
    children: [{
      show: true,
      name: "all mobiles"
    }, {
      show: true,
      name: "apple"
    }, {
      show: true,
      name: "samsung"
    }, {
      show: true,
      name: "lenovo"
    }, {
      show: true,
      name: "oppo"
    }, {
      show: true,
      name: "vivo"
    }, {
      show: true,
      name: "huawei"
    }, {
      show: true,
      name: "realme"
    }, {
      show: true,
      name: "nokia"
    }, {
      show: true,
      name: "mobile accessories"
    }]
  }, {
    name: "computers",
    type: "computers",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all computers"
    }, {
      show: true,
      name: "apple"
    }, {
      show: true,
      name: "hp"
    }, {
      show: true,
      name: "dell"
    }, {
      show: true,
      name: "lenovo"
    }, {
      show: true,
      name: "samsung"
    }, {
      show: true,
      name: "toshiba"
    }, {
      show: true,
      name: "microsoft"
    }, {
      show: true,
      name: "sony"
    }]
  }, {
    name: "televisions",
    type: "televisions",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all televisions"
    }, {
      show: true,
      name: "lg"
    }, {
      show: true,
      name: "samsung"
    }, {
      show: true,
      name: "philips"
    }, {
      show: true,
      name: "sony"
    }, {
      show: true,
      name: "tcl"
    }, {
      show: true,
      name: "others"
    }]
  }, {
    name: "home electronics",
    type: "home electronics",
    requireInnerSliders: false,
    root: "electronics",
    show: true,
    children: [{
      show: true,
      name: "all home electronics"
    }, {
      show: true,
      name: "fridges"
    }, {
      show: true,
      name: "microwaves"
    }, {
      show: true,
      name: "laundry machines"
    }, {
      show: true,
      name: "ovens"
    }, {
      show: true,
      name: "home theatres"
    }, {
      show: true,
      name: "others"
    }]
  }]
}, {
  name: "events",
  path: "/ishop/events",
  rootClass: "__navbar_home_link",
  show: true,
  href: "/ishop/events",
  as: "/ishop/events"
}, {
  name: "store locator",
  path: "/ishop/locations",
  rootClass: "__navbar_home_link",
  show: true,
  href: "/ishop/locations",
  as: "/ishop/locations"
}, {
  name: "today's offer",
  path: "/ishop/ioffers",
  rootClass: "__navbar_home_link",
  show: true,
  href: "/ishop/ioffers",
  as: "/ishop/ioffers"
}];

var getBestSellers = function getBestSellers() {
  return getProducts();
};

var getProducts = function getProducts() {
  return product;
};

var getNewArrivals = function getNewArrivals() {
  return getProducts();
};

var getTopRated = function getTopRated() {
  return getProducts();
};

var getMiscallaneous = function getMiscallaneous() {
  return getProducts();
};

var getTrendingNow = function getTrendingNow() {
  return getProducts();
};

var getPopularProducts = function getPopularProducts() {
  return getProducts();
};

var getRecommendations = function getRecommendations() {
  return getProducts();
};

var getBrowseByCategories = function getBrowseByCategories() {
  return browseCategories;
};

var getNavMenu = function getNavMenu() {
  return nav;
};

module.exports = {
  getProducts: getProducts,
  getBestSellers: getBestSellers,
  getNewArrivals: getNewArrivals,
  getTopRated: getTopRated,
  getMiscallaneous: getMiscallaneous,
  getTrendingNow: getTrendingNow,
  getPopularProducts: getPopularProducts,
  getRecommendations: getRecommendations,
  getBrowseByCategories: getBrowseByCategories,
  getNavMenu: getNavMenu
};

/***/ })

})
//# sourceMappingURL=index.js.b4629290fa93cbe54151.hot-update.js.map
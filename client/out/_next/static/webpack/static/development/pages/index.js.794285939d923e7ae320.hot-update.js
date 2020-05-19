webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/partialComponents/homePage/categoryBrowserComponent.js":
/*!***************************************************************************!*\
  !*** ./components/partialComponents/homePage/categoryBrowserComponent.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryBrowserComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\partialComponents\\homePage\\categoryBrowserComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var RPODUCTS = __webpack_require__(/*! ../../../utils/products */ "./utils/products.js");

var CategoryBrowserComponent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CategoryBrowserComponent, _React$Component);

  function CategoryBrowserComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CategoryBrowserComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CategoryBrowserComponent).call(this, props));
    _this.state = {
      categories: []
    };
    $('.owl-carousel').owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CategoryBrowserComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        categories: RPODUCTS.getBrowseByCategories()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "container __categoryBrowser_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("span", {
        className: "__categoryBrowser_block_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Browse Our Categories"), __jsx("span", {
        className: "__categoryBrowser_block_viewall",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "View all")), __jsx("div", {
        className: "col-xs-12 owl-carousel owl-theme ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.state.categories.map(function (item, index) {
        return __jsx(Category, {
          category: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      }))));
    }
  }]);

  return CategoryBrowserComponent;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



function Category(props) {
  var redirect = function redirect(url) {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/products/".concat(url));
  };

  return __jsx("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("figure", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    className: "img-responsive",
    src: props.category.image,
    alt: "item",
    srcSet: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))), __jsx("div", {
    className: "__homepage_second_block_inner_overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "__homepage_second_block_inner_overlay_inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "__categoryBrowser_block_overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h4", {
    className: "__homepage_second_block_inner_text_which_men",
    onClick: function onClick() {
      return redirect(props.category.category);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, props.category.category)))));
}

/***/ })

})
//# sourceMappingURL=index.js.794285939d923e7ae320.hot-update.js.map
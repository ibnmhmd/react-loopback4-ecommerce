webpackHotUpdate("static\\development\\pages\\signin-up\\register.js",{

/***/ "./components/partialComponents/registerSignInComponent/signupComponent.js":
/*!*********************************************************************************!*\
  !*** ./components/partialComponents/registerSignInComponent/signupComponent.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _formBuilderComponent_formComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../formBuilderComponent/formComponent */ "./components/formBuilderComponent/formComponent.js");
/* harmony import */ var _classes_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../classes/validator */ "./components/classes/validator.js");
/* harmony import */ var _contextAPI_styleContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../contextAPI/styleContext */ "./components/contextAPI/styleContext.js");
/* harmony import */ var _modals_errorModalComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modals/errorModalComponent */ "./components/modals/errorModalComponent.js");
/* harmony import */ var _statelessComponents_loadMoreProductsComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../statelessComponents/loadMoreProductsComponent */ "./components/statelessComponents/loadMoreProductsComponent.js");










var _jsxFileName = "D:\\SPAs\\react-loopback4-ecommerce\\app\\client\\components\\partialComponents\\registerSignInComponent\\signupComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;








var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var API = __webpack_require__(/*! ../../../api/config.property */ "./api/config.property.js");

var validate = new _classes_validator__WEBPACK_IMPORTED_MODULE_13__["default"]();

var SignupComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(SignupComponent, _React$PureComponent);

  function SignupComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SignupComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(SignupComponent).call(this, props));
    _this.submitRef = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleSubmitState = _this.handleSubmitState.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.checkEmailAvailability = _this.checkEmailAvailability.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleShow = _this.handleShow.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.removeInvalidElement = _this.removeInvalidElement.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.comparePasswords = _this.comparePasswords.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.state = {
      disableSubmit: true,
      formFields: [],
      showEmailLoader: false,
      showError: false,
      errorMessage: "",
      submitLabel: "Register",
      registered: false,
      registering: false,
      failed: false
    };
    _this.modalProps = {
      onHide: _this.onHide,
      message: "This email is already reserved .",
      header: "Validation Error"
    };
    _this.formData = [{
      label: "First Name",
      type: "text",
      placeholder: "Enter your firstname",
      controlId: "firstNameController",
      validate: true,
      required: true,
      validationRules: {
        minLength: 6,
        maxLength: 12
      },
      "class": "default",
      change: _this.onChange,
      name: "firstName",
      showLoader: false
    }, {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your lastname",
      controlId: "lastNameController",
      validate: true,
      required: true,
      "class": "default",
      validationRules: {
        minLength: 6,
        maxLength: 12
      },
      change: _this.onChange,
      name: "lasName",
      showLoader: false
    }, {
      label: "Email Address",
      type: "email",
      placeholder: "Enter your emil address",
      controlId: "emailController",
      note: "We'll never share your email with anyone else.",
      validate: true,
      required: true,
      "class": "text-muted default",
      validationRules: {
        emailValidator: ""
      },
      change: _this.onChange,
      name: "email",
      showLoader: false
    }, {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      controlId: "passwordController",
      validate: true,
      required: true,
      "class": "default",
      validationRules: {
        minLength: 8,
        passwordValidator: ""
      },
      change: _this.onChange,
      note: "Your password should be at least 8 characters long alphanumeric .",
      name: "password",
      showLoader: false
    }, {
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your password",
      controlId: "confirmPasswordController",
      validate: true,
      required: true,
      "class": "default",
      validationRules: {
        minLength: 8,
        passwordValidator: "",
        dependents: ["passwordController"]
      },
      change: _this.onChange,
      note: "This field should match the above one .",
      name: "cPassword",
      showLoader: false
    }, {
      note: "By creating an account, you agree to our Conditions of Use and Privacy Notice.",
      type: "none",
      "class": "text-muted"
    }];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SignupComponent, [{
    key: "handleShow",
    value: function handleShow() {
      this.setState({
        showError: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        showError: false
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      event.preventDefault();
      var matched = this.comparePasswords();
      console.log(this.state.formFields);

      if (!matched) {
        return;
      }

      this.setState({
        submitLabel: "Please wait ..",
        registering: true
      });
      this.handleSubmitState(true);
      var requestData = {};
      this.state.formFields.map(function (field, index) {
        requestData[field.name] = field.value;
      });
      delete requestData['cPassword'];
      console.log("submitting :: " + requestData + "--" + API.USERS_API);
      axios.post(API.USERS_API, requestData).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
        var errorMsg = "",
            code = "";

        if (error.error) {
          errorMsg = error.error.message;
          code = error.error.code;
        }

        this.setState({
          submitLabel: "Register",
          registering: false,
          showError: true,
          errorMessage: errorMsg
        });
        this.handleSubmitState(false);
      });
    }
  }, {
    key: "handleSubmitState",
    value: function handleSubmitState(state) {
      if (state) {
        validate.disabledElem(this.submitRef);
      } else {
        validate.enableElem(this.submitRef);
      }
    }
  }, {
    key: "comparePasswords",
    value: function comparePasswords() {
      var valid = true;
      var password = this.state.formFields.find(function (_) {
        return _.name == "password";
      });
      var confirmPassword = this.state.formFields.find(function (_) {
        return _.name == "cPassword";
      });
      var error = "Sorry, your passwords are not matching !";

      if (undefined !== password && undefined !== confirmPassword) {
        if (password.value !== confirmPassword.value) {
          this.setState({
            showError: true,
            errorMessage: error,
            registering: false
          });
          confirmPassword.ref.classList.remove("valid");
          confirmPassword.ref.classList.add("in-valid");
          this.removeInvalidElement(confirmPassword);
          valid = false;
          validate.disabledElem(this.submitRef);
        }
      }

      return valid;
    }
  }, {
    key: "checkEmailAvailability",
    value: function checkEmailAvailability(response, elem) {
      var _this2 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function checkEmailAvailability$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.setState({
                showEmailLoader: true
              });
              /***** checking email ****/

              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
                setTimeout(function () {
                  var _response$0$ = response[0][0],
                      value = _response$0$.value,
                      ref = _response$0$.ref;

                  var email = _this2.state.formFields.find(function (_) {
                    return _.name == "email";
                  });

                  if ("amine.admin@mail.com" !== value) {
                    _this2.setState({
                      showError: true,
                      errorMessage: "The email ** ".concat(value, " ** is already registered in our database, please use a different one or reset your password .")
                    });

                    ref.classList.remove("valid");
                    ref.classList.add("in-valid");
                    response = [];

                    _this2.removeInvalidElement(elem);
                  }

                  console.log("after 1 sec");
                  resolve();
                }, 1000);
              }));

            case 3:
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
                setTimeout(function () {
                  _this2.setState({
                    showEmailLoader: false
                  });

                  resolve();
                }, 3000);
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      var _this3 = this;

      var response = [],
          self = this;
      var currentElement = JSON.parse(event.target.dataset.formdata);
      response = validate.validate(event);
      /**** remove invalid fields ****/

      if (response[0].length == 0) {
        this.removeInvalidElement(currentElement);
      } else {
        /***** compare passwords *****/

        /*** if("password" == currentElement.name || "cPassword" == currentElement.name){
          this.comparePasswords(response , currentElement);
        } ***/
        console.log("immediate");
        /**** set the returned validation values ***/

        response[0].map(function (resp, index) {
          undefined == self.state.formFields.find(function (_) {
            return _.name == resp.name;
          }) ? self.setState({
            formFields: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(self.state.formFields), [resp])
          }, function () {
            _this3.handleSubmitState(!(self.state.formFields.length == 5));
          }) : null;
        });
        /****** ends *****/
      }
    }
  }, {
    key: "removeInvalidElement",
    value: function removeInvalidElement(currentElement) {
      var _this4 = this;

      this.setState({
        formFields: this.state.formFields.filter(function (_) {
          return _.name !== currentElement.name;
        })
      }, function () {
        _this4.handleSubmitState(!(_this4.state.formFields.length == 5));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      validate.disabledElem(this.submitRef);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var value = this.context.value;
      return __jsx("div", {
        className: "container __registeration_form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, __jsx("div", {
        className: "col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, __jsx("div", {
        className: "__registration_form_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, this.formData.map(function (form, index) {
        "email" == form.name ? form.showLoader = _this5.state.showEmailLoader : null;
        return __jsx(_formBuilderComponent_formComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: index,
          props: form,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        });
      }), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
        controlId: "formBasicPassword",
        className: "col-xs-5",
        style: {
          paddingLeft: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, __jsx("a", {
        ref: this.submitRef,
        className: "customButton __checkout_confirm_btn",
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, this.state.submitLabel, this.state.registered ? __jsx(_statelessComponents_loadMoreProductsComponent__WEBPACK_IMPORTED_MODULE_16__["SuccessComponent"], {
        label: "",
        paragraph: false,
        "class": "instock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }) : null, this.state.registering ? __jsx(_statelessComponents_loadMoreProductsComponent__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"], {
        label: "",
        paragraph: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }) : null, this.state.failed ? __jsx(_statelessComponents_loadMoreProductsComponent__WEBPACK_IMPORTED_MODULE_16__["FailureComponent"], {
        label: "",
        paragraph: false,
        "class": "outofstock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }) : null)), this.state.showError ? __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
        controlId: "formBasicPassword",
        className: "col-xs-7 reg-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, this.state.errorMessage) : null)))));
    }
  }]);

  return SignupComponent;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.PureComponent);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(SignupComponent, "contextType", _contextAPI_styleContext__WEBPACK_IMPORTED_MODULE_14__["StyleContext"]);



/***/ })

})
//# sourceMappingURL=register.js.e25d834999f38350ab0d.hot-update.js.map
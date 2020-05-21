import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';
import FormBuilder from '../../formBuilderComponent/formComponent';
import Validator from '../../classes/validator';
import {StyleContext} from '../../contextAPI/styleContext';
import {SuccessComponent , FailureComponent , LoaderComponent } from '../../statelessComponents/loadMoreProductsComponent';
const axios = require('axios');
const API = require("../../../api/config.property");
const validate = new Validator();

export default class SignupComponent extends React.PureComponent {
  static contextType = StyleContext ;
    constructor(props){
        super(props);
        this.submitRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmitState = this.handleSubmitState.bind(this);
        this.checkEmailAvailability = this.checkEmailAvailability.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.removeInvalidElement = this.removeInvalidElement.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.comparePasswords = this.comparePasswords.bind(this);
        this.state = {
          disableSubmit : true,
          formFields : [],
          showEmailLoader : false,
          showError : false,
          errorMessage : "",
          submitLabel : "Register",
          registered : false,
          registering : false,
          failed : false
        }
         this.modalProps = {
          onHide : this.onHide,
          message : "This email is already reserved .",
          header : "Validation Error"
         }

         this.formData = [{ 
                           label : "First Name" ,
                           type : "text",
                           placeholder : "Enter your firstname",
                           controlId : "firstNameController",
                           validate : true,
                           required : true,
                           validationRules : {minLength : 6 , maxLength : 12 },
                           class : "default",
                           change : this.onChange,
                           name : "firstName",
                           showLoader : false
                          },
                          {
                            label : "Last Name" ,
                            type : "text",
                            placeholder : "Enter your lastname",
                            controlId : "lastNameController",
                            validate : true,
                            required : true,
                            class : "default",
                            validationRules : {minLength : 6 , maxLength : 12 },
                            change : this.onChange,
                            name : "lastName",
                            showLoader : false
                         },
                          {
                            label : "Email Address" ,
                            type : "email",
                            placeholder : "Enter your emil address",
                            controlId : "emailController",
                            note : "We'll never share your email with anyone else." ,
                            validate : true,
                            required : true,
                            class : "text-muted default",
                            validationRules : { emailValidator : "" },
                            change : this.onChange,
                            name :"email",
                            showLoader : false
                         },                        
                        {
                          label : "Password" ,
                          type : "password",
                          placeholder : "Enter your password",
                          controlId : "passwordController",
                          validate : true,
                          required : true,
                          class : "default",
                          validationRules : { minLength : 8 , passwordValidator : "" },
                          change : this.onChange,
                          note : "Your password should be at least 8 characters long alphanumeric ." ,
                          name : "password",
                          showLoader : false
                        },
                        {
                          label : "Confirm Password" ,
                          type : "password",
                          placeholder : "Enter your password",
                          controlId : "confirmPasswordController",
                          validate : true,
                          required : true,
                          class : "default",
                          validationRules : { minLength : 8 , passwordValidator : "" , dependents: ["passwordController"] },
                          change : this.onChange,
                          note : "This field should match the above one .",
                          name : "cPassword",
                          showLoader : false
                        },{
                          note : "By creating an account, you agree to our Conditions of Use and Privacy Notice.",
                          type : "none",
                          class : "text-muted"
                        }
                      ] ;
    }
    handleShow() {
      this.setState({showError : true});
    }
    handleClose(){
      this.setState({showError : false});
    }
    handleSubmit(){
      event.preventDefault();
      const matched = this.comparePasswords() , self = this;
      if(!matched) {return}
      this.setState({submitLabel : "Please wait .." , 
         registering : true , showError : false ,
         errorMessage : "" , failed : false});
      this.handleSubmitState(true);
      let requestData = {};
      this.state.formFields.map((field , index) => {
        requestData[field.name] = field[field.name] ? field[field.name] : field.value;
      });

      delete requestData['cPassword'];
      axios.post(API.REGISTER, requestData )
      .then(function (response) {
        self.handleSubmitState(true);
        self.setState({submitLabel : "Account has been created." , registering : false , registered : true });
        localStorage.set("iShopUserId" , response.data._id);
      })
      .catch(function (error) {
        let errorMsg = "" , code = "";
        if(error && 422 == error.response.status) {
          errorMsg = `Error : ${error.response.data.error.message}`;
        }
        self.setState({submitLabel : "Register" , registering : false , 
        showError : true , errorMessage : errorMsg , failed : true });
        self.handleSubmitState(false);
      });
    }
    handleSubmitState(state) {
      if(state){
        validate.disabledElem(this.submitRef);
      }else{
        validate.enableElem(this.submitRef);
      }
    }
    comparePasswords() {
      let valid = true ;
      const password = this.state.formFields.find((_) => _.name == "password");
      const confirmPassword = this.state.formFields.find((_) => _.name == "cPassword");
      const error = "Sorry, your passwords are not matching !";
      if(undefined !== password && undefined !== confirmPassword ){
         if(password.value !== confirmPassword.value) {
           this.setState({showError : true, errorMessage : error , registering : false})
           confirmPassword.ref.classList.remove("valid");
           confirmPassword.ref.classList.add("in-valid");
           this.removeInvalidElement(confirmPassword); 
           valid = false;
           validate.disabledElem(this.submitRef);
         }
      }
      return valid;
    }
    async checkEmailAvailability(response , elem ) {
      this.setState({showEmailLoader : true });
      /***** checking email ****/
      await new Promise( (resolve) => {
        setTimeout(() => {
          let { value , ref } = response[0][0];
          let email = this.state.formFields.find((_) => _.name == "email");
           if("amine.admin@mail.com" !== value ) {
             this.setState({showError : true, errorMessage : `The email ** ${value} ** is already registered in our database, please use a different one or reset your password .`})
             ref.classList.remove("valid");
             ref.classList.add("in-valid");
             response = [];
             this.removeInvalidElement(elem);          
           }
           resolve();
        }, 1000);
      }) 
        
      /**** remove loader *****/
      await new Promise( (resolve) => {
      setTimeout(()=>{
        this.setState({showEmailLoader : false }); 
        resolve();
         }, 3000);
       });  
    }
    onChange(){
      let response = [] , self = this;
      let currentElement = JSON.parse(event.target.dataset.formdata);
      response = validate.validate(event);
        /**** remove invalid fields ****/
        if(response[0].length == 0){
           this.removeInvalidElement(currentElement);  
        }else{
          /***** compare passwords *****/
          /*** if("password" == currentElement.name || "cPassword" == currentElement.name){
            this.comparePasswords(response , currentElement);
          } ***/
          /**** set the returned validation values ***/
          response[0].map((resp , index ) => {
             undefined == self.state.formFields.find((_) => _.name == resp.name) ?
             this.setFields(resp) : this.updateFields(resp);
          });
          /****** ends *****/
      }   
    }
    removeInvalidElement(currentElement){
      this.setState({formFields : this.state.formFields.filter(_ => _.name !== currentElement.name )}, ()=>{
        this.handleSubmitState(!(this.state.formFields.length == 5 ));
       
      }); 
    }
    componentDidMount(){
      validate.disabledElem(this.submitRef);
    }
    setFields(resp){
      this.setState({formFields : 
        [...this.state.formFields , resp ] }, () => {
           this.handleSubmitState(!(this.state.formFields.length == 2 ));
      })
    }
    updateFields(resp){
      let fields = this.state.formFields;
      fields.map((_f , i ) => _f[resp.name] = resp.value );
      this.setState({formFields : fields});
    }
    render() {
      const { value } = this.context;
        return (
             <div className="container __registeration_form">
                 <div className="row">
                     <div className="col-xs-12">
                       <div className ="__registration_form_wrapper">
                        <Form>
                           { 
                             this.formData.map((form , index) => {
                               "email" == form.name ? form.showLoader = this.state.showEmailLoader : null;
                               return <FormBuilder key = {index} props = {form}/>
                             })  
                           }
                            <Form.Group controlId="formBasicPassword" className = "col-xs-5" style = {{paddingLeft:0}}>
                              <a ref = {this.submitRef} className="customButton __checkout_confirm_btn" onClick = {this.handleSubmit}>
                                   { this.state.submitLabel }
                               { this.state.registered ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { this.state.registering ? <LoaderComponent label = "" paragraph = {false}/> : null }
                               { this.state.failed ?  <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null } 
                             </a> 
                            </Form.Group>
                           {this.state.showError ? <Form.Group controlId="formBasicPassword" className = "col-xs-7 reg-error">{this.state.errorMessage}</Form.Group> : null }
                        </Form> 
                      </div>  
                     </div>
                     
                 </div>
                  {/**this.state.showError ? <ErrorModal errorMessage = {this.state.errorMessage} show = {this.state.showError} handleClose = {this.handleClose}/> : null**/}
             </div>
        );
    }
}

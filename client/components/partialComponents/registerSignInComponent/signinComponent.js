import React from 'react';
import Form from 'react-bootstrap/Form';
import FormBuilder from '../../formBuilderComponent/formComponent';
import Validator from '../../classes/validator';
import Service from '../../classes/services';
import {StyleContext} from '../../contextAPI/styleContext';
import {SuccessComponent , FailureComponent , LoaderComponent } from '../../statelessComponents/loadMoreProductsComponent';
import Router from 'next/router';

const validate = new Validator();
const API = require("../../../api/config.property");
const service = new Service();

export default class SigninComponent extends React.PureComponent {
  static contextType = StyleContext ;
    constructor(props){
        super(props);
        this.logInRef = React.createRef();       
        this.onChange = this.onChange.bind(this);
        this.handleSubmitState = this.handleSubmitState.bind(this);
        this.removeInvalidElement = this.removeInvalidElement.bind(this);
        this.login = this.login.bind(this);
        this.state = {
          disableSubmit : true,
          formFields : [],
          showEmailLoader : false,
          showError : false,
          errorMessage : "",
          logingIn : false,
          loggedIn : false,
          failed : false,
          signInLabel : "Login"
        }
         this.formData = [ {
                        label : "Email Address" ,
                        type : "email",
                        placeholder : "Enter your emil address",
                        controlId : "emailController",
                        validate : true,
                        required : true,
                        class : "text-muted default",
                        validationRules : { emailValidator : "" },
                        change : this.onChange,
                        name :"email",
                        showLoader : false
                     },{ 
                        label : "Password" ,
                        type : "password",
                        placeholder : "Enter your password",
                        controlId : "passwordController",
                        validate : true,
                        required : true,
                        class : "default",
                        validationRules : { minLength : 8 , passwordValidator : "" },
                        change : this.onChange,
                        name : "password",
                        showLoader : false
                      }];

    }
    handleSubmitState(state) {
      if(state){
        validate.disabledElem(this.logInRef);
      }else{
        validate.enableElem(this.logInRef);
      }
    }

    onChange(){
      let response = [] , self = this;
      let currentElement = JSON.parse(event.target.dataset.formdata);
      response = validate.validate(event);
      console.log(response[0]);
        /**** remove invalid fields ****/
        if(response[0].length == 0){
           this.removeInvalidElement(currentElement);  
        }else{
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
        this.handleSubmitState(!(this.state.formFields.length == 2 ));   
      }); 
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
    async login() {
      let requestData = {} , self = this, errorMsg = "" ;
      this.state.formFields.map((field , index) => {
        requestData[field.name] = field[field.name] ? field[field.name] : field.value;
      });
        this.setState({ logingIn : true , failed : false , 
        signInLabel : "Logging in .." , showError : false,
        errorMessage : ""});
        self.handleSubmitState(true);
       await service.post({url : API.LOGIN , requestBody : requestData, headers : {'Content-Type': 'application/json'}}).then( async (response) => {
          if(response.data.response.success){
            self.handleSubmitState(true);
            self.setState({signInLabel : "Successfully LoggedIn." , logingIn : false , loggedIn : true });
            localStorage.setItem("iShopUserToken" , response.data.response.token); 
             await self.getProfile(response.data.response.token); 
          }else{
            errorMsg = response.data.response.message;
            self.handleSubmitState(false);
            localStorage.removeItem("iShopUserToken"); 
            self.setState({signInLabel : "Login" , logingIn : false , loggedIn : false, showError : true , errorMessage : errorMsg , failed : true });
          }
        })
        .catch( (error) => {
           let code = "";
          if(error && error.response && 422 == error.response.status) {
            errorMsg = `Error : ${error.response.data.error.message}`;
          }
          console.error(error)
          self.setState({signInLabel : "Login" , loggedIn : false , logingIn : false , 
          showError : true , errorMessage : errorMsg , failed : true });
          self.handleSubmitState(false);
        });        
    }
     async getProfile (token){
        const self = this;
        const headers =  {
          headers: {
                   Authorization: 'Bearer ' + token
              } 
         }
         await service.get({ url : API.GET_PROFILE , headers }).then((profile) => {
            self.saveCustomerProfileLocally( profile.data );
            Router.push('/');
          }).catch((err) => {
            if(401 == err.response.status){
              let error = err.response.data.error.message;
              self.setState({signInLabel : "Login" , loggedIn : false , logingIn : false , 
              showError : true , errorMessage : 'Error getting user profile, please try again .'  , failed : true });
              self.handleSubmitState(false);
            }
          });
       }
       saveCustomerProfileLocally (data) {
           data.status = "loggedIn";
           localStorage.setItem("customerProfile" , JSON.stringify(data));
       }
    render() {
        return (
             <div className="container __registeration_form">
                 <div className="row">
                     <div className="col-xs-12">
                       <div className ="__registration_form_wrapper">
                        <Form>
                           { 
                             this.formData.map((form , index) => {
                               return <FormBuilder key = {index} props = {form}/>
                             })  
                           }
                             <Form.Group controlId="formBasicPassword" className = "col-xs-5" style = {{paddingLeft:0}}>
                              <a ref = {this.logInRef} className="customButton __checkout_confirm_btn" onClick = {() => this.login()}>
                                   { this.state.signInLabel }
                               { this.state.loggedIn ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { this.state.logingIn ?  <LoaderComponent label = "" paragraph = {false}/> : null }
                               { this.state.failed ?    <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null } 
                             </a> 
                            </Form.Group>
                            {this.state.showError ? <Form.Group controlId="formBasicPassword" className = "col-xs-7 reg-error">{this.state.errorMessage}</Form.Group> : null }
                        </Form> 
                      </div>  
                     </div>                 
                 </div>
             </div>
        );
    }
}

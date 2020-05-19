import React from 'react';
import Wrapper from './../../components/appWrapper';
import SignupComponent from './../../components/partialComponents/registerSignInComponent/signupComponent';
import SigninComponent from './../../components/partialComponents/registerSignInComponent/signinComponent';
import StyleContextProvider from './../../components/contextAPI/styleContext';
import axios from 'axios';
const external = require("../../api/config.property");
export default class Register extends React.Component {
    constructor(props){
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            url : process.env.url,
            title : "Create an iShop account",
            subTitle : "Already have an account ?",
            signUp : true
        }
    }
    signUp(){
        this.setState({
            title : "Create an iShop account",
            subTitle : "Already have an account ?",
            signUp : !this.state.signUp
        });
    }
    signIn(){
        console.log(process.env.REACT_APP_API_ROOT);
        this.setState({
            title : "Sign-in to your ishop account",
            subTitle : "Don't have an account yet ?",
            signUp : !this.state.signUp
        });
        /*axios.get(`${external.API_ROOT_URL}/Users`)
        .then(res => {
            debugger;
          const persons = res.data;
          console.log(res.data)
        }).catch(err => {
            console.error(err);
        })*/
    }
    render() {
        return (
             <Wrapper title = "iShop Registeration/Login" description = "iShop Registeration/Login">
            <StyleContextProvider>
             <div className="container __registeration">
                 <div className="row">
                     <div className="col-xs-12">
                       <h2 className = "text-center __registeration __registeration_header"> { this.state.title}  </h2>
                        <h4 className = "text-center __registeration __registeration_sign_in"> { this.state.subTitle }  { this.state.signUp ? <a onClick={() => this.signIn()}> Sign In </a> 
                             : <a onClick={() => this.signUp()}> Sign Up </a>
                        } </h4>
                         { this.state.signUp ? <SignupComponent />: <SigninComponent /> }
                     </div>
                 </div>
             </div>
             </StyleContextProvider>
            </Wrapper>
        )
    }
}
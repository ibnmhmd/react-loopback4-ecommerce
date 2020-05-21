
let valid = false , forwardToNextValidator = true;

const digitsValidator = (field) => {
    const { value , validationRules , ref , name} = field ;
    const pattern = /^\d+$/;
    const result = pattern.test(value);
    if(!result){
        ref.classList.remove("valid");
        ref.classList.add("in-valid");
        forwardToNextValidator = false;
        valid = false ;
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        valid = true ;
        forwardToNextValidator = true; 
    }
    return {valid , executor : "numberValidator" , forwardToNextValidator , name , ref , value};
}
const minLength = (field) => {
    const { value , validationRules , ref , name } = field ;
    if(value.length < parseInt(validationRules.minLength)){
        ref.classList.remove("valid");
        ref.classList.add("in-valid");   
        forwardToNextValidator = false;  
        valid = false ; 
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        valid = true ;
        forwardToNextValidator = true;  
    }
    return {valid , executor : "minLength" , forwardToNextValidator , name, value , ref };
}

const maxLength = (field) => {
    const { value , validationRules , ref , name} = field ;
    if((value.length > parseInt(validationRules.maxLength) )){
        ref.classList.remove("valid");
        ref.classList.add("in-valid");
        forwardToNextValidator = false;
        valid = false ;
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        valid = true ;
        forwardToNextValidator = true; 
    }
    return {valid , executor : "maxLength" , forwardToNextValidator, name, value , ref};
}

const emailValidator = (field) => {
    const { value , validationRules , ref , name} = field ;
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(value);
    if(!result){
        ref.classList.remove("valid");
        ref.classList.add("in-valid");
        forwardToNextValidator = false;
        valid = false ;
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        valid = true ;
        forwardToNextValidator = true; 
    }
    return {valid , executor : "emailValidator" , forwardToNextValidator , name , ref , value};
}

const passwordValidator = (field) => {
    const { value , validationRules , ref ,name } = field ;
    let pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    const result = pattern.test(value);
    if(!result){
        ref.classList.remove("valid");
        ref.classList.add("in-valid");
        forwardToNextValidator = false;
        valid = false ;
    }else{
        ref.classList.remove("in-valid");
        ref.classList.add("valid");
        valid = true ;
        forwardToNextValidator = true; 
    }
    return {valid , executor : "passwordValidator" , forwardToNextValidator , name, value , ref};
}
/* catchError = (ref , action , class ) => 
{  
    'use strict';
    if("add" == action) {
        ref.classList.add(class);
    }
    if("remove" == action) {
        ref.classList.remove(class);
    }
};*/

module.exports = {
    minLength,
    maxLength,
    emailValidator,
    passwordValidator,
    digitsValidator
}
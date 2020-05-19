import  React , { useState } from 'react';

var validationRule = require("./validationRules")

class Validator {
     
     Validator(){
        this.response = [];
     }
   validate(event){
    const candidateFields = this.getFormCandidates(event);
     return candidateFields.map((field , index) => {
        if(field.required && field.validate) {
            return this.executeValidations(field);
        }else{
            field.valid = true;
            field.executor = "N/A";
            this.response = [];
            this.response.push(field);
            return this.response;
        }
    });
   }

   getFormCandidates(event){
    const fields = new Array();
    const element = event.srcElement;
    if(element.dataset.formdata){
        fields.push({...JSON.parse(element.dataset.formdata), value : element.value, ref : element});
    }
   /**** for bulk validation *****/
    return fields ;
  }
   executeValidations(field) {
       const rules = field.validationRules ? Object.keys(field.validationRules) : [];
       let response = [] , validationResp = {};
        for(let elem of rules ){
            if(validationRule[elem]){
                validationResp = validationRule[elem](field);
                /*** push in the valid validation response ***/
                response.push(validationResp);
                if(!validationResp.forwardToNextValidator){
                    /*** don't return any thing if the field isn't valid ***/
                    response = [];
                    break;
                }
            }
        }
    return response;
  }

  processFieldPostValidation (response , field , state , callBack) {
    let _state = state;
    if(response[0].length !== 0){
      let { value , name  } = response[0][0];
      _state[name] = value; 
      _state.id = this.getRandomInt(1 , 1000); 
    }else{
      if(_state[field.name]){
        delete _state[field.name];
      }
    }
    callBack(_state);
  }
  getRandomInt (min, max)  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  disabledElem (ref){
      if(null !== ref){
        ref.current.classList.add("disabled");
      } 
  }
 enableElem(ref) {
     if(null !== ref){
        ref.current.classList.remove("disabled");
     }
  }
}

export default Validator;
const axios = require('axios');
export default class Service {

    async post (params) {
        const headers = params.headers ? params.headers : { 'Content-Type': 'application/json' };
         const response = await axios.post(params.url , params.requestBody, { headers }  );
         return await response;
    }
    async get (params) {
        const headers = params.headers ? params.headers : { 'Content-Type': 'application/json' };
        const response = await axios.get(params.url, headers );
        return await response;
    }

    sessionTimeout(response){
        if(response &&!response.success && response.serverMessage && response.serverMessage.indexOf("expired") != -1){
          return true;
        }else{
            return false;
        }
    }

}
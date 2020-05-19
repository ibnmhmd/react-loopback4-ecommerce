const axios = require('axios');
export default class Service {

    async post (params) {
         console.log(params);
         const response = await axios.post(params.url , params.requestBody);
         return await response;
    }
    async get (params) {
        const response = await axios.get(params.url, params.headers);
        return await response;
    }

}
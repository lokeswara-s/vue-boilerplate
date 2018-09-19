import axios from 'axios'
import Config from '../../config'
import Logger from './Logger'

class Http {

    constructor() {
        this.logging = Config.logging
        this.logger = new Logger()
    }

    post(url, headers, payload){
        return response
    }

    get(url, headers, payload){
        const data = this.makeRequest('get', url, {},{})
    }

    makeRequest(method, url, headers, data){

        const response =  axios.get(Config.baseUrl + url)
        response
            .then((response_payload) => {
                if(this.logging) this.logger.log(response_payload, 'HTTP')

            })
            .catch((error_payload)=>{
                if(this.logging) this.logger.log(error_payload, 'HTTP')
            })
    }
}

export default Http
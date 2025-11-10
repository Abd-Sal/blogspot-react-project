import { APIConfig } from "../API/APIConfig";

export const OtherService = {
    TESTIMONTIAL: function(){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.TESTIMONIAL}`
        return fetch(`${url}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    FAQ_LIST: function(){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.FAQ_LIST}`
        return fetch(`${url}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    }
}
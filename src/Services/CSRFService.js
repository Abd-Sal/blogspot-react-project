import { APIConfig } from "../API/APIConfig";

export const CSRFService = {
    GET_CSRF_TOKEN: function(){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.GET_CSRF_TOKEN}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            if(response.ok)
                return response;
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
}
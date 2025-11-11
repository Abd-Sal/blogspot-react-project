import { APIConfig } from "../API/APIConfig"

export const AuthService = {
    LOGIN: function({username, password}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.AUTH.AUTH_LOGIN}`
        return fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${username}`,
                pass: `${password}`
            })
        }).then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    REGISTER: function({registrationData={}}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.AUTH.AUTH_REGISTRATION}`
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(registrationData)
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    LOGOUT: function({token}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.AUTH.AUTH_LOGOUT(token)}`
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })

    },
    DELETE_USER: function({userID, csrfToken}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.AUTH.DELETE_USER(userID)}`
        return fetch(`${url}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRF-Token': `${csrfToken}`
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    }
}
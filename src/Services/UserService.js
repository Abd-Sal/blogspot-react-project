import { APIConfig } from "../API/APIConfig"
import { Base64Converter } from "../HelpTools/Base64Converter"

export const UserService = {
    CURRENT_PROFILE: function({userID, username, password}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.CURRENT_PROFILE(userID)}`
        return fetch(`${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Base64Converter(`${username}:${password}`)
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    USERS_LIST: function({username, password}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.USER_LIST}`
        return fetch(`${url}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Base64Converter(`${username}:${password}`)
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    EDIT_USER: function({userID, username, password, csrfToken, data}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.EDIT_USER(userID)}`
        return fetch(`${url}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Base64Converter(`${username}:${password}`),
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    USER_PICTURE: function({username, password, csrfToken, data, fileName}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.USER_PICTURE}`
        return fetch(`${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': Base64Converter(`${username}:${password}`),
                'X-CSRF-Token': csrfToken,
                'Content-Disposition': `file; filename="${fileName}"`
            },
            body: data
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    }
}
import { APIConfig } from "../API/APIConfig"

export const UserService = {
    CURRENT_PROFILE: function({userID, credintials}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.CURRENT_PROFILE(userID)}`
        return fetch(`${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': credintials
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    USERS_LIST: function({credintials}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.USER_LIST}`
        return fetch(`${url}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': credintials
            }
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    EDIT_USER: function({userID, credintials, csrfToken, data}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.EDIT_USER(userID)}`
        return fetch(`${url}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': credintials,
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
    USER_PICTURE: function({credintials, csrfToken, data, fileName}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.USER.USER_PICTURE}`
        return fetch(`${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': credintials,
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
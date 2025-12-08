import { APIConfig } from "../API/APIConfig";

export const CategoryService = {
    TAGS: function(){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.CATEGORIES.TAGS}`
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
    CATEGORIES: function(){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.CATEGORIES.CATEGORIES}`
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
    FAQ_CATEGORIES: function(){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.CATEGORIES.FAQ_CATEGORIES}`
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
    HOW_DID_YOU_FIND_US: function(){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.CATEGORIES.HOW_DID_YOU_FIND_US}`
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
    FAQs:({options={}})=>{
        const params = new URLSearchParams(); 
        options.id >= 0 && params.append('category', options.id)
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.FAQ_LIST}`
        url = `${url}?${params.toString()}`
        console.log(url);        
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
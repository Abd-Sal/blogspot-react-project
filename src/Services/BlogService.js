import { APIConfig } from "../API/APIConfig";
import { Base64Converter } from "../HelpTools/Base64Converter"

export const BlogService = {
    CREATE_BLOG: function({username, password, csrfToken, data}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.CREATE_BLOG}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Base64Converter(`${username}:${password}`),
                'X-CSRF-Token': `${csrfToken}`
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    BLOG_LIST: function({username, password}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.BLOG_LIST}`
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
    CURRENT_USER_ARTICLES: function({username, password}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.CURRENT_USER_ARTICLES}`
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
    ARTICLE_DETAILS: function({username, password, articleID}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.ARTICLE_DETAILS(articleID)}`
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
    ARTICLE_UPDATE: function({username, password, articleID, csrfToken, data}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.UPDATE_ARTICLE(articleID)}`
        return fetch(`${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Base64Converter(`${username}:${password}`),
                'X-CSRF-Token': `${csrfToken}`
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    ARTICLE_DELETE: function({username, password, articleID, csrfToken}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.DELETE_ARTICLE(articleID)}`
        return fetch(`${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Base64Converter(`${username}:${password}`),
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
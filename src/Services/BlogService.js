import { APIConfig } from "../API/APIConfig";
import { Base64Converter } from "../HelpTools/Base64Converter"

export const BlogService = {
    CREATE_BLOG: function({credintials, csrfToken, data}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.CREATE_BLOG}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': credintials,
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
    BLOG_LIST: function({credintials, options}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.BLOG_LIST}`
        const params = new URLSearchParams(); 
        options.page >= 0 && params.append('page', options.page)
        options.pageSize && params.append('items_per_page', options.pageSize)
        url = `${url}?${params.toString()}`
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
    CURRENT_USER_ARTICLES: function({credintials}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.CURRENT_USER_ARTICLES}`
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
    ARTICLE_DETAILS: function({credintials, articleID}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.ARTICLE_DETAILS(articleID)}`
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
    ARTICLE_UPDATE: function({credintials, articleID, csrfToken, data}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.UPDATE_ARTICLE(articleID)}`
        return fetch(`${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': credintials,
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
    ARTICLE_DELETE: function({credintials, articleID, csrfToken}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.BLOG.DELETE_ARTICLE(articleID)}`
        return fetch(`${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': credintials,
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
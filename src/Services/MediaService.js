import { APIConfig } from "../API/APIConfig";

export const MediaService = {
    UPLOAD_SINGLE_IMAGE: function({credintials, csrfToken, formData, fileName}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.IMAGE_UPLOAD}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': credintials,
                'X-CSRF-Token': `${csrfToken}`,
                'Content-Disposition': `file; filename="${fileName}"`
            },
            body: formData
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    UPLOAD_MULTIPLE_IMAGES: function({credintials, csrfToken, formData, fileName}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.IMAGES_UPLOAD}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': credintials,
                'X-CSRF-Token': `${csrfToken}`,
                'Content-Disposition': `file; filename="${fileName}"`
            },
            body: formData
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    }
}
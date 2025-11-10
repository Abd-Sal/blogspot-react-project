import { APIConfig } from "../API/APIConfig";
import { Base64Converter } from "../HelpTools/Base64Converter"

export const MediaService = {
    UPLOAD_SINGLE_IMAGE: function({username, password, csrfToken, formData}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.IMAGE_UPLOAD}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': Base64Converter(`${username}:${password}`),
                'X-CSRF-Token': `${csrfToken}`,
                'Content-Disposition': 'file; filename="banner6.jpg"'
            },
            body: formData
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    UPLOAD_MULTIPLE_IMAGES: function({username, password, csrfToken, formData}){
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.IMAGES_UPLOAD}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': Base64Converter(`${username}:${password}`),
                'X-CSRF-Token': `${csrfToken}`,
                'Content-Disposition': 'file; filename="FILENAM.jpg"'
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
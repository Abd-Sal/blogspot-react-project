import { APIConfig } from "../API/APIConfig";

export const MediaService = {
    UPLOAD_SINGLE_IMAGE: function({credintials, csrfToken, formData, fileName}){
        const _formData = new FormData();
        _formData.append('field_image', formData)
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.IMAGE_UPLOAD}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': credintials,
                'X-CSRF-Token': `${csrfToken}`,
                'Content-Disposition': `file; filename="${fileName}"`
            },
            body: _formData
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    },
    UPLOAD_MULTIPLE_IMAGES: function({credintials, csrfToken, formData, filesNames}){
        const _formData = new FormData();
        [...formData].length > 1 ?
        [...formData].forEach((item, index)=>{
            _formData.append(`field_gallery[${index}]`, item)
        })
        :
        _formData.append(`field_gallery`, [...formData][0])
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.IMAGES_UPLOAD}`
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': credintials,
                'X-CSRF-Token': `${csrfToken}`,
                'Content-Disposition': `file; filename="${[...filesNames].length > 1 ? [...filesNames].join(',') : filesNames[0]}"`
            },
            body: _formData
        })
        .then((response)=>{
            if(response.ok)
                return response.json();
            return response.json().then((serverErrorMsg)=>{throw new Error(serverErrorMsg.message)})
        })
    }
}
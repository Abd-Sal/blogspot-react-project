import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap"
import Alert from 'react-bootstrap/Alert';
import { AuthContext } from "../Context/AuthContext";
import { RiImageAddFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { CategoryService } from "../Services/CategoryService"

const CreateArticleForm = () => {
    //STATES
    const {authInfo, isInitialized, setAuthInfo} = useContext(AuthContext)
    
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const [failedMsgCategories, setFailedMsgCategories] = useState('')
    const [categories, setCategories] = useState([])

    const [isLoadingTags, setIsLoadingTags] = useState(false)
    const [failedMsgTags, setFailedMsgTags] = useState('')
    const [tags, setTags] = useState([])

    const [selectedTags, setSelectedTags] = useState([])

    const [requestBody, setRequestBody] = useState(
        {
            "type": [{
                "target_id": "blog"
            }],
            "title": [{
                "value": ""
            }],
            "body": [{
                "value": "",
                "format": "basic_html"
            }],
            "field_image": [],
            "field_gallery": [],
            "field_tags": [],
            "field_category": []
        }
    )
    const [tagSelectorValue, setTagSelectorValue] = useState('')

    const primaryImageBtnRef = useRef()
    const imageGalleryAddRef = useRef()
    // const tagSelectorRef = useRef()

    //FUNCTIONs
    const getCategories = ()=>{
        setIsLoadingCategories(true);
        setFailedMsgCategories('')
        CategoryService.CATEGORIES()
        .then((data)=>{
            setCategories(data);
        })
        .catch((err)=>{
            setFailedMsgCategories(err.message)
        })
        .finally(()=>{
            setIsLoadingCategories(false);
        })
    }
    const getTags = ()=>{
        setIsLoadingTags(true);
        setFailedMsgTags('')
        CategoryService.TAGS()
        .then((data)=>{
            setTags(data);
        })
        .catch((err)=>{
            setFailedMsgTags(err.message)
        })
        .finally(()=>{
            setIsLoadingTags(false);
        })
    }

    const handleTitleChange = (e)=>{
        setRequestBody({
            ...requestBody,
            title: [{
                "value": e.target.value
            }]
        })
    }
    const handleBodyChange = (e)=>{
        setRequestBody({
            ...requestBody,
            body: [{
                "value": e.target.value,
                "format": "basic_html"
            }]
        })
    }
    const handleTagChange = (e)=>{        
        if(!e.target.value) return;
        let jsonValue = JSON.parse(e.target.value)
        let checkExist = selectedTags.filter(item => item.target_id === jsonValue.target_id)
        if(checkExist.length === 0){
            let temp = selectedTags
            temp.push(jsonValue)
            setSelectedTags(temp)
            setTagSelectorValue('')
        }
    }
    const handleDeleteSelectedTag = ({id, name})=>{        
        setSelectedTags(selectedTags.filter(item => item.target_id !== id))
    } 
    const handlePrimaryImageChange = ()=>{}
    const handleAddImageGallery = ()=>{}


    //EFFECTS
    const initializeCategories = useMemo(()=>{
        if(categories.length === 0)
            getCategories();
    }, [categories])

    const initializeTags = useMemo(()=>{
        if(tags.length === 0)
            getTags();
    }, [tags])


    if(isInitialized)
    return (
        <>
            <Row>
                <Col lg={12} className="bg-white rounded-5 pt-5 pb-5 ps-4 pe-4 mb-5 border border-gray">
                    <h2 className="mb-5">Write Your Article</h2>
                    <form 
                        action=""
                        onSubmit={(e)=>{
                            e.preventDefault();
                        }}    
                    >
                        <div className="d-flex flex-column justfiy-content-center align-items-start gap-3 w-100">
                            {/* title field */}
                            <div className="w-100 title-field">
                                <label
                                    htmlFor="title"
                                    className="form-label"
                                >Title</label>
                                <input 
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="form-control"
                                    onInput={handleTitleChange}
                                />
                            </div>

                            {/* category field */}
                            <div className="w-100">
                                <label 
                                    htmlFor="category"
                                    className="form-label"    
                                >Article Category</label>
                                {
                                    isLoadingCategories &&
                                    <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                                        <Spinner animation="grow" className="bg-main-color"/>
                                    </div>
                                }
                                {
                                    failedMsgCategories &&
                                    <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                                        <Alert key={'danger'} variant={'danger'} className="">
                                            {failedMsgCategories}
                                        </Alert>
                                    </div>
                                }
                                {
                                    categories.length > 0 &&
                                    <select 
                                        name="category"
                                        id="category"
                                        className="form-select"
                                        defaultChecked={`${categories[0].id}`}
                                        onChange={(e)=>{}}
                                    >
                                        {
                                            categories.map((item)=>(
                                                <option 
                                                    key={`category-${item.id}`}
                                                    value={`category-${item.id}`}
                                                >{item.name}</option>
                                            ))
                                        }
                                    </select>
                                }
                            </div>

                            {/* primary image field */}
                            {/* <label htmlFor="">Primary Image</label> */}
                            <div className="primary-image-field hight-lite w-100 rounded-3 p-3 d-flex flex-column justify-content-center align-items-center">
                                <div
                                    className="cursor-pointer h-100 rounded-2 w-100 d-flex justify-content-center align-items-center bg-gray"
                                    onClick={()=>{primaryImageBtnRef.current.click()}}
                                >
                                    <RiImageAddFill fontSize={75} color="text-white"/>
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start gap-1 w-100 pt-4">
                                    <p className="mb-0">Please upload image 1000 X 600, this image will set as primary image for your article.</p>
                                    <Alert key={'danger'} variant={'danger'} className="w-100 d-flex justify-content-start align-items-center gap-3">
                                        <button
                                            className="btn btn-danger"
                                            onClick={()=>{primaryImageBtnRef.current.click()}}
                                        >Choose File</button>
                                        <input
                                            id="primary-image-file"
                                            style={{display:"none"}}
                                            ref={primaryImageBtnRef}
                                            type="file"
                                            accept=".png, .jpg, .jpeg"
                                            className="btn btn-danger"
                                            onChange={handlePrimaryImageChange}
                                        />
                                        <p className="mb-0">No File Chosen</p>
                                    </Alert>
                                </div>
                            </div>

                            {/* body content field */}
                            <div className="w-100">
                                <label 
                                    htmlFor="body"
                                    className="form-label"
                                >Article Body</label>
                                <textarea 
                                    id="body"
                                    name="body"
                                    className="form-control"
                                    style={{
                                        minHeight: '200px',
                                        maxHeight: '1200px',
                                        height: '500px',
                                        overflowY: 'auto',
                                    }}
                                    onChange={handleBodyChange}
                                ></textarea>
                            </div>
                            
                            {/* Gallery Field */}
                            <div className="w-100">
                                <div
                                    className="cursor-pointer rounded-3 gallery-images bg-gray w-25 d-flex justify-content-center align-items-center"
                                    onClick={()=>{imageGalleryAddRef.current.click()}}
                                >
                                    <RiImageAddFill fontSize={75} color="text-white"/>
                                </div>
                                <input 
                                    type="file"
                                    id="add-image"
                                    style={{display:"none"}}
                                    ref={imageGalleryAddRef}
                                    accept=".png, .jpg, .jpeg"
                                    onChange={handleAddImageGallery}
                                    ></input>
                            </div>

                            {/* Tags Field */}
                            <div className="w-100">
                                <div className="d-flex flex-column">
                                    <label htmlFor="tags">Tags</label>
                                    {
                                        selectedTags.length > 0 &&
                                        <div className="w-100 d-flex justify-content-start align-items-center gap-3">
                                            {
                                                selectedTags.map((item, index)=>(
                                                    <div
                                                        id={item.target_id ?? 'unde'}
                                                        key={index}
                                                        className="ps-3 pe-3 bg-primary text-white rounded-5 d-flex justify-content-center align-items-center"
                                                    >
                                                        <span className="m-0">{item.name}</span>
                                                        <button 
                                                            className="btn border-0"
                                                            onClick={()=>{handleDeleteSelectedTag({id: item.target_id, name: item.name})}}
                                                        ><IoMdClose fontSize={20}/></button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>


                                <label htmlFor="tags" className="mt-5">Select Tags</label>
                                {
                                    isLoadingTags &&
                                    <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                                        <Spinner animation="grow" className="bg-main-color"/>
                                    </div>
                                }
                                {
                                    failedMsgTags &&
                                    <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                                        <Alert key={'danger'} variant={'danger'} className="">
                                            {failedMsgTags}
                                        </Alert>
                                    </div>
                                }
                                {
                                    tags.length > 0 &&
                                    <select
                                        id="tags"
                                        name="tags"
                                        className="form-select"
                                        defaultChecked={''}
                                        value={tagSelectorValue}
                                        onChange={handleTagChange}
                                    >
                                        <option value="">...</option>
                                        {
                                            tags.map((item)=>(
                                                <option 
                                                    id={item.id}
                                                    key={`tag-${item.id}`}
                                                    value={`${JSON.stringify({target_id: item.id, name: item.name})}`}
                                                >{item.name}</option>
                                            ))
                                        }
                                    </select>
                                }
                            </div>

                            <hr className="w-100"/>
                            {/* Submit */}
                            <div className="w-100 d-flex justify-content-end align-items-center gap-5">
                                <button
                                    className="btn btn-danger ps-5 pe-5"
                                >Cancel</button>
                                <button
                                    className="btn btn-success ps-5 pe-5"
                                >Publish</button>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    )

    return(<></>)
}

export default CreateArticleForm
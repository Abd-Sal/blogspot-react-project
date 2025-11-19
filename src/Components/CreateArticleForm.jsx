import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap"
import Alert from 'react-bootstrap/Alert';
import { AuthContext } from "../Context/AuthContext";
import { RiImageAddFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { CategoryService } from "../Services/CategoryService"
import { EmptyObjectChecker } from "../HelpTools/EmptyObjectChecker";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { BlogService } from "../Services/BlogService"
import { MediaService } from "../Services/MediaService"
import { CSRFService } from "../Services/CSRFService"
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const CreateArticleForm = () => {
    //STATES
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const {authInfo, isInitialized, setAuthInfo} = useContext(AuthContext)
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const [failedMsgCategories, setFailedMsgCategories] = useState('')
    const [categories, setCategories] = useState([])
    const [isLoadingTags, setIsLoadingTags] = useState(false)
    const [failedMsgTags, setFailedMsgTags] = useState('')
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [isLoading, setIsLoading] = useState(false) 
    const [failedMsg, setFailedMsg] = useState('') 
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
    const [CSRFToken, setCSRFToken] = useState('')
    const [tagSelectorValue, setTagSelectorValue] = useState('')
    const [primaryImage, setPrimaryImage] = useState({})
    const [galleryImages, setGalleryImages] = useState([])
    const [isUploadImagesSuccess, setIsUploadImagesSuccess] = useState({
        'primary': false,
        'gallery': false
    })
    const primaryImageBtnRef = useRef()
    const imageGalleryAddRef = useRef()

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
            setSelectedTags([...selectedTags, jsonValue])
            setTagSelectorValue('')
        }
    }

    useEffect(()=>{
        let _tags = []
        selectedTags.map((item, index)=>{
            _tags.push({
                "target_id": item.id
            })
        })
        setRequestBody({
            ...requestBody,
            "field_tags": tags
        })
    }, [selectedTags])

    const handleDeleteSelectedTag = ({id, name})=>{
        setSelectedTags(selectedTags.filter(item => item.target_id !== id))
    }

    const handlePrimaryImageChange = (e)=>{
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Please select an image file only!');
            e.target.value = ''; 
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setPrimaryImage({
                fileName: file.name,
                binary: file,
                src: reader.result 
            });
        };
        reader.readAsDataURL(file);
    }

    const handleAddImageGallery = async (e) => {
        const files = e.target.files;
        if (!files?.length) return;

        const fileArray = Array.from(files);
        const invalidFiles = fileArray.filter(file => !file.type.startsWith('image/'));
        
        if (invalidFiles.length > 0) {
            alert('Please select only image files!');
            e.target.value = '';
            return;
        }

        const imagePromises = fileArray.map(file => 
            new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve({
                    id: `gallery-${Date.now()}-${Math.random()}`,
                    fileName: file.name,
                    binary: file,
                    src: reader.result
                });
                reader.readAsDataURL(file);
            })
        );

        try {
            const newImages = await Promise.all(imagePromises);
            setGalleryImages(prev => [...prev, ...newImages]);
        } catch (error) {
            console.error('Error processing images:', error);
        }

        e.target.value = '';
    }

    const handleDeleteGalleryImage = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setGalleryImages(prev => prev.filter(item => item.id !== e.target.id));
    }

    const isReadyToPublish = ()=>
        requestBody.title[0].value &&
        requestBody.body[0].value &&
        requestBody.field_category.length > 0 &&
        requestBody.field_category[0].target_id &&
        requestBody.type[0].target_id &&
        !EmptyObjectChecker(primaryImage);

    const getCSRFToken = ()=>{
        if(CSRFToken.length)return;
        setIsLoading(true)
        setFailedMsg('')
        CSRFService.GET_CSRF_TOKEN()
        .then((data)=>{
             setCSRFToken(data)
             setAuthInfo({
                ...authInfo,
                "csrf_token": data
             })
        })
        .catch(err=>{
            setFailedMsg(err.message)
            setIsLoading(false);
        })
        .finally(()=>{})
    }

    const uploadPrimaryImage = ()=>{
        MediaService.UPLOAD_SINGLE_IMAGE({
            credintials: authInfo.credintials,
            csrfToken: CSRFToken,
            fileName: `${primaryImage.fileName}`,
            data: primaryImage.binary
        })
        .then((data)=>{
            console.log('single images');
            console.log(data);
            setRequestBody({
                ...requestBody,
                "field_image":[
                    {"target_id": data.fid[0].value}
                ]
            })
            setIsUploadImagesSuccess({
                ...isUploadImagesSuccess,
                'primary': true
            })
        })
        .catch((err)=>{
            setFailedMsg(err.message);
            setIsLoading(false)
        })
        .finally(()=>{
        })
    }

    const uploadGalleryImages = ()=>{
        galleryImages.length === 0 ?
        setIsUploadImagesSuccess({
            ...isUploadImagesSuccess,
            'gallery': true
        })
        :
        MediaService.UPLOAD_MULTIPLE_IMAGES({
            credintials: authInfo.credintials,
            csrfToken: CSRFToken,
            filesNames: galleryImages.map((item)=> item.fileName),
            formData: galleryImages.map((item)=> item.binary)
        })
        .then((data)=>{
            console.log('mullti images');
            console.log(data);
            let field_gallery = [];
            [...data.fid].map((item)=>{field_gallery.push({'target_id': item.value})})
            setRequestBody({
                ...requestBody,
                "field_gallery": field_gallery
            })
            setIsUploadImagesSuccess({
                ...isUploadImagesSuccess,
                'gallery': true
            })
        })
        .catch((err)=>{
            setFailedMsg(err.message);
            setIsLoading(false)
        })
        .finally(()=>{
        })
    }

    const sendData = ()=>{
        BlogService.CREATE_BLOG({
            credintials: authInfo.credintials,
            csrfToken: CSRFToken,
            data: requestBody
        })
        .then((data)=>{
            console.log(data);
            navigate('/me/articles', { replace: true })
        })
        .catch((err)=>{
            setFailedMsg(err.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    //EFFECTS
    const initializeCategories = useMemo(()=>{
        if(categories.length === 0)
            getCategories();
    }, [categories])

    const initializeTags = useMemo(()=>{
        if(tags.length === 0)
            getTags();
    }, [tags])

    useEffect(()=>{
        if(CSRFToken && !EmptyObjectChecker(primaryImage))
            uploadPrimaryImage()
    }, [CSRFToken])

    useEffect(()=>{
        if(CSRFToken){
            isUploadImagesSuccess.primary &&
            isUploadImagesSuccess.gallery &&
            sendData();
            !isUploadImagesSuccess.primary && uploadPrimaryImage()
            !isUploadImagesSuccess.gallery && uploadGalleryImages()
            console.log("#2");
        }
    }, [isUploadImagesSuccess])
    
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);
    
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
                                        defaultChecked={``}
                                        onChange={(e)=>{
                                            setRequestBody({
                                                ...requestBody,
                                                field_category: [
                                                    {"target_id": e.target.value}
                                                ]
                                            })
                                        }}
                                    >
                                        <option 
                                            key={`empty-category`}
                                            value=""
                                        >...</option>
                                        {
                                            categories.map((item)=>(
                                                <option 
                                                    key={`category-${item.id}`}
                                                    value={`${item.id}`}
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
                                    className="cursor-pointer h-100 rounded-2 w-100 d-flex justify-content-center align-items-center"
                                    onClick={()=>{
                                        if(EmptyObjectChecker(primaryImage))
                                        primaryImageBtnRef.current.click()
                                    }}
                                >
                                {
                                    EmptyObjectChecker(primaryImage) ?
                                    <RiImageAddFill fontSize={75} color="text-white"/>
                                    :
                                    <img 
                                        src={primaryImage.src}
                                        alt="primary image"
                                        data-fancybox="primary"    
                                    />
                                }
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
                            <div className="w-100 d-flex flex-wrap justify-content-start align-items-center">
                                {
                                    galleryImages.length > 0 &&
                                    galleryImages.map((item, index)=>(
                                        <div
                                            key={`gallery-image-${index}`}
                                            className="cursor-pointer border border-gray rounded-3 gallery-images w-25 d-flex justify-content-center align-items-center position-relative p-1"
                                        >
                                            <img 
                                                src={item.src}
                                                alt="Gallery Image"
                                                className="h-100 rounded-2"
                                                data-fancybox="gallery"    
                                            />
                                            <button
                                                id={item.id}
                                                className="btn position-absolute end-0 top-0 p-2"
                                                onClick={handleDeleteGalleryImage}
                                            ><IoMdClose fontSize={20} style={{backgroundColor:'#c44551', color: 'white', borderRadius: '50%'}}/></button>
                                        </div>
                                    ))
                                }
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
                                    multiple
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
                                                        <span className="m-0">#{item.name.split(" ").join("_")}</span>
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
                            <div className="d-flex justify-content-center align-items-center w-100">
                                {
                                    failedMsg &&
                                    <Alert key={'danger'} variant={'danger'} className="">
                                        {failedMsg}
                                    </Alert>
                                }
                                {
                                    isLoading &&
                                    <Spinner animation="grow" className="bg-main-color"/>
                                }
                            </div>
                            <div className="w-100 d-flex justify-content-end align-items-center gap-5">
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header>
                                    <Modal.Title>Discard Changes</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>are you sure?</Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Stay
                                    </Button>
                                    <Button variant="danger" onClick={()=>{
                                        navigate('/articles', {replace: true})
                                    }}>
                                        Leave Page
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                <button
                                    className="btn btn-danger ps-5 pe-5"
                                    onClick={handleShow}
                                >Cancel</button>
                                <button
                                    disabled={
                                        isLoading ||
                                        isLoadingCategories ||
                                        isLoadingTags ||
                                        !isReadyToPublish()
                                    }
                                    onClick={getCSRFToken}
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
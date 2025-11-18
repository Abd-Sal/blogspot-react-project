import { useRef, useEffect, useContext, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap"
import {  FaSave, FaEdit } from "react-icons/fa";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { AuthContext } from "../Context/AuthContext";
import { UserService } from "../Services/UserService"
import Alert from 'react-bootstrap/Alert';
import { MdDeleteForever } from "react-icons/md";
import { EmptyObjectChecker } from "../HelpTools/EmptyObjectChecker";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CSRFService } from "../Services/CSRFService"

const ProfileSettings = () => {
    ///STATES AND HOOKS
    const {authInfo, isInitialized, setAuthInfo} = useContext(AuthContext)
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [isChanged, setIsChanged] = useState({
        "firstName" : false,
        "lastName" : false,
        "phoneNumber" : false,
        "gender" : false
    });
    const imageRef = useRef(null)
    const [imageSrc, setImageSrc] = useState(null);
    const [fileName, setFileName] = useState('')
    const [newData, setNewData] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [failedMsg, setFailedMsg] = useState('')
    const formFile = useRef(null)
    const [isSuccess, setIsSuccess] = useState(false)
    const [csrfToken, setCsrfToken] = useState('')
    const [imageBinary, setImageBinary] = useState(null);
    const [uploadData, setUploadData] = useState(false);
    const [uploadImage, setUploadImage] = useState(false)
    const navigate = useNavigate()

    ///FUNCTIONS
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageBinary(file);
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Please select an image file only!');
            e.target.value = ''; 
            return;
        }
        
        const reader = new FileReader();
        reader.onload = () => {
        setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
        setFileName(file.name)
    };

    const deleteImage = ()=>{
        if(imageRef.current)
            imageRef.current.src='../../src/assets/profile.png'
        setImageSrc(null);
        setNewData({
            ...newData,
            "user_picture":[]
        })       
    }

    const updateData = ()=>{
        if(Object.keys(isChanged).filter(key => isChanged[key]).length !== 0 || !EmptyObjectChecker(newData)){           
            setFailedMsg('')
            setIsLoading(true)
            UserService.EDIT_USER({
                userID: authInfo.current_user.uid,
                credintials: authInfo.credintials,
                csrfToken: csrfToken,
                data: newData
            })
            .then((data)=>{
                setUploadData(true);
            })
            .catch((err)=>{
                setFailedMsg(err.message)
            })
            .finally(()=>{
                setIsLoading(false)
            })
        }
    }
    
    const updateImage = ()=>{
        if(imageSrc){
            setFailedMsg('')
            setIsLoading(true)
            UserService.USER_PICTURE({
                credintials: authInfo.credintials,
                csrfToken: csrfToken,
                fileName: `${fileName}`,
                data: imageBinary
            })
            .then((data)=>{
                setNewData({
                    ...newData,
                    "user_picture":[{"target_id": data.fid[0].value}]
                })                
                setUploadImage(true);
            })
            .catch((err)=>{
                setFailedMsg(err.message);
            })
            .finally(()=>{
                setIsLoading(false);
            })
        }
    }

    const changeData = (oldValue, newValue, key)=>{
        if(newValue !== oldValue){
            setNewData({
                ...newData,
                [key]:[
                    { "value": newValue}
                ]
            })
        }else{
            setNewData(prev => {
                const { [key]: removedKey, ...rest } = prev; 
                return rest;
            })
        }
    }

    const changing = (oldValue, newValue, key)=>{
        if(oldValue !== newValue)
            setIsChanged(prev => ({
                ...prev,
                [key]: true
            }));
        else
            setIsChanged(prev => ({
                ...prev,
                [key]: false
            }));
    }

    const getNewProfileData = () =>{
        UserService.CURRENT_PROFILE({credintials: authInfo.credintials, userID: authInfo.current_user.uid})
        .then((data)=>{
            setAuthInfo({
                ...authInfo,
                userInfo:data,
            })
            setIsSuccess(true);
        })
        .catch((err)=>{
            console.log(err.message);
        })
        .finally(()=>{
        })
    }

    const getCSRFToken = ()=>{
        if(csrfToken.length)return;
        setIsLoading(true)
        setFailedMsg('')
        CSRFService.GET_CSRF_TOKEN()
        .then((data)=>{
             setCsrfToken(data)
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

    
    //EFFECTS
    useEffect(()=>{
        if(uploadImage)
            updateData();
    }, [uploadImage])

    useEffect(()=>{
        if(uploadData)
            setUpdateSuccess(true);
    }, [uploadData])

    useEffect(()=>{
        if(csrfToken){
            if(imageSrc !== null)
                updateImage();
            else if(Object.keys(isChanged).filter(key => isChanged[key]).length !== 0 || Object.keys(newData).includes('user_picture'))
                updateData()
        }
    }, [csrfToken])

    useEffect(()=>{
        if(updateSuccess){
            getNewProfileData();
        }
    }, [updateSuccess])

    useEffect(() => {
        if(authInfo.userInfo.user_picture.length > 0)
            setNewData({
                ...newData,
                'user_picture':[
                    {'target_id': authInfo.userInfo.user_picture[0].target_id}
                ]
            })
        Fancybox.bind("[data-fancybox]", {
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);

    useEffect(()=>{
        if(isSuccess && !EmptyObjectChecker(authInfo)){
            localStorage.setItem('auth', JSON.stringify(authInfo));
        }
    }, [isSuccess])

    if(isInitialized)
        return (
        <>
            {
                isSuccess &&
                <Modal show={isSuccess} onHide={isSuccess}>
                    <Modal.Header>
                        <Modal.Title>Profile Updated Successfully</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Update profile process has been successfully, now we will redirect you to home page</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={()=>{
                        navigate('/', { replace: true });
                    }}>
                        Ok
                    </Button>
                    </Modal.Footer>
                </Modal>            
            }
            <Row className="pb-0">
                <Col lg={12} className="pt-4 ps-5 pb-4">
                    <h2 className="">Profile Settings</h2>
                </Col>
                <Col lg={7} className="ps-5">
                    <form
                        action=""
                        className="h-100 d-flex flex-column justify-content-between"
                        onSubmit={(e)=>{
                            e.preventDefault();
                        }}
                    >
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            {/* Fisrt Name */}
                            <div className="d-flex flex-column w-50 control-item">
                                <label htmlFor="first-name">First Name</label>
                                <input 
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="form-control checker"
                                    defaultValue={authInfo.userInfo.field_name[0].value}
                                    onChange={(e)=>{
                                        changing(authInfo.userInfo.field_name[0].value, e.target.value, 'firstName');
                                        changeData(authInfo.userInfo.field_name[0].value, e.target.value, 'field_name');                                        
                                    }}
                                />
                            </div>

                            {/* Last Name */}
                            <div className="d-flex flex-column w-50 control-item">
                                <label htmlFor="last-name">Last Name</label>
                                <input 
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="form-control checker"
                                    defaultValue={authInfo.userInfo.field_surname[0].value}
                                    onChange={(e)=>{
                                        changing(authInfo.userInfo.field_surname[0].value, e.target.value, 'lastName');
                                        changeData(authInfo.userInfo.field_surname[0].value, e.target.value, 'field_surname');
                                    }}
                                />
                            </div>

                            {/* Username*/}
                            <div className="d-flex flex-column w-50 control-item">
                                <label htmlFor="username">Username</label>
                                <input 
                                    readOnly
                                    disabled
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form-control checker"
                                    defaultValue={authInfo.userInfo.name[0].value}
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="d-flex flex-column w-50 control-item">
                                <label htmlFor="phone-number">Phone Number</label>
                                <input 
                                    type="text"
                                    name="phone-number"
                                    id="phone-number"
                                    className="form-control checker"
                                    defaultValue={authInfo.userInfo.field_mobile[0].value}
                                    onChange={(e)=>{
                                        changing(authInfo.userInfo.field_mobile[0].value, e.target.value, 'phoneNumber');
                                        changeData(authInfo.userInfo.field_mobile[0].value, e.target.value, 'field_mobile');
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div className="d-flex flex-column w-50 control-item">
                                <label htmlFor="email">Email</label>
                                <input 
                                    disabled
                                    readOnly
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control checker"
                                    defaultValue={authInfo.userInfo.mail[0].value}
                                />
                            </div>

                            {/* select gender */}
                            <div className="d-flex flex-column w-50 control-item">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    name="gender"
                                    id="gender"
                                    className="form-select"
                                    defaultChecked={authInfo.userInfo.field_gender[0].target_id}
                                    onChange={(e)=>{
                                        changing(authInfo.userInfo.field_gender[0].target_id, e.target.value, 'gender');
                                        changeData(authInfo.userInfo.field_gender[0].target_id, e.target.value, 'field_gender');
                                    }}
                                >
                                    <option value="9">Male</option>
                                    <option value="10">Female</option>
                                </select>
                            </div>
                        </div>      
                        <button
                            className="btn d-flex justify-content-center align-items-center gap-2 ps-5 pt-3 pb-3 pe-5 btn-purple rounded-3 text-white w-100"
                            onClick={getCSRFToken}
                            disabled={
                                (
                                    (Object.keys(isChanged).filter(key => isChanged[key]).length === 0) &&
                                    (imageSrc === null) &&
                                    ( (authInfo.userInfo.user_picture.length > 0) ?
                                        imageRef.current && !imageRef.current.src.includes('src/assets/profile.png') :
                                        true
                                    )
                                )
                                ||
                                isLoading
                            }
                        >
                            {
                                isLoading ?
                                <Spinner animation="grow" className="bg-main-color"/>
                                :
                                <>
                                    Save <FaSave fontSize={20}/>
                                </>                            
                            }
                        </button>
                        {
                            failedMsg &&
                            <Alert key={'danger'} variant={'danger'} className="">
                                {failedMsg}
                            </Alert>
                        }
                    </form>
                </Col>
                <Col lg={5} className="cursor-pointer d-flex justify-content-center align-items-center">
                    <div 
                        className="border border-gray profile-image bg-gray w-75 d-flex justify-content-center align-items-center position-relative rounded-5 flex-column"
                    >
                        <img
                            data-fancybox="gallery"
                            src={ imageSrc ? imageSrc:
                                    authInfo.userInfo.user_picture.length > 0 ?
                                    authInfo.userInfo.user_picture[0].url :
                                    '../../src/assets/profile.png'
                                }
                            alt="profile image"
                            className="rounded-5"
                            ref={imageRef}
                        />
                        <div className="d-flex w-100">
                            <button 
                                type="button"
                                className="btn w-50 change-image d-flex justify-content-center align-items-center p-3"
                                onClick={(e)=>{formFile.current.click()}}
                                disabled={isLoading}
                                ><FaEdit fontSize={25}/></button>
                            <button 
                                type="button"
                                className="btn w-50 change-image d-flex justify-content-center align-items-center p-3"
                                onClick={deleteImage}
                                disabled={isLoading}
                                ><MdDeleteForever fontSize={25}/></button>
                        </div>
                        <input 
                            type="file"
                            id="fileInput"
                            style={{display:"none"}}
                            ref={formFile}
                            accept=".png, .jpg, .jpeg"
                            onChange={handleImageChange}
                            ></input>
                    </div>
                </Col>
            </Row>
        </>
        )

  return (<></>)
}

export default ProfileSettings
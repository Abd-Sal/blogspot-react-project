import { useEffect, useMemo, useState } from "react";
import { Col, NavLink, Row, Spinner } from "react-bootstrap"
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { CategoryService } from "../Services/CategoryService"
import Alert from 'react-bootstrap/Alert';
import { AuthService } from "../Services/AuthService";
import { isSession, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RegisterForm = () => {
    const navigate = useNavigate()
    const [regData, setRegData] = useState({
        "name": {
            "value": ""
        },
        "field_name": {
            "value": ""
        },
        "field_surname": {
            "value": ""
        },
        "mail": {
            "value": ""
        },
        "field_mobile": {
            "value": ""
        },
        "field_gender": {
            "target_id": 9
        },
        "field_how_did_you_find_us": [],
        "pass": {
            "value": ""
        }
    })

    const [showPassword, setShowPassword] = useState({
        'pass': false,
        'confirm': false
    })

    const [misMatchedPassword, setMisMatchedPassword] = useState(false)
    const [confirmPass, setConfirmPass] = useState({
        'pass': '',
        'confirm': ''
    })

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isLoadingReg, setIsLoadingReg] = useState(false)
    const [failedMsgReg, setFailedMsgReg] = useState('')
    const [isSuccess, setIsSuccess] = useState(false);
    const register = ()=>{
        setFailedMsgReg('')
        setIsLoadingReg(true)
        AuthService.REGISTER({registrationData: regData})
        .then((data)=>{
            setIsSuccess(true)
        })
        .catch((err)=>{
            setFailedMsgReg(err.message);
        })
        .finally(()=>{
            setIsLoadingReg(false)
        })
    }

    const [agree, setAgree] = useState(false)

    const [howFindUs, setHowFindUs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [failedMsg, setFailedMsg] = useState('')
    const getFindWays = useMemo(()=>{
        if(howFindUs.length === 0){
            setFailedMsg('')
            setIsLoading(true)
            CategoryService.HOW_DID_YOU_FIND_US()
            .then((data)=>{
                setHowFindUs(data)
            })
            .catch((err)=>{
                setFailedMsg(err.message)
            })
            .finally(()=>{
                setIsLoading(false)
            })
        }
    }, [howFindUs])
    
    return (
        <>
            {
                isSession &&
                <Modal show={isSuccess} onHide={isSuccess}>
                    <Modal.Header>
                        <Modal.Title>Registered Successfully</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Registration process succeeded, please activate your account through link you received on registered email({regData.mail.value?regData.mail.value:'example@example.com'})</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={()=>{
                        navigate('/sign-in', { replace: true });
                    }}>
                        Ok
                    </Button>
                    </Modal.Footer>
                </Modal>
            }
            <Row className="pt-5 h-75 w-100 d-flex justify-content-center align-items-center">
                <Col lg={12} className="d-flex flex-column justify-conetnt-center align-items-center">
                        <form 
                            action=""
                            className="w-100 "
                            onSubmit={(e)=>{
                                e.preventDefault();
                                register();
                            }}
                        >
                            <h2 className="mb-3 text-center">Create your account</h2>
                            <div className="d-flex flex-column justify-conetent-start align-items-center gap-3">
                                {/* first name and last name*/}
                                <div className="d-flex justify-content-between align-items-center gap-2 w-75">
                                    <div className="w-50">
                                        <label hidden htmlFor="first-name">FirstName</label>
                                        <input 
                                            required
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            placeholder="First Name"
                                            className="form-control w-100"
                                            onChange={(e)=>{
                                                setRegData({
                                                    ...regData,
                                                    "field_name": {
                                                        "value": e.target.value
                                                    },
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="w-50">
                                        <label hidden htmlFor="last-name">FirstName</label>
                                        <input 
                                            required
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            placeholder="Last Name"
                                            className="form-control w-100"
                                            onChange={(e)=>{
                                                setRegData({
                                                    ...regData,
                                                    "field_surname": {
                                                        "value": e.target.value
                                                    },
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* phone number*/}
                                <div className="d-flex flex-column w-75">
                                    <label hidden htmlFor="phone-number">Phone Number</label>
                                    <input 
                                        required
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        placeholder="ex: 963 000 0000"
                                        className="form-control"
                                        onChange={(e)=>{
                                            setRegData({
                                                ...regData,
                                                "field_mobile": {
                                                    "value": e.target.value
                                                },
                                            })
                                        }}
                                    />
                                </div>

                                {/* username*/}
                                <div className="d-flex flex-column w-75">
                                    <label hidden htmlFor="Username">Username</label>
                                    <input 
                                        required
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Username..."
                                        className="form-control"
                                        onChange={(e)=>{
                                            setRegData({
                                                ...regData,
                                                "name": {
                                                    "value": e.target.value
                                                },
                                            })
                                        }}
                                    />
                                </div>

                                {/* email*/}
                                <div className="d-flex flex-column w-75">
                                    <label hidden htmlFor="email">Email</label>
                                    <input 
                                        required
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                        className="form-control"
                                        onChange={(e)=>{
                                            setRegData({
                                                ...regData,
                                                "mail": {
                                                    "value": e.target.value
                                                },
                                            })
                                        }}
                                    />
                                </div>

                                {/* selecting gender */}
                                <div className="w-75">
                                    <select 
                                        required
                                        name="gender"
                                        id="gender"
                                        defaultChecked='9'
                                        className="form-select w-100"
                                        onSelect={(e)=>{
                                            setRegData({
                                                ...regData,
                                                "field_gender": {
                                                    "target_id": e.target.value
                                                }
                                            })
                                        }}
                                    >
                                        <option value="9">Male</option>
                                        <option value="10">Female</option>
                                    </select>
                                </div>

                                {/* selecting how did you find us */}
                                {
                                    isLoading &&
                                    <Spinner animation="grow" className="bg-main-color"/>
                                }
                                {
                                    failedMsg &&
                                    <Alert key={'danger'} variant={'danger'} className="">
                                        {failedMsg}
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={getFindWays}
                                        >Try Again</button>
                                    </Alert>
                                }
                                {
                                    Array.isArray(howFindUs) &&
                                    howFindUs.length > 0 &&
                                    <div className="w-75">
                                        <select 
                                            required
                                            name="how_did_you_find_us"
                                            id="how_did_you_find_us"
                                            defaultChecked={Array.isArray(howFindUs) && howFindUs.length > 0 ? howFindUs[0].id : ''}
                                            className="form-select w-100"
                                            onSelect={(e)=>{
                                                setRegData({
                                                    ...regData,
                                                    "field_how_did_you_find_us": [
                                                        {"target_id": e.target.value}
                                                    ]
                                                })
                                            }}
                                        >
                                            {
                                                Array.isArray(howFindUs) &&
                                                howFindUs.length > 0 &&
                                                howFindUs.map((item)=>(
                                                    <option key={item.id} value={item.id}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                }

                                {/* password and confirm password*/}
                                <div className="d-flex justify-content-between align-items-center gap-2 w-75">
                                    <div className="w-50">
                                        <label hidden htmlFor="password">Password</label>
                                        <div className="position-relative">
                                            <input 
                                                required
                                                type={showPassword.pass ? 'text': 'password'}
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                className="form-control"
                                                onChange={(e)=>{
                                                    setRegData({
                                                        ...regData,
                                                        "pass": {
                                                            "value": e.target.value
                                                        }
                                                    })
                                                    setConfirmPass({
                                                        ...confirmPass,
                                                        'pass': e.target.value
                                                    })
                                                    if(e.target.value === confirmPass.confirm)
                                                        setMisMatchedPassword(false)
                                                    else
                                                        setMisMatchedPassword(true)
                                                }}
                                            />
                                            <button 
                                                type="button"
                                                className="btn rounded-2 position-absolute top-0 end-0"
                                                onClick={()=>{
                                                    setShowPassword({
                                                        ...showPassword,
                                                        'pass': !showPassword.pass
                                                    })
                                                }}>{showPassword.pass?<FaEyeSlash />:<FaEye />}</button>    
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <label hidden htmlFor="confirm-password">Confirm Password</label>
                                        <div className="position-relative">
                                            <input 
                                                required
                                                type={showPassword.confirm ? 'text': 'password'}
                                                name="confirm-password"
                                                id="confirm-password"
                                                placeholder="Confirm Password"
                                                className="form-control"
                                                onChange={(e)=>{
                                                    setConfirmPass({
                                                        ...confirmPass,
                                                        'confirm': e.target.value
                                                    })
                                                    if(confirmPass.pass === e.target.value)
                                                        setMisMatchedPassword(false)
                                                    else
                                                        setMisMatchedPassword(true)
                                                }}
                                            />
                                            <button 
                                                type="button"
                                                className="btn rounded-2 position-absolute top-0 end-0"
                                                onClick={()=>{
                                                    setShowPassword({
                                                        ...showPassword,
                                                        'confirm': !showPassword.confirm
                                                    })
                                                }}>{showPassword.confirm?<FaEyeSlash />:<FaEye />}</button>    
                                        </div>
                                    </div>
                                </div>
                                {
                                    misMatchedPassword &&
                                    <Alert key={'danger'} variant={'danger'} className="">
                                        Mismatched Password
                                    </Alert>
                                }

                                {/* submit and agree term and conditions*/}
                                <div className="d-flex justify-content-between align-items-center w-75">
                                    <div className="d-flex justify-conetnt-start gap-1">
                                        <input 
                                            required
                                            type="checkbox"
                                            name="agree-tems-and-conditions"
                                            id="agree-tems-and-conditions"
                                            onChange={(e)=>{
                                                e.target.checked ? 
                                                setAgree(true) : 
                                                setAgree(false) 
                                            }}
                                        />
                                        <label className={'agree-tems-and-conditions d-flex gap-1'} htmlFor="agree-tems-and-conditions">I Agree with all of your <span><NavLink to={'#'}>Terms & Conditions</NavLink></span></label>
                                    </div>
                                    <button
                                        disabled={isLoadingReg || !agree}
                                        className="btn btn-purple text-white pt-2 pb-2 ps-2 pe-2"
                                    >Create Account <FaArrowRight /></button>
                                </div>
                            </div>
                        </form>
                        {
                            failedMsgReg &&
                            <Alert key={'danger'} variant={'danger'} className="">
                                {failedMsgReg}
                            </Alert>
                        }
                        {
                            isLoadingReg &&
                            <Spinner animation="grow" className="bg-main-color"/>
                        }
                </Col>
            </Row>
        </>
    )
}

export default RegisterForm
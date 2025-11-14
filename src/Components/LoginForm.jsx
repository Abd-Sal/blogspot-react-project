import { useContext, useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap"
import { AuthContext } from "../Context/AuthContext";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthService } from "../Services/AuthService"
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { UserService } from "../Services/UserService";
import { EmptyObjectChecker } from "../HelpTools/EmptyObjectChecker";
import { Base64Converter } from "../HelpTools/Base64Converter";

const LoginForm = () => {
    const {authInfo, setAuthInfo, isInitialized, setIsInitialized} = useContext(AuthContext);
    const [loginInfo, setLoginInfo] = useState({})
    const [userInfo, setUserInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const [failedMsg, setFailedMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const login = ()=>{
        setFailedMsg('')
        setIsLoading(true)
        AuthService.LOGIN({username: loginInfo.username, password: loginInfo.password})
        .then((data)=>{
            setAuthInfo(data)
        })
        .catch((err)=>{
            setFailedMsg(err.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const getUserProfile = ()=>{       
        UserService.CURRENT_PROFILE({credintials: Base64Converter({username: loginInfo.username, password: loginInfo.password}), userID: authInfo.current_user.uid})
        .then((data)=>{
            setAuthInfo({
                ...authInfo,
                userInfo:data,
                "credintials": Base64Converter({username: loginInfo.username, password: loginInfo.password})
            })
            setUserInfo(true);
        })
        .catch((err)=>{
            console.log(err.message);
        })
        .finally(()=>{
        })
    }

    useEffect(()=>{
        if(!EmptyObjectChecker(authInfo) && !userInfo){
            getUserProfile();
        }
        else if(!EmptyObjectChecker(authInfo) && userInfo){
            localStorage.setItem('auth', JSON.stringify(authInfo))
            setIsInitialized(true);
            navigate('/', { replace: true })
        }
    }, [authInfo])

    if(!isInitialized)
    return (
        <>
            <Row className="h-75 w-100 d-flex justify-content-center align-items-center">
                <Col lg={12} className="d-flex flex-column justify-conetnt-center align-items-center position-relative">
                    <form action="" className="w-100"
                        onSubmit={(e)=>{
                            e.preventDefault()
                            login()
                        }}
                    >
                        <h2 className="mb-5 text-center">Sign In to your account</h2>
                        <div className="d-flex flex-column justify-conetent-start align-items-center gap-3">
                            {/* Username*/}
                            <div className="d-flex flex-column w-75">
                                <label hidden htmlFor="username">Username</label>
                                <input 
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                    className="form-control w-100"
                                    onChange={(e)=>{
                                        setLoginInfo({
                                            ...loginInfo,
                                            'username': e.target.value
                                        })
                                    }}
                                />
                            </div>

                            {/* Password*/}
                            <div className="d-flex flex-column w-75">
                                <label hidden htmlFor="password">Password</label>
                                <div className="position-relative">
                                    <input 
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        placeholder="******"
                                        className="form-control"
                                        onChange={(e)=>{
                                            setLoginInfo({
                                                ...loginInfo,
                                                'password': e.target.value
                                            })
                                        }}
                                    />
                                    <button 
                                        type="button"
                                        className="btn rounded-2 position-absolute top-0 end-0"
                                        onClick={()=>{setShowPassword(!showPassword)}}>{showPassword?<FaEyeSlash />:<FaEye />}</button>
                                </div>
                            </div>

                            {/* submit and remember me*/}
                            <div className="d-flex justify-content-between align-items-center w-75">
                                <div className="d-flex justify-conetnt-start gap-1">
                                    <input 
                                        type="checkbox"
                                        name="remember-me"
                                        id="remember-me"
                                        disabled={isLoading}
                                    />
                                    <label className={'remember-me'} htmlFor="remember-me">Remember me</label>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!loginInfo.username || !loginInfo.password || isLoading}
                                    className="btn btn-purple text-white pt-2 pb-2 ps-4 pe-4"
                                >Sign In <FaArrowRight /></button>
                            </div>

                            {/* loading and error message*/}
                            <div className="d-flex justify-content-center align-items-center w-75">
                                {
                                    isLoading &&
                                    <Spinner animation="grow" className="bg-main-color"/>
                                }
                                {
                                    failedMsg &&
                                    <Alert key={'danger'} variant={'danger'} className="">
                                        {failedMsg}
                                    </Alert>
                                }
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    )

    return (
        <>
        </>
    )
}

export default LoginForm
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Modal from 'react-bootstrap/Modal';
import { Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Logout = () => {
    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setFailedMsg('')
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const {authInfo, setAuthInfo, isInitialized, setIsInitialized} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [failedMsg, setFailedMsg] = useState('')
    const navigate = useNavigate();
    const logout = ()=>{
        // setFailedMsg('')
        // setIsLoading(true)
        // AuthService.LOGOUT({token:authInfo.logout_token})
        // .catch((err)=>{
        //   setFailedMsg(err.message);
        // })
        // .finally(()=>{setIsLoading(false)})
        if(isInitialized){
            localStorage.removeItem('auth');
            setAuthInfo({});
            setIsInitialized(false)
            navigate('/', {replace:true})
        }
    }

    useEffect(()=>{
        if(isInitialized)
            logout();
        else
            navigate('/', {replace:true})
    }, [])
    useEffect(()=>{
        if(failedMsg)
        handleShow();
    }, [failedMsg])

    return (
    <>
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
        {
            isLoading &&
            <Spinner animation="grow" className="bg-main-color"/>
        }
        {
            failedMsg &&
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{failedMsg}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal> 
        }
        </div>
    </>
  )
}

export default Logout
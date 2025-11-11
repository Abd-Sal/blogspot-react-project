import { Col, Container, Row } from "react-bootstrap"
import AuthNavbar from "../Components/AuthNavbar"
import LoginForm from "../Components/LoginForm"
import { useContext, useEffect, useState } from "react"
import { AuthContext} from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';
import { EmptyObjectChecker } from "../HelpTools/EmptyObjectChecker"

const Login = () => {
    const {authInfo, isInitialized} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(()=>{
      if(isInitialized && !EmptyObjectChecker(authInfo))
        navigate('/', {replace:true})
    }, [authInfo])

    if(!isInitialized)
      return (
        <>
          <div className={"wrapper"}>
            <header>
                <AuthNavbar isLoginPage={true}/>
            </header>
            <main>
              <div className="d-flex felx-column justify-conetnt-center aling-items-center w-50 login-bg-color h-100 position-absolute">
                <img src="../../src/assets/Herosection.png" alt="Login Image" className="position-absolute login-img"/>
              </div>
              <Container fluid>
                <Row className="vh-100">
                  <Col lg={6}></Col>
                  <Col lg={6} className="h-100">
                    <LoginForm />
                  </Col>
                </Row>
              </Container>
            </main>
            <footer>
            </footer>
          </div>
        </>
      )
    return (
      <>
        <div className={"wrapper"}>
          <header>
            <AuthNavbar isLoginPage={false}/>
          </header>
          <main>
            <Container>
              <Row>
                <Col lg={12} className="w-100 vh-100 d-flex justify-content-center align-items-center">
                  <Spinner animation="grow" className="bg-main-color"/>          
                </Col>
              </Row>
            </Container>
          </main>
          <footer></footer>
        </div>
      </>
    )
}

export default Login
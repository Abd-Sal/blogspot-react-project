import { Col, Container, Row } from "react-bootstrap"
import AuthNavbar from "../Components/AuthNavbar"
import RegisterForm from "../Components/RegisterForm"
import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { EmptyObjectChecker } from "../HelpTools/EmptyObjectChecker"

const Register = () => {
  const {isInitialized, authInfo} = useContext(AuthContext)
  
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
            <AuthNavbar isLoginPage={false}/>
        </header>
        <main>
          <div className="d-flex felx-column justify-conetnt-center aling-items-center w-50 login-bg-color h-100 position-absolute">
            <img src="../../src/assets/Herosection.png" alt="Login Image" className="position-absolute login-img"/>
          </div>
          <Container fluid>
            <Row className="vh-100">
              <Col lg={6}></Col>
              <Col lg={6} className="h-100">
                <RegisterForm />
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
    </>
  )
}

export default Register
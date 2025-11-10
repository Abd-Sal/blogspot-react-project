import { Col, Container, Row } from "react-bootstrap"
import AuthNavbar from "../Components/AuthNavbar"
import LoginForm from "../Components/LoginForm"

const Login = () => {
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
}

export default Login
import {Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Logo from "./Logo"
import { NavLink } from "react-router-dom"

const AuthNavbar = ({isLoginPage=true}) => {
  return (
    <>
        <div className="bg-main-color">
            <Container>
                <Row>
                    <Col lg={6} className="p-2 pt-1">
                        <Logo/>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-lg-end align-items-center gap-3">
                        {
                            isLoginPage ? 
                            <>
                                <p className="mb-0 text-white">do not have account? </p>
                                <NavLink to={'/register'}><Button variant="outline-light">Create Account</Button></NavLink>
                            </> :
                            <>
                                <p className="mb-0 text-white">do you have account? </p>
                                <NavLink to={'/sign-in'}><Button variant="outline-light">Sign in</Button></NavLink>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default AuthNavbar
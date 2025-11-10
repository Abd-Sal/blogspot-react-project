import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import NavActions from "./NavActions"

const Navbar = () => {
  return (
    <>
        <div className="bg-main-color">
            <Container>
                <Row>
                    <Col lg={2} className="p-2 pt-1">
                        <Logo/>
                    </Col>
                    <Col lg={6} className="d-flex align-items-center">
                        <div className="w-100 d-flex justify-content-start align-items-center">
                            <ul className="navlinks pt-3 w-100 d-flex justify-content-start align-items-center gap-4">
                                <li>
                                    <NavLink className={`text-white ${((isActive) =>`${isActive ? 'active' : ''}`)}`} to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={`text-white ${((isActive) =>`${isActive ? 'active' : ''}`)}`} to={'/articles'}>Articles</NavLink>
                                </li>
                                <li>
                                    <NavLink className={`text-white ${((isActive) =>`${isActive ? 'active' : ''}`)}`} to={'/vacancies'}>Vacancies</NavLink>
                                </li>
                                <li>
                                    <NavLink className={`text-white ${((isActive) =>`${isActive ? 'active' : ''}`)}`} to={'/about-us'}>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink className={`text-white ${((isActive) =>`${isActive ? 'active' : ''}`)}`} to={'/contact-us'}>Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} className="d-flex justify-conetnt-end align-items-center ">
                        <NavActions/>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Navbar
import { Col, Container, NavLink, Row } from "react-bootstrap"
import Logo from "./Logo"
import FooterCopyWrites from "./FooterCopyWrites"
import SocialMedia from "./SocialMedia"
import StoreBtn from "./StoreBtn"
const Footer = () => {
  return (
    <>    
        <div className="main-footer-sec bg-main-color pt-5 pb-5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="d-flex flex-column justify-content-start align-items-start gap-2">
                            <Logo/>
                            <p className="footer-desc">Aliquam rhoncus ligula est, non pulvinar elit <br />convallis nec. Donec mattis odio at.</p>
                            <SocialMedia />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={3} className="has-hover ps-0 pe-0">
                                <ul>
                                    <li>
                                        Top 4 Category
                                    </li>
                                    <li><NavLink to={'#'}>Development</NavLink></li>
                                    <li><NavLink to={'#'}>Finance & Accounting</NavLink></li>
                                    <li><NavLink to={'#'}>Design</NavLink></li>
                                    <li><NavLink to={'#'}>Business</NavLink></li>
                                </ul>
                            </Col>
                            <Col lg={3} className="has-hover ps-0 pe-0">
                                <ul>
                                    <li>
                                        QUICK LINKS
                                    </li>
                                    <li><NavLink to={'/about-us'}>About</NavLink></li>
                                    <li><NavLink to={'#'}>Become an author</NavLink></li>
                                    <li><NavLink to={'/contact-us'}>Contact</NavLink></li>
                                    <li><NavLink to={'#'}>Career</NavLink></li>
                                </ul>                            
                            </Col>
                            <Col lg={3} className="has-hover ps-0 pe-0">
                                <ul>
                                    <li>
                                        SUPPORT
                                    </li>
                                    <li><NavLink to={'#'}>Help Center</NavLink></li>
                                    <li><NavLink to={'/faq'}>FAQs</NavLink></li>
                                    <li><NavLink to={'#'}>Terms & Conditions</NavLink></li>
                                    <li><NavLink to={'#'}>Privacy Policy</NavLink></li>
                                </ul>                            
                            </Col>
                            <Col lg={3} className="ps-0 pe-0">
                                <ul>
                                    <li>
                                        DOWNLOAD OUR APP
                                    </li>
                                    <li>
                                        <NavLink to={'#'}>
                                            <StoreBtn img={'../../src/assets/apple-store.png'} storeName={'App Store'}/>                                  
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'#'}>
                                            <StoreBtn img={'../../src/assets/google-play.png'} storeName={'Play Store'}/>                                  
                                        </NavLink>
                                    </li>
                                </ul>                                                        
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <FooterCopyWrites/>
    </>
  )
}

export default Footer
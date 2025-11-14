import { Col, Container, Row } from "react-bootstrap"
import ProfileSettings from "../Components/ProfileSettings"
import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { NavLink } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import { MdArticle } from "react-icons/md";

const Profile = () => {
  const {isInitialized} = useContext(AuthContext)
  if(isInitialized)
  return (
    <>
    <div  className={'profile-page'}>
      <Container>
        <Row>
          <Col lg={5} className="profile-page-texts">
            <h3 className="mb-2 mt-5">Manage Your Profile</h3>
            <h6 className="mb-0">Set you environment preferencess and more so that you can plan your behavior. You can update your preferred image also.</h6>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <Row>
        <Col lg={12} className="pb-5">
          <div className="position-relative profile-body rounded-5 mb-5 pb-5">
            <ProfileSettings />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )

  return (<></>)
}

export default Profile
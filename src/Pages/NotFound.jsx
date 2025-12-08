import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <div className="w-100">
              <img 
                src="../../src/assets/404.png" 
                alt="Not Found"
              />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center pt-5 mt-5 pb-5">
              <button
                className="btn btn-purple text-white pt-2 pb-2 ps-4 pe-4"
                onClick={()=>{
                  navigate('/')
                }}
              >
                Back To Home
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound
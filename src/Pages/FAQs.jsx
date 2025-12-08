import { Col, Container, Row } from "react-bootstrap"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import FAQsCategories from "../Components/FAQsCategories";
import FAQsAccordionByCate from "../Components/FAQsAccordionByCate";
import { useNavigate } from "react-router-dom";

const FAQs = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-light-gray">
        <Container>
          <Row>
            <Col lg={12} className="pt-3 pb-2">
              <Breadcrumb>
                <Breadcrumb.Item
                  href="/"
                  className="text-decoration-none"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                  }}
                >Home</Breadcrumb.Item>
                <Breadcrumb.Item active><b>FAQs</b></Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5 mb-5">
        <Row>
          <Col lg={4}></Col>
          <Col lg={8}><h2>FAQs</h2></Col>
          <Col lg={4}>
            <FAQsCategories />
          </Col>
          <Col lg={8}>
            <FAQsAccordionByCate />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FAQs
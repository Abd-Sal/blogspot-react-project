import { Col, Container, Row } from "react-bootstrap"
import HeroSection from "../Components/HeroSection"
import TopCategories from "../Components/TopCategories"

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <HeroSection items={4}/>
          </Col>
          <Col lg={12}>
            {/* <TopCategories items={6}/> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
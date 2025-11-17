import { Col, Container, Row } from "react-bootstrap"
import HeroSection from "../Components/HeroSection"
import TopCategories from "../Components/TopCategories"
import LatestArticles from "../Components/LatestArticles"
import Partner from "../Components/Partner"
import { NavLink } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import TopWriters from "../Components/TopWriters"

const Home = () => {
  return (
    <>
      <Container>
        <Row className="pb-5">
          <Col lg={12}>
            <HeroSection items={5}/>
          </Col>
          <Col lg={12}>
            <TopCategories items={6}/>
          </Col>
        </Row>
      </Container>
      <LatestArticles items={4}/>
      <Container>
        <Row className="pt-5 pb-5">
          <Col lg={4}>
            <h3 className="mb-0 top-writer-head">Check out our Top <span>Writers</span></h3>
          </Col>
          <Col lg={8} className="d-flex justify-content-lg-end align-items-center">
            <p className="mb-0 d-flex  justify-content-start align-items-center gap-2 top-writer-head-2">Thousands of users waiting for a Articles. Start writing & earning now!. <NavLink>Browse All <FaArrowRight /></NavLink></p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="d-flex justify-content-center align-items-center">
            <TopWriters/>
          </Col>
        </Row>
      </Container>
      <Partner/>
    </>
  )
}

export default Home
import { Col, Container, Row } from "react-bootstrap"
import Partner from "../Components/Partner"
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";
import Testimonials from "../Components/Testimonials";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const AboutUs = () => {
  const [testimonials] = useState([
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
    {
      name: 'Ted Sarandos',
      job: 'Chief Executive Officer of Netflix',
      qoute: 'In total, it was a big success, I would get emails about what a fantastic resource it was.'
    },
  ])
  
  return (
    <>
      <div>
        <Container>
          <Row className="pt-5 mt-5 ">
            <Col lg={5}>
              <div>
                <h2 className="mb-5">2011-2025</h2>
                <h3>We share knowledge <br /> with the world</h3>
                <hr className="w-100"/>
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.  </p>
              </div>
            </Col>
            <Col lg={7}>
              <div className="h-100 d-flex justify-content-center align-items-center">
                <img src="../../src/assets/about-us-banner.png" alt="banner image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Partner />
      <div>
        <Container>
          <Row>
            <Col lg={6} className="position-relative">
              <div className="p-5 w-100 h-100 d-flex flex-wrap justify-content-start align-items-center">
                <div className="rot p-2 w-50 mb-5">
                  <img src="../../src/assets/about-1.jpg" alt="about" />
                </div>
                <div className="rot p-3 w-50 mb-5">
                  <img src="../../src/assets/about-2.jpg" alt="about" />
                </div>
                <div className="rot p-0 w-50 mb-5">
                  <img src="../../src/assets/about-3.jpg" alt="about" />
                </div>
                <div className="rot p-3 w-50 mb-5">
                  <img src="../../src/assets/about-4.jpg" alt="about" />
                </div>
              </div>
              <div className="rounded-4 position-absolute pos rot p-4 d-flex flex-column justify-content-center align-items-center gap-1">
                <h5>We’ve been here <br /> almost 15 years</h5>
                <button className="btn bg-white ps-3 pe-3 d-flex justify-content-between align-items-center gap-5">
                  <span>Join Our Team</span> <FaAngleDoubleRight /></button>
              </div>
            </Col>
            <Col lg={6}>
              <div className=" h-100 d-flex flex-column justify-content-center align-items-start pt-5 pb-5">
                <h3>We’ve been here almost 15 years</h3>
                <p>Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <div>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" fill="#FD8E1F"/>
                        <path d="M5 27.5L20 36.25L35 27.5" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 20L20 28.75L35 20" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <h5 className="mb-0">57</h5>
                      <p className="mb-0">Trusted Companies</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <div>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" fill="#FD8E1F"/>
                        <path d="M5 27.5L20 36.25L35 27.5" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 20L20 28.75L35 20" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <h5 className="mb-0">57</h5>
                      <p className="mb-0">Trusted Companies</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <div>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" fill="#FD8E1F"/>
                        <path d="M5 27.5L20 36.25L35 27.5" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 20L20 28.75L35 20" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                      <h5 className="mb-0">57</h5>
                      <p className="mb-0">Trusted Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-testimontial pt-5 pb-5 mb-5 ">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          centeredSlides={true}
          className="mySwiperAboutUs"
        >
            {
              testimonials.length > 0 &&
              testimonials.map((item, index)=>(
                <SwiperSlide>
                  <Testimonials
                    key={index}
                    name={item.name}
                    job={item.job}
                    qoute={item.qoute}
                  />
                </SwiperSlide>
              ))
            }
        </Swiper>
      </div>
    </>
  )
}

export default AboutUs
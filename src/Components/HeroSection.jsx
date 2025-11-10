import { Col, Row } from "react-bootstrap"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { NavLink } from "react-router-dom";

const HeroSection = ({items}) => {
    const[article, setArticles] = useState([
        {
            id: 1,
            title: "Articula – Your Gateway to Premium Articles",
            brief_description: "Discover high-quality articles written by experts and creators in various scientific and technical fields.Join a community of readers and writers and explore exclusive, knowledge-driven content.",
            img: "../../src/assets/Herosection.png"
        },
        {
            id: 2,
            title: "Articula – Your Gateway to Premium Articles",
            brief_description: "Discover high-quality articles written by experts and creators in various scientific and technical fields.Join a community of readers and writers and explore exclusive, knowledge-driven content.",
            img: "../../src/assets/Herosection.png"
        },
        {
            id: 3,
            title: "Articula – Your Gateway to Premium Articles",
            brief_description: "Discover high-quality articles written by experts and creators in various scientific and technical fields.Join a community of readers and writers and explore exclusive, knowledge-driven content.",
            img: "../../src/assets/Herosection.png"
        },
        {
            id: 4,
            title: "Articula – Your Gateway to Premium Articles",
            brief_description: "Discover high-quality articles written by experts and creators in various scientific and technical fields.Join a community of readers and writers and explore exclusive, knowledge-driven content.",
            img: "../../src/assets/Herosection.png"
        }
    ])

  return (
    <>
        <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {
                article.length > 0 &&
                article.map((item, index)=>(
                    index < items ?
                    <SwiperSlide>
                        <Row className="pt-5 pb-5">
                            <Col lg={5} className="d-flex justify-content-start align-items-center">
                                <div>
                                    <h2>{item.title}</h2>
                                    <hr />
                                    <p className="hero-p">{item.brief_description}</p>
                                    <div className="d-flex justify-content-start align-items-center gap-4">
                                        <NavLink to={`articles/${items.id}`} className="btn btn-purple text-white pt-2 pb-2 ps-5 pe-5">Start Reading</NavLink>
                                        <NavLink to={'/register'} className="btn btn-applian pt-2 pb-2 ps-5 pe-5">Create Account</NavLink>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <img src={item.img} alt="Hero Section Image"/>
                            </Col>
                        </Row>
                    </SwiperSlide>
                    :''
                ))
            }
        </Swiper>
    </>
  )
}

export default HeroSection
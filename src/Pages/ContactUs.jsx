import { Col, Container, Row } from "react-bootstrap"
import { MdEmail } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import BranchCard from "../Components/BranchCard";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineFax } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
  const [branches] = useState([
    {
      address: 'Dubai. UAE',
      title: 'Lorem Ipsum doller Duis aute irure, No. 6548',
      img: '../../src/assets/branche-1.jpg'
    },
    {
      address: 'Istanbul, Turkey',
      title: 'Lorem Ipsum doller Duis aute irure, No. 6548',
      img: '../../src/assets/branche-2.jpg'
    },
    {
      address: 'Damascus, Syria',
      title: 'Lorem Ipsum doller Duis aute irure, No. 6548',
      img: '../../src/assets/branche-3.jpg'
    },
    {
      address: 'Dubai. UAE',
      title: 'Lorem Ipsum doller Duis aute irure, No. 6548',
      img: '../../src/assets/branche-1.jpg'
    },
    {
      address: 'Istanbul, Turkey',
      title: 'Lorem Ipsum doller Duis aute irure, No. 6548',
      img: '../../src/assets/branche-2.jpg'
    },
    {
      address: 'Damascus, Syria',
      title: 'Lorem Ipsum doller Duis aute irure, No. 6548',
      img: '../../src/assets/branche-3.jpg'
    }
  ])

  return (
    <>
      <div 
        className="head-of-contact-us position-relative"
      >
        <div className="shade w-100 h-100 position-absolute"></div>
        <Container>
          <Row>
            <Col lg={5}>
            <div className="d-flex flex-column justify-content-center align-items-start gap-3 pt-5 pb-5">
              <h2 className="text-white mb-0">Get In touch </h2>
              <p className="mb-0 text-white">want to get in touch ? we’d love to hear from you  heres how you can reach us .</p>
              <button
                className="btn btn-purple text-white ps-3 pe-3 mt-2 d-flex justify-content-center align-items-center gap-2"
              ><MdEmail /> Copy Email</button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="pt-4 pb-4">
          <Col lg={6} className="contact-us-lf d-flex justify-content-start align-items-center">
            <p className="mb-0"><span><FaArrowLeft /> Browse All</span> We have more Branches to check out.</p>
          </Col>
          <Col lg={6} className="contact-us-rf d-flex justify-content-end align-items-center">
            <h3 className="mb-0">Browse Our <span>Branches</span></h3>
          </Col>
          <Col lg={12}>
            <Row className="pt-5 pb-5">
              <Swiper
                slidesPerView={3}
                spaceBetween={80}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
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
                    spaceBetween: 40,
                  },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                centeredSlides={true}
                speed={500}
                className="mySwiperContactUs"
              >
                  {
                    branches.length > 0 &&
                    branches.map((item, index)=>(
                      <SwiperSlide>
                        <Col lg={4}>
                          <BranchCard
                            address={item.address}
                            title={item.title}
                            imgSrc={item.img}
                          />
                        </Col>
                      </SwiperSlide>
                    ))
                  }
              </Swiper>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="pt-5 pb-5 mb-5">
        <Row>
          <Col lg={5}>
            <h3>Contact US </h3>
            <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
            <form action="" className="d-flex flex-column justify-conetnt-center align-items-start gap-4">
              <div className="w-100 d-flex justify-content-between align-items-center gap-2">
                <div className="w-50">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name*"
                  />
                </div>
                <div className="w-50">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name*"
                  />
                </div>
              </div>
              <div className="w-100">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject*"
                />
              </div>
              <div className="w-100">
                <select name="" id="" className="form-select">
                  <option value="">Social Media</option>
                  <option value="">Friend</option>
                  <option value="">Website</option>
                  <option value="">Other</option>
                </select>
              </div>
              <div className="w-100">
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className="form-control"></textarea>
              </div>
              <div className="w-100">
                <button className="btn btn-purple text-white w-100 d-flex justify-content-center align-items-center">SEND</button>
              </div>
              <div className="ico w-100 d-flex justify-content-between align-items-center">
                  <div className="d-flex d-flex justify-content-start align-items-center gap-2">
                    <div><FaPhone /></div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-0">
                      <h6 className="mb-0">PHONE</h6>
                      <p className="mb-0">09 876 362</p>  
                    </div>
                  </div>
                  <div className="d-flex d-flex justify-content-start align-items-center gap-2">
                    <div><MdOutlineFax /></div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-0">
                      <h6 className="mb-0">FAX</h6>
                      <p className="mb-0">25 876 362</p>  
                    </div>
                  </div>
                  <div className="d-flex d-flex justify-content-start align-items-center gap-2">
                    <div><HiOutlineMailOpen /></div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-0">
                      <h6 className="mb-0">EMAIL</h6>
                      <p className="mb-0">abd@gmail.com</p>  
                    </div>
                  </div>
              </div>
            </form>
          </Col>
          <Col lg={7}>
              {/* Important: Set height for the map container */}
              <div style={{ height: '550px', width: '100%', position: 'relative' }}>
                <MapContainer 
                  center={[51.505, -0.09]} 
                  zoom={13} 
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {/* Single Marker */}
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      <div>
                        <h3>Our Main Office</h3>
                        <p>123 Main Street, London</p>
                        <p>Phone: +44 20 1234 5678</p>
                        <p>Email: london@example.com</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactUs
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Partner = () => {

    const data = [
        '../../src/assets/partner-1.png',
        '../../src/assets/partner-2.png',
        '../../src/assets/partner-3.png',
        '../../src/assets/partner-4.png',
        '../../src/assets/partner-1.png',
        '../../src/assets/partner-2.png',
        '../../src/assets/partner-3.png',
        '../../src/assets/partner-4.png',
        '../../src/assets/partner-1.png',
        '../../src/assets/partner-2.png',
        '../../src/assets/partner-3.png',
        '../../src/assets/partner-4.png',
    ]

    return (
        <>
            <div>
                <Container>
                <Row>
                    <Col lg={12} className="text-center pt-5 pb-5">
                    <h2>Our <span className="partner">Partner</span></h2>
                    </Col>
                </Row>
                </Container>
            </div>
            <div className="hight-lite">
                <Container className='pt-5 pb-5'>
                    <Row>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={5}
                            autoplay={{ delay: 3000 }}
                            onSwiper={(swiper) => {}}
                            onSlideChange={() => {}}
                            >
                                {
                                    data.map((item, index)=>(
                                        <SwiperSlide key={index}>
                                            <div className='pt-2 pb-2  ps-5 pe-5 rounded-4 bg-white h-100 d-flex justify-content-center align-items-center'>
                                                <img src={`${item}`} alt="partner" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                        </Swiper>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Partner
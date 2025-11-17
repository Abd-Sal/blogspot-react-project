import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import WrtierCard from './WrtierCard';

const TopWriters = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const centeredIndex = activeIndex;

    const data = [
        {
            id: 1,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-1.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 2,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-2.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 3,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-3.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 4,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-1.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 5,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-2.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 6,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-3.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 7,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-1.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 8,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-2.jpg`,
            writerName: 'Mohammad alhaj'
        },
        {
            id: 9,
            title: '2021 Complete Python Bootcamp From Zero to Hero...',
            imgSrc: `../../src/assets/writer-3.jpg`,
            writerName: 'Mohammad alhaj'
        }
    ]

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 3000 }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {
                        data.map((item, index) =>(
                            <SwiperSlide>
                                <WrtierCard 
                                    key={item.id}
                                    imgSrc={item.imgSrc}
                                    title={item.title}
                                    writerName={item.writerName}
                                />
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </>
    )
}

export default TopWriters
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Loading from './Loading';
import '../app.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slide = () => {

    const [data, setData] = useState([]);



    useEffect(() => {
        fetch('/Slider.json')
            .then(res => res.json())
            .then(data => {
                setData(data);

            })
            .catch(err => {
                console.error(err);

            });
    }, []);



    return (
        <div className='  h-48 lg:h-96 responsive-card-slid '>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-h-[500px]    "
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative w-full h-[500px]">
                            <img
                                src={item.image}
                                alt={item.header}
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-6 text-white bg-black/30 rounded-xl transition-all duration-500 md:pl-40 ">
                                <h2 className="md:text-3xl font-bold mb-4">{item.header}</h2>
                                <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition text-sm cursor-pointer">
                                    {item.button}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}

            </Swiper>

        </div>
    );
};

export default Slide;
import React from 'react';
import ProdactCard from './ProdactCard';
import { prodactItems } from './Prodactet';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './pordactt.css'; // CSS ঠিকমতো import করা আছে কিনা নিশ্চিত করো

const Prodact = () => {
  return (
    <div className="mb-[100px]">
      <section>
        <div className="text-center">
          <p className="font-Manjari text-[24px]">Supplies</p>
          <h2 className="font-Popins text-[30px] font-semibold">
            Pick Our Products
          </h2>
        </div>
        <div className="flex gap-x-5 justify-between mt-[73px] p-6 h-[700px]  relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {prodactItems.map((item, index) => (
              <SwiperSlide key={index}>
                <ProdactCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Prodact;

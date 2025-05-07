import React from 'react';
import { TestiData } from './TestimonialData';
import QoteImg from '../../../assets/img/qote.png';
import StarImg from '../../../assets/img/star.png';

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section className="pb-[100px] container">
      <div className="text-center">
        <p className="font-Manjari text-[24px]">Testimonial</p>
        <h2 className="font-Popins text-[30px] font-semibold">
          What Our Clients Say
        </h2>
      </div>

      <div className="mt-[98px]">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {TestiData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-[50px] rounded-md">
                <div className="-mt-[90px] -ml-[15px]">
                  <img src={QoteImg} alt="Quote" />
                </div>
                <p className="font-Popins text-base leading-[25px]">
                  {item?.discrption}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 mt-[30px]">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <h4 className="text-[14px] font-medium text-[#333333]">
                        {item?.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-[10px]">
                        {[...Array(5)].map((_, i) => (
                          <img src={StarImg} key={i} alt="Star" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-Popins leading-[25px] text-[#9E9E9E]">
                    {item?.time}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

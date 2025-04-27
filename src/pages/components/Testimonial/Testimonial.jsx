import React from 'react';
import { TestiData } from './TestimonialData';
import QoteImg from '../../../assets/img/qote.png';
import StarImg from '../../../assets/img/star.png';

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  return (
    <div>
      <section className="mb-[100px]">
        <div className="text-center">
          <p className="font-Manjari text-[24px]">Testimonial</p>
          <h2 className="font-Popins text-[30px] font-semibold">
            What Our Clients Say
          </h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-[500px]"
        >
          <div className="grid grid-cols-2 gap-6 mt-[98px]">
            {TestiData.map((item, index) => (
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="bg-white p-[50px] rounded-md">
                    <div className="-mt-[90px] -ml-[15px]">
                      <img src={QoteImg} alt="" />
                    </div>
                    <p className="font-Popins text-base leading-[25px]">
                      {item?.discrption}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 mt-[30px]">
                        <div>
                          <img src={item.img} alt="" />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-medium text-[#333333]">
                            {item?.name}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-[10px]">
                            <img src={StarImg} alt="" />
                            <img src={StarImg} alt="" />
                            <img src={StarImg} alt="" />
                            <img src={StarImg} alt="" />
                            <img src={StarImg} alt="" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-lg font-Popins leading-[25px] text-[#9E9E9E]">
                          {item?.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            ))}
          </div>
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;

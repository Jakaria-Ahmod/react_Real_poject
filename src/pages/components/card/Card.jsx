import React from 'react';
import { cardItems } from './CardText';
// import Icons from '../../../assets/img/cardIcons.png';
import { FaDog } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="my_container ">
      <div className="mt-[177px] mb-[100px]">
        <section className="grid grid-cols-3">
          {cardItems?.map((item, index) => (
            <div className="w-[370px] h-[400px] rounded-md border border-white bg-white text-center px-[17px] py-[54px] hover:bg-[#F9CE3B] group transition duration-300 cursor-pointer">
              {/* <img src={Img} alt="" className="mx-auto" /> */}
              <div className="w-[95px] h-[95px] bg-[#F9CE3B] rounded-full mx-auto flex items-center justify-center ">
                <img
                  src={item?.img}
                  alt=""
                  className="group-hover:opacity-80 transition duration-300 "
                />
              </div>
              <h2 className="mt-[34px] font-Popins text-[38px] group-hover:text-white">
                {item?.title}
              </h2>
              <p className="text-[16px] leading-[35px] mt-[11px]  group-hover:text-white">
                {item?.disception}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Card;

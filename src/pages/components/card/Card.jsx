import React from 'react';
import { cardItems } from './CardText';
// import Icons from '../../../assets/img/cardIcons.png';
import { FaDog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <div className="my_container ">
      <div className="mt-[177px] mb-[100px]">
        <section className="grid grid-cols-3">
          {cardItems?.map((item, index) => (
            <motion.div
              className="w-[370px] h-[400px] rounded-md border border-white bg-white text-center px-[17px] py-[54px] hover:bg-parimary group transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 100 }} // Initially hidden on left
              whileInView={{ opacity: 1, y: 0 }} // Scroll করলে দেখা যাবে
              transition={{ duration: 1 }}
            >
              <div className="w-[95px] h-[95px] bg-parimary  rounded-full mx-auto flex items-center justify-center ">
                <img
                  src={item?.img}
                  alt=""
                  className="group-hover:opacity-80 transition duration-300 hover:text-parimary "
                />
              </div>
              <h2 className="mt-[34px] font-Popins text-[38px] group-hover:text-white transition duration-200">
                {item?.title}
              </h2>
              <p className="text-[16px] leading-[35px] mt-[11px]  group-hover:text-white transition duration-200">
                {item?.disception}
              </p>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Card;

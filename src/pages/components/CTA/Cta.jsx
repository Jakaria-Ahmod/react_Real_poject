import { Button } from '@/components/ui/button';
import React from 'react';
import ctaImg from '../../../assets/img/ctaImg.png';
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <div>
      <div className=" mb-[100px] container">
        <section className="grid md:grid-cols-[auto_auto] justify-center md:justify-between gap-32">
          <motion.div
            initial={{ opacity: 0, x: -200 }} // Initially hidden on left
            whileInView={{ opacity: 1, x: 0 }} // Scroll করলে দেখা যাবে
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h4 className=" text-[30px] md:text-[55px] font-medium font-Popins leading-[50px] md:leading-[80px]">
              Download Our Tracking Sheet
            </h4>
            <span className="text-[38px] font-medium leading-[40px font-Popins] mb-[3 5px] mt-[40px]">
              Train Your Pup :
            </span>
            <p className="text-[24px] leading-[40px] font-Popins text-[#27233AE5] mt-3 md:mt-0 mb-[75px]">
              Log your dog’s pees, poops and meals and Puppy Potty Log will use
              the data to create a custom housetraining schedule unique to your
              fur baby.
            </p>
            <Button className="bg-parimary p-7 hover:bg-parimary cursor-pointer text-[20px] leading-[40px]">
              Download Now
            </Button>
          </motion.div>
          <motion.div
            className="w-[370px] h-[506px] rounded-md overflow-hidden shadow-2xl shadow-amber-950"
            initial={{ opacity: 0, x: 200 }} // Initially hidden on left
            whileInView={{ opacity: 1, x: 0 }} // Scroll করলে দেখা যাবে
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={ctaImg} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Cta;

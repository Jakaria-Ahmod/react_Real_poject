import React from 'react';
import AboutImg from '../../assets/img/aboutIMg.png';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div>
      <div className="container">
        <section>
          <div className="text-center ">
            <span className="text-[24px] font-Manjari">About Us</span>
            <p className="text-[30px] font-Popins capitalize font-semibold max-w-[380px]  mx-auto leading-[44px]">
              Best service for training your lovely dog
            </p>
          </div>
          <div className="grid md:grid-cols-[40%_60%] items-center mt-[66px] md:gap-x-[50px] xl:gap-x-[116px]">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -200 }} // Initially hidden on left
              whileInView={{ opacity: 1, x: 0 }} // Scroll করলে দেখা যাবে
              transition={{ duration: 1 }}
            >
              <img src={AboutImg} alt="" />
            </motion.div>
            <motion.div
              className="w-full mt-[20px] hidden md:block"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-Popins text-[30px] leading-[40px] md:text-[35px]  md:leading-[64px] font-semibold">
                We are the world’s most trusted animal trainer
              </h3>
              <p className="font-Popins text-[18px] leading-[34px] mt-[24px] mb-[50px] max-w-[570px] capitalize">
                Lorem ipsum dolor sit amet consectetur. Neque et aliquam
                tincidunt auctor pellentesque vestibulum est. Mattis fermentu
                pulvinar gravida dictumst sagittis. Sit cursus nulla mattis.
                Gravida enim in fusce maecenas vel cras turpis.
              </p>
              <Button className="bg-parimary rounded-full px-[59px] py-[16px] hover:bg-parimary cursor-pointer">
                About Us
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

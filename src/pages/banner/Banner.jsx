import { Button } from '@/components/ui/button';
import React from 'react';
import BannerImg from '../../assets/img/bannerImg.png';
import BannerShaedow from '../../assets/img/bannerShedow.png';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div
      className="connaner"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mt-5">
        <section className="grid md:grid-cols-2 items-center -gap-5 justify-between">
          <div className="w-[100%] order-2 lg:order-0 mt-[30px]">
            <h1 className=" text-[40px] md:text-[55px] lg:text-[70px] font-Manjari font-bold leading-[50px] md:leading-[96px] text-text1 w">
              Potty train your pup the easy way
            </h1>
            <p className="text-[24px] leading-40px font-Popins text-text1 mt-[28px] mb-[31px]">
              Log your dog’s pees, poops and meals and Puppy Potty Log will use
              the data to create a custom housetraining schedule unique to your
              fur baby.
            </p>
            <Button className="px-[66px] py-[20px] text-[16px] font-Popins font-semibold rounded-full bg-parimary hover:bg-parimary cursor-pointer mt-[31px]">
              Join Us
            </Button>
          </div>
          <div className="w-[100% relative">
            <div className="absolute top-[49px] -right-10 hidden lg:block">
              <img src={BannerShaedow} alt="" />
            </div>
            <img src={BannerImg} alt="" className="w-full object-cover " />
            <div className="absolute bottom-[0px] -left-10 hidden lg:block">
              <img src={BannerShaedow} alt="" />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Banner;

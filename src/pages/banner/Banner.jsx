import { Button } from '@/components/ui/button';
import React from 'react';
import BannerImg from '../../assets/img/bannerImg.png';
import BannerShaedow from '../../assets/img/bannerShedow.png';
const Banner = () => {
  return (
    <div className="my_container">
      <div className="mt-5">
        <section className="grid grid-cols-2 items-center -gap-5 justify-between">
          <div className="w-[100%]">
            <h1 className="text-[55px] font-Manjari font-bold leading-[96px] text-[#27233A] w">
              Potty train your pup the easy way
            </h1>
            <p className="text-[24px] leading-40px font-Popins text-[#27233A] mt-[28px] mb-[31px]">
              Log your dog’s pees, poops and meals and Puppy Potty Log will use
              the data to create a custom housetraining schedule unique to your
              fur baby.
            </p>
            <Button className="px-[66px] py-[20px] text-[16px] font-Popins font-semibold rounded-full bg-[#F9CE3B] hover:bg-[#F9CE3B] cursor-pointer mt-[31px]">
              Join Us
            </Button>
          </div>
          <div className="w-[100% relative">
            <div className="absolute top-[49px] -right-10">
              <img src={BannerShaedow} alt="" />
            </div>
            <img src={BannerImg} alt="" className="w-full object-cover " />
            <div className="absolute bottom-[0px] -left-10">
              <img src={BannerShaedow} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;

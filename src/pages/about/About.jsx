import React from 'react';
import AboutImg from '../../assets/img/aboutIMg.png';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div>
      <div>
        <section>
          <div className="text-center ">
            <span className="text-[24px] font-Manjari">About Us</span>
            <p className="text-[30px] font-Popins capitalize font-semibold max-w-[380px] mx-auto leading-[44px]">
              Best service for training your lovely dog
            </p>
          </div>
          <div className="grid grid-cols-[40%_60%] items-center mt-[66px] gap-x-[116px]">
            <div className="w-full">
              <img src={AboutImg} alt="" />
            </div>
            <div className="w-full">
              <h3 className="font-Popins text-[45px] leading-[64px] font-semibold">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

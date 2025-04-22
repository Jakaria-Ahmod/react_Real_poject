import { Button } from '@/components/ui/button';
import googleButton from '../../assets/img/googleButton.png';
import appleButton from '../../assets/img/appleButton.png';
import mobleImgOne from '../../assets/img/mobleone.png';
import mobleImgTow from '../../assets/img/mobileTow.png';
import React from 'react';

const Download = () => {
  return (
    <div>
      <div>
        <section className="mb-[118px]">
          <div className="grid grid-cols-[60%_40%] mt-[146px] space-x-[146px]">
            <div>
              <h5 className="font-Popins text-[55px] leading-[85px] capitalize max-w-[516px] text-[#333333]">
                One Mobile App For Your Lovely Pet
              </h5>
              <p className="text-[19px] font-Popins leading-[34px] capitalize max-w-[554px] mt-[17px] mb-[64px]">
                Lorem ipsum dolor sit amet consectetur. Magna dictumst mattis
                tempus ac dignissim ultricies. Sodales tellus egestas ac viverra
                mauris enim bibendum commodo aliquam. Elementum et est semper
                faucibus imperdiet urna at sagittis. Nunc sit pellentesque in
                odio ultrices volutpat nunc nec lacus. Sed orci faucibus.{' '}
              </p>
              <h6 className="font-Popins text-[30px] font-bold leading-[34px] capitalize text-[#333333]">
                Download The App
              </h6>
              <div className="">
                <div className="mt-[50px] flex space-x-[28px]">
                  <Button className="bg-white shadow-2xl rounded-full px-[46px] py-[30px] hover:bg-white cursor-pointer">
                    <img src={googleButton} alt="" />
                  </Button>
                  <Button className="bg-white shadow-2xl rounded-full px-[46px] py-[30px] hover:bg-white cursor-pointer">
                    <img src={appleButton} alt="" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div>
                <img src={mobleImgOne} alt="" />
              </div>
              <div className="absolute top-12 right-[-6px]">
                <img src={mobleImgTow} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Download;

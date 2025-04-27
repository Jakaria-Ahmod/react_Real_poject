import React from 'react';
import LogoImg from '../../../assets/img/navLogo.png';
import { MenuItem } from '../Nav/NavDamiData';
import { Link } from 'react-router';
import googleButton from '../../../assets/img/googleButton.png';
import appleButton from '../../../assets/img/appleButton.png';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="container">
          <div className="grid grid-cols-3">
            <div>
              <div>
                <img src={LogoImg} alt="logo img" />
              </div>
              <p className="text-[#333] font-Popins font-normal leading-[32px] mt-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitationt.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="font-Popins text-[25px] font-medium leading-[24px]">
                Quick Links
              </h4>
              <ul className="mt-[100px]">
                {MenuItem?.slice(0, 5).map((item, index) => (
                  <li
                    key={item?.id}
                    className="hover:text-parimary text-[16px] font-Popins transition mb-[18px] duration-200"
                  >
                    <Link to={item?.path}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-Popins font-medium leading-[24px] text-[#333333] text-[25px]">
                Download Our App
              </h4>
              <p className="mt-[56px] text-lg font-Popins font-normal text-[#333333] w-[270px]">
                Available on Google Play and App Store.
              </p>
              <div>
                <div className="mt-[50px] flex space-x-[28px]">
                  <Button className="bg-white shadow-2xl rounded-full px-[46px] py-[25px] hover:bg-white cursor-pointer">
                    <img src={googleButton} alt="" className="w-[80px]" />
                  </Button>
                  <Button className="bg-white shadow-2xl rounded-full px-[46px] py-[25px] hover:bg-white cursor-pointer">
                    <img src={appleButton} alt="" className="w-[80px]" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-red-600-50 py-[20px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-Popins font-normal text-[14px]">
                  Copyright © 2023 potty.app
                </p>
              </div>
              <div className="flex gap-x-5">
                <span className="text-[14px] font-normal font-Popins text-[#333]">
                  Terms of Service
                </span>
                <span className="text-[14px] font-normal font-Popins text-[#333]">
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import LogoImg from '../../../assets/img/navLogo.png';
import { Link } from 'react-router';
import { MenuItem } from './NavDamiData';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { IoIosMenu } from 'react-icons/io';
// 1175 px
const Nav = () => {
  return (
    <div className="sticky top-0 left-0 w-full bg-white z-50">
      <div className=" container">
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Initially hidden on left
          whileInView={{ opacity: 1, y: 0 }} // Scroll করলে দেখা যাবে
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <nav className="flex items-center justify-between mt-[11px]">
            <div className="md:w-[100px] md:h-[100px]">
              <Link to="/">
                {' '}
                <img
                  src={LogoImg}
                  className="w-full h-full object-cover"
                  alt="img"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center justify-center space-x-6">
                {MenuItem?.map((item, index) => (
                  <li
                    key={item?.id}
                    className="hover:text-parimary md:text-[14px] lg:text-[16px] font-Popins transition duration-200"
                  >
                    <Link>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <IoIosMenu className="md:hidden" size={30} />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center text-end space-x-2.5">
                <Button className="bg-parimary px-[21px] py-[10px] hover:bg-parimary cursor-pointer">
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button className="bg-transparent border border-parimary text-parimary hover:text-white hover:bg-parimary transition duration-300 cursor-pointer">
                  <Link to="/login">Log In</Link>
                </Button>
              </div>
            </div>
          </nav>
        </motion.div>
      </div>
    </div>
  );
};

export default Nav;

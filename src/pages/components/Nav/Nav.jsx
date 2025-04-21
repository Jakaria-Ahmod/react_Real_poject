import React from 'react';
import LogoImg from '../../../assets/img/navLogo.png';
import { Link } from 'react-router';
import { MenuItem } from './NavDamiData';
import { Button } from '@/components/ui/button';
// 1175 px
const Nav = () => {
  return (
    <div className=" container">
      <div>
        <nav className="flex items-center justify-between mt-[11px]">
          <div>
            <Link to="/">
              {' '}
              <img src={LogoImg} alt="" />
            </Link>
          </div>
          <div>
            <ul className="flex items-center justify-center space-x-6">
              {MenuItem?.map((item, index) => (
                <li
                  key={item?.id}
                  className="hover:text-parimary text-[16px] font-Popins transition duration-200"
                >
                  <Link to={item?.path}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-end space-x-2.5">
            <Button className="bg-parimary px-[21px] py-[10px] hover:bg-parimary cursor-pointer">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button className="bg-transparent border border-parimary text-parimary hover:text-white hover:bg-parimary transition duration-300 cursor-pointer">
              <Link to="/login">Log In</Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;

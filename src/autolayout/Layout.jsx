import React from 'react';
import Nav from '../pages/components/Nav/Nav';
import { Outlet } from 'react-router';
import Footer from '../pages/components/footer/Footer';

const Layout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

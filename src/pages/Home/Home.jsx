import React from 'react';
import Banner from '../banner/Banner';
import Card from '../components/card/Card';
import About from '../about/About';
import Download from '../download/Download';
import Prodact from '../components/prodact/Prodact';
import Features from '../components/Features/Features';
import AppSreen from '../components/appSreenshot/AppSreen';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <About></About>
      <Download></Download>
      <Prodact></Prodact>
      <Features></Features>
      <AppSreen></AppSreen>
    </div>
  );
};

export default Home;

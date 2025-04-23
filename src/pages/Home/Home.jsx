import React from 'react';
import Banner from '../banner/Banner';
import Card from '../components/card/Card';
import About from '../about/About';
import Download from '../download/Download';
import Prodact from '../components/prodact/Prodact';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <About></About>
      <Download></Download>
      <Prodact></Prodact>
    </div>
  );
};

export default Home;

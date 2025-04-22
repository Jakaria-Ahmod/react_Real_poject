import React from 'react';
import Banner from '../banner/Banner';
import Card from '../components/card/Card';
import About from '../about/About';
import Download from '../download/Download';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <About></About>
      <Download></Download>
    </div>
  );
};

export default Home;

import React from 'react';
import ServiceForHome from './ServiceForHome';
import Slide from './Banner';
import Banner from './Banner';
import About from '../About/About';

const Home = () => {
  return (
    <div>
      <ServiceForHome></ServiceForHome>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
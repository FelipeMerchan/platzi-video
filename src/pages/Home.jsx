/* eslint-disable import/no-unresolved */
import React from 'react';

import Header from '@components/Header';
import Search from '@components/Search';
import Categories from '@components/Categories';
import Carousel from '@components/Carousel';
import CarouselItem from '@components/CarouselItem';
import Footer from '@components/Footer';
import '@styles/pages/Home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Categories>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};

export default Home;

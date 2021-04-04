/* eslint-disable import/no-unresolved */
import React from 'react';

import '@styles/components/Carousel.scss';

const Carousel = ({ children }) => {
  return (
    <section className='Carousel'>
      <div className='Carousel__container'>
        {children}
      </div>
    </section>
  );
};

export default Carousel;

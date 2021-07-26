/* eslint-disable import/no-unresolved */
import React from 'react';

import playIcon from '../assets/static/images/icons/play.png';
import plusIcon from '../assets/static/images/icons/mas.png';
import '@styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className='Carousel-item'>
      <img className='Carousel-item__image' src={cover} alt={title} />
      <div className='Carousel-item__details'>
        <div>
          <img src={playIcon} alt='Play' />
          <img src={plusIcon} alt='Más' />
        </div>
        <p className='Carousel-item__details--title'>{title}</p>
        <p className='Carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;

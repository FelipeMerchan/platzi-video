/* eslint-disable import/no-unresolved */
import React from 'react';

import playIcon from '../assets/static/images/icons/play.png';
import plusIcon from '../assets/static/images/icons/mas.png';
import '@styles/components/CarouselItem.scss';

const CarouselItem = () => {
  return (
    <div className='Carousel-item'>
      <img className='Carousel-item__image' src='https://images.pexels.com/photos/120066/pexels-photo-120066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Persona en concierto' />
      <div className='Carousel-item__details'>
        <div>
          <img src={playIcon} alt='Play' />
          <img src={plusIcon} alt='Más' />
        </div>
        <p className='Carousel-item__details--title'>Título descriptivo</p>
        <p className='Carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
      </div>
    </div>
  );
};

export default CarouselItem;

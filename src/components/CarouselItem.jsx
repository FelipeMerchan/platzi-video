/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';

import playIcon from '../assets/static/images/icons/play.png';
import plusIcon from '../assets/static/images/icons/mas.png';
import '@styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  return (
    <div className='Carousel-item'>
      <img className='Carousel-item__image' src={cover} alt={title} />
      <div className='Carousel-item__details'>
        <div>
          <button
            type='button'
            aria-label='Reproducir'
          >
            <img
              src={playIcon}
              alt='Play'
            />
          </button>
          <button
            type='button'
            aria-label='Agregar'
            onClick={handleSetFavorite}
          >
            <img
              src={plusIcon}
              alt='Más'
            />
          </button>
        </div>
        <p className='Carousel-item__details--title'>{title}</p>
        <p className='Carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

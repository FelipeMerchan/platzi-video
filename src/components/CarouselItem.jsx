/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';

import playIcon from '../assets/static/images/icons/play.png';
import plusIcon from '../assets/static/images/icons/mas.png';
import removeIcon from '../assets/static/images/icons/remove-icon.png';
import '@styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='Carousel-item'>
      <img className='Carousel-item__image' src={cover} alt={title} />
      <div className='Carousel-item__details'>
        <div>
          <Link
            to={`/player/${id}`}
            aria-label='Reproducir'
          >
            <img
              src={playIcon}
              alt='Play'
            />
          </Link>
          {isList ?
            <button
              type='button'
              aria-label='Eliminar'
              onClick={() => handleDeleteFavorite(id)}
            >
              <img
                src={removeIcon}
                alt='Eliminar'
              />
            </button> :
            <button
              type='button'
              aria-label='Agregar'
              onClick={handleSetFavorite}
            >
              <img
                src={plusIcon}
                alt='Agregar'
              />
            </button>}
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
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

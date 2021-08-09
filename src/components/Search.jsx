/* eslint-disable import/no-unresolved */
import React from 'react';
import classNames from 'classnames';

import '@styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('Search', {
    isHome,
  });

  return (
    <section className={inputStyle}>
      <h2 className='Search__title'>¿Qué quieres ver hoy?</h2>
      <input className='Search__input' type='text' placeholder='Buscar...' />
    </section>
  );
};

export default Search;

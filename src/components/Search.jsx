/* eslint-disable import/no-unresolved */
import React from 'react';

import '@styles/components/Search.scss';

const Search = () => {
  return (
    <section className='Search'>
      <h2 className='Search__title'>¿Qué quieres ver hoy?</h2>
      <input className='Search__input' type='text' placeholder='Buscar...' />
    </section>
  );
};

export default Search;

/* eslint-disable import/no-unresolved */
import React from 'react';

import '@styles/components/Categories.scss';

export const Categories = ({ children }) => {
  return (
    <div className='Categories'>
      <h2 className='Categories__title'>Mi lista</h2>
      {children}
    </div>
  );
};

export default Categories;

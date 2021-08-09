/* eslint-disable import/no-unresolved */
import React from 'react';

import Footer from '@components/Footer';
import '@styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='Layout'>
    {children}
    <Footer />
  </div>
);

export default Layout;

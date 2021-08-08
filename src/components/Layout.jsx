/* eslint-disable import/no-unresolved */
import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import '@styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='Layout'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

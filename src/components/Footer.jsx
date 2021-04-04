/* eslint-disable import/no-unresolved */
import React from 'react';

import '@styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <a href='/'>Términos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;

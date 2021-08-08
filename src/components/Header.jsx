import React from 'react';
import { Link } from 'react-router-dom';

import platziVideoLogo from '../assets/static/images/logo-platzi-video-BW2.png';
import iconUser from '../assets/static/images/icons/user.svg';
// eslint-disable-next-line import/no-unresolved
import '@styles/components/Header.scss';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/'>
        <img className='Header__image' width='200' src={platziVideoLogo} alt='Platzi Video' />
      </Link>
      <div className='Header__menu'>
        <div className='Header__menu-profile'>
          <img width='20' src={iconUser} alt='Usuario' />
          <span>Mi perfil</span>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <Link to='/login'>
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

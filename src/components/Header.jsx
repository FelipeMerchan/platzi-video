/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';

import platziVideoLogo from '../assets/static/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/images/icons/user.svg';
// eslint-disable-next-line import/no-unresolved
import '@styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <header className='Header'>
      <Link to='/'>
        <img className='Header__image' width='200' src={platziVideoLogo} alt='Platzi Video' />
      </Link>
      <div className='Header__menu'>
        <div className='Header__menu-profile'>
          {hasUser ?
            <img
              width='20'
              src={gravatar(user.email)}
              alt={user.email}
            /> :
            <img
              width='20'
              src={userIcon}
              alt='Usuario'
            />}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);

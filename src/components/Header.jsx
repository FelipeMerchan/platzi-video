/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

import platziVideoLogo from '../assets/static/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/images/icons/user.svg';
// eslint-disable-next-line import/no-unresolved
import '@styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

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
          {hasUser ?
            <li>
              <a href='/'>{user.name}</a>
            </li> :
            null}
          {hasUser ?
            <li>
              <a href='#logout' onClick={handleLogout}>Cerrar Sesión</a>
            </li> :
            <li>
              <Link to='/login'>
                Iniciar sesión
              </Link>
            </li>}
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

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

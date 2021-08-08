/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';

import '@styles/pages/Login.scss';
import googleIcon from '../assets/static/images/google.svg';
import twitterIcon from '../assets/static/images/twitter.svg';

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <h2>Inicia Sesión</h2>
      <form className='login__container--form'>
        <input aria-label='Correo' className='input' type='text' placeholder='Correo' />
        <input aria-label='Contraseña' className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' value='dirst_checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <div className='login__container--social-media'>
        <a href='/' target='blank'>
          <img width='20' src={googleIcon} alt='Google' />
          Inicia sesión con Google
        </a>
        <br />
        <a href='/' target='blank'>
          <img width='20' src={twitterIcon} alt='Google' />
          Inicia sesión con Twitter
        </a>
      </div>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/register'>
          Regístrate
        </Link>
      </p>
    </div>
  </section>
);

export default Login;

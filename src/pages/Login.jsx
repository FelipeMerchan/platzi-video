/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '@components/Header';
import { loginRequest } from '../actions';

import '@styles/pages/Login.scss';
import googleIcon from '../assets/static/images/google.svg';
import twitterIcon from '../assets/static/images/twitter.svg';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <div className='login__container'>
          <h2>Inicia Sesión</h2>
          <form
            className='login__container--form'
            onSubmit={handleSubmit}
          >
            <input
              className='input'
              aria-label='Correo'
              type='text'
              placeholder='Correo'
              name='email'
              onChange={handleInput}
            />
            <input
              className='input'
              aria-label='Contraseña'
              type='password'
              placeholder='Contraseña'
              name='password'
              onChange={handleInput}
            />
            <button className='button' type='submit'>Iniciar sesión</button>
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
            No tienes ninguna cuenta {' '}
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

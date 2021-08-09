/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '@components/Header';
import { registerRequest } from '../actions';

// eslint-disable-next-line import/no-unresolved
import '@styles/pages/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <div className='register__container fadeInUp'>
          <h2>Regístrate</h2>
          <form
            className='register__container--form'
            onSubmit={handleSubmit}
          >
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='name'
              onChange={handleInput}
            />
            <input
              className='input'
              type='text'
              placeholder='Correo'
              name='email'
              onChange={handleInput}
            />
            <input
              className='input'
              type='password'
              placeholder='Contraseña'
              name='password'
              onChange={handleInput}
            />
            <button className='button' type='submit'>Registrarme</button>
          </form>
          <Link to='/login'>
            Iniciar Sesión
          </Link>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

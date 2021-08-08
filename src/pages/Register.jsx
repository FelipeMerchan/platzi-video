import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import '@styles/pages/Register.scss';

const Register = () => (
  <section className='register'>
    <div className='register__container fadeInUp'>
      <h2>Regístrate</h2>
      <form action='#' className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Registrarme</button>
      </form>
      <Link to='/login'>
        Iniciar Sesión
      </Link>
    </div>
  </section>
);

export default Register;

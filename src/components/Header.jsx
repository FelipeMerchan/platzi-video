import React from 'react'

import platziVideoLogo from '../assets/static/images/logo-platzi-video-BW2.png'
import iconUser from '../assets/static/images/icons/user.svg'
import '@styles/components/Header.scss'

export const Header = () => {
  return (
    <header className="Header">
      <img className="Header__image" width="200" src={platziVideoLogo} alt="Platzi Video" />
      <div className="Header__menu">
        <div className="Header__menu-profile">
          <img width="20" src={iconUser} alt="Usuario" />
          <span>Mi perfil</span>
        </div>
        <ul>
          <li>
            <a href="#">Cuenta</a>
          </li>
          <li>
            <a href="#">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

import React from 'react';
import batatabitLogo from '../../assets/img/logo.svg'
import './index.css'

const Header = () => {
  return (
    <div>
      <header>
        <img src={batatabitLogo} alt="batatabit-logo"/>
        <div className="header__title-container">
          <h1>La proxima revolucion en el intermcabio de criptomonedas</h1>
          <p>
            Batatabit te ayuda a navegar entre los diferentes precios y tendencias.
          </p>
          <a href="#plans" className="header__button">Conoce nuestros planes <span></span> </a>
        </div>
    </header>
    </div>
  );
}

export default Header;

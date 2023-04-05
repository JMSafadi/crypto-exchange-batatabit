import React from 'react';
import batatabitLogo from '../../assets/img/logo.svg'
import './index.css'

const Header = () => {
  return (
    <div>
      <header>
        <img src={batatabitLogo} alt="batatabit-logo"/>
        <div className="header__title-container">
          <h1>The next revolution in cryptocurrency exchange</h1>
          <p>
            Batatabit helps you navigate through different prices and trends
          </p>
          <a href="#plans" className="header__button">Check out our plans <span></span> </a>
        </div>
    </header>
    </div>
  );
}

export default Header;

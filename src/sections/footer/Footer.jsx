import React from 'react';
import './index.css'
import footerLogo from '../../assets/img/logo-footer.svg'

const Footer = () => {
  return (
    <footer>
      <section className="footer-left">
        <ul>
          <li> <a href="#">Twitter</a> </li>
          <li> <a href="#">Instagram</a> </li>
          <li> <a href="#">LinkedIn</a> </li>
        </ul>
      </section>
      <section className="footer-right">
        <img src={footerLogo} alt="logo-batatabit"/>
      </section>
    </footer>
  );
}

export default Footer;

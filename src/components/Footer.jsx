import React from 'react';
import logo from '../assets/kasa_white.svg';
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <img src={logo} alt="Logo Kasa blanc" />
        <p>© 2020 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

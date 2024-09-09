import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/kasa_red.jpg';
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="img_link active" to="/" aria-current="page">
          <img src={logo} alt="Logo du site Kasa" />
        </Link>
        <ul>
          <li>
            <Link to="/" className="active" aria-current="page">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

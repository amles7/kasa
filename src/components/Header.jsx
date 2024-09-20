import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/kasa_red.jpg";
import "../styles/Header.scss";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav className="navbar">
        <Link className="img_link active" to="/" aria-current="page">
          <img src={logo} alt="Logo du site Kasa" />
        </Link>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

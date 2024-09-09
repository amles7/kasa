import React from 'react';
import background_img from "../assets/background.jpg"
import "../styles/Banner.scss";


function Banner({ title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${background_img})` }}>
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;

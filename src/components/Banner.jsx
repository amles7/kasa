import React from "react";
import background_img from "../assets/background.jpg";

import "../styles/Banner.scss";


function Banner({ title, titlephone }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${background_img})` }}
    >
      <h1 className="dekstop">{title}</h1>
      <h1 className="phone">{titlephone}</h1>
    </div>
  );
}

export default Banner;

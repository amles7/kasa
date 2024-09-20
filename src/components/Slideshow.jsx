import React, { useState } from "react";
import "../styles/Slideshow.scss";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour next image
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Fonction  previous image
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <div
            className="slideshow__arrow slideshow__arrow--left"
            onClick={prevSlide}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow__image"
      />
    </div>
  );
};

export default Slideshow;

import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Gallery = ({ images, width = '100%', height = '400px', radius = '0px', backgroundColors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div style={{
      position: 'relative',
      width,
      height,
      backgroundColor: backgroundColors ? backgroundColors[currentIndex] : '#E2E3FF',
      borderRadius: radius,
    }}>
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
      {currentIndex > 0 && (
        <img
          src={arrowLeft}
          alt="Previous"
          onClick={handlePrevClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            cursor: 'pointer',
            transform: 'translateY(-50%)',
          }}
        />
      )}
      {currentIndex < images.length - 1 && (
        <img
          src={arrowRight}
          alt="Next"
          onClick={handleNextClick}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            cursor: 'pointer',
            transform: 'translateY(-50%)',
          }}
        />
      )}
    </div>
  );
};

export default Gallery;

import React, { useState, useEffect } from 'react';
import rightArrow from '../assests/arrow/arrow-right.png';
import leftArrow from '../assests/arrow/arrow-left.png';

function Carrousel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  function changePicture(direction) {
    if (direction === 'next') {
      setCurrentPicture((prevPicture) => (prevPicture + 1) % pictures.length);
    } else if (direction === 'previous') {
      setCurrentPicture((prevPicture) =>
        prevPicture === 0 ? pictures.length - 1 : prevPicture - 1
      );
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        changePicture('next');
      } else if (event.key === 'ArrowLeft') {
        changePicture('previous');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pictures.length]);

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <img
          className="previous-arrow arrow-img"
          src={leftArrow}
          alt="précédente"
          onClick={() => changePicture('previous')}
          aria-label="Image précédente"
        />
      )}
      {pictures.length > 1 && (
        <img
          className="next-arrow arrow-img"
          src={rightArrow}
          alt="suivante"
          onClick={() => changePicture('next')}
          aria-label="Image suivante"
        />
      )}
      <img
        src={pictures[currentPicture]}
        alt={`image-${currentPicture + 1}`}
        className="carrousel-image"
      />
      {pictures.length > 1 && (
        <p className="numbers">
          {currentPicture + 1}/{pictures.length}
        </p>
      )}
    </div>
  );
}

export default Carrousel;

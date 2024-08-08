import React, { useState, useEffect, useRef} from 'react';
import rightArrow from '../assets/arrow/arrow-right.png';
import leftArrow from '../assets/arrow/arrow-left.png';
import "../style/Carrousel.scss";

function Carrousel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const carrouselRef = useRef();

  const changePicture = (direction) => {
    if (direction === 'next') {
      setCurrentPicture((prevPicture) => (prevPicture + 1) % pictures.length);
    } else if (direction === 'previous') {
      setCurrentPicture((prevPicture) =>
        prevPicture === 0 ? pictures.length - 1 : prevPicture - 1
      );
    }
  };

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
    <div className="carrousel-container" ref={carrouselRef}>
      {pictures.length > 1 && (
        <>
          <div
            className="arrow arrow-left"
            onClick={() => changePicture('previous')}
          >
            <img
              src={rightArrow}
              alt="Image précédente"
            />
          </div>
          <div
            className="arrow arrow-right"
            onClick={() => changePicture('next')}
          >
            <img
              src={leftArrow}
              alt="Image suivante"
            />
          </div>
        </>
      )}
      <div className="carrousel-content">
        <img
          src={pictures[currentPicture]}
          alt={`Image ${currentPicture + 1} sur ${pictures.length}`}
          className="carrousel-image"
        />
        {pictures.length > 1 && (
          <p className="numbers">
            {currentPicture + 1}/{pictures.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default Carrousel;




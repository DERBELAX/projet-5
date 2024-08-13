import React, { useState} from 'react';
import rightArrow from '../assets/arrow/arrow-right.png';
import leftArrow from '../assets/arrow/arrow-left.png';
import "../style/Carrousel.scss";

function Carrousel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  ;

  const changePicture = (direction) => {
    if (direction === 'next') {
      if(currentPicture === pictures.length -1){
        setCurrentPicture(0)
      } else {
        setCurrentPicture(currentPicture+1)
      }
   
    } else if (direction === 'previous') {
      if(currentPicture === 0)
        {
        setCurrentPicture(pictures.length -1)
      } else {
        setCurrentPicture(currentPicture -1)
      }
    }
  };
  return (
    <div className="carrousel-container">
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




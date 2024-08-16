import React, { useState} from 'react';
import Left from '../assets/arrow/arrow-left.svg';
import Right from '../assets/arrow/arrow-right.svg';
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
            className="arrow-left"
            onClick={() => changePicture('previous')}
          >
            <img
              src={Left}
              alt="Image précédente"
            />
          </div>
          <div
            className="arrow-right"
            onClick={() => changePicture('next')}
          >
            <img
              src={Right}
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




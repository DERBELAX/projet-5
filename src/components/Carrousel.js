import React, { useState} from 'react';
import Left from '../assets/arrow/arrow-left.svg';
import Right from '../assets/arrow/arrow-right.svg';
import "../style/Carrousel.scss";

// Le composant Carrousel prend une liste d'images (pictures) en tant que prop
function Carrousel({ pictures }) {
  // Utilisation du hook useState pour gérer l'image actuellement affichée
  const [currentPicture, setCurrentPicture] = useState(0); 
  
  // Fonction pour changer l'image affichée selon la direction (next ou previous)
  const changePicture = (direction) => {
    if (direction === 'next') {
      // Si on est à la dernière image, revenir à la première
      if(currentPicture === pictures.length -1){
        setCurrentPicture(0)
      } else {
        // Passer à l'image suivante
        setCurrentPicture(currentPicture+1)
      }
   
    } else if (direction === 'previous') {
       // Si on est à la première image, aller à la dernière
      if(currentPicture === 0)
        {
        setCurrentPicture(pictures.length -1)
      } else {
        // Revenir à l'image précédente
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

        {/* Affichage du compteur d'images uniquement si plus d'une image est présente */}
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




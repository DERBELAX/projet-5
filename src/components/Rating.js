import React from "react";
import starRed from "../assests/Red-Star.png";
import starGrey from "../assests/Grey-Star.png"
import "../style/Rating.scss"


// Fonction Stars qui affiche des étoiles en fonction de la note
export default function Stars({rating}) {
    const stars = []; // Tableau pour stocker les éléments d'étoiles

    // Boucle pour créer 5 étoiles
    for (let i = 0; i < 5; i++) {
        // Déterminer l'image de l'étoile (rouge si i < rating, sinon grise)
        const ratingStar = (i < rating) ? starRed : starGrey;
        // Ajouter l'image de l'étoile au tableau des étoiles
        stars.push(<img src={ratingStar} alt='rating' key={i} className="rating-star" />);
    }

    return stars; // Retourner le tableau des étoiles à afficher
}
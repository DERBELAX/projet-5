import React from "react";
import imgHome from "../assests/img/mer.png";
import imgAbout from "../assests/img/nature.png";
import "../style/Banner.scss"


// Configuration des bannières pour différentes pages
const configBanner = {
  home: {
      className : 'banner-home', // Classe CSS pour la bannière d'accueil
      imageSrc : imgHome, // Source de l'image pour la bannière d'accueil
      imageAlt : 'vue sur mer', // Texte alternatif pour l'image
      title: 'Chez vous, partout et ailleurs', // Titre de la bannière d'accueil
  },
  about: {
      className : 'banner-about', // Classe CSS pour la bannière "À propos"
      imageSrc : imgAbout, // Source de l'image pour la bannière "À propos"
      imageAlt : 'vue sur montagne', // Texte alternatif pour l'image
      title: null, // Pas de titre pour la bannière "À propos"
  },
}

// Composant Banner qui affiche la bannière en fonction de la page
const Banner = ({page}) => {
  // Extraction des propriétés de configuration pour la page spécifiée
  const { className, imageSrc, imageAlt, title} = configBanner[page]

  return (
      <section className={className}>
          <div className="banner-container">
              <img src={imageSrc} className='banner-image' alt={imageAlt} title={imageAlt} />
          </div>
          {/* Afficher le titre uniquement pour la page d'accueil */}
          {title && page === 'home' && (
              <div className="banner-container">
                  <h1 className="banner-title">{title}</h1>
              </div>
          )}
      </section>
  )
}

export default Banner


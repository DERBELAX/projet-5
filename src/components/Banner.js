import React from "react";
import imgHome from "../assets/img/mer.png";
import imgAbout from "../assets/img/nature.png";
import "../style/Banner.scss"


// Configuration des bannières pour différentes pages
const configBanner = {
  home: {
      className : 'banner-home', 
      imageSrc : imgHome, 
      imageAlt : 'vue sur mer', 
      title: 'Chez vous, partout et ailleurs', 
  },
  about: {
      className : 'banner-about', 
      imageSrc : imgAbout, 
      imageAlt : 'vue sur montagne', 
      title: null, 
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


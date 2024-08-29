import React, { useState, useRef } from "react";
import Arrow from "../assets/arrow/arrow.svg";
import "../style/Collapse.scss";

// Le composant Collapse prend un titre (collapseTitle) et un contenu (children) en tant que props
function Collapse({ collapseTitle, children }) {

  // Utilisation du hook useState pour gérer l'état "open" qui indique si le contenu est visible ou non
  const [open, setOpen] = useState(false); 

  // Fonction pour basculer l'état "open" lorsqu'on clique sur le titre
  const toggle = () => {
    setOpen(!open);
  };
  // Utilisation du hook useRef pour obtenir une référence directe à l'élément DOM contenant le contenu du collapse
  const contentRef = useRef();

  return (
    <div className="collapse-container">
        {/* Titre du collapse qui déclenche l'ouverture ou la fermeture */}
      <div className="collapse-title" onClick={toggle}>

        {collapseTitle} {/* Affiche le titre passé en tant que prop */}
        
        <button className="button"
          aria-expanded={open ? "true" : "false"} // Attribut ARIA pour indiquer l'état du collapse
          aria-controls="collapse-parent" // Attribut ARIA pour indiquer l'élément contrôlé
          aria-label="open this collapse" // Attribut ARIA pour donner une description accessible du bouton
        >
          <img
            src={Arrow}
            className={`Arrow ${open ? "down" : ""}`} // Applique la classe "down" si le collapse est ouvert
            alt="Ouvrir l'article"  // Texte alternatif pour l'image
          />
        </button>
      </div>

      <div
        id="collapse-parent"
        className={open ? "collapse-parent show" : "collapse-parent hide"} // Affiche ou masque le contenu selon l'état "open"
        ref={contentRef} // Référence à l'élément DOM pour calculer dynamiquement la hauteur
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" } // Si ouvert, définit la hauteur selon le contenu
            : { height: "0px" } // Si fermé, la hauteur est 0
        }
      >
        <div className="collapse-content">{children}</div> {/* Affichage du contenu passé en tant qu'enfant */}
      </div>
    </div>
  );
}

export default Collapse;


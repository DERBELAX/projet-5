import React, { useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import HousingData from '../Data/logements.json';
import "../style/Houssing.scss";

const Housing = () => {
  const { id } = useParams(); // Récupération de l'identifiant du logement 
  const navigate = useNavigate(); // Hook pour la navigation programmatique

  // Recherche des données du logement correspondant à l'ID spécifié
  const data = HousingData.find((data) => data.id === id);
    // Utilisation de useEffect pour gérer la redirection si aucune donnée n'est trouvée
  useEffect(() => {
    if (!data) {
      navigate("/*"); // Redirection vers la page d'erreur si le logement n'est pas trouvé
    }
  }, [data, navigate]);

  if (!data) {
     // Si les données ne sont pas encore disponibles, afficher un message de chargement
    return <div>Loading...</div>;
  }

  return (
    <>
     {/* Composant Carrousel pour afficher les images du logement */}
    <Carrousel pictures={data.pictures} />
    <section className='details'>
      <div className='details-header'>
      <div className="tag-title">
           {/* Titre et localisation du logement */}
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
             {/* Affichage des tags associés au logement */}
            <ul className='tag'>
               {data.tags.map((tag) => (
              <Tag key={`${data.id}-${tag}`} tag={tag} />))}
            </ul>
       </div>
       <div className="stars-name">
          <div className="host-name-picture">
              {/* Nom et photo de l'hôte */}
            <p className="host-name">{data.host.name}</p>
            <img
              className="host-picture"
              src={data.host.picture}
              alt={data.host.name}
            />
          </div>  
             {/* Composant Rating pour afficher la note du logement */}
          <div className="rating">
            <Rating rating={data.rating} className="rating-star" />
            </div>
      </div>
     </div> 
    <div className="collapse-housing">
        <div className="description-housing">
          <Collapse collapseTitle={<h2>Description</h2>}>
            <p>{data.description}</p>
          </Collapse>
        </div>

        <div className="equipments-housing">
          <Collapse collapseTitle={<h2>Equipements</h2>}>
            <ul>
              {data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
     </section>
    </>
  );
};

export default Housing;


import React from 'react';
import Housing from '../Data/logements.json';
import { Link } from 'react-router-dom';
import "../style/Card.scss";
const Card = () => {
    return (
      <div className='card'>
          {Housing.map((data)=>(
              <div key={data.id}> {/* Utilisation de l'ID comme clé pour chaque élément */}
                  <Link to={`/houssing/${data.id}`}> {/* Lien vers la page de détails du logement */}
                      <div className="housing">
                        {/* Affichage de l'image du logement */}
                          <img src={data.cover} alt={data.title} />
                          
                        {/* Affichage du titre du logement */}
                          <h2>{data.title}</h2>
                      </div>
                  </Link>
              </div>
          ))}
      </div>
    )
  }
  

export default Card
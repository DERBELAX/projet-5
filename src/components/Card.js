import React from 'react';
import Housing from '../Data/logements.json';
import { Link } from 'react-router-dom';
import "../style/Card.scss";
const Card = () => {
    return (
      <div className='card'>
          {Housing.map((data)=>(
              <div key={data.id}>
                  <Link to={`houssing/${data.id}`}>
                      <div className="housing">
                          <img src={data.cover} alt={data.title} />
                          <h2>{data.title}</h2>
                      </div>
                  </Link>
              </div>
          ))}
      </div>
    )
  }
  

export default Card
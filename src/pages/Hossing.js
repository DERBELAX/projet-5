import React, { useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Carrousel from '../components/Carrousel';
import HousingData from '../Data/logements.json';
import "../style/Houssing.scss";

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = HousingData.find((data) => data.id === id);

  useEffect(() => {
    if (!data) {
      navigate("/*");
    }
  }, [data, navigate]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Carrousel pictures={data.pictures} />
    <section className='details'>
      <div className='details-header'>
      <div className="tag-title">
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            <ul className='tag'>
               {data.tags.map((tag) => (
              <Tag key={`${data.id}-${tag}`} tag={tag} />))}
            </ul>
       </div>
       <div className="stars-name">
          <div className="host-name-picture">
            <p className="host-name">{data.host.name}</p>
            <img
              className="host-picture"
              src={data.host.picture}
              alt={data.host.name}
            />
          </div>  
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


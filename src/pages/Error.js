import React from 'react';
import "../style/Error.scss";
import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <main className='error-main'>
      <h1 className="error-404">404</h1>
      <p className="error-message">Oups! La page que vous cherchez n'existe pas.</p>
      < Link to="/home" className='error-redirection'>Retourner sur la page d'accueil</Link>
   
    </main>
  )
}

export default Error404
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Route from './Route';
import Header from './components/Header';
import Footer from './components/Footer';

// Création de la racine de l'application en sélectionnant l'élément avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/> {/* Affichage du header sur toutes les pages */}
    <Route/> {/* Gestion des routes et rendu des composants correspondants */}
    <Footer/> {/* Affichage du footer sur toutes les pages */}
    </BrowserRouter>
  </React.StrictMode>
);



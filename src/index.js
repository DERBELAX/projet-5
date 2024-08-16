import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import Route from './Route';
import Header from './components/Header';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Route/>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);



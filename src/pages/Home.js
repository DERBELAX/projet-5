import React from 'react'
import Banner from'../components/Banner';
import Card from '../components/Card';
function Home(){
    return (
        <>
       {/* Composant Banner configuré pour la page d'accueil */}
       <Banner page='home' /> 

       {/* Composant Card pour afficher les différentes cartes de logements*/}
       <Card/>
        </>
    )
}
export default Home;

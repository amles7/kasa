import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <>
        <Header/>

        <div className="error-page">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link> 
            <Footer/>
        </div>
       </>
    );
}


export default Error;

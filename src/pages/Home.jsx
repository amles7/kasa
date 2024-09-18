import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Cards';
import accomodations from "../data/logements.json";
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Banner
          background_img="../assets/background.jpg"
          title="Chez vous, partout et ailleurs"
          titlephone ={
            <>
              Chez vous,<br />partout et ailleurs
            </>
          }
          alt="Image de fond représentant une plage"
        />
        
        <section className="gallery">
          {accomodations.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} cover={cover} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;

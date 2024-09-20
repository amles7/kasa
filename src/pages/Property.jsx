import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import logements from "../data/logements.json";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error404 from "../pages/Error404";
import Collapse from "../components/Collapse";
import "../styles/Property.scss";

const PropertyDetails = ({ match }) => {
  const { id } = useParams(); // Récupérer l'id de la propriété à partir des paramètres de l'URL
  const property = logements.find((logement) => logement.id === id); // Trouver le logement correspondant

  if (!property) {
    return <Error404 />;
  }
  const { title, location, tags, host, rating, description, equipments } =
    property;

  return (
    <div className="property-details">
      <Header />
      <Slideshow pictures={property.pictures} />
      <section className="description">
        <div className="info">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="info2">
          <div className="host">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="rating">
            {Array(5)
              .fill()
              .map((_, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star"
                  style={{
                    color: index < rating ? "#FF6060" : "#E3E3E3",
                  }}
                ></i>
              ))}
          </div>
        </div>
      </section>
      <div className="property-collapse">
        <Collapse key={description} title="Description" content={description} />
        <Collapse
          key={equipments}
          title="Équipements"
          content={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;

import { Parallax } from "react-parallax";
import Universe from "../resources/imgs/universum.jpg";
import Contact from "../includes/Contact";
import image from "../resources/imgs/business.jpg";
import { useNavigate } from "react-router-dom";

export default function ParallaxCoaching() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/services`;
    navigate(path);
  };

  return (
    <Parallax
      className="ImageOne"
      blur={2}
      bgImage={Universe}
      bgImageAlt="Universe"
      strength={500}
    >
      <div className="coaching-content-container-wrapper">
        <div className="coaching-content-container">
          <div className="back_btn">
            <button type="button" onClick={routeChange}>
              &lt; Zurück
            </button>
          </div>
          <div className="coaching-container">
            <h1>Youtube Coaching</h1>
            <p className="description_coaching">
              Lass deinen Youtube-Kanal wachsen und komme schnellstens zu passivem Einkommen!
            </p>
            <p className="description_details">1 hr | Preis auf Anfrage</p>
            <img id="youtubeImg"
              alt="Contentcreator Soulchannel, schick angezogen"
              className=""
              src={image}
            ></img>
            <p>
              In einem persönlichen Gespräch, planen wir das Vorgehen.
              <br />
              Dieses Coaching wird dir immens helfen!
            </p>
            <div id="landcdetails">
              <h2>Genauere Informationen</h2>
              <a href="mailto:thesoulchannel.web@gmail.com"><p id="mail">thesoulchannel.web@gmail.com</p></a>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </Parallax>
  );
}

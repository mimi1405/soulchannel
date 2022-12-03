import { Parallax } from "react-parallax";

const ParallaxAdvertisement = () => (
  <Parallax blur={10} bgImageAlt="Universe" strength={800}>
    <div className="direct_1on1_container">
      <h1 id="_1on1_title">LASS UNS LOS LEGEN!</h1>
      <div>
        <h2>1-on-1 Coaching</h2>
        <div className="roundabout">
          <p className="">
            Wir werden gemeinsam in die Tiefe tauchen um genau das zu schaffen
            was du erreichen willst.
          </p>
          <hr className="divider"></hr>
        </div>
        <p>1h</p>
        <p className="">Preis auf Anfrage</p>
        <button type="button" className="button">
          Mehr Info
        </button>
      </div>
      <button type="button" className="button">
        Mehr Services
      </button>
    </div>
  </Parallax>
);

export default ParallaxAdvertisement;

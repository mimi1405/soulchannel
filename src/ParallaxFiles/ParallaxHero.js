import { Background, Parallax } from "react-parallax";
import video from "../resources/Vids/universe.mp4";
import image from "../resources/imgs/universum2.jpg";
import "../resources/css/Home.css";

const ParallaxHero = () => (
  <Parallax blur={3} className="paravideo" bgImage={image} strength={800}>
    <div>
      <h1 id="hero_hi">
        BUSINESS
        <br />
        YOUTUBE
        <br />
        HEALTH &<br />
        FITNESS
        <br />
        COACHING
        <br />
      </h1>
    </div>
  </Parallax>
);

export default ParallaxHero;

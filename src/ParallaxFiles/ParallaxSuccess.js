import { Background, Parallax } from "react-parallax";
import video from "../resources/Vids/universe.mp4";
import image from "../resources/imgs/universum.jpg";
import "../resources/css/Success.css";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function ParallaxServices() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Parallax
      style={{ width: "100vw", height: "100vh" }}
      blur={3}
      bgImage={image}
      strength={800}
      className="ImageOne"
    >
      <div style={{color: "white", textAlign: "center"}}>
        <h1 className="success-title">Vielen Dank für deine Anfrage! Du hörst bald von mir!</h1>
        <button className="success-back-btn" type="button" onClick={routeChange}>
          &lt; Zurück
        </button>
      </div>
    </Parallax>
  );
}
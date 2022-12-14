import { Parallax } from "react-parallax";
import Universe from "../resources/imgs/universum.jpg";
import Contact from "../includes/Contact";
import image from "../resources/imgs/1on1.jpg";
import HomeTest from "../pages/HomeTest";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function ParallaxCoaching() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
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
            <h1>Persönliches Gespräch</h1>
            <p className="description_coaching">
              Wir werden gemeinsam in die Tiefe tauchen um genau das zu schaffen
              was du erreichen willst.
            </p>
            <p className="description_details">1 hr | Preis auf Anfrage</p>
            <img
              alt="Tisch mit Computer und Zigarre"
              className=""
              src={image}
            ></img>
            <p>
              In einem individuellen Gespräch mit dir, bringen wir dein Mindset
              gemeinsam auf das nächste Level!
              <br />
              Egal was, wir werden es zusammen angehen.
            </p>
            <div id="landcdetails">
              <h2>Genauere Informationen</h2>
              <a href="mailto:thesoulchannel.web@gmail.com">
                <p id="mail">thesoulchannel.web@gmail.com</p>
              </a>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </Parallax>
  );
}

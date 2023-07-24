import React from "react";
import fitnessImage from "../resources/imgs/fitness.jpg";
import businessImage from "../resources/imgs/business.jpg";
import youtubeCoaching from "../resources/imgs/1on1.jpg";
import "../resources/css/Services.css";
import { Parallax } from "react-parallax";
import ArrowDown from "../includes/svgs/ArrowDown";
import image from "../resources/imgs/universum.jpg";
import Service from "../services/Service";

const fitnessText =
  "Lass mich dir helfen, um deine Fitness und Gesundheit auf das nächte Level zu bringen. Hol dir deinen Traumkörper und werde so gesund wie noch nie zuvor!";
const youtubeText =
  "Möchtest du dir ein passives Einkommen aufbauen? Möchtest du ein erfolgreicher Youtube-Creator werden? Dann ist das genau das richtige Coaching für dich!";
const coachingText =
  "In einem individuellen Gespräch mit dir, bringen wir dein Mindset gemeinsam auf das nächste Level! Egal was, wir werden es zusammen angehen.";

const fitnessTitle = "Fitness-Coaching";
const youtubeTitle = "Youtube-Coaching";
const coachingTitle = "Persönliches Gespräch";

const fitnessTime = "1h";
const youtubeTime = "1h";
const coachingTime = "1h";

const fitnessPrice = "Preis auf Anfrage";
const youtubePrice = "Preis auf Anfrage";
const coachingPrice = "Preis auf Anfrage";

const scrollToServices = () => {
  document
    .getElementById("service-wrapper")
    .scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function ParallaxServices() {
  return (
    <div>
      <Parallax
        style={{ width: "100vw", height: "100vh" }}
        blur={1}
        bgImage={image}
        strength={800}
        className="ImageOne"
      >
        <div
          title="Click mich!"
          onClick={scrollToServices}
          className="icon-container"
        >
          <ArrowDown />
        </div>
      </Parallax>
      <div className="wrapper_para_services">
        <div id="service-wrapper" className="services-wrapper">
          <div className="title-box">
            <hr className="_divider" />
            <h1>SERVICES</h1>
          </div>
          <div className="services">
            <Service
              text={coachingText}
              time={coachingTime}
              price={coachingPrice}
              image={youtubeCoaching}
              serviceTitle={coachingTitle}
            />
            <Service
              text={youtubeText}
              time={youtubeTime}
              price={youtubePrice}
              image={businessImage}
              serviceTitle={youtubeTitle}
            />
            <Service
              text={fitnessText}
              time={fitnessTime}
              price={fitnessPrice}
              image={fitnessImage}
              serviceTitle={fitnessTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

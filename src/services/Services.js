import React, { PureComponent } from "react";
import Service from "./Service.js";
import fitnessImage from "../resources/imgs/fitness.jpg";
import businessImage from "../resources/imgs/business.jpg";
import youtubeCoaching from "../resources/imgs/1on1.jpg";
import "../resources/css/Services.css";
import ParallaxServices from "../ParallaxFiles/ParallaxServices";

export default class Services extends PureComponent {

  render() {
    return (
      <div>
        <ParallaxServices/>
      </div>
    );
  }
}

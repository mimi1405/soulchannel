import React, { Component } from "react";
import "../resources/css/donate.css";
import ImageOne from "../ParallaxFiles/ImageOne";
import ImageTwo from "../ParallaxFiles/ImageTwo";

export default class Donate extends Component {
  render() {
    return (
      <div>
        <ImageOne />
        <div className="text-box">
          <h3 id="bankverbindung">Bankverbindung</h3>
          <p>
            Fabrizio Faldetta
            <br />
            Sparkasse Saarbrücken
            <br />
            Deutschland DE
            <br />
            IBAN: DE93 5905 0101 0610 0249 45
            <br />
            BIC: SAKSDE55XXX
          </p>
        </div>
        <ImageTwo />
        <div className="text-box">
          <a href="https://www.paypal.com/paypalme/FabrizioFaldetta97"><h2>Jetzt Spenden</h2></a>
        </div>
        
      </div>
    );
  }
}

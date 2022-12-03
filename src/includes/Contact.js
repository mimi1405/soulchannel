import React from "react";
import Formular from "./Form.js";
import "../resources/css/Contact.css";
import Instagram from "./svgs/Instagram";
import Youtube from "./svgs/Youtube";
import ContactParallax from "../ParallaxFiles/ParallaxContact.js";

export default function Contact() {
  return (
    <div>
      <div className="contact-wrapper">
        <div className="contact-block">
          <div>
            <div>
              <div>
                <hr className="divider" />
                <h1>KONTAKT</h1>
              </div>

              <br />

              <div>
                <a href="mailto:thesoulchannel.web@gmail.com">
                  <p>Email: thesoulchannel.web@gmail.com</p>
                </a>

                <br />

                <p>+49 176 21237569</p>
              </div>

              <br />

              <div className="socials">
                <a href="ttps://www.instagram.com/the_soul_channel/">
                  <Instagram />
                </a>
                <a href="https://www.youtube.com/@FabrizioFaldetta">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>

          <div>
            <Formular />
          </div>

          <div>
            <p>© 2022 THE SOUL CHANNEL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

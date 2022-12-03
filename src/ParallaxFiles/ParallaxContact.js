import { Parallax } from "react-parallax";
import Universe from "../resources/imgs/universum.jpg";
import Instagram from "../includes/svgs/Instagram";
import Youtube from "../includes/svgs/Youtube";
import Formular from "../includes/Form";
import "../resources/css/Contact.css";

const ContactParallax = () => (
  <Parallax
    style={{ width: "100vw", height: "100vh" }}
    className="ImageOne"
    blur={1}
    bgImage={Universe}
    bgImageAlt="Universe"
    strength={800}
  >
    <div>
      <div className="contact-wrapper">
        <div className="contact-block">
          <div className="infos">
            <div>
              <hr className="divider" />
              <h1>KONTAKT</h1>
            </div>
            <div>
              <a href="mailto:thesoulchannel.web@gmail.com">
                <p>Email: thesoulchannel.web@gmail.com</p>
              </a>
              <p>+49 176 21237569</p>
            </div>
            <div className="socials">
              <a href="https://www.instagram.com/the_soul_channel/">
                <Instagram />
              </a>
              <a href="https://www.youtube.com/@FabrizioFaldetta">
                <Youtube />
              </a>
            </div>
            <div className="copyright">
              <p>© 2022 THE SOUL CHANNEL</p>
            </div>
          </div>
          <div className="formular">
            <Formular />
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);

export default ContactParallax;

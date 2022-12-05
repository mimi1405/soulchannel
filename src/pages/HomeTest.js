import React from "react";
import ParallaxHero from "../ParallaxFiles/ParallaxHero";
import picture from "../resources/imgs/skyline4.jpg";
import video from "../resources/Vids/universe.mp4";
import { Route, Routes } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import Services from "../services/Services";
import Coaching from "../services/Coaching"


export default function HomeTest() {

    const navigate = useNavigate();

    const navigateToCoaching = () => {
      navigate('/coaching');
    };
    const navigateToServices = () => {
      navigate('/services');
    };

    return (
      <div>
        <ParallaxHero />
        <section className="aboutMe">
          <div className="a">
            <div className="content">
              <div className="box_aboutMe">
                <hr className="_divider" />
                <h1 className="about">ABOUT</h1>
                <h1 className="me">ME</h1>
              </div>
              <p>
                Hallo! Ich bin spezialisiert in den Bereichen der Psychologie
                und des Lebenscoaching. Wenn es um Mindset und Business geht,
                kann ich dich sehr wohl unterstützen. Durch meine jahrelange
                Erfahrung mit Fitness und Kampfsport, weiss ich genau, was der
                optimale Trainings- und Ernährungsplan ist, den du brauchst, um
                dich in top Form zu bringen und damit du deinen Traumkörper
                haben kannst. Meine höchste Priorität ist es, dass du Antrieb
                hast und deine Leistungsfähigkeit steigerst. Dafür wird für dich
                individuell gesorgt! Egal was du besprechen musst, dies ist
                definitiv die richtige Anlaufstelle für dich, um die beste
                Version deiner Selbst zu werden.
                <br />
                Ich freue mich auf dich!
                <br />
                <br />
                <a href="mailto:thesoulchannel.web@gmail.com">
                  Email: thesoulchannel.web@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="b">
            <img src={picture} />
          </div>
        </section>

        <section className="oneOnone">
          <video
            src={video}
            autoPlay
            loop
            muted
            controls='true'
            type='video/mp4'
          ></video>

          <div className="content_oneOnone">
            <div className="direct_1on1_container">
              <h1 id="_1on1_title">LASS UNS LOS LEGEN!</h1>
              <div className="group">
                <h2>Persönliches Gespräch</h2>
                <div className="roundabout">
                  <p className="">
                    Wir werden gemeinsam in die Tiefe tauchen um genau das zu
                    schaffen was du erreichen willst.
                  </p>
                  <hr className="directHR" />
                </div>
                <p>1h</p>
                <p className="">Preis auf Anfrage</p>
                <button onClick={navigateToCoaching} type="button" className="more_info_btn">
                  Mehr Info
                </button>
              </div>
              <button onClick={navigateToServices} type="button" className="more_services_btn">
                Mehr Services
              </button>
              <Routes>
                <Route path="/services" element={<Services/>} />
                <Route path="/coaching" element={<Coaching/>} />
              </Routes>
            </div>
          </div>
        </section>
      </div>
    );
  }

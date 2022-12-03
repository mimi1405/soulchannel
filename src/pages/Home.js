import React, { Component } from "react";
import Navbar from "../includes/Navigation/Navbar";
import "../resources/css/Home.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import example from "../resources/imgs/universum.jpg";
import video from "../resources/Vids/universe.mp4";
import picture from "../resources/imgs/skyline4.jpg";
import Contact from "../includes/Contact";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="beginning">
          <div className="video-container_two">
            <video src={video} autoPlay loop muted />
          </div>
          {/*         <div className="bg">
           */}{" "}
          <div className="container text-center">
            <h1
              /* TODO: CSS home.css einfügen */
              style={{
                color: "white",
                textDecoration: "underline",
                fontStyle: "italic",
                fontWeight: "600",
                letterSpacing: "10px",
              }}
              className="display-1"
            >
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
            {/*           </div>
             */}{" "}
          </div>
        </section>

        <section className="aboutMe">
          <div className="a">
            <div className="empty"></div>
            <div className="content">
              <h1>ABOUT ME</h1>
              <p>
                Hey! I specialize my work with health & fitness, as well as
                business and creating businesses from scratch! I also specialize
                in psychology & life coaching! For all of my clients we do what
                works and maximize results! I've coached/mentored 850+ people in
                under 3 years time! If you are looking to improve your health &
                fitness, mental health or business then this is a great place to
                work for a very affordable rate! I also help people find purpose
                and get you started on the things you are passionate about! As
                always, I look forward to working with you guys!
                <br />
                Email: terryjoeljunior@gmail.com
              </p>
            </div>
          </div>
          <div className="b">
            <img src={picture} />
          </div>
        </section>

        <section id="direct_1on1">
          <div className="video-container">
            <video src={video} autoPlay loop muted />
          </div>
          <div className="direct_1on1_container">
            <h1 id="_1on1_title">LASS UNS LOS LEGEN!</h1>
            <div>
              <h2>1-on-1 Coaching</h2>
              <div className="roundabout">
                <p className="">
                  Wir werden gemeinsam in die Tiefe tauchen um genau das zu
                  schaffen was du erreichen willst.
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
        </section>
        <section id="direct_1on1">
          <div className="video-container_three">
            <video src={video} autoPlay loop muted />
          </div>
        </section>
      </div>
    );
  }
}

import "./App.css";
import Navigation from "./includes/Navigation/Navigation";
import Nav from "./includes/Navigation/Nav";
import Service from "./services/Service";
import Services from "./services/Services";
import Contact from "./includes/Contact.js";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Component } from "react";
import Donate from "./includes/Donate";
import Coaching from "./services/Coaching";
import HomeTest from "./pages/HomeTest";
import Youtube from "./services/Youtube";
import Fitness from './services/Fitness'
import Success from "./includes/functionallity/Success";
import ParallaxContact from "./ParallaxFiles/ParallaxContact"

function App() {
  return (
    <div>
      <div id="_navi">
        <Nav />
      </div>
      <main>
        {/*  <div>
          <Nav />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeTest />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/coaching" element={<Coaching />} />
          </Routes>
        </div> */}
         <Routes>
          <Route path="/" element={<HomeTest/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<ParallaxContact/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/coaching" element={<Coaching/>} />
          <Route path="/youtube-coaching" element={<Youtube/>} />
          <Route path="/fitness-coaching" element={<Fitness/>} />
          <Route path="/functionnality/success" element={<Success/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

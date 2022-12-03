import React from "react";
import "../../resources/css/Navbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  NavLink,
  Route,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import Home from "../../pages/Home";
import Services from "../../services/Services.js";
import Contact from "../../includes/Contact.js";
import HomeTest from "../../pages/HomeTest";
import Donate from "../Donate";
import Coaching from "../../services/Coaching";

export default function Navigation(props) {
  return (
        <ul>
          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="active link" to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="active link" to="/services"
          >
            Services
          </Link>
          <Link
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="active link" to="/contact"
          >
            Kontakt
          </Link>
          <Link
            id="donate_btn"
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="active link" to="/donate"
          >
            Donate
          </Link>
        </ul>
  );
}

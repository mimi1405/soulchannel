import React, { Component } from "react";
import Navigation from "./Navigation";
import "../../resources/css/Navbar.css";
import { Link } from "react-router-dom";
import Box from "./Box";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link className="link" to="/">
          <Box/>
        </Link>
        <div className="bar">
          <Navigation />
        </div>
      </div>
    );
  }
}

import '../../resources/css/Navbar.css';
import MobileNavigation from "./MobileNav";
import Navigation from "./Navbar";
import React, { Component } from "react";


export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar" >
        <MobileNavigation />
        <Navigation />
      </div>
    );
  }
}
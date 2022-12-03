import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import Box from "./Box";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const Hamburger = (
    <GiHamburgerMenu
      className="hamburger"
      onClick={() => setOpen(!open)}
    ></GiHamburgerMenu>
  );

  const Close = (
    <AiOutlineClose className="hamburger" onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="MobileNavigation">
      <Link className="link" to="/">
        <Box />
      </Link>
      <div className="icon-cont">
        {open ? Close : Hamburger}
        {open && (
          <Navigation isMobile={true} closeMobileMenu={closeMobileMenu} />
        )}
      </div>
    </nav>
  );
};

export default MobileNav;

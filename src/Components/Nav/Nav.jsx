import React, { useState } from "react";
import "../Nav/Nav.css";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobile = () => setOpen(false);

  const hamburger = (
    <FaBars className="hamburger" onClick={() => setOpen(!open)} />
  );
  const close = (
    <FaTimes className="hamburger" onClick={() => setOpen(!open)} />
  );

  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Logo />
        </div>

        <div className={open ? "nav-links active" : "nav-links"}>
          <a href="/home/#opensea" onClick={closeMobile}>
            BUY A FLUFFY
          </a>
          <a href="/home/#about" onClick={closeMobile}>
            ABOUT
          </a>
          <a href="/" onClick={closeMobile}>
            ROADMAP
          </a>
          <a href="/home/#specs" onClick={closeMobile}>
            THE SPECS
          </a>
          <a href="/home/#fdistro" onClick={closeMobile}>
            FAIR DISTRIBUTION
          </a>
        </div>

        <div className="nav-socials">
          <Socials />
        </div>

        <div className="hamburger" onClick={handleClick}>
          {open ? close : hamburger}
        </div>
      </div>
    </div>
  );
}

export default Nav;

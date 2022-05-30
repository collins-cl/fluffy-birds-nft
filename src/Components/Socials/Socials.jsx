import React from "react";
import "../Socials/Socials.css";
import { FaInstagram, FaDiscord, FaTwitter, FaFacebookF } from "react-icons/fa";

function Socials() {
  return (
    <div className="socials">
      <a href="/">
        <FaDiscord />
      </a>
      <a href="/">
        <FaFacebookF />
      </a>
      <a href="/">
        <FaInstagram />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
    </div>
  );
}

export default Socials;

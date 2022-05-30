import React from "react";
import "../Socialite/Socialite.css";
import { FaInstagram, FaDiscord, FaTwitter, FaFacebookF } from "react-icons/fa";

function Socialite() {
  return (
    <div className="socialite">
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

export default Socialite;

import React from "react";
import "../Footer/Footer.css";
import Logo from "../Logo/Logo";
import { FaArrowRight } from "react-icons/fa";
import Socialite from "../Socialite/Socialite";

function Footer() {
  return (
    <div className="footer">
      <div className="get-whitelist">
        <h3>GET ON THE LIST</h3>
        <form action="">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <button type="submit" className="arrow">
            <FaArrowRight />
          </button>
        </form>
      </div>

      <div className="footer-logo">
        <Logo />
      </div>

      <div className="footer-contact">
        <Socialite/>
        <div className="copy">
          <p>©  2022 CLFolio. SC</p>
          <a href="/">FM Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

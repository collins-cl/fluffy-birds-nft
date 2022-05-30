import React from "react";
import "../Intro/Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-wrapper">
        <div className="small-black-cont">
          <div className="cont-1">
            <div className="heading-1">
              WELCOME TO THE FLUFFY HEAD METAVERSE
            </div>
            <div className="link-to-enter">
              <a href="/home">ENTER</a>
            </div>
            <hr />
          </div>

          <div className="cont-2">
            SCROLL DOWN
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

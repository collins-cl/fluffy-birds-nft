import React from "react";
import "../About/About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="wrap-1">
          <div className="heading">
            WELCOME TO THE <br />
            FLUFFY HEAD METAVERSE
          </div>

          <div className="paragraph">
          BAYC is a collection of 300 Fluffy Head NFTs—unique digital collectibles <br /> living on the Matic blockchain. Your Fluffy head doubles as your Fluffy <br /> Head membership card, and grants access to members-only benefits, the first <br /> of which is access to THE BATHROOM, a collaborative graffiti board. Future <br /> areas and perks can be unlocked by the community through roadmap <br /> activation.
          </div>
        </div>
        <div className="wrap-2">
            <img src="/Images/3.png" alt="" />
            <img src="/Images/28.png" alt="" />
            <img src="/Images/109.png" alt="" />
            <img src="/Images/125.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;

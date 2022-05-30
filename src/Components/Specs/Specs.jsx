import React from "react";
import "../Specs/Specs.css";

function Specs() {
  return (
    <div className="specs" id="specs">
      <div className="specs-wrapper">
        <div className="specs-heading">WELCOME TO THE CLUB</div>

        <div className="specs-paragraph">
          When you buy a Fluffy Head, you're not simply buying an avatar or a
          prbably-rare piece of art. You are <br /> gaining membership access to
          a club whose benefits and offerings will increase over time. Your
          Fluffy Head can serve as your <br /> digital identity, and open
          digital doors for you.
        </div>

        <div className="img-text">
          <div className="im">
            <img src="/Images/icon1.png" alt="" />
            <p>
              300 Probably-rare <br /> Fluffy head tokens.
            </p>
          </div>
          <div className="im">
            <img src="/Images/icon2.png" alt="" />
            <p>
              Fair-lunch <br /> Fair Distribution.
            </p>
          </div>
          <div className="im">
            <img src="/Images/icon4.png" alt="" />
            <p>
              Each Fluffy Head <br /> cost approximately 100MATIC.
            </p>
          </div>
          <div className="im">
            <img src="/Images/icon5.png" alt="" />
            <p>
              Ownership and commercial usage <br /> are given to consumer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specs;

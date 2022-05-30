import React from "react";
import "../Opensea/Opensea.css";

function Opeansea() {
  return (
    <div className="opensea" id="opensea">
      <div className="opensea-wrapper">
        <div className="buy">BUY A FLUFFY</div>

        <div className="intial">
          The initial sale has started. To get your <br /> Fluffy Head, check out
          the collection on <br /> OpenSea.
        </div>

        <div className="link-opensea">
            <a href="/">BUY A FLUFFY <br /> ON OPENSEA</a>
        </div>
      </div>
    </div>
  );
}

export default Opeansea;

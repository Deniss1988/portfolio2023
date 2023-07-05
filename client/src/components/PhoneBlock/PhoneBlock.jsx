import React from "react";
import Phones from "../../assets/img/phones.png";
import "./PhoneBlock.css";

function PhoneBlock() {
  return (
    <div className="phone-block">
      <div className="phone__image-container">
        <img id="phones" src={Phones} alt="Phones" />
      </div>
      <div className="how">
        <div className="line"></div>
        <h2 className="phone__title">How the app works</h2>
      </div>
    </div>
  );
}

export default PhoneBlock;

import React from "react";
import ImageTextLayout from "../ImageText/ImageText";
import Create from "../../assets/img/create.png";
import Explore from "../../assets/img/explore.png";
import Checkout from "../../assets/img/checkout.png";
import "./ContentBlock.css";

function ContentBlock() {
  return (
    <div className="content">
      <ImageTextLayout
        imageSrc={Create}
        subtitle="Create an account"
        title="Create/login to an existing account to get started"
        text="An account is created with your email and a desired password"
      />

      <ImageTextLayout
        imageSrc={Explore}
        subtitle="Explore varieties"
        title="Shop for your favorites meal as e dey hot."
        text="Shop for your favorite meals or drinks and enjoy while doing it."
        isImageOnRight
      />

      <ImageTextLayout
        imageSrc={Checkout}
        subtitle="Checkout"
        title="When you done check out and get it delivered."
        text="When you done check out and get it delivered with ease."
      />
    </div>
  );
}

export default ContentBlock;

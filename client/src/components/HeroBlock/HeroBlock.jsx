import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./HeroBlock.css";

const HeroBlock = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-block">
      <div className="hero-block__content">
        <h3 className="hero-block__description">Food App</h3>
        <h1 className="hero-block__title">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <p className="hero-block__description">
          Download the bella onojes food app now on
        </p>
        <div className="hero-block__buttons">
          <Button
            variant="primary"
            onClick={() => console.log("Primary button clicked")}
          >
            Playstore
          </Button>
          {isMobile ? (
            <Button
              variant="mobile"
              onClick={() => console.log("Mobile button clicked")}
            >
              App Store
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => console.log("Secondary button clicked")}
            >
              App Store
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;

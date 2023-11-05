import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
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
        <h3 className="hero-block__description">Deniss Mijusovs</h3>
        <h1 className="hero-block__title">
          Welcome to my portfolio. </h1>
        <p className="hero-block__description">
          Check out my work below and feel free to get in touch!
        </p>
        <div className="hero-block__buttons">
          <Link to="/portfolio">
            <Button
              variant="primary"
              onClick={() => console.log("Primary button clicked")}
            >
              Portfolio
            </Button>
          </Link>
          {isMobile ? (
            <Link to="/about">
              <Button
                variant="mobile"
                onClick={() => console.log("Mobile button clicked")}
              >
                About Me
              </Button>
            </Link>
          ) : (
            <Link to="/about">
              <Button
                variant="secondary"
                onClick={() => console.log("Secondary button clicked")}
              >
                About Me
              </Button></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;

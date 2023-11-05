import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Twitter from "../../assets/img/social/twitter.svg"
import Logo from "../../assets/img/logo.png";
import "./Footer.css";

const Footer = () => {
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
    <footer className="footer">
      <div className="footer__logo">
        <img className="logo-small" src={Logo} alt="Logo" />
      </div>
      <div className="footer__social">
        <a href="https://www.twitter.com" rel="noopener noreferrer">
         <img className="social" src={Twitter} alt="twitter logo" />
        </a>
        <a href="https://www.facebook.com" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        {isMobile ? (
          <a
            className="footer__social-icon linkedin"
            href="https://www.linkedin.com"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        ) : (
          <a
            className="footer__social-icon instagram"
            href="https://www.instagram.com"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        )}
      </div>
      {isMobile ? (
        <p className="footer__mobile">
          &copy; {new Date().getFullYear()} mijusovs.lv
        </p>
      ) : (
        <div className="footer__desktop">
          Copyright &copy; {new Date().getFullYear()} mijusovs.lv
        </div>
      )}
    </footer>
  );
};

export default Footer;

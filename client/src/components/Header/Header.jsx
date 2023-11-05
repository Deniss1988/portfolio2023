import React from "react";
import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Contact", link: "/contact" },
  ];
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-content");
    const scrollTop = window.scrollY;

    if (scrollTop > 100) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Change the background color when scrolled
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Set it back to transparent
    }
  });

  return (
    <div className="header">
      <div className="header-content">
        <div className="menu">
          <BurgerMenu />
        </div>
        <nav className="navbar">
          <Link to={"/"}>
            <img className="logo" src={Logo} alt="Company Logo" />
          </Link>

          <div className="menu-items">
            {menuItems.map((item) => (
              <NavLink className="menu-item" key={item.label} to={item.link}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

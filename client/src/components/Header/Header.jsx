import React from "react";
import { Link, NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Product", link: "/about" },
    { label: "Faq", link: "/faq" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="header">
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
  );
};

export default Header;

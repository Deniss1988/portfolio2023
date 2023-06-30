import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu() {
  return <Menu right>
    <NavLink to="/" className="bm-link-item-list">Home</NavLink>
    <NavLink to="/about" className="bm-link-item-list">Product</NavLink>
    <NavLink to="/faq" className="bm-link-item-list">Faq</NavLink>
    <NavLink to="/contact" className="bm-link-item-list">Contact</NavLink>
  </Menu>;
}

export default BurgerMenu;

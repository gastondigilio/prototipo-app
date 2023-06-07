import { useState } from "react";

import Brandmark from "../Brandmark/Brandmark";

import NavbarMobile from "../../assets/Navbar/nav-mobile.svg"
import CloseMenu from "../../assets/shared/close-menu.svg";

import "./Navbar.css";

const Navbar = ({ navbarStyle, headNavbar }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav id={headNavbar ? "head-navbar" : ""} className={"navbar " + (navbarStyle ? navbarStyle : "")}>
      <div className="web">
        <Brandmark navbarStyle={navbarStyle} />
        <ul className="ulNavbarWeb">
          <li className={navbarStyle ? "" : "pulse"}><a className="prueba" href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/preguntas-frecuentes">Faqs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="lamp">
          <input type="checkbox" id="lib" />
          <label for="lib" class="lib" style={{ cursor: "pointer" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* <path d="M8 20H12M16 20H12M12 20V11" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
              <path d="M17 11V16" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" class="onoff" />
              <path d="M15 4H9C6.23858 4 4 6.23858 4 9V9.5C4 10.3284 4.67157 11 5.5 11H18.5C19.3284 11 20 10.3284 20 9.5V9C20 6.23858 17.7614 4 15 4Z" stroke="#FFFFFF" stroke-width="2" />
              <path d="M3 21L5 12H19L21 21H3Z" fill="url(#paint0_linear_976_2597)" class="shine" />
              <path d="M9 3C5.68629 3 3 5.68629 3 9V9.5C3 10.8807 4.11929 12 5.5 12H18.5C19.8807 12 21 10.8807 21 9.5V9C21 5.68629 18.3137 3 15 3H9Z" fill="url(#paint0_linear_976_2597)" class="lamp" /> */}
              <defs>
                <linearGradient id="paint0_linear_976_2597" x1="12" y1="12" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFFFFF" stop-opacity="0.65" />
                  <stop offset="1" stop-color="#3B3E43" stop-opacity="0" />
                </linearGradient>
                <radialGradient id="paint1_radial_976_2597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 5.8125) rotate(90) scale(6.1875 12.375)">
                  <stop stop-color="#8CF385" />
                  <stop offset="1" stop-color="red" />
                </radialGradient>
              </defs>
            </svg>
          </label>
        </div>
      </div>
      <div className="mobile">
        <Brandmark navbarStyle={navbarStyle} />
        <img
          className={mobileMenu ? "close enable" : "close"}
          src={CloseMenu}
          alt=""
          onClick={() => handleMobileMenu()}
        />
        <img
          className={mobileMenu ? "open" : "open enable"}
          src={NavbarMobile}
          alt=""
          onClick={() => handleMobileMenu()}
        />
        <div className={mobileMenu ? "mobile-menu enable" : "mobile-menu"}>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/preguntas-frecuentes">Faqs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

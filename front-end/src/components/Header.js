import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="/pictures/logo_nav.png" alt="Donify Logo" className="logo" />
          </div>

          <div
            className={`overlay-blur ${menuActive ? "active" : ""}`}
            onClick={closeMenu}
          ></div>

          <div className="col-10">
            <nav className="nav">
              <div className="hamburger" onClick={toggleMenu}>☰</div>
              <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/organizations" onClick={closeMenu}>Organizations</Link></li>
                <li><Link to="/announcements" onClick={closeMenu}>Announcements</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                <li className="btn"><Link to="/login" onClick={closeMenu}>Log in</Link></li>
                <li className="btn"><Link to="/register" onClick={closeMenu}>Register</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

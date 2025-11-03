import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div className="donify">Donify_DZ</div>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/organizations">Organizations</Link>
          <Link to="/announcements">Announcements</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="line"></div>

      <div className="media">
        <div className="rights">
          <p>Donify_DZ © 2025. All rights reserved.</p>
        </div>

        <div className="social_media">
          <a id="facebook" href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a id="instagram" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a id="linkedin" href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a id="email-icon" href="#">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

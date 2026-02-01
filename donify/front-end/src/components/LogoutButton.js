import React from "react";
import "../styles/AdminDashStat.css";
const LogoutButton = ({ href }) => {
  return (
    <div className="Admin_logOut">
      <a href={href}>
        <i className="fa-solid fa-right-from-bracket"></i> Log Out
      </a>
    </div>
  );
};

export default LogoutButton;

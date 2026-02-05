import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); // clears token
    navigate("/"); // redirect to home
  };

  return (
    <div className="Admin_logOut">
      <button className="Admin-logout-btn" onClick={handleLogout}>
        <i className="fa-solid fa-right-from-bracket"></i>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;

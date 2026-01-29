import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdminDashStat.css";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/admin/logout",
        {},
        { withCredentials: true }, // send cookies
      );

      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
      alert("Logout failed. Please try again."); // optional feedback
    }
  };

  return (
    <div className="Admin_logOut">
      <button onClick={handleLogout} className="Admin-logout-btn">
        <i className="fa-solid fa-right-from-bracket"></i> Log Out
      </button>
    </div>
  );
};

export default LogoutButton;

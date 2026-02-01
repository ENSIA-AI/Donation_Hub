import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ iconClass, label, to, isActive, onClick }) => {
  return (
    <li
      className={`dash_sidebar_item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <Link to={to} className={isActive ? "active" : ""}>
        <i className={`fa-solid ${iconClass} sidebar_btn`}></i>
        {label}
      </Link>
      <span className="active_indicator"></span>
    </li>
  );
};

export default SidebarItem;

import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ iconClass, label, href, isActive, onClick }) => {
  return (
    <li
      className={`dash_sidebar_item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <a href={href}>
        <i className={`fa-solid ${iconClass} sidebar_btn`}></i>
        {label}
      </a>
      <span className="active_indicator"></span>
    </li>
  );
};

export default SidebarItem;

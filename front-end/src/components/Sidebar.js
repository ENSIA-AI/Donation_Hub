import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/AdminDashStat.css";
import AdminProfile from "./AdminProfile";
import SidebarItem from "./SidebarItem";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const location = useLocation();

  const items = [
    { iconClass: "fa-house", label: "Dashboard", to: "/AdminDashboardStat" },
    {
      iconClass: "fa-building-ngo",
      label: "Organizations",
      to: "/AdminDashBoardORG",
    },
    { iconClass: "fa-bullhorn", label: "Compaigns", to: "/campaigns" },
    {
      iconClass: "fa-hand-holding-dollar",
      label: "Donations",
      to: "/AdminDashboardDonation",
    },
    { iconClass: "fa-message", label: "Messages", to: "/messages" },
  ];

  // Find which item is active based on current route
  const activeIndex = items.findIndex((item) => item.to === location.pathname);

  return (
    <div className="dash_sideBare flex-column">
      <AdminProfile name="Admin Name" image="assets/Images/admine_image.jpg" />
      <div className="dash_sidebar_items_container">
        <ul className="dash_sidebar_items flex-column">
          {items.map((item, index) => (
            <SidebarItem
              key={index}
              iconClass={item.iconClass}
              label={item.label}
              to={item.to}
              isActive={activeIndex === index}
            />
          ))}
        </ul>
      </div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

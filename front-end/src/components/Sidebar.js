import React, { useState } from "react";
import "../styles/AdminDashStat.css";
import AdminProfile from "./AdminProfile";
import SidebarItem from "./SidebarItem";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      iconClass: "fa-house",
      label: "Dashboard",
      href: "./new_admin_stat.html",
    },
    { iconClass: "fa-building-ngo", label: "Organizations", href: "AdminDashBoardORG" },
    { iconClass: "fa-bullhorn", label: "Compaigns", href: "AdminDashboardCompain" },
    { iconClass: "fa-hand-holding-dollar", label: "Donations", href: "AdminDashboardDonation" },
    { iconClass: "fa-message", label: "Messages", href: "#" },
  ];

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
              href={item.href}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </ul>
      </div>

      <LogoutButton href="#" />
    </div>
  );
};

export default Sidebar;

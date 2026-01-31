import React from "react";
import "../styles/AdminDashStat.css";
const StatCard = ({ title, value, iconClass, colorClass }) => {
  return (
    <div className={`stat_dash_card ${colorClass || ""}`}>
      <div className="stat_dash_card_name flex-row">
        <h1>{title}</h1>
        <div
          className={
            colorClass === "green_card"
              ? "stat_dash_card_icon_green"
              : "stat_dash_card_icon"
          }
        >
          <i className={`fa-solid ${iconClass}`}></i>
        </div>
      </div>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;

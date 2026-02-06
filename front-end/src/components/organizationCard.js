import React from "react";
import "../styles/styleOrganizations.css";
import { Link } from "react-router-dom";

const OrganizationCard = (props) => {
  const maxTitleLength = 23; // max characters for title
  const maxDescLength = 55; // max characters for description

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.slice(0, maxLength); // hard cut, no "..."
  };

  return (
    <div className="card-container col-lg-3 col-xl-3 col-md-6 col-sm-12 col-xs-12 col-xxs-12">
      <div className="card">
        <div>
          <img src={props.image} alt="" className="image_card" />
        </div>
        <div className="cardContent">
          <h4>{truncateText(props.title, maxTitleLength)}</h4>
          <p>{truncateText(props.description, maxDescLength)}</p>
        </div>
        <div className="learn-more">
          <img src="assets/icons/arrow-forward.svg" alt="" />
          <Link to={`/OrgProfile/${props.id}`}>learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;

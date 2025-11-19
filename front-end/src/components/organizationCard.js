import React from "react";
import "../styles/styleOrganizations.css";
import { Link } from "react-router-dom";

const OrganizationCard = (props) => {
  return (
    <div className="card-container col-lg-3 col-xl-3 col-md-6 col-sm-12 col-xs-12 col-xxs-12">
      <div className="card">
        <div>
          <img src={props.image} alt="" className="image_card" />
        </div>
        <div className="cardContent">
          <h4>{props.title} </h4>
          <p>{props.description}</p>
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

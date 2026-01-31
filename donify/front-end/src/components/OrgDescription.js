import React from "react";
import "../styles/OrganizationProfile.css";
const OrgDescription = ({ name, description }) => {
  return (
    <div className="org_description org_container">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default OrgDescription;

import React from "react";
import "../styles/OrganizationProfile.css";

const OrgMission = ({
  OrgMissionImg,
  OrganizationMission,
  OrganizationVision,
}) => {
  return (
    <div className="mission_vision fluid_container">
      <div className="mission_vision_content flex-row">
        <div className="mission_image col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-xxs-12">
          <img
            src={OrgMissionImg}
            className="full_image mission_img"
            alt="our mission"
          />
        </div>
        <div className="mission col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-xxs-12">
          <h2>Our Mission</h2>
          <p>{OrganizationMission}</p>
        </div>
        <div className="vision col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-xxs-12">
          <h2>Our Vision</h2>
          <p>{OrganizationVision}</p>
        </div>
      </div>
    </div>
  );
};
export default OrgMission;

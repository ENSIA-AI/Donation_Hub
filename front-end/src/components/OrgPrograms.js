import React from "react";
import "../styles/OrganizationProfile.css";

const OrgPrograms = ({ programs }) => {
  return (
    <div className="programs fluid_container">
      <div className="programs-title">Our Programs</div>

      <div className="programs org_container">
        <div className="programs flex-row">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-5 col-xxs-12 flex-row"
            >
              <div className="program-details flex-row col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xxs-8">
                <div className="program-title">{program.title}</div>
                <div className="program-description">{program.description}</div>
              </div>

              <div className="program-image col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4">
                <img
                  src={program.image}
                  className="full_image program-img"
                  alt={program.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgPrograms;

import React from "react";
import "../styles/OrganizationProfile.css";

const OrgImpact = ({ impacts = [] }) => {
  return (
    <div className="impact-section">
      <div className="org_container">
        <div className="Impact_title about-section-title">Our Impact</div>
        <div className="impacts flex-row">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`impact ${
                impact.extraClass || ""
              } col-xl-2 col-lg-2-5 col-md-3 col-sm-3 col-xs-3 col-xxs-7`}
            >
              <div className="impact-card">
                <div className="impact-action">
                  <h1>{impact.value}</h1>
                </div>
                <div className="impact-details">
                  <p>{impact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgImpact;

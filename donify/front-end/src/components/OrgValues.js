import React from "react";
import "../styles/OrganizationProfile.css";
const OrgValues = ({ OrgValue1, OrgValue2, OrgValue3, OrgValue4 }) => {
  return (
    <div className="org_values org_container">
      <div className="about-section-title">Our Values</div>

      <div className="org_values_cards flex-row">
        <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
          {OrgValue1}
        </div>

        <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
          {OrgValue2}
        </div>

        <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
          {OrgValue3}
        </div>

        <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
          {OrgValue4}
        </div>
      </div>
    </div>
  );
};
export default OrgValues;

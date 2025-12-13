import React from "react";
import "../styles/AdminDashStat.css";
const CampaignRequest = ({ title, organization, status, date }) => {
  return (
    <div className="post_request flex-row">
      <i className="fa-solid fa-image"></i>
      <div className="org_request_info flex-column">
        <div className="org_name_status flex-row">
          <h2>{title}</h2>
          <a href="#" className={`org_request_status ${status}`}>
            {status === "waiting" ? (
              <>
                <i className="fa-solid fa-stopwatch"></i> Waiting
              </>
            ) : (
              <>
                <i className="fa-solid fa-circle-check"></i> Accepted
              </>
            )}
          </a>
        </div>
        <div className="flex-row org_img_date">
          <div className="compaign_org">{organization}</div>
          <div className="org_request_date">
            <h4>{date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignRequest;

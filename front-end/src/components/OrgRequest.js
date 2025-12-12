import React from "react";
import "../styles/AdminDashStat.css";
const OrgRequest = ({ initials, name, status, proofLink, date }) => {
  return (
    <div className="org_request flex-row">
      <div className="org_raquest_profile">{initials}</div>
      <div className="org_request_info flex-column">
        <div className="org_name_status flex-row">
          <h2>{name}</h2>
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
          <div className="org_proof">
            <i className="fa-solid fa-paperclip"></i>
            <a href={proofLink} className="org_proof_parer_link">
              Proof Paper
            </a>
          </div>
          <div className="org_request_date">
            <h4>{date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgRequest;

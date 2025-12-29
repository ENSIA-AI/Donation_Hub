import React from "react";
import "../styles/AdminDashStat.css";

const OrgRequest = ({ name, status, date, proof, onApprove, onReject }) => {
  return (
    <div className="org_request flex-row">
      <div className="org_raquest_profile">{name?.charAt(0).toUpperCase()}</div>

      <div className="org_request_info flex-column">
        <div className="org_name_status flex-row">
          <h2>{name}</h2>
        </div>

        <div className="org_proof_files">
          {proof ? (
            <a href={proof} target="_blank" rel="noopener noreferrer">
              View Proof
            </a>
          ) : (
            <span>No proof uploaded</span>
          )}
        </div>

        <div className="flex-row org_img_date">
          <h4>{new Date(date).toLocaleDateString()}</h4>
        </div>

        <div className="org_request_actions flex-row">
          <button className="approve_btn" onClick={onApprove}>
            Accept
          </button>
          <button className="reject_btn" onClick={onReject}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrgRequest;

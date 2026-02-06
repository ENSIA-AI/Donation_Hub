import React from "react";
import "../styles/AdminDashStat.css";

const OrgRequest = ({ name, status, date, proof, onApprove, onReject }) => {
  return (
    <div className="org_request_card">
      {/* Left: profile */}
      <div className="org_request_left">
        <div className="org_request_profile">{name?.charAt(0).toUpperCase()}</div>
      </div>

      {/* Middle: name + date */}
      <div className="org_request_middle">
        <h2 className="org_request_name">{name}</h2>
        <div className="org_request_date">
          {date ? new Date(date).toLocaleDateString() : "No date"}
        </div>
      </div>

      {/* Right: buttons + proof */}
      <div className="org_request_right">
        <div className="org_request_actions">
          <button className="approve_btn" onClick={onApprove}>Accept</button>
          <button className="reject_btn" onClick={onReject}>Reject</button>
        </div>
        <div className="org_request_proof">
          {proof ? (
            <a href={proof} target="_blank" rel="noopener noreferrer">View Proof</a>
          ) : (
            <span>No proof uploaded</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrgRequest;

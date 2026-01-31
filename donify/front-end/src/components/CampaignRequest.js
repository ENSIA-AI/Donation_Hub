import React, { useState, useEffect, useRef } from "react";

import "../styles/AdminDashStat.css";
const CampaignRequest = ({ title, organization, status, date }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusClick = () => {
    setShowOptions(!showOptions);
  };

  const handleAccept = () => {
    setCurrentStatus("accepted");
    setShowOptions(false);
    // TODO: Send API request to update status
    console.log("Campaign accepted");
  };

  const handleReject = () => {
    setCurrentStatus("rejected");
    setShowOptions(false);
    // TODO: Send API request to update status
    console.log("Campaign rejected");
  };
  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="post_request flex-row">
      <i className="fa-solid fa-image"></i>
      <div className="org_request_info flex-column">
        <div className="org_name_status flex-row">
          <h2>{title}</h2>
          <div className="status_button_wrapper" ref={wrapperRef}>
            {!showOptions && currentStatus === "waiting" && (
              <button
                className="org_request_status waiting"
                onClick={handleStatusClick}
              >
                <i className="fa-solid fa-stopwatch"></i> Waiting
              </button>
            )}

            {currentStatus !== "waiting" && (
              <button className={`org_request_status ${currentStatus}`}>
                {currentStatus === "accepted" ? (
                  <>
                    <i className="fa-solid fa-circle-check"></i> Accepted
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-circle-xmark"></i> Rejected
                  </>
                )}
              </button>
            )}

            {showOptions && currentStatus === "waiting" && (
              <div className="status_options flex-column">
                <button className="accept_btn" onClick={handleAccept}>
                  <i className="fa-solid fa-check"></i> Accept
                </button>
                <button className="reject_btn" onClick={handleReject}>
                  <i className="fa-solid fa-xmark"></i> Reject
                </button>
              </div>
            )}
          </div>
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

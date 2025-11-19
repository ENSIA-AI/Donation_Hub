
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AnnouncementStyle.css";

const AnnouncemetCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = props.announcementDescription
    ? props.announcementDescription.slice(0, 120)
    : "";
  const isLong = (props.announcementDescription || "").length > 120;

  return (
    <div className="announcement col-xl-4 col-lg-6 col-md-7 col-sm-10 col-xs-10 co-xxs-10">
      <div className="announcement-card">
        <div className="announcement_Date">{props.announcementDate}</div>

        <div className="announcement-image">
          <img
            src={props.announcementImage}
            className="full-image announcement-image"
            alt={props.announcementTitle || "announcement"}
          />
        </div>

        <div className="announcement_details">
          <div className="announcement_description">
            <div className="announcement_title">{props.announcementTitle}</div>

            <div className="announcement_text_content">
              {isExpanded ? props.announcementDescription : shortText}
              {!isExpanded && isLong && " ..."}
            </div>
          </div>

          <div className="announcement_actions flex-row">
            <div className="DonnateAnnouncement_action announcement_action">
              <Link to="/donate" className="announcement_action_link">
                Donate
              </Link>
            </div>

            {isLong && (
              <div
                className="read_moreAnnouncement_action announcement_action"
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") setIsExpanded(!isExpanded); }}
              >
                <i className="fa-solid fa-arrow-right" />
                <span className="announcement_action_link">
                  {isExpanded ? "Read less" : "Read more"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncemetCard;



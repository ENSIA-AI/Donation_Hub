import React from "react";
import { Link } from "react-router-dom";
import '../styles/AnnouncementStyle.css'
const AnnouncemetCard = (props) => {
  return (
    <div className="announcement col-xl-4 col-lg-6 col-md-7  col-sm-10 col-xs-10 co-xxs-10">
      <div className="announcement-card ">
        <div className="announcement_Date">{props.announcementDate}</div>
        <div className="announcement-image">
          <img
            src={props.announcementImage}
            className="full-image announcement-image"
          />
        </div>
        <div className="announcement_details">
          <div className="announcement_description">
            <div className="announcement_title">{props.announcementTitle}</div>
            <div className="announcement_text_content">
              {props.announcementDescription}
            </div>
          </div>
          <div className="announcement_actions flex-row">
            <div className="DonnateAnnouncement_action announcement_action">
              <Link to="/donate" className="announcement_action_link">
                Donnate
              </Link>
            </div>
            <div className="read_moreAnnouncement_action announcement_action">
              <i className="fa-solid fa-arrow-right"></i>
              <a href="#" className="announcement_action_link">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncemetCard;

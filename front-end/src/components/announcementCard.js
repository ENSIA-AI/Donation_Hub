import React from "react";
import { Link } from "react-router-dom";
import '../styles/announcementStyle.css'
const AnnouncemetCard = (props) => {
  return (
    <div className="announcement col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
      <div className="announcement-card ">
        <div className="announcement_Date">{props.announcementDate}</div>
        <div className="announcement-image">
          <img
            src={props.announcementImage}
            className="full-image announcement-image" alt=""
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

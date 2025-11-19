import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/announcementStyle.css";

const AnnouncemetCard = ({
  announcementDate,
  announcementImage,
  announcementTitle,
  announcementDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="announcement col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 co-xxs-12">
        <div className="announcement-card">
          <div className="announcement_Date">{announcementDate}</div>
          <div className="announcement-image">
            <img
              src={announcementImage}
              className="full-image announcement-image"
              alt=""
            />
          </div>
          <div className="announcement_details">
            <div className="announcement_description">
              <div className="announcement_title">{announcementTitle}</div>
              <div className="announcement_text_content">
                {announcementDescription.slice(0, 120)}
                {announcementDescription.length > 120 && "..."}
              </div>
            </div>

            <div className="announcement_actions flex-row">
              <div className="DonnateAnnouncement_action announcement_action">
                <Link to="/donate" className="announcement_action_link">
                  Donate
                </Link>
              </div>

              <div
                className="read_moreAnnouncement_action announcement_action"
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-arrow-right"></i>
                <span className="announcement_action_link">Read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="announcement-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="announcement-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="announcement_modal_date">{announcementDate}</div>
            <img src={announcementImage} className="modal-image" alt="" />
            <h2>{announcementTitle}</h2>
            <p>{announcementDescription}</p>
            <button
              className="close-modal-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncemetCard;

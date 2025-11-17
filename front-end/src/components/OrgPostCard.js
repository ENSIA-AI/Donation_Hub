import React from "react";
import { Link } from "react-router-dom";
import "../styles/OrganizationProfile.css";

const OrgPostCard = (props) => {
  return (
    <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
      <div className="post-card">
        <div className="Post_Date">{props.OrgPostDate}</div>
        <div className="post-image">
          <img
            src={props.OrgPostImage}
            className="full_image post-image"
            alt={props.OrgPostTitle}
          />
        </div>
        <div className="post_details">
          <div className="post_description">
            <div className="post_title">{props.OrgPostTitle}</div>
            <div className="post_text_content">{props.OrgPostDescription}</div>
          </div>
          <div className="post_actions flex-row">
            <div className="Donnate_action post_action">
              <a href="donate.html" className="post_action_link">
                Donate
              </a>
            </div>
            <div className="read_more_action ">
              <i className="fa-solid fa-arrow-right"></i>
              <a href="#" className="post_action_link read_more">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgPostCard;

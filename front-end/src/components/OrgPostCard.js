import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";
import UpdatePost from "./UpdatePost";

import axios from "axios";

import "../styles/OrganizationProfile.css";

const OrgPostCard = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12 ">
      <div className="post-card">
        <div className="post_header flex-row">
          <div className="Post_Date">{props.OrgPostDate}</div>
          <i
            className="fa-solid fa-ellipsis"
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ cursor: "pointer" }}
          ></i>

          {showDropdown && (
            <div className="dropdown-menu">
              <button
                onClick={() => {
                  setShowUpdateModal(true);
                  setShowDropdown(false);
                }}
              >
                Update
              </button>
              <button
                onClick={async () => {
                  setShowDropdown(false);
                  const confirmed = window.confirm(
                    "Are you sure you want to delete this post?"
                  );
                  if (confirmed) {
                    try {
                      // Use the correct API route
                      await axios.delete(`/api/compaigns/${props.OrgPostId}`);
                      // Notify parent to remove post from list
                      props.onDelete && props.onDelete(props.OrgPostId);
                    } catch (error) {
                      console.error("Delete failed:", error);
                    }
                  }
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>

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
            <div className="post_text_content">
              {props.OrgPostDescription.length > 90
                ? props.OrgPostDescription.substring(0, 90) + "..."
                : props.OrgPostDescription}
            </div>
          </div>
          <div className="post_actions flex-row">
            {/* Donate button */}
            <div className="Donnate_action post_action">
        
             <button
               className="post_action_link"
               onClick={() => props.onDonate && props.onDonate()}
               style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >

                    Donate
              </button>
              </div>

           
            <div className="read_more_action ">
              <i className="fa-solid fa-arrow-right"></i>
              <a
                href="#"
                className="post_action_link read_more"
                onClick={(e) => {
                  e.preventDefault();
                  props.onReadMore();
                }}
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      {showUpdateModal && (
        <UpdatePost
          postId={props.OrgPostId}
          initialTitle={props.OrgPostTitle}
          initialDescription={props.OrgPostDescription}
          onPostCreated={(updatedPost) => {
            props.onUpdate && props.onUpdate(updatedPost);
          }}
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
};

export default OrgPostCard;
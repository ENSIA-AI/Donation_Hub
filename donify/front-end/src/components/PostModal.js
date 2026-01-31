import React from "react";
import "../styles/PostModal.css";

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        {/* Date */}
        <p className="modal_date">
          {post.compaign_date
            ? new Date(post.compaign_date).toLocaleDateString()
            : ""}
        </p>

        {/* Smaller Image */}
        <img
          className="modal_image_small"
          src={
            post.compaign_img
              ? `http://127.0.0.1:8000/storage/${post.compaign_img}`
              : "https://via.placeholder.com/200"
          }
          alt={post.compaign_title}
        />

        {/* Title */}
        <h2 className="modal_title">{post.compaign_title}</h2>

        {/* Description */}
        <p className="modal_text">{post.compaign_content}</p>

        {/* Close button */}
        <button className="modal_close_btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PostModal;

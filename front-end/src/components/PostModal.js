import React from "react";
import "../styles/PostModal.css";

const PostModal = ({ post, onClose, onDonate }) => {
  if (!post) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container" onClick={(e) => e.stopPropagation()}>
        <p className="modal_date">{post.date}</p>
        <img className="modal_image" src={post.image} alt={post.title} />

        <h2 className="modal_title">{post.title}</h2>

        <p className="modal_text">{post.description}</p>

        <button className="modal_close_btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PostModal;

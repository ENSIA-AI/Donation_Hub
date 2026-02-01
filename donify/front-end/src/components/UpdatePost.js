import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/OrganizationProfile.css";

const UpdatePost = ({
  postId,
  initialTitle,
  initialDescription,
  onPostCreated,
  onClose,
}) => {
  const [postTitle, setPostTitle] = useState(initialTitle || "");
  const [postDescription, setPostDescription] = useState(
    initialDescription || ""
  );
  const [postImage, setPostImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Pre-fill fields when modal opens
    setPostTitle(initialTitle);
    setPostDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("compaign_title", postTitle);
      formData.append("compaign_content", postDescription);

      if (postImage) {
        formData.append("compaign_img", postImage);
      }

      // Laravel requires this to simulate PUT with FormData
      formData.append("_method", "PUT");

      const response = await axios.post(
        `http://127.0.0.1:8000/api/compaigns/${postId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Notify parent to update the post list
      onPostCreated(response.data);
      onClose();
    } catch (err) {
      console.error(err.response?.data || err);
      if (err.response && err.response.status === 422) {
        const errors = err.response.data.errors;
        const messages = [];
        if (errors.compaign_title) messages.push(errors.compaign_title[0]);
        if (errors.compaign_content) messages.push(errors.compaign_content[0]);
        setError(messages.join(" "));
      } else {
        setError("Failed to update post.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add_post">
      <div className="modal_overlay" onClick={onClose}>
        <div className="create_post_modal" onClick={(e) => e.stopPropagation()}>
          <h2>Update Post</h2>
          {error && <p className="error_text">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>Post Title</label>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              required
            />

            <label>Post Description</label>
            <textarea
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              required
            />

            <label>Post Image (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPostImage(e.target.files[0])}
            />

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button type="submit" className="add_post_btn" disabled={loading}>
                {loading ? "Updating..." : "Update Post"}
              </button>
              <button
                type="button"
                className="add_post_btn"
                style={{ backgroundColor: "#ccc", color: "#000" }}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;

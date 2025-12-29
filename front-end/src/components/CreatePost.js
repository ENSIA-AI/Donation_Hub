import React, { useState } from "react";
import axios from "axios";
import "../styles/OrganizationProfile.css";

const CreatePost = ({ onPostCreated }) => {
  const [showForm, setShowForm] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("compaign_title", postTitle);
    formData.append("compaign_content", postDescription);
    if (postImage) formData.append("compaign_img", postImage);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/compaigns",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      onPostCreated(response.data); // callback to update posts in parent
      setShowForm(false);
      setPostTitle("");
      setPostDescription("");
      setPostImage(null);
    } catch (err) {
      console.error(err);
      setError("Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add_post">
      <button
        className="add_post_btn"
        onClick={() => setShowForm((prev) => !prev)}
      >
        <i className="fa-solid fa-plus"></i> Add Post
      </button>

      {showForm && (
        <div className="modal_overlay" onClick={() => setShowForm(false)}>
          <div
            className="create_post_modal"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2>Create a new Post</h2>
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

              <label>Post Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPostImage(e.target.files[0])}
              />

              <button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Post"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;

import React, { useState } from "react";
import axios from "axios";
import "../styles/OrganizationProfile.css";

const CreatePost = ({ orgId, onPostCreated }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("compaign_title", title);
    formData.append("compaign_content", content);
    if (imageFile) formData.append("compaign_img", imageFile);
    formData.append("organization_id", orgId);

    try {
      await axios.post("http://127.0.0.1:8000/api/compaigns", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (onPostCreated) onPostCreated();

      setTitle("");
      setContent("");
      setImageFile(null);
      setShowForm(false);
    } catch (err) {
      console.error("Error creating campaign:", err);
      setError("Failed to create post");
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
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Create a new Post</h2>
            {error && <p className="error_text">{error}</p>}
            <form onSubmit={handleSubmit}>
              <label>Post Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label>Post Description</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />

              <label>Post Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
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

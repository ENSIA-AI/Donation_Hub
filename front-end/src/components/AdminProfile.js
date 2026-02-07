import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "../api/axios";
import "../styles/AdminDashStat.css";

const AdminProfile = () => {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [adminData, setAdminData] = useState({
    username: "", // <- must match backend
    email: "",
    password: "",
    password_confirmation: "",
    image: "/public/assets/Images/admin_image.jpg", // default image
    imageFile: null,
  });

  // Fetch admin profile on load
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get("/admin/me");
        const data = res.data.data || res.data;

        setAdminData({
          username: data.username || "",
          email: data.email || "",
          password: "",
          password_confirmation: "",
          image: data.profile_image || "https://via.placeholder.com/150",
          imageFile: null,
        });
        setError("");
      } catch (err) {
        console.error(
          "Error fetching admin:",
          err.response?.data || err.message,
        );
        setError("Failed to load admin profile. Please login again.");
      }
    };
    fetchAdmin();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAdminData({ ...adminData, image: imageUrl, imageFile: file });
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("username", adminData.username); // <- matches backend
      formData.append("email", adminData.email);

      if (adminData.password) {
        formData.append("password", adminData.password);
      }

      if (adminData.imageFile) {
        formData.append("image", adminData.imageFile);
      }

      const res = await axios.patch("/admin/profile/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const updatedData = res.data.admin || res.data.data;

      setAdminData({
        username: updatedData.username || adminData.username,
        email: updatedData.email || adminData.email,
        password: "",
        password_confirmation: "",
        image: updatedData.profile_image || adminData.image,
        imageFile: null,
      });

      setShowModal(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error saving profile:", err);
      if (err.response?.data?.errors) {
        const errorMessages = Object.values(err.response.data.errors)
          .flat()
          .join(", ");
        setError(errorMessages);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to save profile. Please try again.");
      }
      alert(
        "Error: " + (err.response?.data?.message || "Failed to save profile"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="dash_admin_profile flex-column col-xl-2 col-lg-2 col-md-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ position: "relative" }}
      >
        <div className="dash_admin_profile_image">
          <img
            src={adminData.image}
            alt="admin profile"
            className={hover ? "blurred" : ""}
          />
          {hover && (
            <i
              className="fa-solid fa-pen edit_icon"
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer" }}
              title="Edit profile"
            ></i>
          )}
        </div>
        <h6>{adminData.username || "Admin"}</h6>
      </div>

      {showModal &&
        createPortal(
          <div className="modal_overlay" onClick={() => setShowModal(false)}>
            <div
              className="admin_modal larger_modal"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "500px" }}
            >
              <h2>Edit Admin Profile</h2>

              {error && (
                <div
                  style={{
                    color: "#d32f2f",
                    backgroundColor: "#ffebee",
                    padding: "12px",
                    borderRadius: "6px",
                    marginBottom: "15px",
                    border: "1px solid #ef9a9a",
                    fontSize: "14px",
                  }}
                >
                  {error}
                </div>
              )}

              <div className="profile_image_edit flex-column">
                <img
                  src={adminData.image}
                  alt="Profile"
                  className="modal_profile_image"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <label style={{ marginTop: "15px" }}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ cursor: "pointer" }}
                  />
                </label>
              </div>

              <div className="profile_fields" style={{ marginTop: "20px" }}>
                <label
                  style={{
                    fontWeight: 600,
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  value={adminData.username}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />

                <label
                  style={{
                    fontWeight: 600,
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={adminData.email}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />

                <label
                  style={{
                    fontWeight: 600,
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Password (leave empty to keep current):
                </label>
                <input
                  type="password"
                  name="password"
                  value={adminData.password}
                  onChange={handleInputChange}
                  placeholder="New password"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />

                {adminData.password && (
                  <>
                    <label
                      style={{
                        fontWeight: 600,
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      name="password_confirmation"
                      value={adminData.password_confirmation}
                      onChange={handleInputChange}
                      placeholder="Confirm password"
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                      }}
                    />
                  </>
                )}
              </div>

              <div
                className="modal_buttons"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={handleSave}
                  disabled={loading}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.6 : 1,
                    fontWeight: "600",
                  }}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  disabled={loading}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontWeight: "600",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default AdminProfile;

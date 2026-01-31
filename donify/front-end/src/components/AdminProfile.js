import React, { useEffect, useState } from "react";
import "../styles/AdminDashStat.css";
import axios from "../api/axios";

const AdminProfile = ({ name, image }) => {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Admin info state
  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get("admin/profile")
      .then((res) => {
        console.log("API Response:", res.data); // Debug
        setAdminData({
          username: res.data.username,
          email: res.data.email,
          password: "",
          image: res.data.profile_image || "https://via.placeholder.com/150", // Fallback image
        });
      })
      .catch((err) => {
        console.error("Error fetching admin profile:", err);
        console.log(err.response.data);
      });
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAdminData({ ...adminData, image: imageUrl });
    }
  };

  const handleSave = () => {
    // Here you would send updated data to backend
    console.log("Saved admin data:", adminData);
    setShowModal(false);
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
            ></i>
          )}
        </div>
        <h6>{adminData.username}</h6>
      </div>

      {showModal && (
        <div className="modal_overlay" onClick={() => setShowModal(false)}>
          <div
            className="admin_modal larger_modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Admin Profile</h2>

            <div className="profile_image_edit flex-column">
              <img
                src={adminData.image}
                alt="Profile"
                className="modal_profile_image"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="profile_fields">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={adminData.username}
                onChange={handleInputChange}
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={adminData.email}
                onChange={handleInputChange}
              />

              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={adminData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="modal_buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProfile;

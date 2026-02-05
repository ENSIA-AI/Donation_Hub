// import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { getCurrentUser } from "../services/authService"; // use the service
// import axios from "../api/axios";
// import "../styles/AdminDashStat.css";

// const AdminProfile = () => {
//   const [hover, setHover] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const [adminData, setAdminData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     image: "",
//     imageFile: null,
//   });

//   useEffect(() => {
//     const fetchAdmin = async () => {
//       try {
//         const token = localStorage.getItem("token"); // get token
//         const res = await axios.get("/admin/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setAdminData({
//           username: res.data.username,
//           email: res.data.email,
//           password: "",
//           image: res.data.profile_image || "https://via.placeholder.com/150",
//           imageFile: null,
//         });
//       } catch (err) {
//         console.error(err.response?.data || err);
//       }
//     };

//     fetchAdmin();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAdminData({ ...adminData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setAdminData({ ...adminData, image: imageUrl, imageFile: file });
//     }
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("token"); // ✅
//       const formData = new FormData();
//       formData.append("username", adminData.username);
//       formData.append("email", adminData.email);
//       if (adminData.password) formData.append("password", adminData.password);
//       if (adminData.imageFile) formData.append("image", adminData.imageFile);

//       const res = await axios.post("/admin/profile/update", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // ✅ important!
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setAdminData({
//         ...adminData,
//         password: "",
//         image: res.data.admin.profile_image || adminData.image,
//         imageFile: null,
//       });

//       setShowModal(false);
//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert("Failed to save profile. Make sure you are logged in.");
//     }
//   };

//   return (
//     <>
//       <div
//         className="dash_admin_profile flex-column col-xl-2 col-lg-2 col-md-2"
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//         style={{ position: "relative" }}
//       >
//         <div className="dash_admin_profile_image">
//           <img
//             src={adminData.image}
//             alt="admin profile"
//             className={hover ? "blurred" : ""}
//           />

//           {hover && (
//             <i
//               className="fa-solid fa-pen edit_icon"
//               onClick={() => setShowModal(true)}
//             ></i>
//           )}
//         </div>
//         <h6>{adminData.username}</h6>
//       </div>

//       {showModal &&
//         createPortal(
//           <div className="modal_overlay" onClick={() => setShowModal(false)}>
//             <div
//               className="admin_modal larger_modal"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h2>Admin Profile</h2>

//               <div className="profile_image_edit flex-column">
//                 <img
//                   src={adminData.image}
//                   alt="Profile"
//                   className="modal_profile_image"
//                 />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </div>

//               <div className="profile_fields">
//                 <label>Username:</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={adminData.username}
//                   onChange={handleInputChange}
//                 />

//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={adminData.email}
//                   onChange={handleInputChange}
//                 />

//                 <label>Password:</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={adminData.password}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="modal_buttons">
//                 <button onClick={handleSave}>Save</button>
//                 <button onClick={() => setShowModal(false)}>Cancel</button>
//               </div>
//             </div>
//           </div>,
//           document.body,
//         )}
//     </>
//   );
// };

// export default AdminProfile;
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "../api/axios";
import "../styles/AdminDashStat.css";

const AdminProfile = () => {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
    imageFile: null,
  });

  // Fetch admin profile on load
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/admin/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdminData({
          username: res.data.username,
          email: res.data.email,
          password: "",
          image: res.data.profile_image || "https://via.placeholder.com/150",
          imageFile: null,
        });
      } catch (err) {
        console.error(err.response?.data || err);
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
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("username", adminData.username);
      formData.append("email", adminData.email);
      if (adminData.password) formData.append("password", adminData.password);
      if (adminData.imageFile) formData.append("image", adminData.imageFile);

      const res = await axios.post("/admin/profile/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setAdminData({
        ...adminData,
        password: "",
        image: res.data.admin.profile_image || adminData.image,
        imageFile: null,
      });

      setShowModal(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Failed to save profile. Make sure you are logged in.");
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
            ></i>
          )}
        </div>
        <h6>{adminData.username}</h6>
      </div>

      {showModal &&
        createPortal(
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
          </div>,
          document.body,
        )}
    </>
  );
};

export default AdminProfile;

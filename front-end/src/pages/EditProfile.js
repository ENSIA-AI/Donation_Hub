
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import "../styles/EditProfile.css";

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("general");

  const [heroFile, setHeroFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [missionFile, setMissionFile] = useState(null);
  const [program1_img, setProgram1_img] = useState(null);
  const [program2_img, setProgram2_img] = useState(null);

  const [form, setForm] = useState({
    org_name: "",
    org_description: "",
    org_slogan: "",
    org_mission: "",
    org_vision: "",

    program1_title: "",
    program1_desc: "",
    program2_title: "",
    program2_desc: "",

    value1: "",
    value2: "",
    value3: "",
    value4: "",

    org_address: "",
    org_phone: "",
    org_email: "",
    org_facebook: "",
    org_instagram: "",
  });

  useEffect(() => {
    api.get(`/organization/${id}`).then((res) => {
      setForm({
  org_name: res.data.org_name || "",
  org_description: res.data.org_description || "",
  org_slogan: res.data.org_slogan || "",
  org_mission: res.data.org_mission || "",
  org_vision: res.data.org_vision || "",

  program1_title: res.data.program1_title || "",
  program1_desc: res.data.program1_desc || "",
  program2_title: res.data.program2_title || "",
  program2_desc: res.data.program2_desc || "",

  value1: res.data.value1 || "",
  value2: res.data.value2 || "",
  value3: res.data.value3 || "",
  value4: res.data.value4 || "",

  org_address: res.data.org_address || "",
  org_phone: res.data.org_phone || "",
  org_email: res.data.org_email || "",
  org_facebook: res.data.org_facebook || "",
  org_instagram: res.data.org_instagram || "",
});

    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.entries(form).forEach(([key, value]) =>
        data.append(key, value || "")
      );

      if (heroFile) data.append("org_hero_img", heroFile);
      if (logoFile) data.append("org_logo", logoFile);
      if (missionFile) data.append("mission_img", missionFile);
      if (program1_img) data.append("program1_img", program1_img);
      if (program2_img) data.append("program2_img", program2_img);
      await api.post(`/organization/${id}?_method=PUT`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Profile updated successfully!");
      navigate(`/OrgProfile/${id}`);
    } catch (error) {
  console.error(error.response?.data || error.message);
  alert(error.response?.data?.message || "Update failed");
}

  };

  return (
    <div className="edit_container">
      <h1 className="edit_title">Edit Organization Profile</h1>

      {/* TAB NAVIGATION */}
      <div className="edit-tabs">
        <div className="tab_button">
        <button onClick={() => setActiveTab("general")}>General</button>
        </div>
        <div className="tab_button">
        <button onClick={() => setActiveTab("about")}>About</button>
        </div>
        <div className="tab_button">
        <button onClick={() => setActiveTab("programs")}>Programs</button>
        </div>
        <div className="tab_button">
        <button onClick={() => setActiveTab("values")}>Values</button>
        </div>
        <div className="tab_button">
        <button onClick={() => setActiveTab("contact")}>Contact</button>
        </div>
        <div className="tab_button">
        <button onClick={() => setActiveTab("media")}>Media</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* ========== GENERAL TAB ========== */}
        {activeTab === "general" && (
          <div className="form-section">
            <h2>General Information</h2>
             <div className="edit_feild">
            <label >Organization Name</label>
            <input
              name="org_name"
              value={form.org_name}
              onChange={handleChange}
            />
            </div>
            <div className="edit_feild">
            <label>Slogan</label>
            <input
              name="org_slogan"
              value={form.org_slogan}
              onChange={handleChange}
            />
            </div>
          </div>
        )}

        {/* ========== ABOUT TAB ========== */}
        {activeTab === "about" && (
          <div className="form-section">
            <h2>About Organization</h2>
            <div className="about_feild">
            <label>Description</label>
            <div>
            <textarea
              name="org_description"
              value={form.org_description}
              onChange={handleChange}
            />
            </div>
            </div>
            <div className="about_feild">
            <label>Mission</label>
            <div>
            <textarea
              name="org_mission"
              value={form.org_mission}
              onChange={handleChange}
            />
            </div>
            </div>
            <div className="about_feild">
            <label>Vision</label>
            <div>
            <textarea
              name="org_vision"
              value={form.org_vision}
              onChange={handleChange}
            />
            </div>
            </div>
          </div>
        )}

        {/* ========== PROGRAMS TAB ========== */}
        {activeTab === "programs" && (
          <div className="form-section">
            <h2>Programs</h2>
             <div className="program_edit">
            <h3>Program 1</h3>
            
            <input
              name="program1_title"
              value={form.program1_title}
              onChange={handleChange}
              placeholder="Title"
            />
            <textarea
              name="program1_desc"
              value={form.program1_desc}
              onChange={handleChange}
              placeholder="Description"
            />
            </div>
            <div className="program_edit">
            <h3>Program 2</h3>
            <input
              name="program2_title"
              value={form.program2_title}
              onChange={handleChange}
              placeholder="Title"
            />
            <textarea
              name="program2_desc"
              value={form.program2_desc}
              onChange={handleChange}
              placeholder="Description"
            />
            </div>
          </div>
        )}

        {/* ========== VALUES TAB ========== */}
        {activeTab === "values" && (
          <div className="form-section">
            <h2>Core Values</h2>
             <div className="edit_feild">
            <input name="value1" value={form.value1} onChange={handleChange} />
            <input name="value2" value={form.value2} onChange={handleChange} />
            <input name="value3" value={form.value3} onChange={handleChange} />
            <input name="value4" value={form.value4} onChange={handleChange} />
            </div>
          </div>
        )}

        {/* ========== CONTACT TAB ========== */}
        {activeTab === "contact" && (
          <div className="form-section">
            <h2>Contact Information</h2>
             <div className="edit_feild">
            <label>Address</label>
            <input
              name="org_address"
              value={form.org_address}
              onChange={handleChange}
            />
             </div>
             <div className="edit_feild">
            <label>Phone</label>
            <input
              name="org_phone"
              value={form.org_phone}
              onChange={handleChange}
            />
            </div>
            <div className="edit_feild">
            <label>Email</label>
            <input
              name="org_email"
              value={form.org_email}
              onChange={handleChange}
            />
             </div>
             <div className="edit_feild">
            <label>Facebook</label>
            <input
              name="org_facebook"
              value={form.org_facebook}
              onChange={handleChange}
            />
            </div>
            <div className="edit_feild">
            <label>Instagram</label>
            <input
              name="org_instagram"
              value={form.org_instagram}
              onChange={handleChange}
            />
            </div>
          </div>
        )}

        {/* ========== MEDIA TAB ========== */}
        {activeTab === "media" && (
          <div className="form-section">
            <h2>Images</h2>
             <div className="img_feild">
            <label>Hero Image</label>
            <input type="file" onChange={(e) => setHeroFile(e.target.files[0])} />
            {heroFile && (
              <img
                src={URL.createObjectURL(heroFile)}
                alt="preview"
                className="preview-img"
              />
            )}
             </div>
             <div className="img_feild">
            <label>Logo</label>
            <input type="file" onChange={(e) => setLogoFile(e.target.files[0])} />
            {logoFile && (
              <img
                src={URL.createObjectURL(logoFile)}
                alt="preview"
                className="preview-img small"
              />
            )}
            </div>
            <div className="img_feild">
            <label>Mission Image</label>
            <input type="file" onChange={(e) => setMissionFile(e.target.files[0])} />
            {missionFile && (
              <img
                src={URL.createObjectURL(missionFile)}
                alt="preview"
                className="preview-img"
              />
            )}
            </div>
            <div className="img_feild">
            <label>program 1 image</label>
            <input type="file" onChange={(e) => setProgram1_img(e.target.files[0])} />
            {program1_img && (
              <img
                src={URL.createObjectURL(program1_img)}
                alt="preview"
                className="preview-img"
              />
            )}
            </div>
            <div className="img_feild">
            <label>program 2 image</label>
            <input type="file" onChange={(e) => setProgram2_img(e.target.files[0])} />
            {program2_img && (
              <img
                src={URL.createObjectURL(program2_img)}
                alt="preview"
                className="preview-img"
              />
            )}
            </div>
          </div>
        )}

        <div className="save_button">
          <button type="submit">Save All Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
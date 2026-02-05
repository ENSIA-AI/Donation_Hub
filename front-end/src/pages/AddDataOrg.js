import React, { useState } from "react";
import api from "../api/axios";
import "../styles/EditProfile.css";


const AddOrganization = () => {
  const [heroFile, setHeroFile] = useState(null);
const [logoFile, setLogoFile] = useState(null);
const [missionFile, setMissionFile] = useState(null);
  const [formData, setFormData] = useState({
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

    // optional fields (backend allows them)
    org_email: "",
    wilaya_id: "",
    category_id: "",
    org_registrationDate: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    // Append all text fields
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Append files if selected
    if (heroFile) data.append("org_hero_img", heroFile);
    if (logoFile) data.append("org_logo", logoFile);
    if (missionFile) data.append("mission_img", missionFile);

    const response = await api.post("/organization", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Organization created:", response.data);
    alert("Organization added successfully!");
  } catch (error) {
  console.error("Error adding organization:", error.response?.data || error);

  if (error.response && error.response.data.errors) {
    alert(JSON.stringify(error.response.data.errors, null, 2));
  } else {
    alert("Failed to add organization");
  }
}

};

  return (
    <div clasasName="edit_container">
    <form onSubmit={handleSubmit}>
      <h1 className="edit_title">Add organization information</h1>

      <label htmlFor="org_name">Organization name</label>
      <input name="org_name" value={formData.org_name} onChange={handleChange} required />

      <label htmlFor="org_description">Description</label>
      <textarea name="org_description" value={formData.org_description} onChange={handleChange} required />

      <label htmlFor="org_slogan">Organization slogan</label>
      <input name="org_slogan" value={formData.org_slogan} onChange={handleChange} required />

      <label htmlFor="org_mission">Organization mission</label>
      <input name="org_mission" value={formData.org_mission} onChange={handleChange} required />

      <label htmlFor="org_vision">Organization vision</label>
      <input name="org_vision" value={formData.org_vision} onChange={handleChange} required />

      <label htmlFor="program1_title">Program 1 title</label>
      <input name="program1_title" value={formData.program1_title} onChange={handleChange} required />

      <label htmlFor="program1_desc">Program 1 description</label>
      <input name="program1_desc" value={formData.program1_desc} onChange={handleChange} required />

      <label htmlFor="program2_title">Program 2 title</label>
      <input name="program2_title" value={formData.program2_title} onChange={handleChange} required />

      <label htmlFor="program2_desc">Program 2 description</label>
      <input name="program2_desc" value={formData.program2_desc} onChange={handleChange} required />

      <label htmlFor="value1">Value 1</label>
      <input name="value1" value={formData.value1} onChange={handleChange} required />

      <label htmlFor="value2">Value 2</label>
      <input name="value2" value={formData.value2} onChange={handleChange} required />

      <label htmlFor="value3">Value 3</label>
      <input name="value3" value={formData.value3} onChange={handleChange} required />

      <label htmlFor="value4">Value 4</label>
      <input name="value4" value={formData.value4} onChange={handleChange} required />

      {/* Optional fields */}
      <label htmlFor="org_email">Organization email</label>
      <input type="email" name="org_email" value={formData.org_email} onChange={handleChange} />
      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password || ""}
        onChange={handleChange}
        required
      />

      <label htmlFor="wilaya_id">Wilaya ID</label>
      <input type="number" name="wilaya_id" value={formData.wilaya_id} onChange={handleChange} />

      <label htmlFor="category_id">Category ID</label>
      <input type="number" name="category_id" value={formData.category_id} onChange={handleChange} />

      <label htmlFor="org_registrationDate">Registration date</label>
      <input
        type="date"
        name="org_registrationDate"
        value={formData.org_registrationDate}
        onChange={handleChange}
      />
      <label>Hero Image</label>
<input type="file" onChange={(e) => setHeroFile(e.target.files[0])} />

<label>Logo</label>
<input type="file" onChange={(e) => setLogoFile(e.target.files[0])} />

<label>Mission Image</label>
<input type="file" onChange={(e) => setMissionFile(e.target.files[0])} />
      <div className="save_button">
        <button type="submit">Save changes</button>
      </div>
    </form>
    </div>
  );
};

export default AddOrganization;
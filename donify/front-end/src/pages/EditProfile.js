import React ,{use, useEffect,useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; 
import api from "../api/axios"
import "../styles/EditProfile.css";
const EditProfile = ()=>{
    const [heroFile, setHeroFile] = useState(null);
    const [logoFile, setLogoFile] = useState(null);
    const [missionFile, setMissionFile] = useState(null);
    const {id} =useParams();
    const navigate = useNavigate();
    const [form,setForm] = useState(
        {
            org_name: "",
            org_description: "",
            org_slogan: "",
            org_mission:"",
            org_vision:"" ,
            program1_title: "",
            program1_desc :"",
            program2_title: "",
            program2_desc :"",
            value1:"",
            value2:"",
            value3:"",
            value4:""

        }
    );
    useEffect( ()=>{
        api.get(`/organization/${id}`).then(res=>{
            setForm(
                {
                    org_name: res.data.org_name,
                    org_description: res.data.org_description,
                    org_slogan: res.data.org_slogan,
                    org_mission:res.data.org_mission,
                    org_vision: res.data.org_vision,
                    program1_title: res.data.program1_title,
                    program1_desc :res.data.program1_desc,
                    program2_title: res.data.program2_title,
                    program2_desc :res.data.program2_desc,
                    value1:res.data.value1,
                    value2:res.data.value2,
                    value3:res.data.value3,
                    value4:res.data.value4,
                }
            );
        });
    },[id]);
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));

    if (heroFile) data.append("org_hero_img", heroFile);
    if (logoFile) data.append("org_logo", logoFile);
    if (missionFile) data.append("mission_img", missionFile);

    await api.post(`/organization/${id}?_method=PUT`, data, {
  headers: { "Content-Type": "multipart/form-data" },
});

    alert("Organization updated successfully!");
  } catch (error) {
    console.error(error.response?.data || error);
    alert("Update failed");
  }
};

    return(
        <>
         <div className="edit_container">
            <form onSubmit={handleSubmit}>
                <h1 className="edit_title">Edit your information</h1>
                <label for="org-name">organization name</label>
                <input
                    name="org_name"
                    value={form.org_name}
                    onChange={handleChange}
                    placeholder="Organization name"
                />
                <label for="org_description">description</label>
                <textarea
                    name="org_description"
                    value={form.org_description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <label for="org_slogan">organization Slogan</label>
                <input
                    name="org_slogan"
                    value={form.org_slogan}
                    onChange={handleChange}
                    placeholder="Slogan"
                />
                <label for="org_mission">organization mission</label>
                <input
                    name="org_mission"
                    value={form.org_mission}
                    onChange={handleChange}
                    placeholder="mission"
                />
                <label for="org_vision">organization vision</label>
                <input
                    name="org_vision"
                    value={form.org_vision}
                    onChange={handleChange}
                    placeholder="vision"
                />
                <label for="program1_title">title of program 1</label>
                <input
                    name="program1_title"
                    value={form.program1_title}
                    onChange={handleChange}
                    placeholder="program 1 title"
                />
                <label for="program1_des">description of program 1</label>
                <input
                    name="program1_desc"
                    value={form.program1_desc}
                    onChange={handleChange}
                    placeholder="program 1 description"
                />
                <label for="program2_title">title of program 2</label>
                <input
                    name="program2_title"
                    value={form.program2_title}
                    onChange={handleChange}
                    placeholder="program 2 title"
                />
                <label for="program2_desc">description of program 2</label>
                <input
                    name="program2_desc"
                    value={form.program2_desc}
                    onChange={handleChange}
                    placeholder="program 2 description"
                />
                <label for="value1">value 1 of organization</label>
                <input
                    name="value1"
                    value={form.value1}
                    onChange={handleChange}
                    placeholder="value 1"
                />
                <label for="value2">value 2 of organization</label>
                <input
                    name="value2"
                    value={form.value2}
                    onChange={handleChange}
                    placeholder="value 2"
                />
                <label for="value3">value 3 of organization</label>
                <input
                    name="value3"
                    value={form.value3}
                    onChange={handleChange}
                    placeholder="value 3"
                />
                <label for="value4">value 4 of organization</label>
                <input
                    name="value4"
                    value={form.value4}
                    onChange={handleChange}
                    placeholder="value 4"
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
        </>
    );

};

export default EditProfile;
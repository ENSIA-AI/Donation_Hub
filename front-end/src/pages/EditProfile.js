import React ,{use, useEffect,useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; 
import api from "../api/axios"

const EditProfile = ()=>{
    const {id} =useParams();
    const navigate = useNavigate();
    const [form,setForm] = useState(
        {
            org_name: "",
            org_description: "",
            org_slogan: "",
            org_mission:"",
            org_vision:"" ,
            org_program1_title: "",
            org_program1_disc :"",
            org_program2_title: "",
            org_program2_disc :"",
            org_value1:"",
            org_value2:"",
            org_value3:"",
            org_value4:""

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
                    org_value1:res.data.value1,
                    org_value2:res.data.value2,
                    org_value3:res.data.value3,
                    org_value4:res.data.value4,
                }
            );
        });
    },[id]);
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        api.put(`/organization/${id}`,form).then(()=>{
            alert("updated!");
            navigate(`/OrgProfile/${id}`)
        }).catch(err => {
        alert("Update failed: " + err.message);
    });
    };
    return(
        <>
         <div>
            <form onSubmit={handleSubmit}>
                <h1 className="edit_title">edit your information</h1>
                <input
                    name="org_name"
                    value={form.org_name}
                    onChange={handleChange}
                    placeholder="Organization name"
                />

                <textarea
                    name="org_description"
                    value={form.org_description}
                    onChange={handleChange}
                    placeholder="Description"
                />

                <input
                    name="org_slogan"
                    value={form.org_slogan}
                    onChange={handleChange}
                    placeholder="Slogan"
                />
                <input
                    name="org_mission"
                    value={form.org_mission}
                    onChange={handleChange}
                    placeholder="mission"
                />
                <input
                    name="org_vision"
                    value={form.org_vision}
                    onChange={handleChange}
                    placeholder="vision"
                />
                <input
                    name="program1_title"
                    value={form.program1_title}
                    onChange={handleChange}
                    placeholder="program 1 title"
                />
                <input
                    name="program1_desc"
                    value={form.program1_disc}
                    onChange={handleChange}
                    placeholder="program 1 description"
                />
                <input
                    name="program2_title"
                    value={form.program2_title}
                    onChange={handleChange}
                    placeholder="program 2 title"
                />
                <input
                    name="program2_desc"
                    value={form.program2_disc}
                    onChange={handleChange}
                    placeholder="program 2 description"
                />
                <input
                    name="org_value1"
                    value={form.org_value1}
                    onChange={handleChange}
                    placeholder="value 1"
                />
                <input
                    name="org_value2"
                    value={form.org_value2}
                    onChange={handleChange}
                    placeholder="value 2"
                />
                <input
                    name="org_value3"
                    value={form.org_value3}
                    onChange={handleChange}
                    placeholder="value 3"
                />
                <input
                    name="org_value4"
                    value={form.org_value4}
                    onChange={handleChange}
                    placeholder="value 4"
                />


                <button type="submit">Save changes</button>
            </form>
         </div>
        </>
    );

};

export default EditProfile;
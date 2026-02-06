import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/register.css";
import axios from "axios";
import { useEffect } from "react";




const Register = ()=>{
  const [categories, setCategories] = useState([]);
  const [wilayas, setWilayas] = useState([]);
  const [submiteSuccess, setSubmitSuccess] = useState(false);
const {
  register,
  handleSubmit,
  watch,
  reset,
  formState: { errors },
} = useForm(
  {
    defaultValues:{
      orgName: "",
      phoneNum: "",
      email: "",
      organizationType: "health",
      region: "algeries",
      description: "",
      password: "",
      confirmPassword: "",
      proof: null,
    },
    mode: "onChange",
  }
);
   
  const onSubmit = async (data) => {
  try {
    const formData = new FormData();

    formData.append("org_name", data.orgName);
    formData.append(
      "org_registrationDate",
      new Date().toISOString().slice(0, 10)
    );
    formData.append("org_description", data.description);
    formData.append("org_email", data.email);
    formData.append("org_password", data.password);
    formData.append("org_phone", data.phoneNum);

    // TEMP IDs (later we make them dynamic)

    formData.append("category_id", data.category_id);
    formData.append("wilaya_id", data.wilaya_id);


    
    if (data.proof && data.proof[0]) {
      formData.append("org_proof", data.proof[0]);
    }

    const response = await axios.post(
      "http://127.0.0.1:8000/api/organizations",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Organization created:", response.data);
    setSubmitSuccess(true);
    reset();
  } catch (error) {
    console.error(error.response?.data || error);
    alert("Registration failed");
  }
};
useEffect(() => {
  const fetchData = async () => {
    try {
      const catRes = await axios.get("http://127.0.0.1:8000/api/categories");
      const wilayaRes = await axios.get("http://127.0.0.1:8000/api/wilayas");

      setCategories(catRes.data);
      setWilayas(wilayaRes.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  fetchData();
}, []);


 return(
   <main>
    <div className="mainContainer">
  <div className="log-container ">
    <div className="toggle-box col-lg-6 col-xl-6 col-md-6">
      <div className="text">
        <h3>welcome to donifyDz !</h3>
        <p>already have an account? </p>
      </div>
      <div className="register ">
        <button id="login">
          <Link to="/Login">login</Link> 
        </button>
      </div>
    </div>
    {/* register form */}
    <div className="form-box login col-lg-6 col-xl-6 col-md-6">
      <div className="login-form ">
        <div className="title ">
          <h2>register</h2>
        </div>
        {
          submiteSuccess && (<p className="success-message">  Registration submitted successfully!</p>)
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" placeholder">
            <input
              type="text"
              id="name-of-organization"
              placeholder="Name of organization"
              {...register("orgName", { required:"Organization name is required", maxLength: 20 })}
            />
            {errors.orgName && <span className="error-message">{errors.orgName.message}</span>}
          </div>
          <div className=" placeholder">
            <input type="text" id="phone-number" placeholder="Phone number" 
            {...register("phoneNum", { required: "Phone number is required",   pattern: {
           value: /^(05|06|07)[0-9]{8}$/,
           message: "Invalid phone number format",},})}
            />
            {errors.phoneNum && <span className="error-message">{errors.phoneNum.message}</span>}
          </div>
          <div className=" placeholder">
            <input type="email" id="email" placeholder="Email" 
            {...register("email", { required: "Email is required",   pattern: {
           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
           message: "Invalid email format",},})}
           />
           {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>
          <div className="selects-container">
            <div className=" select-container">
              <select {...register("category_id", { required: "Category is required" })}>
                <option value="">Select category</option>

                 {categories.map((cat) => (
                 <option key={cat.id} value={cat.id}>
                 {cat.category}
                </option>
               ))}
             </select>

            {errors.category_id && <span className="error-message">{errors.category_id.message}</span>}
            </div>
            <div className=" select-container">
              <select {...register("wilaya_id", { required: "Wilaya is required" })}>
               <option value="">Select wilaya</option>

                {wilayas.map((wilaya) => (
                <option key={wilaya.id} value={wilaya.id}>
                {wilaya.wilaya_name}
               </option>
               ))}
             </select>

            </div>
          </div>
          <div className="placeholder ">
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              defaultValue={"description"}
              {...register("description")}

            />
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Password" {...register("password",
            { required :"Password is required",
              pattern :{
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:"Must contain 8+ chars, uppercase, lowercase and number",
              },
            })}
              />
              {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Confirm password" 
               {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
             />
             {errors.confirmPassword && (
              <span className="error_regi">{errors.confirmPassword.message}</span>
            )}
          </div>
          <div className="placeholder file-add ">
            <input type="file" id="proof" placeholder="apload proof" {...register("proof")} />
          </div>
          <div className=" submit">
            <button type="submit"> register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</main>

 );
};
export default Register ;
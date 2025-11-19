import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const Register = ()=>{
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
   
   const onSubmit = (data) => {
  console.log("form Data:", data);
  setSubmitSuccess(true);
  reset();
  setTimeout(() => setSubmitSuccess(false), 4000);
}
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
            {errors.orgName && <span>{errors.orgName.message}</span>}
          </div>
          <div className=" placeholder">
            <input type="text" id="phone-number" placeholder="Phone number" 
            {...register("phoneNum", { required: "Phone number is required",   pattern: {
           value: /^(05|06|07)[0-9]{8}$/,
           message: "Invalid phone number format",},})}
            />
            {errors.phoneNum && <span>{errors.phoneNum.message}</span>}
          </div>
          <div className=" placeholder">
            <input type="email" id="email" placeholder="Email" 
            {...register("email", { required: "Email is required",   pattern: {
           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
           message: "Invalid email format",},})}
           />
           {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="selects-container">
            <div className=" select-container">
              <select name="type" id="type-of-organization" {...register("organizationType")}>
                <option value="health">health</option>
                <option value="education">education</option>
                <option value="children">children</option>
                <option value="food">food</option>
                <option value="water">water</option>
              </select>
            </div>
            <div className=" select-container">
              <select name="region" id="region" {...register("region")}>
                <option value="algeries">algeries</option>
                <option value="bouira">bouira</option>
                <option value="jijel">jijel</option>
                <option value="oran">oran</option>
                <option value="bejia">bejia</option>
                <option value="adrar">adrar</option>
              </select>
            </div>
          </div>
          <div className="placeholder ">
            <textarea
              name="description"
              id="description"
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
              {errors.password && <span>{errors.password.message}</span>}
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
              <span>{errors.confirmPassword.message}</span>
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
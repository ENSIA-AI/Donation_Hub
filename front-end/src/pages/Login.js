import React from "react";
import '../styles/register.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ()=>{
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
     
     const onSubmit = (data) => {
    console.log("form Data:", data);
  }
  return(
    <main>
  <div className="mainContainer">
  <div className="log-container ">
    <div className="toggle-box col-lg-6 col-xl-6 col-md-6">
      <div className="text">
        <h3>welcome back to donifyDz !</h3>
        <p>don't have an account?</p>
      </div>
      <div className="register ">
        <button id="register">
          <Link to="/Register">register</Link> 
        </button>
      </div>
    </div>
    {/* login form */}
    <div className="form-box login   col-lg-6 col-xl-6 col-md-6">
      <div className="login-form ">
        <div className="title ">
          <h2>login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" placeholder">
            <input type="email" id="email" placeholder="Email"  
           {...register("email", { required: true,   pattern: {
           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
           message: "Invalid email format",},})}
             />
           {errors.email && <span>{errors.email.message}</span>}
         
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Password" 
            {...register("password",
            { required : "password is required",
              pattern :{
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:"Must contain 8+ chars, uppercase, lowercase and number",
              },
            })} />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Confirm password" 
            {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })} />
                {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>)}
          </div>
          <div className=" submit">
            <button type="submit" className="submitBnt"> login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</main>

  );
};

export default Login ;
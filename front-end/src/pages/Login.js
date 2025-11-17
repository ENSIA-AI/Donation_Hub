import React from "react";
import '../styles/register.css'
import { Link } from "react-router-dom";

const Login = ()=>{
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
        <form action="">
          <div className=" placeholder">
            <input type="email" id="email" placeholder="Email" required="" />
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Password" required="" />
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Confirm password" required="" />
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
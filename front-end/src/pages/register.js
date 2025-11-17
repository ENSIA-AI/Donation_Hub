import React from "react";
import { Link } from "react-router-dom";

const Register = ()=>{
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
        <form action="">
          <div className=" placeholder">
            <input
              type="text"
              id="name-of-organization"
              placeholder="Name of organization"
              required=""
            />
          </div>
          <div className=" placeholder">
            <input type="text" id="phone-number" placeholder="Phone number" />
          </div>
          <div className=" placeholder">
            <input type="email" id="email" placeholder="Email" required="" />
          </div>
          <div className="selects-container">
            <div className=" select-container">
              <select name="type" id="type-of-organization">
                <option value="health">health</option>
                <option value="education">education</option>
                <option value="children">children</option>
                <option value="food">food</option>
                <option value="water">water</option>
              </select>
            </div>
            <div className=" select-container">
              <select name="region" id="region">
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
            />
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Password" required="" />
          </div>
          <div className=" placeholder">
            <input type="password" placeholder="Confirm password" required="" />
          </div>
          <div className="placeholder file-add ">
            <input type="file" id="proof" placeholder="apload proof" />
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
import React, { useState } from "react";
import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../services/authService";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await login(data.email, data.password);

      localStorage.setItem("token", response.token);
      localStorage.setItem("role", response.role);

      if (response.role === "admin") {
        localStorage.setItem("adminId", response.user.id);
        navigate("/AdminDashboardStat");
      } else if (response.role === "organization") {
        localStorage.setItem("orgId", response.organization.id);
        navigate(`/OrgProfile/${response.organization.id}`);
      }

      reset({
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
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
          <div className="form-box login col-lg-6 col-xl-6 col-md-6">
            <div className="login-form ">
              <div className="title ">
                <h2>login</h2>
              </div>

              {error && (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="placeholder">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "email required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div className="placeholder">
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                  {errors.password && <span>{errors.password.message}</span>}
                </div>

                <div className="submit">
                  <button type="submit" className="submitBnt">
                    login
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

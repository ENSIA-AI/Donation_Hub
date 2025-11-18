import React from "react";
import "../styles/OrganizationProfile.css";
import { useForm } from "react-hook-form";

const OrgContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      requestType: "cash",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="org-contact-form col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-11 col-xxs-11">
      <div className="org-form-card">
        <div className="org-form-details">
          <h1>Request Support or Ask a Question</h1>
          <p>If you need assistance, please fill the form below.</p>
        </div>

        <div className="org-contact-form-labels">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* FIRST and  LAST NAME */}
            <div className="first_line flex-row">
              <div className="col-xl-5">
                <label className="ogr-form-label">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 3,
                      message: "First name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "First name cannot exceed 20 characters",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className="error">{errors.firstName.message}</p>
                )}
              </div>

              <div className="col-xl-5">
                <label className="ogr-form-label">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 3,
                      message: "Last name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Last name cannot exceed 20 characters",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="error">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div className="org-Email">
              <label className="ogr-form-label">
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            {/* PHONE */}
            <div className="org-Phone">
              <label className="ogr-form-label">
                Phone Number <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^([0]{1}[5-7]{1}[0-9]{8})$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="error">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="org-Message">
              <label className="ogr-form-label">
                Message <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Leave your message"
                maxLength={1000}
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 1000,
                    message: "Message cannot exceed 1000 characters",
                  },
                })}
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            {/* REQUEST TYPE */}
            <div className="flex-row">
              <div className="org-Request-type">
                <label className="ogr-form-label">Type of Request</label>
                <select
                  {...register("requestType", {
                    required: "Please select the type of the request !",
                  })}
                >
                  <option value="cash">Cash</option>
                  <option value="food">Food</option>
                  <option value="clothes">Clothes</option>
                  <option value="medical">Medical</option>
                  <option value="education">Education</option>
                  <option value="construction">Construction</option>
                </select>
                {errors.requestType && (
                  <p className="error">{errors.requestType.message} </p>
                )}
              </div>

              <div className="org-document">
                <label className="ogr-form-label">Upload a Document</label>
                <input
                  type="file"
                  className="org-upload-file"
                  {...register("file")}
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex-row">
              <button type="reset">Reset</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrgContactForm;

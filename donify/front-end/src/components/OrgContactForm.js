import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/OrganizationProfile.css";

const OrgContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [serverErrors, setServerErrors] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      requestType: "cash",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerErrors({}); 
    try {
      const formData = new FormData();
      formData.append('rec_firstName', data.firstName);
      formData.append('rec_lastName', data.lastName);
      formData.append('rec_email', data.email);
      formData.append('rec_phoneNumber', data.phoneNumber);
      formData.append('rec_message', data.message);
      formData.append('rec_type', data.requestType);
      formData.append('rec_date', new Date().toISOString().split('T')[0]);

      if (data.file && data.file[0]) {
        formData.append('rec_file', data.file[0]);
      }

  
      const response = await fetch('http://127.0.0.1:8000/api/requests', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error('Submission failed:', result);

        if (result.errors) {
          setServerErrors(result.errors);
        } else {
          alert(result.message || 'Failed to submit request. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="org-contact-form col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-11 col-xxs-11">
      <div className="org-form-card">
        <div className="org-form-details">
          <h1>Request Support or Ask a Question</h1>
          <p>If you need assistance, please fill the form below.</p>
        </div>
        {submitSuccess && (
          <p className="success-message">
            Your request has been submitted successfully!
          </p>
        )}

        <div className="org-contact-form-labels">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* FIRST and LAST NAME */}
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
                    minLength: { value: 3, message: "First name must be at least 3 characters" },
                    maxLength: { value: 20, message: "First name cannot exceed 20 characters" },
                  })}
                />
                {/* <-- SHOW backend errors if any */}
                <p className="error">{errors.firstName?.message || serverErrors.rec_firstName?.[0]}</p>
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
                    minLength: { value: 3, message: "Last name must be at least 3 characters" },
                    maxLength: { value: 20, message: "Last name cannot exceed 20 characters" },
                  })}
                />
                <p className="error">{errors.lastName?.message || serverErrors.rec_lastName?.[0]}</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="org-Email">
              <label className="ogr-form-label">Email <span>*</span></label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, message: "Please enter a valid email address" },
                })}
              />
              <p className="error">{errors.email?.message || serverErrors.rec_email?.[0]}</p>
            </div>

            {/* PHONE */}
            <div className="org-Phone">
              <label className="ogr-form-label">Phone Number <span>*</span></label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: { value: /^([0]{1}[5-7]{1}[0-9]{8})$/, message: "Please enter a valid phone number" },
                })}
              />
              <p className="error">{errors.phoneNumber?.message || serverErrors.rec_phoneNumber?.[0]}</p>
            </div>

            {/* MESSAGE */}
            <div className="org-Message">
              <label className="ogr-form-label">Message <span>*</span></label>
              <input
                type="text"
                placeholder="Leave your message"
                maxLength={1000}
                {...register("message", {
                  required: "Message is required",
                  maxLength: { value: 1000, message: "Message cannot exceed 1000 characters" },
                })}
              />
              <p className="error">{errors.message?.message || serverErrors.rec_message?.[0]}</p>
            </div>

            {/* REQUEST TYPE */}
            <div className="flex-row">
              <div className="org-Request-type">
                <label className="ogr-form-label">Type of Request</label>
                <select
                  {...register("requestType", {
                    required: "Please select the type of the request!",
                  })}
                >
                  <option value="cash">Cash</option>
                  <option value="food">Food</option>
                  <option value="clothes">Clothes</option>
                  <option value="medical">Medical</option>
                  <option value="education">Education</option>
                  <option value="construction">Construction</option>
                </select>
                <p className="error">{errors.requestType?.message || serverErrors.rec_type?.[0]}</p>
              </div>

              <div className="org-document">
                <label className="ogr-form-label">Upload a Document</label>
                <input
                  type="file"
                  className="org-upload-file"
                  {...register("file")}
                />
                <p className="error">{serverErrors.rec_file_path?.[0]}</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex-row">
              <button
                type="button"
                onClick={() => { reset(); setServerErrors({}); }}
                disabled={isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default OrgContactForm;

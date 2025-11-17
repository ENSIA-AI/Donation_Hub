import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  // Form fields state
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle all input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!form.fname.trim()) newErrors.fname = "First name cannot be blank";
    if (!form.lname.trim()) newErrors.lname = "Last name cannot be blank";
    if (!form.message.trim()) newErrors.message = "Message cannot be blank";
    if (!form.subject.trim()) newErrors.subject = "Subject cannot be blank";

    // Email validation
    if (!form.email.trim()) newErrors.email = "Email cannot be blank";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
    }
  };

  // Reset handler
  const handleReset = () => {
    setForm({
      fname: "",
      lname: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <section className="contact-container">
      <div className="contact-card">
        {/* Left info section */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Whether it's feedback, a partnership
            idea, or support — reach out anytime.
          </p>

          <div className="info-item">
            <i className="fas fa-envelope"></i> contact@donifidz.org
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i> +213 555 123 456
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i> Algiers, Algeria
          </div>

          <div className="socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Right form section */}
        <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="name-field">
            {/* First Name */}
            <div className={`input-group ${errors.fname ? "error" : form.fname ? "success" : ""}`}>
              <input
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                className={form.fname ? "has-value" : ""}
              />
              <label>First Name</label>
              {errors.fname && <div className="error-message">{errors.fname}</div>}
            </div>

            {/* Last Name */}
            <div className={`input-group ${errors.lname ? "error" : form.lname ? "success" : ""}`}>
              <input
                type="text"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                className={form.lname ? "has-value" : ""}
              />
              <label>Last Name</label>
              {errors.lname && <div className="error-message">{errors.lname}</div>}
            </div>
          </div>

          {/* Email */}
          <div className={`input-group ${errors.email ? "error" : form.email ? "success" : ""}`}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={form.email ? "has-value" : ""}
            />
            <label>Email Address</label>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          {/* Subject */}
          <div className={`input-group ${errors.subject ? "error" : form.subject ? "success" : ""}`}>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={form.subject ? "has-value" : ""}
            >
              <option value="" disabled>Select Subject</option>
              <option>Feedback</option>
              <option>Technical Issue</option>
              <option>Other</option>
            </select>
            {errors.subject && <div className="error-message">{errors.subject}</div>}
          </div>

          {/* Message */}
          <div className={`input-group ${errors.message ? "error" : form.message ? "success" : ""}`}>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={form.message ? "has-value" : ""}
            ></textarea>
            <label>Message</label>
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>

          <div className="btn-group">
            <button type="reset" className="reset-btn">Reset</button>
            <button type="submit" className="send-btn">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

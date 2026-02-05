import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fname.trim()) newErrors.fname = "First name cannot be blank";
    if (!form.lname.trim()) newErrors.lname = "Last name cannot be blank";
    if (!form.email.trim()) newErrors.email = "Email cannot be blank";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.subject.trim()) newErrors.subject = "Subject cannot be blank";
    if (!form.message.trim()) newErrors.message = "Message cannot be blank";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:8000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        handleReset();
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        // Show validation errors from backend
        setErrors(data.errors || {});
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

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
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out anytime.</p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          {/* First & Last Name */}
          <div className="name-field">
            <div className={`input-group ${errors.fname ? "error" : ""}`}>
              <input name="fname" value={form.fname} onChange={handleChange} />
              <label>First Name</label>
              {errors.fname && (
                <div className="error-message">{errors.fname}</div>
              )}
            </div>
            <div className={`input-group ${errors.lname ? "error" : ""}`}>
              <input name="lname" value={form.lname} onChange={handleChange} />
              <label>Last Name</label>
              {errors.lname && (
                <div className="error-message">{errors.lname}</div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className={`input-group ${errors.email ? "error" : ""}`}>
            <input name="email" value={form.email} onChange={handleChange} />
            <label>Email</label>
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          {/* Subject */}
          <div className={`input-group ${errors.subject ? "error" : ""}`}>
            <select name="subject" value={form.subject} onChange={handleChange}>
              <option value="">Select Subject</option>
              <option>Feedback</option>
              <option>Technical Issue</option>
              <option>Other</option>
            </select>
            {errors.subject && (
              <div className="error-message">{errors.subject}</div>
            )}
          </div>

          {/* Message */}
          <div className={`input-group ${errors.message ? "error" : ""}`}>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <label>Message</label>
            {errors.message && (
              <div className="error-message">{errors.message}</div>
            )}
          </div>

          {errors.general && (
            <div className="error-message">{errors.general}</div>
          )}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <div className="btn-group">
            <button type="reset">Reset</button>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

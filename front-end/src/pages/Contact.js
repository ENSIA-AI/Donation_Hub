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

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate fields
  const validate = () => {
    const newErrors = {};
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

  // Reset form
  const handleReset = () => {
    setForm({
      fname: "",
      lname: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setSuccessMessage("");
  };

  // Submit form
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

        // Optional: trigger event so dashboard updates immediately
        window.dispatchEvent(
          new CustomEvent("newMessage", { detail: data.data }),
        );

        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrors(
          data.errors || { general: data.message || "Error sending message" },
        );
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setErrors({ general: "Network error. Check backend." });
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out anytime.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="name-field">
            <div className={`input-group ${errors.fname ? "error" : ""}`}>
              <input
                name="fname"
                value={form.fname}
                onChange={handleChange}
                placeholder=" "
              />
              <label>First Name</label>
              {errors.fname && (
                <span className="error-message">{errors.fname}</span>
              )}
            </div>

            <div className={`input-group ${errors.lname ? "error" : ""}`}>
              <input
                name="lname"
                value={form.lname}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Last Name</label>
              {errors.lname && (
                <span className="error-message">{errors.lname}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className={`input-group ${errors.email ? "error" : ""}`}>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Email</label>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Subject */}
          <div className={`input-group ${errors.subject ? "error" : ""}`}>
            <select name="subject" value={form.subject} onChange={handleChange}>
              <option value="">Select Subject</option>
              <option value="Feedback">Feedback</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Other">Other</option>
            </select>

            {errors.subject && (
              <span className="error-message">{errors.subject}</span>
            )}
          </div>

          {/* Message */}
          <div className={`input-group ${errors.message ? "error" : ""}`}>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" "
            ></textarea>
            <label>Message</label>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          {errors.general && (
            <span
              className="error-message"
              style={{ display: "block", marginBottom: "15px" }}
            >
              {errors.general}
            </span>
          )}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <div className="btn-group">
            <button type="button" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="send-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

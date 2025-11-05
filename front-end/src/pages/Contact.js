import React from "react";
import "./Contact.css";

const Contact = () => {
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
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Right contact form */}
        <form className="contact-form">
          <div className="name-field">
            <div className="input-group">
              <input type="text" id="fname" name="fname" required />
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="input-group">
              <input type="text" id="lname" name="lname" required />
              <label htmlFor="lname">Last Name</label>
            </div>
          </div>

          <div className="input-group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="input-group">
            <select id="subject" name="subject" required defaultValue="">
              <option value="" disabled>
                Select Subject
              </option>
              <option>Feedback</option>
              <option>Technical Issue</option>
              <option>Other</option>
            </select>
          </div>

          <div className="input-group">
            <textarea id="message" name="message" rows="5" required></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <div className="btn-group">
            <button type="reset" className="reset-btn">
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

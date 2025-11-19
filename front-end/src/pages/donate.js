import React, { useState } from "react";
import "../styles/donate.css";

const Donate = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    donation_type: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.first_name.trim()) newErrors.first_name = "First name is required";
    if (!form.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.donation_type) newErrors.donation_type = "Please select a donation type";
    if (!form.amount.trim()) newErrors.amount = "Amount is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Donation submitted:", form);
      alert("Thank you for your donation!");
    }
  };

  const handleReset = () => {
    setForm({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      donation_type: "",
      amount: "",
    });
    setErrors({});
  };

  return (
    <div className="donation-section">
      <div className="donation-form-wrapper flex-row">
        {/* Organization Info */}
        <div className="org-info col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xxs-12">
          <div className="org-card">
            <h1 className="org-name">Organization Name</h1>
            <p className="org-description">
              Every contribution, big or small, helps us build a stronger, more resilient
              <br />
              community. See how your generosity makes a direct impact.
            </p>

            <div className="impact-statement">
              <h2 className="impact-title">Your support strengthens our community</h2>
            </div>

            <div className="recieving-details flex-row">
              <div className="Transfer detail">
                <h3 className="info-title">Bank Transfer</h3>
                <div className="detail-item">
                  <strong>Account Name:</strong> [Organization Name]
                </div>
                <div className="detail-item">
                  <strong>CCP:</strong> 00/7 08/09 00:00-00:00:00:00:00:00
                </div>
              </div>

              <div className="Direct detail">
                <h3 className="info-title">Direct Donation</h3>
                <div className="detail-item">
                  <strong>Our Office:</strong> 1er Mai, Algiers
                </div>
                <div className="detail-item">
                  <strong>Office Hours:</strong> Sunday - Thursday, 9am - 3pm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="donation-form col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xxs-12">
          <div className="form-card">
            <form className="donation-form-content" onSubmit={handleSubmit} onReset={handleReset}>
              <div className={`form-group ${errors.first_name ? "error" : ""}`}>
                <label htmlFor="first-name" className="form-label">First Name*</label>
                <input
                  type="text"
                  id="first-name"
                  name="first_name"
                  className="form-input"
                  placeholder="Your First Name"
                  value={form.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && <div className="error-message">{errors.first_name}</div>}
              </div>

              <div className={`form-group ${errors.last_name ? "error" : ""}`}>
                <label htmlFor="last-name" className="form-label">Last Name*</label>
                <input
                  id="last-name"
                  name="last_name"
                  className="form-input"
                  type="text"
                  placeholder="Your Last Name"
                  value={form.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && <div className="error-message">{errors.last_name}</div>}
              </div>

              <div className={`form-group ${errors.phone ? "error" : ""}`}>
                <label htmlFor="phone" className="form-label">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>

              <div className={`form-group ${errors.email ? "error" : ""}`}>
                <label htmlFor="email" className="form-label">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className={`form-group ${errors.donation_type ? "error" : ""}`}>
                <label htmlFor="donation-type" className="form-label">Donation Type</label>
                <select
                  id="donation-type"
                  name="donation_type"
                  className="form-input form-select"
                  value={form.donation_type}
                  onChange={handleChange}
                >
                  <option value="">Select Donation Type</option>
                  <option value="money">Money</option>
                  <option value="food">Food</option>
                  <option value="medicins">Medicins</option>
                </select>
                {errors.donation_type && <div className="error-message">{errors.donation_type}</div>}
              </div>

              <div className={`form-group ${errors.amount ? "error" : ""}`}>
                <label htmlFor="amount" className="form-label">Donation Amount*</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  className="form-input"
                  placeholder="Enter amount"
                  value={form.amount}
                  onChange={handleChange}
                />
                {errors.amount && <div className="error-message">{errors.amount}</div>}
              </div>

              <div className="form-btns flex-row col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xxs-12">
                <button type="submit" className="donate_btns">Donate</button>
                <button type="reset" className="reset_btns">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;

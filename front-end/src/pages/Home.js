import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";



const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            Connect Support
            <br />
            Transform Lives Together
          </h1>
          <p>
            A powerful platform where organizations and donors collaborate to create real impact.
          </p>
          <div className="hero-buttons">
            <Link to="/organizations" className="btn">Explore Organizations</Link>
            <Link to="/announcements" className="btn">View Campaigns</Link>
          </div>
        </div>
      </section>

      <section className="difference">
        <h1>How we make a difference</h1>
        <p className="paragraph">
          Our platform provides the tools and transparency needed to create real impact.
        </p>

        <div className="cards">
          <div className="diff-card">
            <h3>Verified Organizations</h3>
            <p>Link with verified organizations running impact projects in your area.</p>
          </div>
          <div className="diff-card">
            <h3>Secure Payments</h3>
            <p>Secure payments and track contributions with transparent dashboards.</p>
          </div>
          <div className="diff-card">
            <h3>Transparency</h3>
            <p>See where your donations go and the impact they make.</p>
          </div>
        </div>
      </section>

      <section className="core-values">
        <h2>Our Core Values</h2>
        <p className="section-subtitle">
          Built on principles that ensure trust, accessibility, and community empowerment.
        </p>

        <div className="values">
          <div className="value">
            <h3>Transparency</h3>
            <p>
              Every donation is tracked and reported with complete visibility,
              ensuring your contributions reach those who need them most.
            </p>
          </div>

          <div className="value">
            <h3>Accessibility</h3>
            <p>
              Making charitable giving simple and accessible for everyone,
              regardless of location or background.
            </p>
          </div>

          <div className="value">
            <h3>Empowering Communities</h3>
            <p>
              Supporting local organizations and initiatives that create
              sustainable, long-term positive change.
            </p>
          </div>
        </div>
      </section>

      <section className="join">
        <h1>Ready to make a difference?</h1>
        <p>
          Join thousands of donors and organizations creating positive change in communities worldwide.
        </p>

        <div className="btns">
          <Link className="register_btn" to="/register">Register</Link>
          <Link className="contact_btn" to="/contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React from "react";
import "../styles/OrganizationProfile.css";
import OrgPostCard from "../components/OrgPostCard";
const OrgProfile = () => {
  return (
    <>
      {/* ==============================homepage header================================= */}
      <div className="header">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-2">
              <img
                src="assets/pictures/logo_nav.png"
                alt="Donify Logo"
                className="logo"
              />
            </div>
            <div className="overlay-blur" id="overlay" />
            {/* Navigation */}
            <div className="col-10">
              <div className="nav">
                <div className="hamburger" id="hamburger">
                  ☰
                </div>
                <ul className="nav-menu" id="nav-menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="ExploreOrganization.html">Organizations</a>
                  </li>
                  <li>
                    <a href="announcements.html">Announcements</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li className="btn">
                    <a href="login.html">log in</a>
                  </li>
                  <li className="btn">
                    <a href="register.html">register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================== end homepage header================================= */}
      {/* =============================Organization hero ================================ */}
      <section id="organization_hero">
        <div className="fluid_container">
          <div className="organization-hero-elements ">
            <div className="organization_hero_image">
              <img
                src="assets/Images/organization-hero-image.jpg"
                alt="organization descriptive image"
                className="full_image organization_hero_img"
              />
            </div>
            <div className="organization_profile_description flex-row">
              <div className="organization_logo_image col-xl-2-5 col-lg-3  col-md-3 col-sm-3 col-xs-3 col-xxs-5">
                <img
                  src="assets/Images/organization_logo.jpg"
                  className=" full_image organization_logo_img"
                />
              </div>
              <div className="organization_details col-xl-9 col-lg-9  col-md-9  col-sm-9 col-xs-9 col-xxs-7 flex-row ">
                <div className="organization_identity ">
                  <h1>Organization 1 name</h1>
                  <p>organization slogan or catchy phrase</p>
                </div>
                <div className="organization_badges flex-row d-none-xxs  ">
                  <div className="verified_bdg bdg_name flex-row">
                    <div className="verified_btn bdg_btn">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <div>verified</div>
                  </div>
                  <div className="type_bdg bdg_name flex-row">
                    <div className="type-btn bdg_btn">
                      <i className="fa-solid fa-list" />
                    </div>
                    <div>Type</div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="organization_xxs_badges flex-row d-none-xl-xs col-xxs-12">
              <div className="verified_xxs_bdg bdg_xxs_name col-xxs-5 flex-row">
                <div className="verified_xxs_btn bdg_btn">
                  <i className="fa-solid fa-circle-check" />
                </div>
                <div>verified</div>
              </div>
              <div className="type_xxs_bdg bdg_xxs_name col-xxs-5 flex-row">
                <div className="type_xxs-btn bdg_btn">
                  <i className="fa-solid fa-list" />
                </div>
                <div>Type</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========================end Organization hero ================================ */}
      {/* ================================Organization navbar ============================ */}
      <div className="fluid_container">
        <div className="org_navbar">
          <ul className="org_nav_elements flex-row">
            <li className="org_nav_element">
              <a href="#" className="org_nav_link">
                Posts
              </a>
            </li>
            <li className="org_nav_element">
              <a href="#About_Us" className="org_nav_link">
                About
              </a>
            </li>
            <li className="org_nav_element">
              <a href="#" className="org_nav_link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_line"></div>
      </div>
      {/* =============================end Organization navbar ============================ */}
      {/* ============================= Organization Posts ============================ */}
      <div className="org_container">
        <div className="posts  flex-row">
          <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
            <div className="post-card ">
              <div className="Post_Date">october 12 , 2025</div>
              <div className="post-image">
                <img
                  src="assets/Images/post1.png"
                  className="full_image post-image"
                />
              </div>
              <div className="post_details">
                <div className="post_description">
                  <div className="post_title">New School Supplies Drive</div>
                  <div className="post_text_content">
                    We distributed over 500 school kits to children in the rural
                    areas of Blida. Your donations made this possible .thank you
                    for keeping their dreams alive!
                  </div>
                </div>
                <div className="post_actions flex-row">
                  <div className="Donnate_action post_action">
                    <a href="donate.html" className="post_action_link">
                      Donnate
                    </a>
                  </div>
                  <div className="read_more_action ">
                    <i className="fa-solid fa-arrow-right" />
                    <a href="#" className="post_action_link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================ */}
          <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
            <div className="post-card">
              <div className="Post_Date">october 12 , 2025</div>
              <div className="post-image">
                <img
                  src="assets/Images/post2.png"
                  className="full_image post-image"
                />
              </div>
              <div className="post_details">
                <div className="post_description">
                  <div className="post_title">New School Supplies Drive</div>
                  <div className="post_text_content">
                    We distributed over 500 school kits to children in the rural
                    areas of Blida. Your donations made this possible .thank you
                    for keeping their dreams alive!
                  </div>
                </div>
                <div className="post_actions flex-row">
                  <div className="Donnate_action post_action">
                    <a href="donate.html" className="post_action_link">
                      Donnate
                    </a>
                  </div>
                  <div className="read_more_action ">
                    <i className="fa-solid fa-arrow-right" />
                    <a href="#" className="post_action_link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================ */}
          <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
            <div className="post-card">
              <div className="Post_Date">october 12 , 2025</div>
              <div className="post-image">
                <img
                  src="assets/Images/post3.png"
                  className="full_image post-image"
                />
              </div>
              <div className="post_details">
                <div className="post_description">
                  <div className="post_title">New School Supplies Drive</div>
                  <div className="post_text_content">
                    We distributed over 500 school kits to children in the rural
                    areas of Blida. Your donations made this possible .thank you
                    for keeping their dreams alive!
                  </div>
                </div>
                <div className="post_actions flex-row">
                  <div className="Donnate_action post_action">
                    <a href="donate.html" className="post_action_link">
                      Donnate
                    </a>
                  </div>
                  <div className="read_more_action ">
                    <i className="fa-solid fa-arrow-right" />
                    <a href="#" className="post_action_link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================ */}
          <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
            <div className="post-card">
              <div className="Post_Date">october 12 , 2025</div>
              <div className="post-image">
                <img
                  src="assets/Images/post4.png"
                  className="full_image post-image"
                />
              </div>
              <div className="post_details">
                <div className="post_description">
                  <div className="post_title">New School Supplies Drive</div>
                  <div className="post_text_content">
                    We distributed over 500 school kits to children in the rural
                    areas of Blida. Your donations made this possible .thank you
                    for keeping their dreams alive!
                  </div>
                </div>
                <div className="post_actions flex-row">
                  <div className="Donnate_action post_action">
                    <a href="donate.html" className="post_action_link">
                      Donnate
                    </a>
                  </div>
                  <div className="read_more_action ">
                    <i className="fa-solid fa-arrow-right" />
                    <a href="#" className="post_action_link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================ */}
          <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
            <div className="post-card">
              <div className="Post_Date">october 12 , 2025</div>
              <div className="post-image">
                <img
                  src="assets/Images/post5.png"
                  className="full_image post-image"
                />
              </div>
              <div className="post_details">
                <div className="post_description">
                  <div className="post_title">New School Supplies Drive</div>
                  <div className="post_text_content">
                    We distributed over 500 school kits to children in the rural
                    areas of Blida. Your donations made this possible .thank you
                    for keeping their dreams alive!
                  </div>
                </div>
                <div className="post_actions flex-row">
                  <div className="Donnate_action post_action">
                    <a href="donate.html" className="post_action_link">
                      Donnate
                    </a>
                  </div>
                  <div className="read_more_action ">
                    <i className="fa-solid fa-arrow-right" />
                    <a href="#" className="post_action_link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================ */}
          <div className="post col-xl-4 col-lg-4 col-md-6  col-sm-6 col-xs-12 co-xxs-12">
            <div className="post-card">
              <div className="Post_Date">october 12 , 2025</div>
              <div className="post-image">
                <img
                  src="assets/Images/post6.png"
                  className="full_image post-image"
                />
              </div>
              <div className="post_details">
                <div className="post_description">
                  <div className="post_title">New School Supplies Drive</div>
                  <div className="post_text_content">
                    We distributed over 500 school kits to children in the rural
                    areas of Blida. Your donations made this possible .thank you
                    for keeping their dreams alive!
                  </div>
                </div>
                <div className="post_actions flex-row">
                  <div className="Donnate_action post_action">
                    <a href="donate.html" className="post_action_link">
                      Donnate
                    </a>
                  </div>
                  <div className="read_more_action ">
                    <i className="fa-solid fa-arrow-right" />
                    <a href="#" className="post_action_link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="see_more_btn flex-row ">
          <div>
            {" "}
            <i className="fa-solid fa-square-plus" />
          </div>
          <div>
            <a href="#" className="see_more_link">
              See more
            </a>
          </div>
        </div>
      </div>
      {/* ============================= end Organization posts ============================ */}
      {/* ================================= About Us ================================= */}
      <section id="About_Us">
        <div className="about-container">
          <div className="org_description org_container">
            <h1>HopeBridge</h1>
            <p>
              HopeBridge Foundation is a non-profit organization established in
              2015 to support underprivileged families and promote access to
              education and healthcare in Algeria,Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quidem eaque quo blanditiis rerum
              commodendi aliquid eaque, in, dolor deserunt sit nam!
            </p>
          </div>
          {/* ================================================== */}
          <div className="mission_vision fluid_container">
            <div className="mission_vision_content  flex-row">
              <div className="mission_image col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-xxs-12">
                <img
                  src="assets/Images/mission-vision.png"
                  className="full_image mission_img"
                  alt="our mission"
                />
              </div>
              <div className="mission col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-xxs-12">
                <h2>Our Mission</h2>
                <p>
                  To bridge the gap between generosity and need through
                  transparent, community-driven initiatives Lorem ipsum dolor
                  sit distinctio provident iste orum asperiores?.
                </p>
              </div>
              <div className="vision col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-xxs-12">
                <h2>Our Vision</h2>
                <p>
                  To bridge the gap between generosity and need through
                  transparent, community-driven initiatives Lorem ipsum dolor
                  sit distinctio provident iste orum asperiores?.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================ */}
        <div className="org_values org_container">
          <div className="about-section-title">Our Values</div>
          <div className="org_values_cards flex-row">
            <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
              Solidarity
            </div>
            <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
              Transparency
            </div>
            <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
              Empowerment
            </div>
            <div className="org_value_card col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-xxs-12">
              Compassion
            </div>
          </div>
        </div>
        {/* ================================================ */}
        <div className="programs fluid_container">
          <div className="programs-title">Our Programs</div>
          <div className="programs org_container">
            <div className="programs flex-row">
              <div className="program  col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-5 col-xxs-12 flex-row">
                <div className="program-details flex-row col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xxs-8 ">
                  <div className="program-title">Education for All</div>
                  <div className="program-description">
                    We provide school kits, uniforms, and scholarships to
                    children in rural and low-income areas.
                  </div>
                </div>
                <div className="program-image col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4">
                  <img
                    src="assets/Images/program1.png"
                    className="full_image program-img"
                    alt="Education for All"
                  />
                </div>
              </div>
              <div className="program col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-5 col-xxs-12 flex-row">
                <div className="program-details col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xxs-8 flex-row">
                  <div className="program-title">Clean Water Initiative</div>
                  <div className="program-description">
                    We build and maintain solar-powered wells in remote
                    communities
                  </div>
                </div>
                <div className="program-image col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4">
                  <img
                    src="assets/Images/program2.png"
                    className="full_image program-img"
                    alt="Education for All"
                  />
                </div>
              </div>
              <div className="program col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-5 col-xxs-12 flex-row">
                <div className="program-details col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xxs-8 flex-row">
                  <div className="program-title">Food Security</div>
                  <div className="program-description">
                    Our Ramadan and winter drives deliver essential food baskets
                    and clothing to families in need
                  </div>
                </div>
                <div className="program-image col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xxs-4">
                  <img
                    src="assets/Images/program4.png"
                    className="full_image program-img"
                    alt="Education for All"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================================================================================ */}
        <div></div>
      </section>
      {/* ================================= End About Us ================================= */}
      <div className="impact-section">
        <div className="org_container">
          <div className="Impact_title about-section-title">Our Impact</div>
          <div className="impacts  flex-row">
            <div className="impact  col-xl-2 col-lg-2-5 col-md-3 col-sm-3 col-xs-3 col-xxs-7">
              <div className="impact-card ">
                <div className="impact-action">
                  <h1>1,200+</h1>
                </div>
                <div className="impact-details">
                  <p>people reached by health programs</p>
                </div>
              </div>
            </div>
            <div className="impact middle-impact-card  col-xl-2 col-lg-2-5 col-md-3 col-sm-3 col-xs-3 col-xxs-7 ">
              <div className="impact-card ">
                <div className="impact-action">
                  <h1>700+</h1>
                </div>
                <div className="impact-details">
                  <p> children supported at school</p>
                </div>
              </div>
            </div>
            <div className="impact  col-xl-2 col-lg-2-5 col-md-3 col-sm-3 col-xs-3 col-xxs-7">
              <div className="impact-card ">
                <div className="impact-action">
                  <h1>400+</h1>
                </div>
                <div className="impact-details">
                  <p>families receive monthly assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================= Contact us ================================================================= */}
      <section id="org-contact-us">
        <div className="org_container org-contact-container">
          <div className="org-contact-title ">
            <h1>Let's Make Something Great Together</h1>
          </div>
          <div className="org-contact-details flex-row">
            {/* =======================form======================= */}
            <div className="org-contact-form col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-11 col-xxs-11">
              <div className="org-form-card">
                <div className="org-form-details">
                  <h1>Request Support or Ask a Question</h1>
                  <p>
                    If you need assistance or wish to reach out to our team,
                    please fill in the form below. We'll get back to you as soon
                    as possible.
                  </p>
                </div>
                {/* ============================== */}
                <div className="org-contact-form-labels">
                  <form>
                    <div className="first_line  flex-row">
                      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xxs-12">
                        <label className="ogr-form-label ">
                          First Name <span>*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="First Name "
                          required=""
                        />
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xxs-12">
                        <label className="ogr-form-label">
                          Last Name <span>*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          placeholder="Last Name "
                          required=""
                        />
                      </div>
                    </div>
                    <div className="org-Email">
                      <label className="ogr-form-label">
                        Email <span>*</span>
                      </label>
                      <br />
                      <input type="email" placeholder="Email " required="" />
                    </div>
                    <div className="org-Phone">
                      <label className="ogr-form-label">
                        Phone Number <span>*</span>
                      </label>
                      <br />
                      <input
                        type="tel"
                        placeholder="Phone Number "
                        required=""
                      />
                    </div>
                    <div className="org-Message">
                      <label className="ogr-form-label">
                        Message <span>*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        maxLength={600}
                        placeholder="leave Your Message"
                        required=""
                      />
                    </div>
                    <div className="flex-row">
                      <div className="org-Request-type">
                        <label className="ogr-form-label">
                          Type of Request
                        </label>
                        <br />
                        <select name="Request type">
                          <option>cash</option>
                          <option>food</option>
                          <option>clothes</option>
                          <option>medical</option>
                          <option>education</option>
                          <option>construction</option>
                        </select>
                      </div>
                      <div className="org-document ">
                        <label className="ogr-form-label">
                          Upload a Document{" "}
                        </label>
                        <br />
                        <input
                          type="file"
                          className="org-upload-file"
                          placeholder="Upload a Document"
                        />
                      </div>
                    </div>
                    <div className="flex-row">
                      <button type="reset">Reset</button>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* =============== end form =============== */}
            {/* ====================== contact form ====================== */}
            <div className="org-contact-infos col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-11 col-xxs-11">
              <div className="org-contact-infos-card flex-row">
                <div className="org-contact-info  col-xs-5 col-xxs-12 ">
                  <div className="org-contact-type flex-row">
                    <i className="f a-solid fa-location-dot" />
                    <h1>Address</h1>
                  </div>
                  <p>12 Rue Emir Abdelkader,Oran, Algeria</p>
                </div>
                <div className="org-contact-info col-xs-5 col-xxs-12 ">
                  <div className=" org-contact-type flex-row">
                    <i className="fa-solid fa-phone" />
                    <h1>Phone</h1>
                  </div>
                  <p>+213 550 123 456</p>
                </div>
                <div className="org-contact-info col-xs-5 col-xxs-12 ">
                  <div className="org-contact-type flex-row">
                    <i className="fa-solid fa-envelope" />
                    <h1>Email</h1>
                  </div>
                  <a href="mailto:#" className="org-contact-link">
                    hope@bridgedz.org
                  </a>
                </div>
                <div className="org-contact-info col-xs-5 col-xxs-12 ">
                  <div className="org-contact-type flex-row">
                    <i
                      className="fa-solid fa-globe"
                      style={{ marginTop: "1.2rem" }}
                    />
                    <h1 style={{ marginTop: "1rem" }}>Media</h1>
                  </div>
                  <div>
                    <img
                      src="assets/Images/facebook.png"
                      className="social_link_icon"
                      alt="facebook-icon"
                    />
                    <a
                      href="https://web.facebook.com/"
                      className="org-contact-link"
                    >
                      Facebook
                    </a>
                  </div>
                  <br />
                  <br />
                  <div>
                    <img
                      src="assets/Images/instagram.png"
                      className="social_link_icon"
                      alt="facebook-icon"
                    />
                    <a
                      href="https://www.instagram.com/"
                      className="org-contact-link"
                    >
                      Instagram
                    </a>
                  </div>
                  <br />
                  <br />
                  <div>
                    <img
                      src="assets/Images/web.png"
                      className="social_link_icon"
                      alt="facebook-icon"
                    />
                    <a href="#" className="org-contact-link">
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================  End  Contact us ================================================================= */}
      {/* ======================================================= Footer ================================================================= */}
      <footer>
        <div className="links">
          <div className="donify">Donify_DZ</div>
          <div className="link">
            <a href="index.html">Home</a>
            <a href="ExploreOrganization.html">Organizations</a>
            <a href="#">Announcements</a>
            <a href="contact.html">Conatct</a>
          </div>
        </div>
        <div className="line" />
        <div className="media">
          <div className="rights">
            <p>Donify_dz@2025. All rights reserved</p>
          </div>
          <div className="social_media">
            <a id="facebook" href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a id="instagram" href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a id="linkedin" href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a id="email-icon" href="#">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>
      </footer>
      {/* ======================================================== End footer =============================================================== */}
    </>
  );
};
export default OrgProfile;

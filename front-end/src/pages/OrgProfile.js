import React, { useState, useRef, useEffect } from "react";
import "../styles/OrganizationProfile.css";
import OrgHero from "../components/OrgHero";
import OrgPostCard from "../components/OrgPostCard";
import OrgMission from "../components/OrgMission";
import OrgValues from "../components/OrgValues";
import OrgPrograms from "../components/OrgPrograms";
import OrgImpact from "../components/OrgImpact";
import OrgContactInfos from "../components/OrgContactInfos";
import OrgDescription from "../components/OrgDescription";

// the see more button

const OrgPosts = [
  {
    id: 1,
    OrgPostDate: "November 5, 2025",
    OrgPostImage: "assets/Images/post1.png",
    OrgPostTitle: "New School Supplies Drive",
    OrgPostDescription:
      "We distributed over 500 school kits to children in the rural areas of Blida...",
  },
  {
    id: 2,
    OrgPostDate: "October 12, 2025",
    OrgPostImage: "assets/Images/post2.png",
    OrgPostTitle: "Food Donation Event",
    OrgPostDescription:
      "Thanks to your donations, we delivered food packages to 120 families...",
  },
  {
    id: 3,
    OrgPostDate: "November 7, 2025",
    OrgPostImage: "assets/Images/post3.png",
    OrgPostTitle: "Medical Supplies Drive",
    OrgPostDescription:
      "Our volunteers distributed essential medical kits across rural clinics...",
  },
  {
    id: 4,
    OrgPostDate: "October 22, 2025",
    OrgPostImage: "assets/Images/post4.png",
    OrgPostTitle: "Winter Clothes Campaign",
    OrgPostDescription:
      "Warm clothes were delivered to families affected by the cold season...",
  },
  {
    id: 5,
    OrgPostDate: "October 1, 2025",
    OrgPostImage: "assets/Images/post5.png",
    OrgPostTitle: "School Renovation",
    OrgPostDescription:
      "With your help, we renovated classrooms in a rural school in Blida...",
  },
  {
    id: 6,
    OrgPostDate: "October 10, 2025",
    OrgPostImage: "assets/Images/post6.png",
    OrgPostTitle: "Charity Marathon",
    OrgPostDescription:
      "Join our charity marathon to support children's education...",
  },
  {
    id: 7,
    OrgPostDate: "September 15, 2025",
    OrgPostImage: "assets/Images/post7.jpg",
    OrgPostTitle: "Health Awareness Workshop",
    OrgPostDescription:
      "We organized a workshop to raise awareness about early health checkups...",
  },
  {
    id: 8,
    OrgPostDate: "August 28, 2025",
    OrgPostImage: "assets/Images/post8.jpg",
    OrgPostTitle: "Orphans Support Day",
    OrgPostDescription:
      "A beautiful day spent with orphans, providing gifts and activities...",
  },
  {
    id: 9,
    OrgPostDate: "September 30, 2025",
    OrgPostImage: "assets/Images/post9.jpg",
    OrgPostTitle: "Blood Donation Campaign",
    OrgPostDescription:
      "Thank you to all the donors who participated in our blood donation event...",
  },
];

const OrgProgramsData = [
  {
    title: "Education for All",
    description:
      "We provide school kits, uniforms, and scholarships to children in rural and low-income areas.",
    image: "assets/Images/program1.png",
  },
  {
    title: "Clean Water Initiative",
    description:
      "We build and maintain solar-powered wells in remote communities.",
    image: "assets/Images/program2.png",
  },
  {
    title: "Food Security",
    description:
      "Our Ramadan and winter drives deliver essential food baskets and clothing to families in need.",
    image: "assets/Images/program4.png",
  },
];

const OrgImpactData = [
  { value: "1,200+", description: "people reached by health programs" },
  {
    value: "700+",
    description: "children supported at school",
    extraClass: "middle-impact-card",
  },
  { value: "400+", description: "families receive monthly assistance" },
];

const contactData = [
  {
    type: "Address",
    icon: "fa-solid fa-location-dot",
    content: "12 Rue Emir Abdelkader, Oran, Algeria",
  },
  { type: "Phone", icon: "fa-solid fa-phone", content: "+213 550 123 456" },
  {
    type: "Email",
    icon: "fa-solid fa-envelope",
    content: "hope@bridgedz.org",
    isLink: true,
    href: "mailto:hope@bridgedz.org",
  },
  {
    type: "Media",
    icon: "fa-solid fa-globe",
    styleIcon: { marginTop: "1.2rem" },
    styleTitle: { marginTop: "1rem" },
    isMedia: true,
    links: [
      {
        name: "Facebook",
        icon: "assets/Images/facebook.png",
        href: "https://web.facebook.com/",
      },
      {
        name: "Instagram",
        icon: "assets/Images/instagram.png",
        href: "https://www.instagram.com/",
      },
      { name: "Website", icon: "assets/Images/web.png", href: "#" },
    ],
  },
];

const descriptionText = `HopeBridge Foundation is a non-profit organization established in 2015 to support underprivileged families and promote access to education and healthcare in Algeria, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem eaque quo blanditiis rerum commodendi aliquid eaque, in, dolor deserunt sit nam!`;

const OrgProfile = () => {
  const [activeSection, setActiveSection] = useState("Posts");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loaded, setLoaded] = useState(false);
  const navRefs = useRef({});
  useEffect(() => {
    setLoaded(true);
  }, []);
  // handle see more button
  const handleSeeMore = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  // Update underline position
  useEffect(() => {
    const current = navRefs.current[activeSection];
    if (current) {
      setUnderlineStyle({
        width: current.offsetWidth + "px",
        left: current.offsetLeft + "px",
      });
    }
  }, [activeSection]);

  return (
    <>
      {/* Hero */}
      <OrgHero
        OrgHeroImage="assets/Images/organization-hero-image.jpg"
        OrgLogoImage="assets/Images/organization_logo.jpg"
        OrgName="HopeBridge"
        OrgSlogan="Supporting Communities with Care"
        OrgType="Non-profit"
      />

      {/* Navbar */}
      <div className="fluid_container">
        <div className="org_navbar">
          <ul className="org_nav_elements flex-row">
            {["Posts", "About", "Contact"].map((section) => (
              <li className="org_nav_element" key={section}>
                <button
                  className={`org_nav_link ${
                    activeSection === section ? "active" : ""
                  }`}
                  ref={(el) => (navRefs.current[section] = el)}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          <div className="nav-underline" style={underlineStyle}></div>
        </div>
      </div>

      {/* Sections */}
      {activeSection === "Posts" && (
        <div className="org_container">
          <div className={`posts  flex-row ${loaded ? "posts-loaded" : ""} `}>
            {OrgPosts.slice(0, visiblePosts).map((post) => (
              <OrgPostCard
                key={post.id}
                OrgPostDate={post.OrgPostDate}
                OrgPostImage={post.OrgPostImage}
                OrgPostTitle={post.OrgPostTitle}
                OrgPostDescription={post.OrgPostDescription}
                style={{ animationDelay: `${post.id * 0.1}s` }}
              />
            ))}
          </div>
          {visiblePosts <= OrgPosts.length ? (
            <div className="see_more_btn flex-row ">
              <div>
                <i className="fa-solid fa-square-plus" />
              </div>

              <div>
                <a
                  href="#"
                  className="see_more_link"
                  onClick={(e) => {
                    e.preventDefault(); // this will the stop page from jumping , incase we did not use the button
                    handleSeeMore();
                  }}
                >
                  See more
                </a>
              </div>
            </div>
          ) : (
            <span className="no-more-posts">No more posts</span>
          )}
        </div>
      )}

      {activeSection === "About" && (
        <section id="About_Us">
          <div className="about-container">
            <OrgDescription name="HopeBridge" description={descriptionText} />
            <OrgMission
              OrgMissionImg="assets/Images/mission-vision.png"
              OrganizationMission="To provide lasting support to families in need through ethical giving and community-first programs. Every act of kindness helps restore hope and strengthens those facing difficult circumstances."
              OrganizationVision="To create a society where compassion guides every action and no one is left behind. We strive to inspire collective responsibility and empower people to build brighter, more equitable futures."
            />
          </div>
          <OrgValues
            OrgValue1="Solidarity"
            OrgValue2="Transparency"
            OrgValue3="Empowerment"
            OrgValue4="Compassion"
          />
          <OrgPrograms programs={OrgProgramsData} />
          <OrgImpact impacts={OrgImpactData} />
        </section>
      )}

      {activeSection === "Contact" && (
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
                      please fill in the form below. We'll get back to you as
                      soon as possible.
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
              {/* Contact Info */}
              <OrgContactInfos contactData={contactData} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OrgProfile;

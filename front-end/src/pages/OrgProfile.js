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
import OrgContactForm from "../components/OrgContactForm";
import { useParams } from "react-router-dom";
import { Organizations } from "../data/Organizations";

const OrgProfile = () => {
  const [activeSection, setActiveSection] = useState("Posts");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loaded, setLoaded] = useState(false);
  const navRefs = useRef({});
  const { id } = useParams();
  // Find the organization by ID
  const org = Organizations.find((o) => o.id === Number(id));

  // Handle invalid ID
  if (!org) {
    return <h1>Organization not found</h1>;
  }

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
        OrgHeroImage={org.heroImage}
        OrgLogoImage={org.logoImage}
        OrgName={org.name}
        OrgSlogan={org.slogan}
        OrgType={org.type}
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
          <div className={`posts  flex-row ${loaded ? "posts-loaded" : ""}`}>
            {org.posts.slice(0, visiblePosts).map((post) => (
              <OrgPostCard
                key={post.id}
                OrgPostDate={post.date}
                OrgPostImage={post.image}
                OrgPostTitle={post.title}
                OrgPostDescription={post.description}
                style={{ animationDelay: `${post.id * 0.1}s` }}
              />
            ))}
          </div>
          {visiblePosts < org.posts.length ? (
            <div className="see_more_btn flex-row">
              <div>
                <i className="fa-solid fa-square-plus" />
              </div>
              <div>
                <a
                  href="#"
                  className="see_more_link"
                  onClick={(e) => {
                    e.preventDefault();
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
            <OrgDescription name={org.name} description={org.description} />
            <OrgMission
              OrgMissionImg={org.mission.image}
              OrganizationMission={org.mission.mission}
              OrganizationVision={org.mission.vision}
            />
          </div>
          <OrgValues
            OrgValue1={org.values[0]}
            OrgValue2={org.values[1]}
            OrgValue3={org.values[2]}
            OrgValue4={org.values[3]}
          />
          <OrgPrograms programs={org.programs} />
          <OrgImpact impacts={org.impact} />
        </section>
      )}

      {activeSection === "Contact" && (
        <section id="org-contact-us">
          <div className="org_container org-contact-container">
            <div className="org-contact-title">
              <h1>Let's Make Something Great Together</h1>
            </div>
            <div className="org-contact-details flex-row">
              {/* Form */}
              <OrgContactForm />
              {/* Contact Info */}
              <OrgContactInfos contactData={org.contact} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OrgProfile;

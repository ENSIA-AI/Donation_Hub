import React, { useState, useRef, useEffect  } from "react";
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
import PostModal from "../components/PostModal";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { Link ,useNavigate } from "react-router-dom";

const OrgProfile = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Posts");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loaded, setLoaded] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navRefs = useRef({});
  const { id } = useParams();
  const handleDonate = (post) => {
    alert(`Donate for post: ${post.title}`);
  };
  // Find the organization by ID
const [org, setOrg] = useState(null);

useEffect(() => {
  api.get(`/organization/${id}`)
    .then(res => setOrg(res.data))
    .catch(err => console.log(err));
}, [id]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleDelete = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this organization?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/organization/${id}`);
    alert("Organization deleted successfully");
    navigate("/ExploreOrganizations"); // go back to list page
  } catch (error) {
    console.error(error);
    alert("Failed to delete organization");
  }
};

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

  // Handle invalid ID
  if (!org) return <h1>Loading...</h1>;
  return (
    <>
      {/* Hero */}
      <OrgHero
        // OrgHeroImage={org.heroImage}
        // OrgLogoImage={org.logoImage}
        OrgName={org.org_name}
        OrgSlogan={org.org_slogan}
        OrgType={org.category.category}
      />


  <div className="edit_delete_container">
      <Link to={`/OrgProfile/${org.id}/edit`} className="Link_style">edit profile</Link>
       {/* _ delete org  */}
  <button className="Link_style"
  onClick={handleDelete}
  style={{
    marginLeft: "15px",
    background: "red",
    color: "white",
    padding: "6px 12px",
    border: "none",
  }}
>
  Delete profile
</button>
</div>
 
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
      {/* {activeSection === "Posts" && (
        <div className="org_container">
          <div className={`posts  flex-row ${loaded ? "posts-loaded" : ""}`}>
            {org.posts.slice(0, visiblePosts).map((post) => (
              <OrgPostCard
                key={post.id}
                OrgPostDate={post.date}
                OrgPostImage={post.image}
                OrgPostTitle={post.title}
                OrgPostDescription={post.description}
                onReadMore={() => setSelectedPost(post)}
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
          <PostModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
            onDonate={handleDonate}
          />
        </div>
      )} */}

      {activeSection === "About" && (
        <section id="About_Us">
          <div className="about-container">
            <OrgDescription name={org.org_name} description={org.org_description} />
            <OrgMission
              // OrgMissionImg={org.mission.image}
              OrganizationMission={org.org_mission}
              OrganizationVision={org.org_vision}
            />
          </div>
          <OrgValues
            OrgValue1={org.value1}
            OrgValue2={org.value2}
            OrgValue3={org.value3}
            OrgValue4={org.value4}
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

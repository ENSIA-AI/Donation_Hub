import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

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
import CreatePost from "../components/CreatePost";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const OrgProfile = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Posts");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loaded, setLoaded] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const navRefs = useRef({});
  const { id } = useParams();
  const [compaigns, setCompaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [org, setOrg] = useState(null);
  const [orgLoading, setOrgLoading] = useState(true);

  const loggedInOrgId = localStorage.getItem("orgId");
  const role = localStorage.getItem("role");
  const isOwner =
    role === "organization" &&
    loggedInOrgId &&
    org &&
    Number(loggedInOrgId) === Number(org.id);

  const handleDonate = (post) => {
    alert(`Donate for post: ${post.title}`);
  };
  // Find the organization by ID

  useEffect(() => {
    if (!id) {
      setError("Organization ID not found.");
      setOrgLoading(false);
      return;
    }

    const fetchOrg = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get(`/organizations/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrg(res.data);
      } catch (err) {
        console.error(err);
        
      } finally {
        setOrgLoading(false);
      }
    };

    fetchOrg();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this organization?",
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

  // Function to remove a post after deletion
  const removePostFromState = (id) => {
    setCompaigns(compaigns.filter((c) => c.compaign_ID !== id));
  };

  // Function to update a post after editing
  const updatePostInState = (updatedPost) => {
    setCompaigns(
      compaigns.map((c) =>
        c.compaign_ID === updatedPost.compaign_ID ? updatedPost : c,
      ),
    );
  };

  //  function to fetch only approved campaigns

  const fetchApprovedCampaigns = async () => {
    try {
      const res = await api.get(`/organizations/${id}/compaigns`);
      setCompaigns(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load campaigns.");
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchOrg = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get(`/organization/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrg(res.data);
        setOrgLoading(false);
        setLoaded(true);
      } catch (err) {
        console.error(err);
        setError("Failed to load organization.");
        setOrgLoading(false);
      }
    };

    fetchOrg();
  }, [id]);

  useEffect(() => {
    fetchApprovedCampaigns();
  }, [id]);

  if (orgLoading)
    return <h1 className="handall_loading">Loading organization...</h1>;

 

  

  // Handle invalid ID
  if (!org) return <h1 className="handall_loading">invalid organization !</h1>;
  return (
    <>
      
      {/* Hero */}
      <OrgHero
        OrgHeroImage={org.heroImage}
        OrgLogoImage={org.logoImage}
        OrgName={org.org_name}
        OrgSlogan={org.org_slogan}
        OrgType={org.category.category}
      />
       {isOwner && (
        <div className="edit_delete_container">
          <div className="edit_links_s">
            <div>
              <Link to={`/dashboard/${org.id}`} className="Link_style">
                Go to Dashboard
              </Link>
            </div>
            <div>
              <Link to={`/OrgProfile/${org.id}/edit`} className="Link_style">
                Edit profile
              </Link>
            </div>
          </div>
          <div>
            <button className="Link_style_del" onClick={handleDelete}>
              Delete profile
            </button>
          </div>
        </div>
      )}
      

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
          {isOwner && (
            <CreatePost orgId={org.id} onPostCreated={fetchApprovedCampaigns} />
          )}

          <div className={`posts  flex-row ${loaded ? "posts-loaded" : ""}`}>
            {loading && <p>Loading campaigns...</p>}
            {error && <p>{error}</p>}
            {compaigns.slice(0, visiblePosts).map((c) => (
              <OrgPostCard
                key={`post-${c.compaign_ID}`}
                OrgPostId={c.compaign_ID}
                OrgPostDate={new Date(c.compaign_date).toLocaleDateString()}
                OrgPostImage={
                  c.compaign_img
                    ? `http://127.0.0.1:8000/storage/${c.compaign_img}`
                    : "https://via.placeholder.com/300"
                }
                OrgPostTitle={c.compaign_title}
                OrgPostDescription={c.compaign_content}
                onDonate={() => handleDonate(c)}
                onReadMore={() => setSelectedPost(c)}
                onDelete={(id) => removePostFromState(id)}
                onUpdate={(updatedPost) => updatePostInState(updatedPost)}
              />
            ))}
          </div>
          {visiblePosts < compaigns.length ? (
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
      )}

      {activeSection === "About" && (
        <section id="About_Us">
          <div className="about-container">
            <OrgDescription
              name={org.org_name}
              description={org.org_description}
            />
            <OrgMission
              OrgMissionImg={org.mission_img}
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
              <OrgContactForm orgId={org.id} />
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

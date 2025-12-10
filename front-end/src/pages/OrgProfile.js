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
import PostModal from "../components/PostModal";
import { useParams } from "react-router-dom";
import { Organizations } from "../data/Organizations";
import axios from "axios";

const OrgProfile = () => {
  const [activeSection, setActiveSection] = useState("Posts");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [compaigns, setCompaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navRefs = useRef({});
  const { id } = useParams();
  const handleDonate = (post) => {
    alert(`Donate for post: ${post.title}`);
  };
  // Find the organization by ID
  const org = Organizations.find((o) => o.id === Number(id));

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
  // Handle create post submissionconst
  const handleCreatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("compaign_title", postTitle);
    formData.append("compaign_content", postDescription); // match backend field name
    if (postImage) formData.append("compaign_img", postImage);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/compaigns",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
      setCompaigns((prev) => [response.data, ...prev]);
      setShowCreatePost(false);
      setPostTitle("");
      setPostDescription("");
      setPostImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // fetch campaigns from API
  useEffect(() => {
    let isMounted = true;
    axios
      .get("http://127.0.0.1:8000/api/compaigns")
      .then((res) => {
        if (isMounted) {
          setCompaigns(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error(err);
          setError("Failed to load campaigns.");
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle invalid ID
  if (!org) {
    return <h1>Organization not found</h1>;
  }

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
          <div className="add_post">
            <button
              className="add_post_btn"
              onClick={() => setShowCreatePost(true)}
            >
              <i className="fa-solid fa-plus"></i>
              create post
            </button>
          </div>

          {showCreatePost && (
            <div
              className="modal_overlay"
              onClick={() => setShowCreatePost(false)}
            >
              <div
                className="create_post_modal"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              >
                <form onSubmit={handleCreatePost}>
                  <label htmlFor="post_T">Post Title</label>
                  <br />
                  <input
                    type="text"
                    id="post_T"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                  <br />

                  <label htmlFor="post_D">Post Description</label>
                  <br />
                  <input
                    type="text"
                    maxLength="20000"
                    id="post_D"
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                    required
                  />
                  <br />

                  <label htmlFor="PostImage">Post Image</label>
                  <br />
                  <input
                    type="file"
                    id="PostImage"
                    onChange={(e) => setPostImage(e.target.files[0])}
                  />
                  <br />

                  <div className="create_post_button flex-row">
                    <button type="submit" className="create_post_btn">
                      <i className="fa-solid fa-plus"></i>
                      Create Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className={`posts flex-row ${loaded ? "posts-loaded" : ""}`}>
            {loading && <p>Loading campaigns...</p>}
            {error && <p>{error}</p>}
            {compaigns.slice(0, visiblePosts).map((c) => (
              <OrgPostCard
                key={c.compaign_ID}
                OrgPostDate={c.compaign_date}
                OrgPostImage={`http://127.0.0.1:8000/storage/${c.compaign_img}`}
                OrgPostTitle={c.compaign_title}
                OrgPostDescription={c.compaign_content}
                onDonate={() => handleDonate(c)}
                onReadMore={() => setSelectedPost(c)}
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

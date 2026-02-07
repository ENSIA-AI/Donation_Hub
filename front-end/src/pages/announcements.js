import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/announcementStyle.css";
import SearchBarPosts from "../components/SearchBarPosts";
import SeeMoreButton from "../components/SeeMoreButton";
import AnnouncemetCard from "../components/announcementCard";

const Announcements = () => {
  const navigate = useNavigate();
  const [compaigns, setCompaigns] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  const handleDonate = (campaign) => {
    if (!campaign) {
      console.error("Cannot navigate to donate page: missing campaign data");
      return;
    }

    const campaignId = campaign.compaign_ID;
    const organizationId = campaign.organization_id;

    if (!campaignId || !organizationId) {
      console.error("Cannot navigate to donate page: missing IDs", campaign);
      alert("Unable to process donation. Missing campaign or organization information.");
      return;
    }

    console.log(`Navigating to: /donate/${organizationId}/${campaignId}`);
    navigate(`/donate/${organizationId}/${campaignId}`);
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/compaigns/search")
      .then((res) => res.json())
      .then((data) => {
        console.log("Campaigns data:", data);
        setCompaigns(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching campaigns:", err);
        setLoading(false);
      });
  }, []);


  const handleSearch = ({ name, wilaya_id, category_id }) => {
    const params = new URLSearchParams();
    if (name) params.append("q", name);
    if (wilaya_id) params.append("wilaya_id", wilaya_id);
    if (category_id) params.append("category_id", category_id);

    setLoading(true);

    fetch(`http://localhost:8000/api/compaigns/search?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Search results:", data);
        setCompaigns(data);
        setVisibleCount(6); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error searching campaigns:", err);
        setLoading(false);
      });
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="header-section">
        <div className="containerAnn">
          <div className="heroo col-xl-12 col-lg-9 col-md-9 col-sm-9 col-xs-10 col-xxs-12">
            <h1 className="page-title">Active Campaigns & Announcements</h1>
            <p className="page-description">
              Discover urgent needs and ongoing campaigns from verified
              organizations. Your contribution can make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEARCH BAR ===== */}
      <SearchBarPosts onSearch={handleSearch} />

      {/* ===== ANNOUNCEMENTS ===== */}
      <div className="containerAnn">
        <div className="announcements flex-row">
          {loading && <p>Loading campaigns...</p>}

          {!loading && compaigns.length === 0 && (
            <p className="no-more-posts">No campaigns found</p>
          )}

          {!loading &&
            compaigns
              .slice(0, visibleCount)
              .map((compaign) => (
                <AnnouncemetCard
                  key={compaign.compaign_ID}
                  announcementDate={new Date(
                    compaign.compaign_date,
                  ).toDateString()}
                  announcementImage={
                    compaign.compaign_img
                      ? `http://localhost:8000/storage/${compaign.compaign_img}`
                      : "/assets/pic/default.jpg"
                  }
                  announcementTitle={compaign.compaign_title}
                  announcementDescription={compaign.compaign_content}
                  organizationId={compaign.organization_id}
                  campaignId={compaign.compaign_ID}
                  onDonate={() => handleDonate(compaign)}
                />
              ))}
        </div>

        {/* ===== SEE MORE ===== */}
        {!loading && visibleCount < compaigns.length ? (
          <SeeMoreButton onClick={loadMore} />
        ) : (
          !loading &&
          compaigns.length > 0 && <p className="no-more-posts">No more posts</p>
        )}
      </div>
    </>
  );
};

export default Announcements;
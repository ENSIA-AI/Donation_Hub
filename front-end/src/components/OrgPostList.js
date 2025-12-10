import React, { useEffect, useState } from "react";
import axios from "axios";
import OrgPostCard from "./OrgPostCard"; // your existing card
import "../styles/OrganizationProfile.css";

function OrgPostList() {
  const [compaigns, setCompaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/compaigns") // React proxy handles this
      .then((res) => {
        setCompaigns(res.data); // store API response
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load campaigns.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading campaigns...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="row">
      {compaigns.map((c) => (
        <OrgPostCard
          key={c.compaign_ID}
          OrgPostDate={c.compaign_date}
          OrgPostImage={c.compaign_img}
          OrgPostTitle={c.compaign_title}
          OrgPostDescription={c.compaign_content}
          onDonate={() => alert(`Donate to ${c.compaign_title}`)}
          onReadMore={() => alert(`Read more about ${c.compaign_title}`)}
        />
      ))}
    </div>
  );
}

export default OrgPostList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import OrgPostCard from "./OrgPostCard";

const OrgPostList = () => {
  const [compaigns, setCompaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/compaigns") // your Laravel API endpoint
      .then((res) => {
        setCompaigns(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching campaigns:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading campaigns...</p>;

  return (
    <div className="row">
      {compaigns.map((compaign) => (
        <OrgPostCard
          key={compaign.id}
          OrgPostTitle={compaign.compaign_title}
          OrgPostDescription={compaign.compaign_content}
          OrgPostDate={new Date(compaign.compaign_date).toLocaleDateString()}
          OrgPostImage={
            compaign.compaign_img
              ? `http://127.0.0.1:8000/storage/${compaign.compaign_img}`
              : "https://via.placeholder.com/300"
          }
          onReadMore={() => alert("Read more clicked!")}
        />
      ))}
    </div>
  );
};

export default OrgPostList;

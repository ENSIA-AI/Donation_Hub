import React, { useState,useEffect } from "react";
import "../styles/styleOrganizations.css";
import OrganizationCard from "../components/organizationCard";
import SearchBar from "../components/SearchBar";
import SeeMoreButton from "../components/SeeMoreButton";
import axios from"../api/axios";

const ExploreOrganizations = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  const [organizations, setOrganizations] = useState([]);
    useEffect(() => {
    axios
      .get('/organization')
      .then((response) => {
        setOrganizations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching organizations:", error);
      });
  }, []);
  return (
    <main>
      <div className="title">
        <h1>Verified organizations</h1>
        <p className="subtitle">
          Discover trusted organizations making a real difference in our
          communities
        </p>
      </div>

      {/* Search bar */}
      <SearchBar />
     
      {/* Cards rendered dynamically */}
      <div className="container">
        <div className="cards-container flex-row-org ">
          {organizations.slice(0, visibleCount).map((org, index) => (
            <OrganizationCard
              key={org.id}
              id={org.id}
              title={org.org_name}
              description={org.org_description}
              // image={org.heroImage}
            />
          ))}
        </div>
      </div>
      {visibleCount < organizations.length ? (
        <SeeMoreButton onClick={loadMore} />
      ) : (
        <span className="noMore">
          {" "}
          <p>no more organizations</p>
        </span>
      )}
    </main>
  );
};

export default ExploreOrganizations;

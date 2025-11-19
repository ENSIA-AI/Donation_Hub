import React, { useState } from "react";
import "../styles/styleOrganizations.css";
import OrganizationCard from "../components/organizationCard";
import SearchBar from "../components/SearchBar";
import SeeMoreButton from "../components/SeeMoreButton";
import { Organizations } from "../data/Organizations";

const ExploreOrganizations = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
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
          {Organizations.slice(0, visibleCount).map((org, index) => (
            <OrganizationCard
              key={org.id}
              id={org.id}
              title={org.name}
              description={org.description}
              image={org.heroImage}
            />
          ))}
        </div>
      </div>
      {visibleCount < Organizations.length ? (
        <SeeMoreButton onClick={loadMore} />
      ) : (
        <span className="noMore">
          {" "}
          <p>no more cards</p>
        </span>
      )}
    </main>
  );
};

export default ExploreOrganizations;

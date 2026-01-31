import React, { useState, useEffect } from "react";
import "../styles/styleOrganizations.css";
import OrganizationCard from "../components/organizationCard";
import SearchBar from "../components/SearchBar";
import SeeMoreButton from "../components/SeeMoreButton";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const ExploreOrganizations = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [organizations, setOrganizations] = useState([]);

  const handleSearch = ({ name, wilaya_id, category_id }) => {
    const params = new URLSearchParams();
    if (name) params.append("q", name);
    if (wilaya_id) params.append("wilaya_id", wilaya_id);
    if (category_id) params.append("category_id", category_id);

    fetch(`http://localhost:8000/api/organizations/search?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setOrganizations(data)) // update state
      .catch(console.error);
  };
  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  useEffect(() => {
  axios
    .get("/organization?status=approved")
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
      <div className="add_org_container">
        <Link to={"/AddDataOrg"} className="Add_org">
          Add data from here
        </Link>
      </div>

      {/* Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Cards rendered dynamically */}
      <div className="container">
        <div className="cards-container flex-row-org ">
          {organizations.slice(0, visibleCount).map((org, index) => (
            <OrganizationCard
              image={org.heroImage}
              key={org.id}
              id={org.id}
              title={org.org_name}
              description={org.org_description}
               
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

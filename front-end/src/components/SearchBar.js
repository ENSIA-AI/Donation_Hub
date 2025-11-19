import React, { useState } from "react";
import '../styles/StyleOrganizations.css'
const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = (e) => {
    e.preventDefault();
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="search-bar-container flex-center">
      <div className="search-bar col-lg-10 col-xl-10 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
        <div className="search-by-name col-lg-10 col-xl-10 col-md-10 col-sm-10 col-xs-10">
          <img src="/assets/icons/search.svg" alt="search" />
          <form action="">
            <input type="search" id="searchInput" placeholder="search" />
          </form>
        </div>

        <form action="">
          <div className="search-filter col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-2 col-xxs-2">
            <div className="catego">
              <button className="filter-btn" onClick={toggleFilters}>
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                <span className="filter-title">filter</span>
              </button>

              <div className="filter-options">
                <div className={`options ${showFilters ? "options-active" : "options-not-active"}`}>
                  <p>categories</p>
                  {["health", "education", "children", "food"].map((cat) => (
                    <div className="option" key={cat}>
                      <input type="checkbox" id={cat} defaultValue={cat} />
                      <label htmlFor={cat}>{cat}</label>
                    </div>
                  ))}

                  <p>regions</p>
                  {["algeries", "bouira", "Oran", "jijel"].map((region) => (
                    <div className="option" key={region}>
                      <input type="checkbox" id={region} defaultValue={region} />
                      <label htmlFor={region}>{region}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
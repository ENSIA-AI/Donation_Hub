import React from "react";
import "../styles/announcementStyle.css";

const Search = () => {
  return (
    <section className="search-and-filter">
      <div className="container flex-row col-lg-5  col-md-4  col-sm-4 col-xs-4 col-xxs-3">
        <div className="search flex-row">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>

        <div className="filters flex-row">
          <div className="region-filter filter">
            <i className="fa-solid fa-location-dot"></i>
            <select name="region" className="select-input">
              <option value="">Region</option>
              <option value="algiers">Algiers</option>
              <option value="moustghanem">Moustghanem</option>
              <option value="jijel">Jijel</option>
              <option value="bouira">Bouira</option>
            </select>
          </div>
          <div className="category-filter filter">
            <i className="fa-solid fa-layer-group"></i>
            <select name="category" className="select-input">
              <option value="">Category</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="poverty">Povety</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

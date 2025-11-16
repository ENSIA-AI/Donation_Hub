import React from "react";
import '../styles/styleOrganizations.css'
const ExploreOrganizations = ()=>{
 return (
 <main>
    {}
  <div className="title ">
    <h1>Verified organizations</h1>
    <p className="subtitle">
      discover trusted organizations making a real difference in our communities
    </p>
  </div>
  <div className="search-bar-container  flex-row ">
    <div className="search-bar  col-lg-10 col-xl-10 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
      <div className="search-by-name  col-lg-10 col-xl-10 col-md-10 col-sm-10 col-xs-10 col-xs-10">
        <img src="assets/icons/search.svg" alt="search" />
        <form action="">
          <input type="search" id="serchInput" placeholder="search" />
        </form>
      </div>
      <form action="">
        <div className="search-filter  col-lg-2 col-xl-2 col-md-2 col-sm-2 col-xs-2 col-xxs-2">
          <div className="catego ">
            <button className="filter-btn">
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
              <span className="filter-title">filter</span>
            </button>
            <div className="filter-options">
              <div className="options options-not-active options-active">
                <p>categories</p>
                <div className="option">
                  <input type="checkbox" id="health" defaultValue="health" />
                  <label htmlFor="health">health</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    id="education"
                    defaultValue="education"
                  />
                  <label htmlFor="education">education</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    id="children"
                    defaultValue="children"
                  />
                  <label htmlFor="children">children</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="food" defaultValue="food" />
                  <label htmlFor="food">food</label>
                </div>
                <p>regions</p>
                <div className="option">
                  <input
                    type="checkbox"
                    id="algeries"
                    defaultValue="algeries"
                  />
                  <label htmlFor="algeries">algeries</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="bouira" defaultValue="bouira" />
                  <label htmlFor="bouira">bouira</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="Oran" defaultValue="Oran" />
                  <label htmlFor="Oran">Oran</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="jijel" defaultValue="jijel" />
                  <label htmlFor="jijel">jijel</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
 </main> 
);
};

export default ExploreOrganizations;
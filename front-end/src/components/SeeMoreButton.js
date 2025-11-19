import React from "react";
import "../styles/StyleOrganizations.css";

const SeeMoreButton = ({ onClick }) => {
  return (
    <div className="containerButton">
      <div className="button-container" onClick={onClick}>
        <div className="icon-container">
          <img src="assets/icons/seeMore.svg" alt="" />
        </div>
        <div>
          <button>see more </button>
        </div>
      </div>
    </div>
  );
};
export default SeeMoreButton;

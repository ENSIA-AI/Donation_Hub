import React from "react";
import '../styles/styleOrganizations.css';

const SeeMoreButton  =()=>{
    return(
       <div className="containerButton">
  <div className="button-container">
    <div className="icon-container">
      <img src="assets/icons/seeMore.svg" alt="" />
    </div>
    <div>
      <button>see more </button>
    </div>
  </div>
</div>
    );
} ;
export default SeeMoreButton;
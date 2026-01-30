import React from "react";
import "../styles/AdminDashBoardORG.css"
import DashDonaCard from "./DashDonaCard.js";
const DashDonationTable = ()=>{
    return(
      <div className="dashOrgTable">
        <div className="orgDashTitle">
           <h1>Donations</h1>
        </div>
        <div className="rej_title">
                    <div className="rej_title_cont">
                        <p>sender name</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>receiver name</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>donation</p>
                    </div>
                    <div className="rej_title_cont">
                        <p>date </p>
                    </div>
                    <div className="rej_title_cont">
                        <p>compain name</p>
                    </div>
                    
        </div>
        <div className="OrgCards">
          <DashDonaCard
           donner = "sender name"
           receiver = "organization name"
           type = "money"
           amount = "5000"
           date = "25/11/2025"
           post="post title"
          />
        </div>
    </div>
    );
};
export default DashDonationTable;
import React from "react";
import DashOrgCard from "./DashOrgCard";
import "../styles/AdminDashBoardORG.css"
const DashOrgTable = ()=>{
  return(
    <div className="dashOrgTable">
        <div className="orgDashTitle">
           <h1>Organizations</h1>
        </div>
        <div className="OrgCards">
          <DashOrgCard 
          title="title"
          link="#" 
          wilaya="wilaya"
          category="category"
          />
        </div>
    </div>
  )
};
export default DashOrgTable;
import React, { useState ,useEffect } from "react";
import DashOrgCard from "./DashOrgCard";
import axios from "../api/axios";
import "../styles/AdminDashBoardORG.css"
const DashOrgTable = ()=>{
  const [organizations , setOrganizations] = useState([]);
   useEffect(() => {
      axios
        .get("/organization")
        .then((response) => {
          setOrganizations(response.data);
        })
        .catch((error) => {
          console.error("Error fetching organizations:", error);
        });
    }, []);
  return(
    <div className="dashOrgTable">
        <div className="orgDashTitle">
           <h1>Organizations</h1>
        </div>
        <div className="OrgCards">
          {organizations.slice(0,10).map((org)=>(
          <DashOrgCard 
          title={org.org_name}
          link= {`/OrgProfile/${org.id}`}
          wilaya={org.wilaya?.wilaya_name}
          category={org.category?.category}
          />
         )) }
        </div>
    </div>
  )
};
export default DashOrgTable;
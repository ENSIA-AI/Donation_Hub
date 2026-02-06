import React, { useState ,useEffect } from "react";
import DashOrgCard from "./DashOrgCard";
import axios from "../api/axios";
import "../styles/AdminDashBoardORG.css"
const DashOrgTable = ()=>{
  const [organizations , setOrganizations] = useState([]);
    const [visible, setVisible] = useState(4);
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
      const handleSeeMore = () => {
    setVisible((prev) => prev + 10);
  };

  return(
    <div className="dashOrgTable">
        <div className="orgDashTitle">
           <h1>Organizations</h1>
        </div>
        <div className="OrgCards">
          {organizations.slice(0, visible).map((org)=>(
          <DashOrgCard 
          title={org.org_name}
          link= {`/OrgProfile/${org.id}`}
          wilaya={org.wilaya?.wilaya_name}
          category={org.category?.category}
          />
         )) }
   </div>
     {visible < organizations.length && (
  <div className="seeMoreContainer">
    <div>
    <button onClick={handleSeeMore} className="seeMoreBtn">
      <img src="/assets/icons/seeMore.svg"/>
    </button>
    </div>
  </div>
)
}
    </div>
  )
};
export default DashOrgTable;
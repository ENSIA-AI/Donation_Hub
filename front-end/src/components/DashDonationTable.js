import React , { useEffect, useState } from "react";
import "../styles/AdminDashBoardORG.css"
import DashDonaCard from "./DashDonaCard.js";
import axios from "../api/axios";

const DashDonationTable = ()=>{
  const [donations, setDonations] = useState([]);
  const [visible, setVisible] = useState(5);
  useEffect(() => {
    axios.get("/admin/donations")
      .then((response) => {
         setDonations(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching donations:", error);
      });
  }, []);
  const handleSeeMore = () => {
    setVisible((prev) => prev + 10);
  };
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
        {donations.slice(0, visible).map((donation) => (
          <DashDonaCard
           key={donation.id}
            donner={`${donation.donor_firstName} ${donation.donor_lastName}`}
            receiver={donation.organization?.org_name}
            type={donation.donation_type}
            amount={donation.donation_amount}
            date={donation.donation_date}
            post={donation.post?.compaign_title}
          />
           ))}
        </div>
         {visible < donations.length && (
  <div className="seeMoreContainer">
    <div>
    <button onClick={handleSeeMore} className="seeMoreBtn">
      <img src="/assets/icons/seeMore.svg"/>
    </button>
    </div>
  </div>
)}
    </div>
    );
};
export default DashDonationTable;
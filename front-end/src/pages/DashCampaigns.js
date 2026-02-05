import { useEffect, useState } from "react";
import "../styles/dashCampaigns.css";
import "../styles/AdminDashStat.css";

import SearchBar from "../components/SearchBar";
import CampaignRow from "../components/CampaignRow";
import CampaignsTable from "../components/CampaignsTable";
import Sidebar from "../components/Sidebar";

const DashCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  // Fetch campaigns from Laravel backend
  const fetchCampaigns = () => {
    fetch("http://localhost:8000/api/compaigns/accepted")
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <section id="dash_section">
      <div className="fluid_container flex-row">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard content */}
        <div className="dash_stat_content dash_stat_container">
          <div className="full-page-container">

            

            <div className="campaigns-container">
              <h1>Campaigns</h1>

              <CampaignsTable />

              {campaigns.length === 0 && <p>No campaigns yet.</p>}

              {campaigns.map((campaign) => (
              <CampaignRow
               key={campaign.compaign_ID}
               title={campaign.compaign_title}
               date={new Date(campaign.compaign_date).toLocaleDateString()}
               organization={campaign.organization?.org_name}
               wilaya={campaign.organization?.wilaya?.name}
              />
           ))}


              <div className="see-more-container">
                <div className="see-more-button">
                  <i className="fas fa-plus"></i>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashCampaigns;

import { useEffect, useState } from "react";
import "../styles/dashCampaigns.css";
import "../styles/AdminDashStat.css";
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

  const handleRejectCampaign = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/compaigns/${id}/reject`, {
      method: 'PATCH', // or PATCH depending on your route
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message); // optional
      // Remove the rejected campaign from the state
      setCampaigns(campaigns.filter(c => c.compaign_ID !== id));
    } else {
      alert(data.message || 'Error rejecting campaign');
    }
  } catch (err) {
    console.error(err);
    alert('Network error while rejecting campaign');
  }
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
                     compaignId={campaign.compaign_ID}
                     title={campaign.compaign_title}
                     date={new Date(campaign.compaign_date).toLocaleDateString()}
                     organization={campaign.organization?.org_name}
                     wilaya={campaign.organization?.wilaya?.wilaya_name}
                     category={campaign.organization?.category?.category}
                     onReject={handleRejectCampaign} // <--- pass handler
       />
        ))}    

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashCampaigns;

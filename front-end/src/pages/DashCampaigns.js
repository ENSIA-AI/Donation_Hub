import "../styles/dashCampaigns.css";
import SearchBar from "../components/SearchBar";
import CampaignRow from "../components/CampaignRow";
import CampaignsTable from "../components/CampaignsTable";

const DashCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Help Kids",
      date: "14/01/2024",
      organization: "Hope Bridge",
      wilaya: "Algiers",
    },
    {
      id: 2,
      title: "Food for All",
      date: "20/02/2024",
      organization: "Care Hands",
      wilaya: "Oran",
    },
  ];

  return (
    <div className="full-page-container">
      <SearchBar />

      <div className="campaigns-container">
        <h1>Campaigns</h1>

        <CampaignsTable />

        {campaigns.map((campaign) => (
          <CampaignRow
            key={campaign.id}
            title={campaign.title}
            date={campaign.date}
            organization={campaign.organization}
            wilaya={campaign.wilaya}
          />
        ))}

        <div className="see-more-container">
          <div className="see-more-button">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCampaigns;

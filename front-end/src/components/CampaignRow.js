
const CampaignRow = ({ title, date, organization, wilaya, category, compaignId, onReject }) => {
  
  const handleReject = () => {
    if (window.confirm("Are you sure you want to reject this campaign?")) {
      onReject(compaignId);
    }
  };

  return (
    <div className="campaign-card">
      <div className="line"></div>
      <div className="cell">{title}</div>
      <div className="cell">{date}</div>
      <div className="cell">{organization}</div>
      <div className="cell">{wilaya}</div>
      <div className="cell">{category}</div>
      
      <div className="cell delete" onClick={handleReject} style={{ cursor: 'pointer' }}>
        Delete
      </div>
    </div>
  );
};


export default CampaignRow;

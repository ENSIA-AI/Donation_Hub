const CampaignRow = ({ title, date, organization, wilaya }) => {
  return (
    <div className="campaign-card">
      <div className="line"></div>
      <div className="cell">{title}</div>
      <div className="cell">{date}</div>
      <div className="cell">{organization}</div>
      <div className="cell">{wilaya}</div>
      <div className="cell">Image Link</div>
      <div className="cell delete">Delete</div>
    </div>
  );
};

export default CampaignRow;

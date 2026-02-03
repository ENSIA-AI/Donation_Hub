import React, { useEffect, useState } from "react";
import axios from "axios";
import OrgRequest from "./OrgRequest";

const PendingOrganizations = () => {
  const [orgs, setOrgs] = useState([]);

  const fetchPending = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/organizations/pending");
      console.log("Pending Orgs:", res.data); // Check console
      setOrgs(res.data);
    } catch (error) {
      console.error("Error fetching pending orgs:", error);
    }
  };

  const approveOrg = async (id) => {
    await axios.patch(`http://127.0.0.1:8000/api/organizations/${id}/approve`);
    fetchPending();
  };

  const rejectOrg = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/organizations/${id}`);
    fetchPending();
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div>
      {orgs.length === 0 && <p>No pending organizations</p>}

      {orgs.map((org) => (
        <OrgRequest
          key={org.id}
          name={org.org_name}
          status={org.status}
          date={org.created_at}
          proof={org.org_proof ? `http://127.0.0.1:8000/storage/${org.org_proof}` : null}
          onApprove={() => approveOrg(org.id)}
          onReject={() => rejectOrg(org.id)}
        />
      ))}
    </div>
  );
};

export default PendingOrganizations;

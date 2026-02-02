import React, { useEffect, useState } from "react";
import axios from "axios";
import OrgRequest from "./OrgRequest";

const PendingOrganizations = () => {
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    fetchPending();
  }, []);

  const fetchPending = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/organizations/pending"
    );
    setOrgs(res.data);
  };

  const approveOrg = async (id) => {
    await axios.put(
      `http://127.0.0.1:8000/api/organizations/${id}/approve`
    );
    fetchPending(); // refresh list
  };

  const rejectOrg = async (id) => {
    await axios.put(
      `http://127.0.0.1:8000/api/organizations/${id}/reject`
    );
    fetchPending();
  };

  return (
    <div>
      {orgs.map((org) => (
        <OrgRequest
          key={org.id}
          name={org.org_name}
          status={org.status}
          date={org.created_at}
          proof={
            org.org_proof
              ? `http://127.0.0.1:8000/storage/${org.org_proof}`
              : null
          }
          onApprove={() => approveOrg(org.id)}
          onReject={() => rejectOrg(org.id)}
        />
      ))}
    </div>
  );
};

export default PendingOrganizations;

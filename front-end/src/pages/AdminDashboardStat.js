import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashStat.css";
import "../styles/styleOrganizations.css";
import Sidebar from "../components/Sidebar";

import CampaignsByCategory from "../components/AdminCharts/CampaignsByCategory";
import OrganizationsByCategory from "../components/AdminCharts/organizationByCategory";
import OrgRequest from "../components/OrgRequest";
import CampaignRequest from "../components/CampaignRequest";
import StatCard from "../components/StatCard";
import DonationsByWilaya from "../components/AdminCharts/DonationsByWilaya";
import DonationsByType from "../components/AdminCharts/DonationsByType";
import TopOrgsLeaderboard from "../components/AdminCharts/TopOrgsLeaderboard";
import DonationsOverTime from "../components/AdminCharts/DonationsOverTime";
const AdminDashboardStat = () => {
  const [organizations, setOrganizations] = useState([]);
  const [acceptedCampaigns, setAcceptedCampaigns] = useState([]);
  const [TotalOrgs, setTotalOrgs] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);

  const [pendingCampaigns, setPendingCampaigns] = useState([]);
  const [loadingCampaigns, setLoadingCampaigns] = useState(true);
  const totalCampaigns = acceptedCampaigns.length;
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const fetchPendingOrganizations = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/organizations",
      );

      const pending = response.data.filter((org) => org.status === "pending");

      setOrganizations(pending);
    } catch (error) {
      console.error("Error fetching organizations", error);
    }
  };
  useEffect(() => {
    fetchPendingOrganizations();
  }, []);

  const approveOrganization = async (id) => {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/organizations/${id}/approve`,
      );

      alert("Organization approved");
      fetchPendingOrganizations();
    } catch (error) {
      console.error("Approve failed", error);
      alert("Error approving organization");
    }
  };

  const rejectOrganization = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/organizations/${id}`);

      alert("Organization rejected");
      fetchPendingOrganizations();
    } catch (error) {
      console.error("Reject failed", error);
      alert("Error rejecting organization");
    }
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/dashboard/campaigns-by-category")
  //     .then((res) => {
  //       console.log("API data:", res.data); // Check in browser console
  //       setData(res.data);
  //     })
  //     .catch((err) => console.error("API error:", err));
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/organization-count")
      .then((res) => setTotalOrgs(res.data.TotalOrgs))
      .catch((err) => console.error(err));
  }, []);
  // =============================== fetching pending compaigns  =============================
  const fetchAcceptedCampaigns = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/compaigns?status=accepted",
      );
      setAcceptedCampaigns(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchAcceptedCampaigns();
  }, []);

  const fetchPendingCampaigns = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/compaigns/pending",
      );

      setPendingCampaigns(response.data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setLoadingCampaigns(false);
    }
  };

  useEffect(() => {
    fetchPendingCampaigns();

    const interval = setInterval(() => {
      fetchPendingCampaigns();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/total-money-donations")
      .then((res) => {
        setTotalDonations(res.data.total); // assume backend returns { total: 1245000 }
      })
      .catch((err) => console.error("Error fetching total donations:", err));
  }, []);

  const approveCampaign = async (id) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/compaigns/${id}`, {
        status: "accepted",
      });
      fetchPendingCampaigns();
      fetchAcceptedCampaigns();
    } catch (err) {
      console.error(err);
    }
  };

  const rejectCampaign = async (id) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/compaigns/${id}`, {
        status: "rejected",
      });
      fetchPendingCampaigns();
    } catch (err) {
      console.error(err);
    }
  };

  // ===============================end fetching pending compaigns =============================

  return (
    <section id="dash_section">
      <div className="fluid_container flex-row">
        {/* ===============================start sidebar ============================= */}
        <Sidebar />
        {/* ===============================end sidebar ============================= */}

        {/* ===============================dash content  ============================= */}
        <div className="dash_stat_content dash_stat_container">
          <div className="dash_date">
            <h6>{formattedDate}</h6>
          </div>

          <div className="content_main_part flex-row">
            <div className="content_left_part">
              {/* ===== statistics cards ===== */}
              <div className="stat_dash_cards flex-row">
                <StatCard
                  title="Total Donations"
                  value={`${totalDonations.toLocaleString()} DZD`}
                  iconClass="fa-hand-holding-dollar"
                  colorClass="green_card"
                />
                <StatCard
                  title="Total Compaigns"
                  value={totalCampaigns}
                  iconClass="fa-bullhorn"
                />
                <StatCard
                  title="Organizations"
                  value={TotalOrgs}
                  iconClass="fa-building-ngo"
                />
                <StatCard title="Messages" value="12" iconClass="fa-bell" />
              </div>

              {/* ===== charts left part ===== */}
              <div className="content_left_part_charts flex-row">
                <div
                  className="stat_chart_image_left"
                  style={{ height: 350, minHeight: 200, width: "100%" }}
                >
                  <CampaignsByCategory />
                </div>

                <div
                  className="stat_chart_image_left"
                  style={{ height: 350, minHeight: 200, width: "100%" }}
                >
                  <OrganizationsByCategory />
                </div>
              </div>

              {/* ===== pending requests ===== */}
              <div className="content_left_part_requests flex-row">
                {/* Organization Requests */}
                <div className="content_left_part_org_requests">
                  <div className="requests_title">
                    <h3>Pending Organizations</h3>
                  </div>

                  {organizations.length === 0 && <p>No pending organizations</p>}

{organizations.map((org) => (
  <OrgRequest
    key={org.id}
    name={org.org_name}
    date={org.created_at}
    status={org.status}
    proof={
      org.org_proof
        ? `http://127.0.0.1:8000/storage/${org.org_proof}`
        : null
    }
    onApprove={() => approveOrganization(org.id)}
    onReject={() => rejectOrganization(org.id)}
  />
))}
                </div>

                {/* Pending Campaigns */}
                <div className="content_left_part_post_requests">
                  <div className="requests_title">
                    <h3>Pending Compaigns</h3>
                  </div>

                  {loadingCampaigns && <p>Loading campaigns...</p>}

                  {!loadingCampaigns && pendingCampaigns.length === 0 && (
                    <p>No pending campaigns.</p>
                  )}

                  {!loadingCampaigns &&
                    pendingCampaigns.map((camp) => (
                      <CampaignRequest
                        key={camp.compaign_ID}
                        title={camp.compaign_title}
                        organization={camp.organization.org_name}
                        date={camp.compaign_date || camp.created_at}
                        status={camp.status}
                        // image={camp.compaign_img}
                        onApprove={() => approveCampaign(camp.compaign_ID)}
                        onReject={() => rejectCampaign(camp.compaign_ID)}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* ===== right charts ===== */}
            <div className="content_right_part flex-column">
              <div
                className="stat_chart_img"
                style={{ height: 250, minHeight: 200, width: "100%" }}
              >
                <DonationsByWilaya />
              </div>

              <div
                className="stat_chart_img"
                style={{ height: 310, minHeight: 200, width: "100%" }}
              >
                <DonationsByType />
              </div>
              <div
                className="stat_chart_img"
                style={{ height: 250, minHeight: 200, width: "100%" }}
              >
                <TopOrgsLeaderboard />
              </div>

              <div
                className="stat_chart_img"
                style={{ height: 250, minHeight: 200, width: "100%" }}
              >
                <DonationsOverTime />
              </div>
            </div>
          </div>
        </div>
        {/* ===============================end dash content  ============================= */}
      </div>
    </section>
  );
};

export default AdminDashboardStat;

import React from "react";
import "../styles/AdminDashStat.css";

import Sidebar from "../components/Sidebar";
import OrgRequest from "../components/OrgRequest";
import CampaignRequest from "../components/CampaignRequest";
import StatCard from "../components/StatCard";

const AdminDashboardStat = () => {
  return (
    <section id="dash_section">
      <div className="fluid_container flex-row">
        {/* ===============================start sidebar ============================= */}
        <Sidebar />
        {/* ===============================end sidebar ============================= */}

        {/* ===============================dash content  ============================= */}
        <div className="dash_stat_content dash_stat_container">
          <div className="dash_date">
            <h6>December 7, 2025</h6>
          </div>

          <div className="content_main_part flex-row">
            <div className="content_left_part">
              {/* ===== statistics cards ===== */}
              <div className="stat_dash_cards flex-row">
                <StatCard
                  title="Total Donations"
                  value="1,245,000 DZD"
                  iconClass="fa-hand-holding-dollar"
                  colorClass="green_card"
                />
                <StatCard
                  title="Total Compaigns"
                  value="120"
                  iconClass="fa-bullhorn"
                />
                <StatCard
                  title="Organizations"
                  value="45"
                  iconClass="fa-building-ngo"
                />
                <StatCard title="Requests" value="12" iconClass="fa-bell" />
              </div>

              {/* ===== charts left part ===== */}
              <div className="content_left_part_charts flex-row">
                <div className="stat_chart_image_left">
                  <img
                    src="assets/Images/stat4.png"
                    alt="Donation over time"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                <div className="stat_chart_image_left">
                  <img
                    src="assets/Images/stat2.png"
                    alt="Donation sources"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>

              {/* ===== pending requests ===== */}
              <div className="content_left_part_requests flex-row">
                {/* Organization Requests */}
                <div className="content_left_part_org_requests">
                  <div className="requests_title">
                    <h3>Pending Organizations</h3>
                  </div>
                  {[
                    {
                      initials: "TR",
                      name: "Organization Name",
                      status: "waiting",
                      proofLink: "#",
                      date: "12 December, 2025",
                    },
                    {
                      initials: "BK",
                      name: "Organization Name",
                      status: "waiting",
                      proofLink: "#",
                      date: "12 December, 2025",
                    },
                    {
                      initials: "LM",
                      name: "Organization Name",
                      status: "accepted",
                      proofLink: "#",
                      date: "12 December, 2025",
                    },
                    {
                      initials: "TR",
                      name: "Organization Name",
                      status: "waiting",
                      proofLink: "#",
                      date: "12 December, 2025",
                    },
                    {
                      initials: "BK",
                      name: "Organization Name",
                      status: "waiting",
                      proofLink: "#",
                      date: "12 December, 2025",
                    },
                    {
                      initials: "LM",
                      name: "Organization Name",
                      status: "accepted",
                      proofLink: "#",
                      date: "12 December, 2025",
                    },
                    {
                      initials: "LM",
                      name: "Organization Name",
                      status: "accepted",
                      proofLink: "#",
                      date: "12 December, 2025",
                    },
                  ].map((org, i) => (
                    <OrgRequest key={i} {...org} />
                  ))}
                </div>

                {/* Campaign Requests */}
                <div className="content_left_part_post_requests">
                  <div className="requests_title">
                    <h3>Pending Compaigns</h3>
                  </div>
                  {[
                    {
                      title: "Compaign Title",
                      organization: "Organization Name",
                      status: "waiting",
                      date: "12 December, 2025",
                    },
                    {
                      title: "Compaign Title",
                      organization: "Organization Name",
                      status: "accepted",
                      date: "12 December, 2025",
                    },
                    {
                      title: "Compaign Title",
                      organization: "Organization Name",
                      status: "waiting",
                      date: "12 December, 2025",
                    },
                    {
                      title: "Compaign Title",
                      organization: "Organization Name",
                      status: "accepted",
                      date: "12 December, 2025",
                    },
                    {
                      title: "Compaign Title",
                      organization: "Organization Name",
                      status: "waiting",
                      date: "12 December, 2025",
                    },
                    {
                      title: "Compaign Title",
                      organization: "Organization Name",
                      status: "accepted",
                      date: "12 December, 2025",
                    },
                    {
                      title: "Compaign Title",
                      organization: "Organization Name",
                      status: "accepted",
                      date: "12 December, 2025",
                    },
                  ].map((camp, i) => (
                    <CampaignRequest key={i} {...camp} />
                  ))}
                </div>
              </div>
            </div>

            {/* ===== right charts ===== */}
            <div className="content_right_part flex-column">
              <img
                src="assets/Images/stat3.png"
                className=" stat_chart_img"
                alt="Donation by Region"
              />
              <img
                src="assets/Images/stat1.png"
                className=" stat_chart_img"
                alt="Donation sources"
              />
              <img
                src="assets/Images/stat2.png"
                className=" stat_chart_img"
                alt="Donation by campaigns and Amount"
              />
              <img
                src="assets/Images/stat3.png"
                className=" stat_chart_img"
                alt="Donation by Region"
              />
            </div>
          </div>
        </div>
        {/* ===============================end dash content  ============================= */}
      </div>
    </section>
  );
};

export default AdminDashboardStat;

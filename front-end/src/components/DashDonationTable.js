import React, { useEffect, useState } from "react";
import "../styles/AdminDashBoardORG.css";
import DashDonaCard from "./DashDonaCard.js";
import axios from "../api/axios";

const DashDonationTable = () => {
  const [donations, setDonations] = useState([]);
  const [visible, setVisible] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = () => {
    setLoading(true);
    setError("");

    axios
      .get("/admin/donations")
      .then((response) => {
        console.log("Donations loaded:", response.data);

        // Handle both response formats
        const donationsData = response.data.data || response.data;
        const donationsArray = Array.isArray(donationsData)
          ? donationsData
          : [];

        setDonations(donationsArray);
      })
      .catch((error) => {
        console.error("Error fetching donations:", error);

        // Log detailed error info for debugging
        if (error.response) {
          console.error("Response status:", error.response.status);
          console.error("Response data:", error.response.data);

          // Set user-friendly error messages
          if (error.response.status === 404) {
            setError("Donations endpoint not found. Check your routes.");
          } else if (error.response.status === 401) {
            setError("Not authenticated. Please log in.");
          } else if (error.response.status === 403) {
            setError("You don't have permission to view donations.");
          } else {
            setError(
              `Error ${error.response.status}: ${error.response.data.message || error.message}`,
            );
          }
        } else if (error.request) {
          console.error("No response received:", error.request);
          setError("No response from server. Check if Laravel is running.");
        } else {
          setError(`Error: ${error.message}`);
        }

        setDonations([]);
      })
      .finally(() => setLoading(false));
  };

  const handleSeeMore = () => {
    setVisible((prev) => prev + 10);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="dashOrgTable">
        <div className="orgDashTitle">
          <h1>Donations</h1>
        </div>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p>Loading donations...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="dashOrgTable">
        <div className="orgDashTitle">
          <h1>Donations</h1>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            color: "#721c24",
          }}
        >
          <p>{error}</p>
          <button
            onClick={fetchDonations}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#721c24",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Render no donations state
  if (donations.length === 0) {
    return (
      <div className="dashOrgTable">
        <div className="orgDashTitle">
          <h1>Donations</h1>
        </div>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p>No donations found</p>
        </div>
      </div>
    );
  }

  // Render donations table
  return (
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
          <p>date</p>
        </div>
        <div className="rej_title_cont">
          <p>campaign name</p>
        </div>
      </div>

      <div className="OrgCards">
        {donations.slice(0, visible).map((donation) => (
          <DashDonaCard
            key={donation.id}
            donner={`${donation.donor_firstName} ${donation.donor_lastName}`}
            receiver={donation.organization?.org_name || "N/A"}
            type={donation.donation_type}
            amount={donation.donation_amount}
            date={donation.donation_date}
            post={donation.post?.compaign_title || "No campaign"}
          />
        ))}
      </div>

      {visible < donations.length && (
        <div className="seeMoreContainer">
          <div>
            <button onClick={handleSeeMore} className="seeMoreBtn">
              <img src="/assets/icons/seeMore.svg" alt="See more" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashDonationTable;

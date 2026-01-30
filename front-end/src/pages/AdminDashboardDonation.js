import React from "react";
import Sidebar from "../components/Sidebar";
import DashDonationTable from "../components/DashDonationTable";
import axios from "axios";
import "../styles/AdminDashStat.css";
import "../styles/AdminDashBoardORG.css";
const AdminDashboardDonation =()=>{
    return(
    <section id="dash_section">
          <div div className="fluid_container flex-row">
              <Sidebar></Sidebar>
              <div className="dash_stat_content dash_org_content">
                <DashDonationTable/>
              </div>
           </div>
    </section>  
    );     
};
export default AdminDashboardDonation;
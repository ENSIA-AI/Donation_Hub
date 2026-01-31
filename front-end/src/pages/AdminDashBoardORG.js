import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminDashStat.css";
import "../styles/AdminDashBoardORG.css";
import Sidebar from "../components/Sidebar";
import DashOrgTable from "../components/DashOrgTable";
import DashRejTable from "../components/DashRejTable";
const AdminDashBoardORG=()=>{
    return(
        <section id="dash_section">
          < div className="fluid_container flex-row">
              <Sidebar></Sidebar>
            <div className="dash_org_content dash_stat_content">
            <div className="org_table">
              <div className="accept">
                <DashOrgTable/>
              </div>
              <div className="rejected">
                <DashRejTable/>
              </div>
            </div>
            </div>
        </div>
      </section>
    );
};
export default AdminDashBoardORG;
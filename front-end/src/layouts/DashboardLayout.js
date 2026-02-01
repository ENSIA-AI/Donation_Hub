import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div className="dashboard_container">
      <Sidebar /> {/* Sidebar visible only for dashboard pages */}
      <div className="dashboard_content">
        <Outlet /> {/* This renders the nested dashboard page */}
      </div>
    </div>
  );
}

export default DashboardLayout;

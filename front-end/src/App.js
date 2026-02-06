import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminDashboardStat from "./pages/AdminDashboardStat";
import ExploreOrganizations from "./pages/exploreOrganizations";
import Donate from "./pages/donate";
import OrgProfile from "./pages/OrgProfile";
import Login from "./pages/Login";
import Register from "./pages/register";
import Announcements from "./pages/announcements";
import AdminRoute from "./AdminRoute";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import AddDataOrg from "./pages/AddDataOrg";

import Sidebar from "./components/Sidebar";

// import AdminDashboardCompain from "./pages/AdminDashboardCompain";

import AdminDashBoardORG from "./pages/AdminDashBoardORG";
import AdminDashboardDonation from "./pages/AdminDashboardDonation";

import DashCampaigns from "./pages/DashCampaigns";
import DashMessages from "./pages/DashMessages";

function App() {
  return (
    
      <Routes>
        {/* Pages WITH Header & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/exploreOrganizations"
            element={<ExploreOrganizations />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/OrgProfile/:id" element={<OrgProfile />} />
          <Route path="/OrgProfile/:id/edit" element={<EditProfile />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/AddDataOrg" element={<AddDataOrg />} />
          <Route path="/donate" element={<Donate />} />
        </Route>
        {/* Dashboard WITHOUT Header & Footer */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/AdminDashboardStat" element={<AdminDashboardStat />} />

          <Route path="/campaigns" element={<DashCampaigns />} />
          <Route path="/messages" element={<DashMessages />} />

          <Route path="/AdminDashBoardORG" element={<AdminDashBoardORG />} />
          <Route
            path="/AdminDashboardDonation"
            element={<AdminDashboardDonation />}
          ></Route>
        </Route>

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <DashboardLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboardStat />} />
        </Route>
      </Routes>
    
  );
}

export default App;

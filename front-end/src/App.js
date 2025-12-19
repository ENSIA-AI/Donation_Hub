import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* Pages WITH Header & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/exploreOrganizations" element={<ExploreOrganizations />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/OrgProfile/:id" element={<OrgProfile />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/donate" element={<Donate />} />
        </Route>

        {/* Dashboard WITHOUT Header & Footer */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;

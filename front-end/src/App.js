import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import ExploreOrganizations from "./pages/exploreOrganizations";
import donate from "./pages/donate";

import OrgProfile from "./pages/OrgProfile";
import Login from "./pages/Login";
import register from "./pages/register";
import Announcements from "./pages/announcements";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />

        <Route
          path="/exploreOrganizations"
          element={<ExploreOrganizations />}
        />
        <Route path="/login" element={<login />} />
        <Route path="/register" element={<register />} />
        <Route path="/OrgProfile/:id" element={<OrgProfile />} />

        <Route path="/announcements" element={<Announcements />} />
        <Route path="/donate" element={<donate />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

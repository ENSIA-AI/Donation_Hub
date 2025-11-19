import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import ExploreOrganizations from "./pages/exploreOrganizations";
import Donate from "./pages/donate";

import OrgProfile from "./pages/OrgProfile";
import Login from "./pages/Login";
import Register from "./pages/register";
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
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/OrgProfile/:id" element={<OrgProfile />} />

        <Route path="/announcements" element={<Announcements />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ExploreOrganizations from "./pages/ExploreOrganizations";
import OrgProfile from "./pages/OrgProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Announcements from "./pages/announcements";
import AnnouncementPage from "./pages/announcements";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/ExploreOrganizations"
          element={<ExploreOrganizations />}
        />
        <Route path="/announcements" element={< AnnouncementPage />} />
        <Route path="/OrgProfile" element={<OrgProfile />} />
         <Route path="/Login" element = {<Login />}/>
         <Route path="/Register" element = {<Register />}/>
        </Routes>
       
      <Footer />
    </Router>
  );
}

export default App;

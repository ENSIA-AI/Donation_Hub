import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ExploreOrganizations from "./pages/exploreOrganizations";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/exploreOrganizations" element={<ExploreOrganizations/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

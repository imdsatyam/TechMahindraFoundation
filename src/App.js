import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import SuccessStories from "./Components/SuccessStories";
import DonateNow from "./Components/DonateNow";
import OurLeader from "./Components/OurLeader";
import RecentNews from "./Components/RecentNews";
import OurProgram from "./Components/OurProgram";
import Impact from "./Components/Impact";
import Resources from "./Components/Resources";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";

function Home() {
  return (
    <div className="mainDiv">
      <Banner />
      <Description />
      <SuccessStories />
      <DonateNow />
      <OurLeader />
      <RecentNews />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-program" element={<OurProgram />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/Description-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
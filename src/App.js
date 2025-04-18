import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import SuccessStories from "./Components/SuccessStories";
import DonateNow from "./Components/DonateNow"
import OurLeader from "./Components/OurLeader"
import RecentNews from "./Components/RecentNews"

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route exact path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

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

export default App;
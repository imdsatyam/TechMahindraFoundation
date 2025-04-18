import React from "react";
import Banner from "../Components/Banner";
import Description from "../Components/Description";
import SuccessStories from "../Components/SuccessStories";
import DonateNow from "../Components/DonateNow";
import OurLeader from "../Components/OurLeader";
import RecentNews from "../Components/RecentNews";
import Footer from "../Components/Footer";

function HomeContent() {
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

export default HomeContent;

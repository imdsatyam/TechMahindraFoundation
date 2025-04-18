import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomeContent from "./Pages/HomeContent";
import OurProgram from "./Pages/OurProgram";
import Impact from "./Pages/Impact"; 
import Resources from "./Pages/Resources";
import DescriptionUs from "./Pages/DescriptionUs";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/our-program" element={<OurProgram />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/resources" element={<Resources />} /> 
          <Route path="/description-us" element={<DescriptionUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

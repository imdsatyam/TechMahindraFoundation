import React from "react";
import { useParams } from "react-router-dom";
import HomeContent from "./HomeContent";

function OurProgram() {
    const { id } = useParams();
  return <HomeContent id={id} />;
}

export default OurProgram;

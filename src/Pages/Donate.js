import React from "react";
import { useParams } from "react-router-dom";
import HomeContent from "./HomeContent";

function Donate() {
    const { id } = useParams();
  return <HomeContent id={id}/>;
}

export default Donate;

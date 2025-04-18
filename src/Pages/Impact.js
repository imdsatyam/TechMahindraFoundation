import React from "react";
import { useParams } from "react-router-dom";
import HomeContent from "./HomeContent";

function Impact() {
    const { id } = useParams();
  return <HomeContent id={id}/>;
}

export default Impact;
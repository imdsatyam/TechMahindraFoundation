import React from "react";
import { useParams } from "react-router-dom";
import HomeContent from "./HomeContent";

function Resources() {
    const { id } = useParams();
  return <HomeContent id={id}/>;
}

export default Resources;

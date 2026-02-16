import { GoogleMapsEmbed } from "@next/third-parties/google";
import React from "react";

const Section2 = () => {
  return (
    <div className="">
      <GoogleMapsEmbed
        apiKey={process.env.MAPKEY || ""}
        height={500}
        width="100%"
        mode="place"
        zoom="14"
        q="8095 NW 8TH ST MIAMI FLORIDA 33126"
      />
    </div>
  );
};

export default Section2;

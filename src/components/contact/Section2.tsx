import { GoogleMapsEmbed } from "@next/third-parties/google";
import React from "react";

const Section2 = () => {
  return (
    <div className="">
      <GoogleMapsEmbed
        apiKey={process.env.MAPKEY!}
        height={500}
        width="100%"
        mode="place"
        zoom="9"
        q="seattle washington"
      />
    </div>
  );
};

export default Section2;

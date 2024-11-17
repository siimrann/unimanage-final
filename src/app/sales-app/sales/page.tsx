import Global from "@/components/global/global";
import React from "react";

const SalesPage = () => {
  return (
    <div>
      <Global 
        header="Sales systems help businesses manage leads, track performance," 
        headerpart=" and enhance customer relationships for growth." // Notice the space before 'make easy'
        desc="Sales platforms optimize the selling process." 
        cardHeading="Sales" 
        cardContent="Sales management platforms enable businesses to streamline the sales process, from lead generation to closing deals. These systems provide tools for tracking sales performance, forecasting revenue, and managing customer relationships. With features like automated follow-ups, reporting, and analytics, sales platforms help teams identify opportunities, optimize strategies, and drive revenue growth. They ultimately enhance collaboration and improve overall sales effectiveness."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"  
        title="Sales"   
      />
    </div>
  );
};

export default SalesPage;
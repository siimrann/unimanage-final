import Global from "@/components/global/global";
import React from "react";

const MaintainencePage = () => {
  return (
    <div>
      <Global 
        header="Maintenance management systems streamline asset upkeep, " 
        headerpart="enhance operational efficiency, and reduce downtime." // Notice the space before 'make easy'
        desc="It enhances efficienct operations and improved workflow." 
        cardHeading="Maintainence" 
        cardContent="Maintenance management platforms enable businesses to schedule and track maintenance activities, ensuring assets operate optimally. These systems provide tools for monitoring equipment performance, managing work orders, and tracking maintenance history. With features like automated reminders and reporting, maintenance solutions help organizations minimize unexpected breakdowns and extend asset lifespans. They ultimately improve operational efficiency, reduce costs, and enhance overall productivity."
        videoPath="path/of/video"  
        beforeVideoImageSrc="/download.jpeg"  
        title="maintenance"  
      />
    </div>
  );
};

export default MaintainencePage;

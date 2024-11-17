import Global from "@/components/global/global";
import React from "react";

const ManufacturingPage = () => {
  return (
    <div>
      <Global 
        header="Manufacturing systems streamline production processes," 
        headerpart=" optimize resource allocation, and enhance product quality." // Notice the space before 'make easy'
        desc="Manufacturing management improves efficiency and quality." 
        cardHeading="Manfacturing" 
        cardContent="Manufacturing management platforms enable businesses to oversee production workflows, manage inventory, and ensure quality control. These systems provide tools for tracking materials, scheduling production runs, and analyzing performance metrics. With features like real-time monitoring and reporting, manufacturing solutions help organizations identify inefficiencies, reduce waste, and improve overall productivity. They ultimately enhance operational efficiency and support better decision-making in the manufacturing process."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"   
        title="Manufacturing"  
      />
    </div>
  );
};

export default ManufacturingPage;
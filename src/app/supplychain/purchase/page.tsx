import Global from "@/components/global/global";
import React from "react";

const PurchasePage = () => {
  return (
    <div>
      <Global 
        header="Purchase systems facilitate procurement, enhance vendor relationships," 
        headerpart="and optimize spending for improved operational efficiency." // Notice the space before 'make easy'
        desc="Purchase management streamlines buying processes effectively." 
        cardHeading="Purchase" 
        cardContent="Purchase management platforms enable businesses to efficiently manage procurement activities, track orders, and analyze spending. These systems facilitate vendor selection, automate purchase orders, and ensure compliance with company policies. With features like spend analytics and contract management, purchase solutions help organizations make informed buying decisions, reduce costs, and improve supplier relationships. They ultimately enhance operational efficiency and support strategic sourcing initiatives."
        videoPath="path/of/video"  
        beforeVideoImageSrc="/download.jpeg"  
        title="Purchase"  
      />
    </div>
  );
};

export default PurchasePage;
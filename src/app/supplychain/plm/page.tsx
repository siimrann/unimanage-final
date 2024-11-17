import Global from "@/components/global/global";
import React from "react";

const PlmPage = () => {
  return (
    <div>
      <Global 
        header="PLM systems manage product development, enhance collaboration," 
        headerpart=" and streamline the entire product lifecycle." // Notice the space before 'make easy'
        desc="Manufacturing management improves efficiency and quality." 
        cardHeading="PLM" 
        cardContent="Product Lifecycle Management (PLM) platforms help businesses oversee the entire lifecycle of a product from inception to retirement. These systems facilitate collaboration across departments, ensuring that design, engineering, and marketing teams work together seamlessly. With features like version control, change management, and compliance tracking, PLM solutions optimize product development processes, reduce time-to-market, and improve product quality. They ultimately enable businesses to innovate faster and respond effectively to market demands."
        videoPath="path/of/video"  
        beforeVideoImageSrc="/download.jpeg"  
        title="PLM"  
      />
    </div>
  );
};

export default PlmPage;
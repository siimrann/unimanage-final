import Global from "@/components/global/global";
import React from "react";

const QualityPage = () => {
  return (
    <div>
      <Global 
        header="Quality systems monitor compliance, improve performance," 
        headerpart=" and drive continuous enhancement in products and services." // Notice the space before 'make easy'
        desc="Quality management enhances standards and compliance." 
        cardHeading="Quality" 
        cardContent="Quality management platforms help businesses maintain high standards for products and services by monitoring compliance and performance. These systems provide tools for tracking quality metrics, managing audits, and implementing corrective actions. With features like document control and reporting, quality solutions enable organizations to identify areas for improvement, reduce defects, and enhance customer satisfaction. They ultimately foster a culture of quality and continuous improvement within the organization."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"  
        title="Quality"   
      />
    </div>
  );
};

export default QualityPage;
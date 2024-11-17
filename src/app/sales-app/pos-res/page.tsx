import Global from "@/components/global/global";
import React from "react";

const PosresPage = () => {
  return (
    <div>
      <Global 
        header="Restaurant POS systems enhance order management, speed up service," 
        headerpart=" and streamline payments for better customer experiences." // Notice the space before 'make easy'
        desc="POS systems improve restaurant operations efficiency" 
        cardHeading="POS Restraunt" 
        cardContent="A restaurant POS system simplifies operations by managing orders, processing payments, and tracking inventory in real-time. It helps streamline communication between the kitchen and waitstaff, reducing errors and wait times. With integrated features for managing reservations, promotions, and customer preferences, POS systems optimize service quality and boost operational efficiency. Ultimately, they help restaurants deliver faster, more personalized dining experiences."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"   
        title="POS Restraunt"  
      />
    </div>
  );
};

export default PosresPage;

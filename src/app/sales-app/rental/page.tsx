import Global from "@/components/global/global";
import React from "react";

const RentalPage = () => {
  return (
    <div>
      <Global 
        header="Rental systems help businesses manage bookings," 
        headerpart=" inventory, and customer transactions efficiently." // Notice the space before 'make easy'
        desc="Rental platforms optimize asset management efficiently." 
        cardHeading="Rental" 
        cardContent="Rental management platforms streamline the process of tracking rentals, handling bookings, and managing inventory. These systems provide real-time availability updates, automate billing, and ensure accurate record-keeping. With features like customer profiles, scheduling, and maintenance tracking, rental platforms simplify operations, reduce errors, and improve customer service. They enable businesses to scale efficiently while maintaining control over assets and transactions."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"  
        title="Rental"   
      />
    </div>
  );
};

export default RentalPage;

import Global from "@/components/global/global";
import React from "react";

const PosshopPage = () => {
  return (
    <div>
      <Global 
        header="POS systems in shops streamline sales, inventory," 
        headerpart=" and customer management, boosting operational efficiency." // Notice the space before 'make easy'
        desc="POS systems streamline retail operations effectively." 
        cardHeading="POS Shop" 
        cardContent="A retail POS system automates sales processes, tracks inventory in real-time, and provides detailed transaction data. It simplifies payment processing and integrates with customer loyalty programs, enhancing the shopping experience. By offering insights into sales trends and stock levels, POS systems help shops optimize inventory management and improve decision-making. Ultimately, they enable smoother operations and better customer service."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"  
        title="Pos Shop"   
      />
    </div>
  );
};

export default PosshopPage;

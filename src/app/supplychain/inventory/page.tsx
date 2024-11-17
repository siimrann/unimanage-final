import Global from "@/components/global/global";
import React from "react";

const InventoryPage = () => {
  return (
    <div>
      <Global 
        header="Inventory management systems optimize stock tracking, " 
        headerpart="streamline orders, and enhance supply chain efficiency." // Notice the space before 'make easy'
        desc="Inventory management optimizes stock control effectively." 
        cardHeading="Inventory" 
        cardContent="Inventory management platforms help businesses monitor stock levels, manage orders, and track product movement in real-time. These systems automate reordering processes, reduce excess inventory, and prevent stockouts. With features like barcode scanning, reporting, and demand forecasting, inventory management solutions provide valuable insights that enable businesses to make informed decisions. They improve operational efficiency, reduce costs, and enhance customer satisfaction by ensuring product availability."
        videoPath="path/of/video"
        beforeVideoImageSrc="/download.jpeg"  
        title="Inventory"    
      />
    </div>
  );
};

export default InventoryPage;

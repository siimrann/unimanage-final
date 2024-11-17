import Global from "@/components/global/global";
import React from "react";

const ExpensePage = () => {
  return (
    <div>
      <Global 
        header="Expenses track and manage financial outflows," 
        headerpart=" ensuring businesses maintain budget control." // Notice the space before 'make easy'
        desc="Expenses enable businesses to manage and optimize their financial resources." 
        cardHeading="Expenses" 
        cardContent="Managing expenses effectively is crucial for any business’s success. By keeping track of expenditures, organizations can maintain budget discipline and avoid overspending. This process also aids in identifying unnecessary costs, allowing for better resource allocation. Ultimately, efficient expense management leads to improved profitability and financial stability."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg" 
        title="Expenses"    
      />
    </div>
  );
};

export default ExpensePage;




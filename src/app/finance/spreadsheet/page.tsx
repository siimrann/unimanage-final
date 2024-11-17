import Global from "@/components/global/global";
import React from "react";

const SpreadsheetPage = () => {
  return (
    <div>
      <Global 
        header="Spreadsheets provide businesses with powerful tools " 
        headerpart="for data organization, analysis, and visualization." // Notice the space before 'make easy'
        desc="Spreadsheets enhance data analysis and visualization." 
        cardHeading="Spreadsheet(BI)" 
        cardContent="Spreadsheets are essential for managing and analyzing large amounts of data in a structured way. They enable businesses to create detailed reports, track performance metrics, and perform complex calculations. With user-friendly interfaces and versatile functionalities, spreadsheets allow for quick adjustments and real-time updates. Ultimately, they empower teams to make informed decisions based on accurate data insights."
        videoPath="path/of/video"  
        beforeVideoImageSrc="/download.jpeg"  
        title="Spreadsheet"  
      />
    </div>
    
  );
};

export default SpreadsheetPage;


import Global from "@/components/global/global";
import React from "react";

const InvoicingPage = () => {
  return (
    <div>
      <Global 
        header="Your business deserves hassle-free finances" 
        headerpart="Make invoicing easy" // Notice the space before 'make easy'
        desc="It streamlines payments and enhances financial clarity." 
        cardHeading="Invoicing" 
        cardContent="Invoicing is a crucial process in managing a business's cash flow, ensuring that services rendered and products sold are promptly billed to clients. A well-structured invoice not only facilitates timely payments but also serves as a formal record of transactions. By automating invoicing, businesses can reduce errors and save time, allowing them to focus on growth and customer satisfaction. Ultimately, effective invoicing is key to maintaining healthy financial relationships and sustaining business operations."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg" 
        title="Invoicing"    
      />
    </div>
    
  );
};

export default InvoicingPage;

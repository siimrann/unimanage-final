import React from "react";
import Global from "@/components/global/global";

const EccomercePage = () => {
  return (
    <div>
      <Global 
        header="Ecommerce platforms enable businesses to sell products globally, " 
        headerpart="manage operations efficiently, and grow their customer base." // Notice the space before 'make easy'
        desc="It enable businesses to sell products and services online, reaching customers globally" 
        cardHeading="E-commerce" 
        cardContent="Ecommerce platforms allow businesses to set up online stores, manage inventory, process payments, and handle shipping seamlessly. They provide tools for marketing, customer management, and analytics, helping businesses grow their online sales. With features like mobile responsiveness and secure transactions, ecommerce platforms make it easy for companies to scale their operations and reach a broader audience."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"  
        title="Eccomerce"   
      />
    </div>
  );
};

export default EccomercePage;

import Global from "@/components/global/global";
import React from "react";

const SubsPage = () => {
  return (
    <div>
      <Global 
        header="Subscription systems facilitate recurring billing, " 
        headerpart="track customer accounts, and enhance service delivery efficiency." // Notice the space before 'make easy'
        desc="Subscription platforms streamline recurring billing processes." 
        cardHeading="Subscription" 
        cardContent="Subscription management platforms enable businesses to automate billing processes, track customer subscriptions, and manage renewals effectively. These systems provide insights into customer behavior, helping businesses tailor offerings and improve retention rates. With features like payment processing, analytics, and customer support, subscription platforms streamline operations and enhance the customer experience. They enable businesses to build reliable revenue streams and foster long-term relationships."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"  
        title="Subscription"   
      />
    </div>
  );
};

export default SubsPage;
import Global from "@/components/global/global";
import React from "react";

const CrmPage = () => {
  return (
    <div>
      <Global 
        header="CRM systems help businesses manage customer relationships," 
        headerpart="streamline interactions, and improve sales processes." // Notice the space before 'make easy'
        desc="CRM enhances customer relationship management efficiency." 
        cardHeading="CRM" 
        cardContent="Customer Relationship Management (CRM) platforms enable businesses to centralize customer data, track interactions, and manage leads effectively. By automating sales, marketing, and support tasks, CRM systems boost productivity and ensure personalized customer experiences. With analytics and reporting tools, businesses gain insights into customer behavior, leading to better decision-making and improved customer retention."
        videoPath="path/of/video"  
        beforeVideoImageSrc="/download.jpeg"  
        title="CRM"  
      />
    </div>
  );
};

export default CrmPage;



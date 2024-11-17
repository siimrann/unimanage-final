import Global from "@/components/global/global";
import React from "react";

const DocumentPage = () => {
  return (
    <div>
      <Global 
        header="Documents empower teams with easy access" 
        headerpart=" to critical business information." // Notice the space before 'make easy'
        desc="Documents centralize file management, enhancing collaboration and efficiency for businesses." 
        cardHeading="Documents" 
        cardContent="Documents provide businesses with a centralized platform for organizing, storing, and managing critical files. By streamlining access to important information, businesses can improve collaboration, ensure data security, and enhance overall operational efficiency. With effective document management, teams can work more productively, reduce clutter, and maintain compliance with ease."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg"
        title="Document"   
      />
    </div>
  );
};

export default DocumentPage;



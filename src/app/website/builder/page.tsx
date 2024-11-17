import Global from "@/components/global/global";
import React from "react";

const BuilderPage = () => {
  return (
    <div>
      <Global 
        header="Website builders simplify website creation effortlessly." 
        headerpart="Improves visibility and customer reach." // Notice the space before 'make easy'
        desc="It empower businesses to create professional websites, boosting online presence and customer engagement." 
        cardHeading="Website Builder" 
        cardContent="Website builders simplify the process of designing and launching a website, providing user-friendly interfaces and drag-and-drop tools. These platforms offer customizable templates, enabling businesses to create a unique online presence that reflects their brand. With built-in SEO tools, responsive designs, and integrated features, website builders allow businesses to engage customers effectively and scale their digital presence."
        videoPath="path/of/video"  
        beforeVideoImageSrc="/download.jpeg"  
        title="Website Builder"  
      />
    </div>
  );
};

export default BuilderPage;

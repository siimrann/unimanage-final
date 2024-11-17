import Global from "@/components/global/global";
import React from "react";

const SignPage = () => {
  return (
    <div>
      <Global 
        header="Sign accelerates approvals with secure digital signatures, " 
        headerpart="improving collaboration and reducing delays in business processes." // Notice the space before 'make easy'
        desc="Sign helps businesses streamline approvals and enhance collaboration." 
        cardHeading="Sign" 
        cardContent="Efficient sign management is vital for expediting decision-making processes in any organization. By digitizing signatures, businesses can eliminate delays associated with physical paperwork, ensuring faster approvals and transactions. This modern approach not only saves time but also enhances security and reduces the risk of document loss. Ultimately, effective sign management fosters a more agile and responsive business environment."
        videoPath="path/of/video" 
        beforeVideoImageSrc="/download.jpeg" 
        title="Sign"    
      />
    </div>
    
  );
};

export default SignPage;

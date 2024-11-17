import Global from "@/components/global/global";
import React from "react";

const AccountingPage = () => {
  return (
    <div>
      <Global 
        header="Streamline your operations with accounting that makes " 
        headerpart="every account a strategic asset for your business." // Notice the space before 'make easy'
        desc="The language of business, revealing financial truths and insights." 
        cardHeading="Accounts" 
        cardContent="In the world of finance, every account holds the potential for growth and stability. Effective accounting practices empower businesses to harness this potential, ensuring each account is meticulously managed and optimized. With the right accounting solutions, you can transform complex financial data into actionable insights, enabling smarter decisions that drive success. Let us help you navigate your financial journey, where every account tells a story of opportunity and achievement."
        videoPath="path/of/video"
        beforeVideoImageSrc="/download.jpeg"
        title="Accounts"  
      />
    </div>
  );
};

export default AccountingPage;

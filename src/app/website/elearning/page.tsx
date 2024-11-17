import Global from "@/components/global/global";
import React from "react";

const ElearningPage = () => {
  return (
    <div>
      <Global 
    header="E-learning platforms allow businesses to provide interactive," 
    headerpart=" scalable online education, improving skill development and engagement" // Notice the space before 'make easy'
    desc="E-learning simplifies digital training delivery." 
    cardHeading="E-learning" 
    cardContent="E-learning platforms provide businesses with the tools to create and distribute online courses, fostering professional development and continuous learning. They offer features such as multimedia integration, quizzes, and progress tracking, making learning more interactive and accessible. With scalable solutions and remote access, e-learning helps businesses upskill employees, train clients, and offer educational content to a global audience."
    videoPath="path/of/video"
    beforeVideoImageSrc="/download.jpeg"  
    title="E-Learning"    
      />
    </div>
  );
};

export default ElearningPage;

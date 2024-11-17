import Global from "@/components/global/global";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <Global 
    header="Blogs allow businesses to share insights, improve SEO," 
    headerpart=" engage customers, and strengthen their online presence." // Notice the space before 'make easy'
    desc="Blogs enhance engagement and brand visibility." 
    cardHeading="Blog" 
    cardContent="A blog is a powerful tool for businesses to communicate with their audience, share industry knowledge, and showcase expertise. Regular blog posts can improve SEO rankings, drive traffic to a website, and foster customer engagement. With the right strategy, a blog builds credibility, strengthens brand identity, and encourages interaction through comments and social sharing."
    videoPath="path/of/video"  
    beforeVideoImageSrc="/download.jpeg"  
    title="Blog"  
      />
    </div>
  );
};

export default BlogPage;

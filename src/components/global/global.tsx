'use client';
import React from "react";
import Navbar from '@/components/main/navbar';
import BusinessAppsSection from '@/components/main/BusinessAppsPromo';
import FeatureSection from '@/components/main/FeatureSection'; 
import Footer from '@/components/main/footer'; 
import OdooComparison from '@/components/main/comparison';
import Image from 'next/image';
import AppIconsSection from '@/components/main/appsIconsSection';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"; // Import ShadCN Card components

// Import all your icons
import AccountingIcon from '@/app/icons/accounting.png';
// (other icons)
import ModernVideoPlayer from '@/components/main/modernVideoPlayer';

const icons = [
  { name: 'Accounting', src: AccountingIcon },
  // (other icons)
];

interface GlobalProps {
  header: string;
  headerpart: string;
  desc: string;
  cardHeading: string;
  cardContent: string;
  videoPath: string;
  beforeVideoImageSrc: string; 
  title:String// New prop for global image path before the video
}

const Global = ({
  header,
  headerpart,
  desc,
  cardHeading,
  cardContent,
  videoPath,
  beforeVideoImageSrc,
  title, // Accepting new prop here
}: GlobalProps) => {
  const iconSrc = icons.find(icon => icon.name === cardHeading)?.src;

  return (
    <div>
      <Navbar />

      <div className="mt-40 bg-color-gray-50 min-h-screen flex flex-col items-center justify-center bg-white p-6 md:p-0 relative">
      <div className="text-4xl md:text-5xl font-semibold mb-16 -mt-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-indigo-500 drop-shadow-lg">
        {title} <span>With Unimanage</span>
      </div>
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-3xl font-mono font-bold text-black mb-8 flex items-center justify-center">
            {header}
          </h1>
          <h1 className="text-3xl md:text-3xl font-mono font-bold text-black mb-8 flex items-center justify-center">
            <span className="text-orange-500"> {headerpart}</span>
          </h1>
          <p className="text-base md:text-lg font-mono text-gray-700 mb-10">
            {desc}
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <button className="bg-pink-800 text-white px-6 py-3 rounded-lg w-full md:w-auto hover:bg-purple-400 hover:text-black">
              Get Started!
            </button>
          </div>
          <p className="text-gray-600 font-medium text-sm md:text-base">
            580.00 Rs/month for ALL apps
          </p>
        </div>

        {/* Inline Card component using ShadCN */}
        <div className="w-full flex justify-center pb-8">
          <Card className="bg-gradient-to-b from-gray-200 to-white w-full max-w-4xl shadow-md mb-8">
            <CardHeader>
              <div className="flex items-center">
                <CardTitle className="text-3xl font-bold"><span className="text-pink-800">{cardHeading}</span></CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-black text-lg">{cardContent}</p>
            </CardContent>
          </Card>
        </div>

        {/* Image before the video player */}
        {beforeVideoImageSrc && (
          <div className="my-8 flex justify-center mt-16 bg-black">
            <Image src={beforeVideoImageSrc} alt="Image Before Video" width={800} height={400} className="object-cover rounded-lg" />
          </div>
        )}

        {/* Video Player */}
        <div className="w-full mb-16">
          <div className="mb-40">
            <ModernVideoPlayer videoSrc={videoPath} />
          </div>
        </div>

        {/* Light Grey Semicircle at the bottom with centered text */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gray-200 rounded-t-full flex items-center justify-center">
          <p className="text-center text-2xl font-bold text-gray-700">
            Unify your business, <span className="text-orange-400">elevate your success.</span>
          </p>
        </div>
      </div>

      {/* App Icons Section */}
      <AppIconsSection />
      
      <BusinessAppsSection />
      <OdooComparison />
      <FeatureSection />

      <div className="bg-gradient-to-b from-white to-gray-200 py-12">
        <div className="flex flex-col items-center justify-center h-[40vh] w-full" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
          <Image src="/logo.png" alt="Company Logo" width={280} height={280} className="object-contain h-full" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-6xl font-mono font-bold text-black mb-8">
            Maximize Your Growth <span className="text-orange-500">Trajectory</span>
          </h1>
          <p className="text-1.7xl text-center text-gray-600 mb-12 mt-8 font-bold">
            The product can personalize user experiences <span className='text-pink-700'>by understanding</span> <br />
            individual preferences and tailoring recommendations <span className='text-pink-700'>or content based </span><br />
            <span className='text-orange-500'>on user behavior and historical data.</span>
          </p>
        </div>

        <div className="flex justify-center mb-4">
          <button className="bg-pink-800 hover:bg-pink-600 text-white px-16 py-4 rounded-lg text-xl mt-8">
            Start now - It&apos;s free
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Global;

'use client';

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import AppsDropdown from "./appsDropdown";
import CommunityDropdown from "./communityDropdown";
import IndustriesDropdown from "./industriesDropDown";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable body scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [isMobileMenuOpen]);

  // Close the mobile menu when the screen size increases past the mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Mobile breakpoint (adjust if needed)
        setMobileMenuOpen(false); // Close the menu if the screen size is larger than mobile
      }
    };

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Layout wrapper that hides content when the mobile menu is open */}
      <div
        className={`${
          isMobileMenuOpen ? "hidden" : "" // Hide background content when mobile menu is open
        }`}
      >
        {/* Main Content Layout (Background or other components) */}
        <div className="your-main-layout">
          <h1>Your Page Content</h1>
          <p>Other layout components...</p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between p-2 bg-[#3C3D37] text-black fixed w-full top-0 z-50">
        {/* Logo Image */}
        <div className="flex items-center pl-4">
          <Image
            src="/logo.png"
            alt="Brand Logo"
            width={125}
            height={110}
            className="transform scale-125"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <div className="flex items-center   hover:text-[#ECDFCC]">
            <AppsDropdown />
          </div>
          <div className="flex items-center hover:text-[#ECDFCC] ">
            <IndustriesDropdown />
          </div>
          <div className="flex items-center   hover:text-[#ECDFCC]">
            <CommunityDropdown />
          </div>
          <div className="flex items-center  hover:text-gray-600">
            <a href="#" className="text-[#ECDFCC] hover:underline">
              Pricing
            </a>
          </div>
          <div className="flex items-center hover:text-gray-600">
            <a href="#" className=" text-[#ECDFCC] hover:underline hover:text-[#ECDFCC]">
              Contact
            </a>
          </div>
        </div>

        {/* Buttons for Sign In and Try It Free */}
        <div className="hidden md:flex space-x-4">
          <div className="relative z-10 group">
            <Button 
              variant="outline" 
              className="px-6 py-3 bg-[#000000] text-white w-full   transition-colors duration-200"
            >
              Sign In
            </Button>
            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gray-200 transition-opacity duration-200 rounded-lg" /> */}
          </div>
          <div className="relative z-10 group">
          <Link href="/dpage/check" passHref>
            <Button 
              variant="outline" 
              className="px-6 py-3 text-white bg-[#000000]  w-full  transition-colors duration-200"
            >
              Try It Free
            </Button>
          </Link>
            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black transition-opacity duration-200 rounded-lg" /> */}
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Full-Screen Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Full-Screen Overlay (with dark background) */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={() => setMobileMenuOpen(false)} // Close the menu if overlay is clicked
            ></div>

            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 md:hidden">
              {/* Close Button at the top-right corner */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X className="h-8 w-8" />
              </button>

              <ul className="flex flex-col items-center gap-8 text-lg -mt-40 z-50">
                <li className="relative top-[-20px] hover:text-gray-600">
                  <AppsDropdown />
                </li>
                {/* <li className="hover:text-gray-600 -mt-8">
                  <IndustriesDropdown />
                </li>
                <li className="hover:text-gray-600">
                  <CommunityDropdown />
                </li> */}
                <li className="hover:text-gray-600 text-sm">
                  <a href="#">Pricing</a>
                </li>
                <li className="hover:text-gray-600 text-sm">
                  <a href="#">Contact</a>
                </li>
              </ul>

              <div className="mt-8 space-y-4 w-full px-8">
                <div className="relative z-10">
                  <Button 
                    variant="outline" 
                    className="w-full text-black hover:bg-gray-300 hover:text-black relative z-20"
                  >
                    Sign In
                  </Button>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gray-200 transition-opacity duration-200 rounded-lg" />
                </div>
                <div className="relative z-10 group">
                  <Button 
                    variant="outline" 
                    className="w-full px-6 py-3 text-white bg-black group-hover:bg-gray-300 hover:text-black transition-colors duration-200"
                  >
                    Try It Free
                  </Button>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black transition-opacity duration-200 rounded-lg" />
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

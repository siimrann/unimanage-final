import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CommunityDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Track transition state for opening
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the button

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsTransitioning(true); // Start transition on close
        setTimeout(() => {
          setIsOpen(false); // Close after the transition time
          setIsTransitioning(false); // Reset transition state
        }, 100); // Shorter duration for closing transition
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isOpen) {
      setIsTransitioning(true); // Start transition on close
      setTimeout(() => {
        setIsOpen(false); // Close after the transition time
        setIsTransitioning(false); // Reset transition state
      }, 100); // Shorter duration for closing transition
    } else {
      setIsOpen(true); // Open dropdown immediately
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef} // Attach ref to the button
        onClick={toggleDropdown}
        className="text-[#ECDFCC] hover:text-black bg-[#3C3D37] hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
      >
        Communities
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      <div
        ref={dropdownRef} // Attach ref to the dropdown container
        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-md p-6 z-50 ${
          isOpen
            ? "opacity-100 translate-y-0 visibility-visible scale-100 transition-all duration-[700ms] ease-in-out"
            : isTransitioning
            ? "opacity-0 translate-y-4 visibility-visible scale-95 transition-all duration-[300ms] ease-in-out"
            : "opacity-0 translate-y-4 visibility-hidden scale-95"
        }`}
      >
        {isOpen && (
          <div className="grid grid-cols-4 gap-8">
            {/* Finance Section */}
            <div>
              <h3 className="font-semibold text-teal-700">Learn</h3>
              <hr className="my-2 border-teal-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Tutorials</Link></li>
                <li><Link href="#">Documentation</Link></li>
                <li><Link href="#">Certification</Link></li>
                <li><Link href="#">Training</Link></li>
                <li><Link href="#">Podcast</Link></li>
              </ul>
            </div>

            {/* Sales Section */}
            <div>
              <h3 className="font-semibold text-red-600">Get the Software</h3>
              <hr className="my-2 border-red-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Download</Link></li>
                <li><Link href="#">Compare Editions</Link></li>
                <li><Link href="#">Releases</Link></li>
              </ul>
            </div>

            {/* Websites Section */}
            <div>
              <h3 className="font-semibold text-blue-600">Collaborate</h3>
              <hr className="my-2 border-blue-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">GitHub</Link></li>
                <li><Link href="#">Forum</Link></li>
                <li><Link href="#">Events</Link></li>
                <li><Link href="#">Translations</Link></li>
                <li><Link href="#">Become a partner</Link></li>
                <li><Link href="#">Support</Link></li>
              </ul>
            </div>

            
          </div>
        )}

        {/* Browse More Section */}
        <div className="mt-6 text-center">
          <a href="#" className="text-purple-700 hover:underline">
            ...and much more!
          </a>
          <br />
          <a href="#" className="flex justify-center items-center mt-2 text-gray-600 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.707-8.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L6 10.586l2.293-2.293z"
                clipRule="evenodd"
              />
            </svg>
            Browse all Industries
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunityDropdown;


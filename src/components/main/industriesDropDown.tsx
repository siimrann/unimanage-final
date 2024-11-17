import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const IndustriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Track transition state for closing
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
        Industries
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      <div
        ref={dropdownRef} // Attach ref to the dropdown container
        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-lg rounded-md p-6 z-50 ${
          isOpen
            ? "opacity-100 translate-y-0 visibility-visible scale-100 transition-all duration-[700ms] ease-in-out"
            : isTransitioning
            ? "opacity-0 translate-y-4 visibility-visible scale-95 transition-all duration-[200ms] ease-in-out"
            : "opacity-0 translate-y-4 visibility-hidden scale-95"
        }`}
      >
        {isOpen && (
          <div className="grid grid-cols-4 gap-8">
            {/* Finance Section */}
            <div>
              <h3 className="font-semibold text-teal-700">Retail</h3>
              <hr className="my-2 border-teal-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Book Store</Link></li>
                <li><Link href="#">Clothing Store</Link></li>
                <li><Link href="#">Hardware Store</Link></li>
              </ul>
            </div>

            {/* Sales Section */}
            <div>
              <h3 className="font-semibold text-red-600">Services</h3>
              <hr className="my-2 border-red-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Unimanage Partner</Link></li>
                <li><Link href="#">Real Estate</Link></li>
                <li><Link href="#">Talent Acquisition</Link></li>
              </ul>
            </div>

            {/* Websites Section */}
            <div>
              <h3 className="font-semibold text-blue-600">Hospitality</h3>
              <hr className="my-2 border-blue-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Bar and Pub</Link></li>
                <li><Link href="#">Fast Food</Link></li>
                <li><Link href="#">Fine Dining Restraunt</Link></li>
              </ul>
            </div>

            {/* Supply Chain Section */}
            <div>
              <h3 className="font-semibold text-purple-700">Construction</h3>
              <hr className="my-2 border-purple-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Construction</Link></li>
                <li><Link href="#">Gardening</Link></li>
                <li><Link href="#">Solar Energy</Link></li>
              </ul>
            </div>

            {/* Hospitality Section */}
            <div>
              <h3 className="font-semibold text-purple-600">HOSPITALITY</h3>
              <hr className="my-2 border-purple-300" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Bar and Pub</Link></li>
                <li><Link href="#">Fast Food</Link></li>
                <li><Link href="#">Fine Dining Restaurant</Link></li>
              </ul>
            </div>

            {/* Health & Fitness Section */}
            <div>
              <h3 className="font-semibold text-orange-600">HEALTH & FITNESS</h3>
              <hr className="my-2 border-orange-300" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="#">Fitness Center</Link></li>
                <li><Link href="#">Sports Club</Link></li>
                <li><Link href="#">Wellness Practitioners</Link></li>
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

export default IndustriesDropdown;

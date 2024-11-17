import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const AppsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Set isMobile based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsTransitioning(true);
      setIsOpen(true);
    }
  };

  return (
    <div className={`relative inline-block text-left ${isOpen && isMobile ? "backdrop-blur-sm" : ""}`}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`text-[#ECDFCC] hover:text-black bg-[#3C3D37] hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center w-full sm:w-auto ${
          isMobile ? "w-full" : ""
        }`}
      >
        {isMobile ? "Our Applications" : "Apps"}
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      <div
        ref={dropdownRef}
        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-full sm:w-[80vw] md:w-[800px] bg-white shadow-lg rounded-md p-6 z-50 ${
          isOpen
            ? "opacity-100 translate-y-0 visibility-visible scale-100 transition-all duration-[700ms] ease-in-out"
            : "opacity-0 translate-y-4 visibility-hidden scale-95"
        }`}
        onTransitionEnd={() => {
          if (!isOpen) {
            setIsTransitioning(false);
          }
        }}
        style={{
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        {isOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-50">
            {/* Finance Section */}
            <div className="w-full z-50">
              <h3 className="font-semibold text-teal-700">FINANCE</h3>
              <hr className="my-2 border-teal-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="/finance/accounting">Accounting</Link></li>
                <li><Link href="/finance/invoicing">Invoicing</Link></li>
                <li><Link href="/finance/expenses">Expenses</Link></li>
                <li><Link href="/finance/spreadsheet">Spreadsheet (BI)</Link></li>
                <li><Link href="/finance/documents">Documents</Link></li>
                <li><Link href="/finance/sign">Sign</Link></li>
              </ul>
            </div>

            {/* Sales Section */}
            <div className="w-full z-50">
              <h3 className="font-semibold text-red-600">SALES</h3>
              <hr className="my-2 border-red-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="/sales-app/crm">CRM</Link></li>
                <li><Link href="/sales-app/sales">Sales</Link></li>
                <li><Link href="/sales-app/pos-shop">POS Shop</Link></li>
                <li><Link href="/sales-app/pos-res">POS Restaurant</Link></li>
                <li><Link href="/sales-app/subscription">Subscriptions</Link></li>
                <li><Link href="/sales-app/rental">Rental</Link></li>
              </ul>
            </div>

            {/* Websites Section */}
            <div className="w-full z-50">
              <h3 className="font-semibold text-blue-600">WEBSITES</h3>
              <hr className="my-2 border-blue-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="/website/builder">Website Builder</Link></li>
                <li><Link href="/website/ecommerce">eCommerce</Link></li>
                <li><Link href="/website/blog">Blog</Link></li>
                <li><Link href="/website/forum">Forum</Link></li>
                <li><Link href="/website/livechat">Live Chat</Link></li>
                <li><Link href="/website/elearning">eLearning</Link></li>
              </ul>
            </div>

            {/* Supply Chain Section */}
            <div className="w-full z-50">
              <h3 className="font-semibold text-purple-700">SUPPLY CHAIN</h3>
              <hr className="my-2 border-purple-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="/supplychain/inventory">Inventory</Link></li>
                <li><Link href="/supplychain/manufacturing">Manufacturing</Link></li>
                <li><Link href="/supplychain/plm">PLM</Link></li>
                <li><Link href="/supplychain/purchase">Purchase</Link></li>
                <li><Link href="/supplychain/maintenance">Maintenance</Link></li>
                <li><Link href="/supplychain/quality">Quality</Link></li>
              </ul>
            </div>
            <div className="w-full z-50">
              <h3 className="font-semibold text-purple-700">Productivity</h3>
              <hr className="my-2 border-purple-200" />
              <ul className="space-y-1 text-gray-700">
                <li><Link href="/supplychain/inventory">Zoom</Link></li>
                <li><a href="https://notion-convex.vercel.app" target="_blank">
                  Journalize
                </a>
                </li>
                <li><Link href="/supplychain/plm">Slack</Link></li>
                <li><a href="http://localhost:3000" target="_blank">
                  Calendly
                    </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsDropdown;

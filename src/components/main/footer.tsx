import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ml-24">
          
          {/* Community Section */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Community</h2>
            <a href="#" className="hover:underline">Tutorials</a>
            <a href="#" className="hover:underline">Documentation</a>
            <a href="#" className="hover:underline">Forum</a>
            <a href="#" className="hover:underline">Project Planning</a>
          </div>

          {/* Open-Source Section */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Open-Source</h2>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">Runbot</a>
            <a href="#" className="hover:underline">Translation</a>
          </div>

          {/* Services Section */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Services</h2>
            <a href="#" className="hover:underline">Unimanage Hosting</a>
            <a href="#" className="hover:underline">Support</a>
            <a href="#" className="hover:underline">Upgrade</a>
            <a href="#" className="hover:underline">Custom Developments</a>
            <a href="#" className="hover:underline">Education</a>
            <a href="#" className="hover:underline">Find an Accountant</a>
          </div>

          {/* About Us Section */}
          <div className="flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">About Us</h2>
            <a href="#" className="hover:underline">Our Company</a>
            <a href="#" className="hover:underline">Brand Assets</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Customers</a>
            <a href="#" className="text-sm hover:underline">Legal • Privacy</a>
            <a href="#" className="text-sm hover:underline">Security</a>
          </div>
        </div>

        {/* Centered Logo */}
        <div className="flex flex-col items-center text-center mt-8">
          <Image src="/logo.png" alt="Company Logo" width={150} height={50} />
          <div className="text-sm mt-4">
            <p>
              Unimanage is a suite of open source business apps that cover all your company needs: CRM,<br />
              eCommerce, accounting, inventory, point of sale, project management, etc.
            </p>
            <p>
              Unimanage&apos;s unique value proposition is to be at the same time very easy to use and fully integrated.
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="hover:text-gray-400 flex items-center" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.672 0 0 .672 0 1.325v21.35C0 23.328.672 24 1.325 24h21.35C23.328 24 24 23.328 24 22.675V1.325C24 .672 23.328 0 22.675 0zM12 24V12h-3v-4h3V6c0-3.1 1.896-4.775 4.636-4.775 1.317 0 2.728.237 2.728.237v3h-1.538C16.91 4.462 16 5.347 16 7.186v2.814h4l-1 4h-3v12h-4z" />
            </svg>
            <span className="ml-1">Facebook</span>
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.6 0h-15.2C2.4 0 0 2.4 0 5.4v13.2C0 21.6 2.4 24 5.4 24h13.2c3 0 5.4-2.4 5.4-5.4V5.4C24 2.4 21.6 0 19.6 0zM7.2 20.4H3.6V9h3.6v11.4zm-1.8-13.2c-1.2 0-2.4-1.2-2.4-2.4 0-1.2 1.2-2.4 2.4-2.4 1.2 0 2.4 1.2 2.4 2.4s-1.2 2.4-2.4 2.4zm16.8 13.2h-3.6V14.4c0-1.8-.6-3-2.1-3s-2.4 1.2-2.4 3v6h-3.6V9h3.6v1.5c1.2-1.8 3.6-1.8 4.8-1.8 3.6 0 5.4 2.4 5.4 5.4v6z" />
            </svg>
            <span className="ml-1">LinkedIn</span>
          </a>
          <a href="#" className="hover:text-gray-400 flex items-center" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.801 8.207 11.387.6.11.793-.261.793-.577 0-.285-.011-1.043-.016-2.052-3.338.725-4.048-1.606-4.048-1.606-.546-1.38-1.33-1.749-1.33-1.749-1.087-.743.083-.729.083-.729 1.203.085 1.837 1.233 1.837 1.233 1.067 1.831 2.8 1.304 3.482.997.108-.772.418-1.304.762-1.604-2.665-.303-5.467-1.331-5.467-5.92 0-1.308.469-2.376 1.237-3.21-.124-.303-.537-1.529.115-3.176 0 0 1.008-.322 3.301 1.227A11.55 11.55 0 0112 3.1c1.025.005 2.057.138 3.021.404 2.292-1.55 3.298-1.227 3.298-1.227.654 1.647.241 2.873.118 3.176.771.834 1.237 1.903 1.237 3.21 0 4.601-2.807 5.615-5.479 5.912.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .319.192.692.798.573C20.565 21.799 24 17.301 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="ml-1">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Image from 'next/image';

const BusinessAppsSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700  ">
      <div className="bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700  max-w p-28 text-center">
        {/* Title Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-black p-8">
          Every great achievement starts with a simple, <span className="text-orange-400">well chosen tool.</span>
        </h2>
        <p className="text-gray-950 text-lg mb-8 text-grey-500 font-bold">
          Looking to upgrade? There&apos;s an app that can help.<br />
          <span className="text-[#222831]">Every challenge has a solution—just one app away.</span>
        </p>

        {/* Subtext Section */}
        <p className="text-black text-lg mb-12">
          Each app simplifies a process and empowers more people.<br />
          Imagine the impact when everyone gets the right tool for the job, with perfect integration.
        </p>

        {/* Quote Section with Hover Animation */}
        <div
          className="relative bg-gray-200 p-6 shadow-lg rounded-lg max-w-2xl mx-auto mt-20 
          cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/businessman.png" // Replace with the actual image path
                alt="Person"
                width={64}
                height={64}
              />
            </div>
            {/* Unicode Light Bulb Icon */}
            
          </div>

          {/* Quote Text */}
          <blockquote className="text-gray-700 italic font-medium text-lg">
          &quot;If you simplify everything, you can do anything!&quot;
          </blockquote>
          <p className="text-gray-500 text-sm mt-2">
            - Ratan Tata, former Chairman of Tata Group
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessAppsSection;

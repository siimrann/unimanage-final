'use client';
// Demo.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from '@/components/main/navbar';

const Demo = () => {
  const router = useRouter();

  const plans = [
    {
      title: "Journalize",
      description: "Explore the basic features with this pack",
      price: "Free",
      period: "",
      features: [
        "Note taking",
        "Custom template",
        "Task Management",
        "Best support",
        "Basic tutorials",
      ],
      link: "https://notion-convex.vercel.app/", // Link for the first button
    },
    {
      title: "Journalize",
      description: "Experience advanced features tailored for teams.",
      price: "24$/month",
      period: "",
      features: [
        "Note taking",
        "Custom template",
        "Task Management",
        "Best support",
        "Basic tutorials",
      ],
      link: "https://notion-convex.vercel.app/", // Link for the second button
    },
    {
      title: "Calendly",
      description: "Full access to all features",
      price: "Free",
      period: "",
      features: [
        "Full configuration",
        "Unlimited access",
        "100+ users",
        "Dedicated support",
        "Meeting Scheduling",
      ],
      link: "http://localhost:3000/", // Link for the third button
    },
  ];

  const handleBack = () => {
    router.push("/"); // Go back to the main page
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center px-4 py-12 bg-gradient-to-r from-white via-indigo-50 to-white">
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 p-2 text-white bg-gradient-to-r from-pink-700 to-pink-400 rounded-full hover:bg-blue-600"
        aria-label="Back to main page"
      >
        <ArrowLeft size={24} />
      </button>

      <h2 className="text-xl font-bold text-gray-900 md:text-3xl text-center mt-8">
        Demo Plans <span className="text-pink-800">Tailored for Your Needs</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">
        Explore our demo plans designed to showcase our product&apos;s capabilities and help you choose the best fit for your business.
      </p>

      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-95 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
            <p className="mt-2 text-sm text-gray-600 text-center">{plan.description}</p>
            {plan.price && (
              <div className="my-3 text-xl font-bold text-gray-900">
                {plan.price}
                {plan.period && (
                  <span className="text-lg font-normal text-gray-600">
                    {plan.period}
                  </span>
                )}
              </div>
            )}
            <ul className="mb-3 space-y-2 text-sm text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-30 px-5 py-2 mt-auto text-lg text-black bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 rounded-lg hover:from-gray-300 hover:to-gray-100 transition text-center"
            >
              Try <span className="text-black">it</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;

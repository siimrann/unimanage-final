// components/main/FeatureSection.tsx

'use client';

import AccountingIcon from '@/app/icons/accounting.png';
import CRMIcon from '@/app/icons/crm.png';
import HRIcon from '@/app/icons/HR.png';
import InventoryIcon from '@/app/icons/Inventory.png';
import SalesIcon from '@/app/icons/Sales.png';
import SubscriptionsIcon from '@/app/icons/Subscription.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

const features = [
  {
    title: "Accounting",
    description: "Streamline your finances and maximize profitability.",
    iconSrc: AccountingIcon, // Adjust the path to your icon
  },
  {
    title: "CRM",
    description:  "Build stronger customer relationships and drive sales growth.",
    iconSrc: CRMIcon, // Adjust the path to your icon
  },
  {
    title: "Inventory",
    description: "Optimize stock management and reduce operational costs.",
    iconSrc: InventoryIcon, // Adjust the path to your icon
  },
  {
    title: "Human Resource",
    description: "Empower your workforce with efficient HR management.",
    iconSrc: HRIcon, // Adjust the path to your icon
  },
  {
    title: "Marketing",
    description: "Amplify your brand reach and increase customer engagement.",
    iconSrc: SalesIcon, // Adjust the path to your icon
  },
  {
    title: "Subscriptions",
    description:  "Boost recurring revenue with seamless subscription management.",
    iconSrc: SubscriptionsIcon, // Adjust the path to your icon
  },
];

export default function FeatureSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 mb-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Drive efficiency with <span className="text-pink-800">essential features</span></h2>
        <p className="text-lg text-center text-gray-950 mb-12">
          The product can personalize user experiences by understanding individual preferences and tailoring recommendations or content based on user behavior and historical data.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-b from-gray-300 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 mb-4 mx-auto">
                  <Image src={feature.iconSrc} alt={feature.title} width={48} height={48} />
                </div>
                <CardTitle className="text-center text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-500">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

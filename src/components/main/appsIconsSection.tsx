import { Switch } from "@/components/ui/switch"; // Assuming Switch component from ShadCN
import Image from 'next/image';
import { useState } from 'react';

// Icon Imports with Correct Paths
import AccountingIcon from '@/app/icons/accounting.png';
import CRMIcon from '@/app/icons/crm.png';
import DashboardIcon from '@/app/icons/Dashboard.png';
import DiscussIcon from '@/app/icons/Discuss.png';
import DocumentsIcon from '@/app/icons/Documents.png';
import FieldServiceIcon from '@/app/icons/Field Service.png';
import HelpdeskIcon from '@/app/icons/HelpDesk.png';
import HRIcon from '@/app/icons/HR.png';
import InventoryIcon from '@/app/icons/Inventory.png';
import KnowledgeIcon from '@/app/icons/Knowledge.png';
import EmailMarketingIcon from '@/app/icons/mail-marketting.png';
import ManufacturingIcon from '@/app/icons/manufacturing.png';
import PlanningIcon from '@/app/icons/planning.png';
import ProjectIcon from '@/app/icons/project.png';
import PurchaseIcon from '@/app/icons/Purchase.png';
import RentalIcon from '@/app/icons/Rental.png';
import { default as PointOfSaleIcon, default as SalesIcon } from '@/app/icons/Sales.png';
import SignIcon from '@/app/icons/Sign.png';
import SocialMarketingIcon from '@/app/icons/social_media_marketing.png';
import StudioIcon from '@/app/icons/Studio.png';
import SubscriptionsIcon from '@/app/icons/Subscription.png';
import TimesheetsIcon from '@/app/icons/TimeSheets.ico';
import WebsiteIcon from '@/app/icons/Website.ico';

const icons = [
  { name: 'Accounting', src: AccountingIcon },
  { name: 'Knowledge', src: KnowledgeIcon },
  { name: 'Sign', src: SignIcon },
  { name: 'CRM', src: CRMIcon },
  { name: 'Studio', src: StudioIcon },
  { name: 'Subscriptions', src: SubscriptionsIcon },
  { name: 'Rental', src: RentalIcon },
  { name: 'Point of Sale', src: PointOfSaleIcon },
  { name: 'Discuss', src: DiscussIcon },
  { name: 'Documents', src: DocumentsIcon },
  { name: 'Project', src: ProjectIcon },
  { name: 'Timesheets', src: TimesheetsIcon },
  { name: 'Field Service', src: FieldServiceIcon },
  { name: 'Planning', src: PlanningIcon },
  { name: 'Helpdesk', src: HelpdeskIcon },
  { name: 'Website', src: WebsiteIcon },
  { name: 'Social Marketing', src: SocialMarketingIcon },
  { name: 'Email Marketing', src: EmailMarketingIcon },
  { name: 'Purchase', src: PurchaseIcon },
  { name: 'Inventory', src: InventoryIcon },
  { name: 'Manufacturing', src: ManufacturingIcon },
  { name: 'Sales', src: SalesIcon },
  { name: 'HR', src: HRIcon },
  { name: 'Dashboard', src: DashboardIcon },
];

export default function AppIconsSection() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 py-2 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-between">
          {showImage ? (
            <div className="flex justify-center items-center h-full mt-4">
              <Image
                src="/Quickbooks.png" // Replace with the path to your image
                alt="Replacement Image"
                width={800}
                height={800}
                className="object-contain transform rotate-[360deg]" // Rotate 90 degrees to the right
              />
            </div>
          ) : (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 h-auto"
              style={{ paddingLeft: '5%', paddingRight: '5%' }}
            >
              {icons.map((app, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <div
                    className="shadow-lg flex items-center justify-center"
                    style={{ width: '60px', height: '60px' }}
                  >
                    <Image src={app.src} alt={app.name} width={36} height={36} />
                  </div>
                  <p className="text-xs font-medium mt-1 text-center">{app.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Switch component for toggling */}
      <div className="-mt-20 absolute bottom-20 right-4 flex items-center space-x-2 hidden sm:block">
        <span className="text-sm text-black font-bold">With Unimanage</span>
        <Switch checked={showImage} onCheckedChange={setShowImage} />
      </div>
    </div>
  );
}
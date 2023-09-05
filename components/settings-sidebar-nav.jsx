'use client';
import { useContext } from 'react';
import { ChevronRight } from 'lucide-react';

import { TabContext } from '@/context/tab-context';

import { dashboardConfig } from '@/config/dashoard';
import { cn } from '@/lib/utils';

const SettingsSidebar = () => {
  const { activeTab, setActiveTabHandler } = useContext(TabContext);

  return (
    <nav className="w-full h-[88.5vh] border-r-[0.5px] border-grey-90 mt-2">
      {dashboardConfig.settingsNav.map((item) => (
        <div
          key={item.title}
          onClick={() => setActiveTabHandler(item.name)}
          className={cn(
            `font-normal text-xs md:text-sm py-4 px-2 cursor-pointer mx-[9px] hover:font-medium trans rounded ${
              activeTab === item.name
                ? 'font-medium text-dark'
                : 'text-grey-100'
            }`
          )}
        >
          <div className="flex items-center justify-between">
            <span className="block">{item.title}</span>
            {activeTab === item.name && <ChevronRight />}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default SettingsSidebar;

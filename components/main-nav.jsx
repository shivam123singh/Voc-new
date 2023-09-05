'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SettingsIcon from '@/assets/icons/settings-icon.svg';
import AlertIcon from '@/assets/icons/alert-icon.svg';
import ProfileImage from '@/assets/icons/profile-img.png';

import { dashboardConfig } from '@/config/dashoard';
import { Menu } from 'lucide-react';

const MainNav = ({ setShowNav }) => {
  const pathname = usePathname();

  const renderTitle = () => {
    return dashboardConfig.sidebarNav.find((menu) => pathname.startsWith(menu.url))
      ?.title;
  };

  return (
    <div className="flex justify-between pt-4 lg:pt-8 pb-3 items-center px-6 z-10 cursor-pointer">
        <Menu className='sm:flex md:hidden' onClick={() => setShowNav(true)} />
        <p className="font-medium w-fit">{renderTitle()}</p>
      <div className="flex items-center">
        <Image src={SettingsIcon} alt="settings-icon" />
        <Image src={AlertIcon} alt="settings-icon" className="mx-3" />
        <Image
          src={ProfileImage}
          alt="user-profile-image"
          className="w-[28px] h-[28px] rounded-full"
        />
      </div>
    </div>
  );
};

export default MainNav;
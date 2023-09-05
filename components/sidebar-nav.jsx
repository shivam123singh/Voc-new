'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/icons/mtn-logo-yellow.svg';
import { dashboardConfig } from '@/config/dashoard';
import { X } from 'lucide-react';

const SidebarNav = ({ setShowNav, showNav }) => {
  const pathname = usePathname();

  return (
    <nav className={`w-[60%] z-50 md:w-[18%] lg:w-[16%] bg-secondary rounded-lg py-6 h-[98vh] overflow-y-hidden fixed md:ml-2 ease-in-out duration-300 ${showNav
      ? "ml-2"
      : "-translate-x-full md:translate-x-0"}`}>
      <div className="flex items-center px-6 mb-[54px] justify-between">
        <div className='flex items-center'>
          <Image src={Logo} alt="mtn-logo" />
          <h2 className="text-secondary-foreground font-light ml-2">VOC</h2>
        </div>

        <X color="#FFFFFF" className="sm:block md:hidden" onClick={() => setShowNav(false)} />
      </div>
      {dashboardConfig.sidebarNav.map((item) => (
        <Link href={item.url} key={item.title} onClick={() => setShowNav(false)}>
          <p
            className={`text-sm font-light py-4 px-6 cursor-pointer mx-[9px] hover:font-medium trans rounded ${
              pathname.startsWith(item.url)
                ? 'bg-grey font-medium text-secondary-foreground'
                : 'bg-none text-lightgrey'
            }`}
          >
            {item.title}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
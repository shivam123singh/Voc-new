import { TabProvider } from '@/context/tab-context';
import SettingsSidebar from '@/components/settings-sidebar-nav';

const SettingsLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-6 md:grid-cols-5 pt-20">
      <TabProvider>
        <div className="col-span-2 md:col-span-1">
          <SettingsSidebar />
        </div>
        <div className="col-span-4">{children}</div>
      </TabProvider>
    </div>
  );
};

export default SettingsLayout;

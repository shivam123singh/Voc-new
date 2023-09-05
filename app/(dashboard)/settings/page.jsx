'use client';
import { useContext } from 'react';
import { TabContext } from '@/context/tab-context';
import UserAccountForm from '@/components/user-account-form';
import UserAccounts from '@/components/user-accounts';

const Settings = () => {
  const { activeTab } = useContext(TabContext);

  const views = {
    account: <UserAccountForm className="w-full md:w-[60%] mx-auto pt-4 px-3" />,
    users: <UserAccounts className="w-[90%] mx-auto" />,
  };

  return (
    <div className="mt-2">
      <>{views[activeTab]}</>
    </div>
  );
};

export default Settings;

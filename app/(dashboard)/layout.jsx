"use client";
import { SurveyProvider } from "@/context/survey-context";
import React, { useState } from "react";

import SidebarNav from "@/components/sidebar-nav";
import MainNav from "@/components/main-nav";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="md:grid grid-cols-1 md:grid-cols-6 bg-dashboard md:min-h-screen">
      {showNav && (
        <div
          className="inset-0 w-full bg-[#000000] opacity-50 h-[100%] ease-in-out duration-300 fixed z-50"
          onClick={() => setShowNav(false)}
        ></div>
      )}

      <div className="col-span-1 py-2">
        <SidebarNav setShowNav={setShowNav} showNav={showNav} />
      </div>

      <div className="col-span-5 px-2 -mt-4 lg:mt-0">
        <div className="fixed w-full lg:w-[81%] bg-dashboard z-20 top-0">
          <MainNav setShowNav={setShowNav} />
          <div className="h-[0.5px] bg-[#C7D0D7]" />
        </div>
        <SurveyProvider>
          <div className="overflow-x-hidden h-full">{children}</div>
        </SurveyProvider>
      </div>
    </div>
  );
};

export default Layout;

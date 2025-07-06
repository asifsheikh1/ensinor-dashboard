"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex gap-0 h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {/* Sidebar for Small & Medium devices */}
      <div className={`${isSidebarOpen ? "block" : "hidden"} lg:hidden`}>
        {/* Popup Overlay */}
        <div onClick={() => setIsSidebarOpen(false)} className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-popup-overlay z-10"></div>
        <div className="max-w-2/3 absolute z-20 border w-fit">
          {/* Cross button */}
          <div className="absolute right-3 top-3">
            <button onClick={() => setIsSidebarOpen(false)}>
              <RxCross1 className="text-xl" />
            </button>
          </div>

          <Sidebar />
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <TopBar setIsSidebarOpen={setIsSidebarOpen} />
        {children}
      </main>
    </div>
  );
}

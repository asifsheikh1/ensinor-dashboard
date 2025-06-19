import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-0 h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {/* Sidebar for Small & Medium devices */}
      <>
        <div className="block lg:hidden absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-popup-overlay z-10"></div>
        <div className="block lg:hidden max-w-2/3 absolute z-20 border w-fit">
          {/* Cross button */}
          <div className="absolute right-3 top-3">
            <RxCross1 className="text-xl" />
          </div>

          <Sidebar />
        </div>
      </>
      <main className="flex-1 overflow-y-auto">
        <TopBar />
        {children}
      </main>
    </div>
  );
}

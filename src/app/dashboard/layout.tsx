import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-0 h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <TopBar />
        {children}
      </main>
    </div>
  );
}

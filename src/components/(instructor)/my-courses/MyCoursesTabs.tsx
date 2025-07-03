"use client";

import React from "react";

interface TabsProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function MyCoursesTabs({activeTab, setActiveTab}: TabsProps) {
  const tabs = [
    {name: "Course details", count: 3},
    {name: "Course media", count: 2},
    {name: "Curriculum", count: 0},
    {name: "Additional Information", count: 0}
  ];

  return (
    <div className="w-fit overflow-hidden p-1.5 bg-white rounded-lg flex items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`w-full text-nowrap focus:outline-none px-4 py-2 text-black-primary text-lg font-medium cursor-pointer ${
            tab.name === activeTab
              ? "bg-yellow-primary"
              : "bg-transparent hover:bg-[#e1e3e4]"
          } rounded-lg`}
        >
          {tab.name}{tab.count !== 0 && ` (${tab.count})`}
        </button>
      ))}
    </div>
  );
}

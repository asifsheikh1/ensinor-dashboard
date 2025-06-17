import React from "react";
import { HiPlus } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";

interface CVTabsProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function CVTabs({ activeTab, setActiveTab }: CVTabsProps) {
  const tabs = ["Education", "Experience", "Certifications", "Skills"];

  return (
    <section className="w-full space-y-6">
      <div className="w-full px-4 py-1.5 bg-white rounded-lg grid grid-cols-2 md:grid-cols-4 gap-6">
        {tabs.map((tab: string) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full px-4 py-2.5 rounded-lg cursor-pointer ${
              tab === activeTab ? "bg-yellow-primary" : "bg-gray-background"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {[0, 1].map((key: number) => (
          <div key={key} className="w-full p-4 bg-white space-y-8 rounded-xl">
            <div className="flex items-center justify-between w-full">
              <div className="space-y-2 ">
                <h2 className="text-2xl font-semibold text-black-normal">
                  Junior UX/UI Designer
                </h2>
                <p className="text-base font-normal text-black-normal">
                  Sparktech.agency- 2022-2025, Bangladesh
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Add */}
                <button
                  className={`w-full text-left px-4 py-2.5 border border-yellow-primary flex items-center gap-2 text-black-secondary rounded-lg cursor-pointer`}
                >
                  <HiPlus className="text-2xl" />

                  <span>Add Degree</span>
                </button>
                {/* Options */}
                <button
                  className={`w-fit text-left px-4 py-3  bg-yellow-primary flex items-center gap-2 text-black rounded-lg cursor-pointer`}
                >
                  <SlOptionsVertical className="text-lg" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-normal text-black-normal">
                Hello, my name is POLASH I am a professional graphic designer
                with over 3 years of experience.
              </p>

              <ul className="w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <li key={index}>
                      <p className="w-full text-nowrap px-2 py-1 rounded-sm bg-yellow-secondary">
                        landing Page
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

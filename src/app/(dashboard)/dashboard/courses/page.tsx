"use client";

import CourseCard from "@/components/common/CourseCard";
import Tabs from "@/components/courses/Tabs";
import SectionHeader from "@/components/SectionHeader";
import { CourseDataTypes } from "@/lib/types";
import React, { useState } from "react";

const inprogressData: CourseDataTypes = {
  title: "Professional Graphic Design",
  category: "Design",
  duration: "35h 07m",
  progress: 32,
};

const completedData: CourseDataTypes = {
  title: "Professional Graphic Design",
  category: "Design",
  duration: "35h 07m",
  progress: 100,
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState<string>("In Progress");

  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="My Courses"
        description="View and manage your enrolled courses"
        leftContent="form"
      />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Course Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((key: number) => (
          <CourseCard key={key} courseData={activeTab === "Completed" ? completedData : inprogressData} bgColor="white" />
        ))}
      </div>
    </div>
  );
}

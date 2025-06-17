import CompletedCourses from "@/components/dashboard/CompletedCourses";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import MonthlyProgress from "@/components/dashboard/MonthlyProgress";
import States from "@/components/dashboard/States";
import React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Stats */}
        <States />

        {/* Continue Learning */}
        <ContinueLearning />

        {/* Monthly Progress & Completed Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MonthlyProgress />

          <CompletedCourses />
        </div>
      </div>
    </div>
  );
}

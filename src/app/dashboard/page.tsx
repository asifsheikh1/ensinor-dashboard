import InstructorDashboard from "@/components/(instructor)/InstructorDashboard";
import StudentDashboard from "@/components/(student)/StudentDashboard";
import React from "react";

export default function Dashboard() {
  const userRole: string = 'instructor';

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      {userRole === 'student' && <StudentDashboard />}
      {userRole === 'instructor' && <InstructorDashboard />}
    </div>
  );
}

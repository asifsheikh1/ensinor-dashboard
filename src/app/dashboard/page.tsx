import InstructorDashboard from "@/components/(instructor)/InstructorDashboard";
import StudentDashboard from "@/components/(student)/StudentDashboard";
import { UserRole } from "@/lib/types";
import React from "react";

export default function Dashboard() {
  const userRole: UserRole = 'instructor';

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      {userRole === ('student' as UserRole) && <StudentDashboard />}
      {userRole === ('instructor' as UserRole) && <InstructorDashboard />}
    </div>
  );
}

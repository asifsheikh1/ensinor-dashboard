import StudentTable from "@/components/(instructor)/students/StudentTable";
import { PaginationBar } from "@/components/custom-ui/paginations/PaginationBar";
import SectionHeader from "@/components/SectionHeader";
import { StudentTypes } from "@/lib/types";
import Link from "next/link";
import React from "react";

const studentsData: StudentTypes = {
  _id: "#0",
  studentName: "Professional Graphic Design",
  image: "/images/dashboard/courses/course-1.png",
  address: "Dhaka",
  progress: 32,
  courses: 4300,
  enrolledDate: "28/05/2025",
};

const tHeads: string[] = [
  "Courses Name",
  "Enrolled",
  "Status",
  "Amount",
  "Action",
];

export default function Students() {
  return (
    <div className="p-6 space-y-6">
      <div className="p-6 bg-white rounded-xl">
        <div className="w-full flex items-center gap-6">
          <SectionHeader
            title="My Students List"
            description=""
            leftContent="null"
            options={{
              name: "link",
              content: "Invite Group",
              link: "#",
              type: "fill",
            }}
          />
          <Link href={"#"}>
            <button
              className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary font-semibold text-nowrap rounded-lg cursor-pointer`}
            >
              Invite Student
            </button>
          </Link>
        </div>

        {/* Student Table */}
        <StudentTable tHeads={tHeads} studentsData={studentsData} />
      </div>
      {/* Pagination Bar */}
      <PaginationBar />
    </div>
  );
}

"use client";

import { UserRole } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLink {
  name: string;
  url: string;
  icon: string;
}

const studentLinks: SidebarLink[] = [
  { name: "Dashboard", url: "/dashboard", icon: "/icons/dashboard.svg" },
  {
    name: "Courses",
    url: "/dashboard/students/courses",
    icon: "/icons/book.svg",
  },
  { name: "My CV", url: "/dashboard/students/cv", icon: "/icons/cv.svg" },
  {
    name: "Quizzes",
    url: "/dashboard/students/quizzes",
    icon: "/icons/intelligent.svg",
  },
  {
    name: "Grades",
    url: "/dashboard/students/grades",
    icon: "/icons/mark-sheet.svg",
  },
  {
    name: "Certifications",
    url: "/dashboard/students/certifications",
    icon: "/icons/certificate.svg",
  },
  {
    name: "Settings",
    url: "/dashboard/students/settings",
    icon: "/icons/settings.svg",
  },
];
const instructorLinks: SidebarLink[] = [
  { name: "Dashboard", url: "/dashboard", icon: "/icons/dashboard.svg" },
  {
    name: "Courses",
    url: "/dashboard/instructors/courses",
    icon: "/icons/book.svg",
  },
  {
    name: "Quiz",
    url: "/dashboard/instructors/quiz",
    icon: "/icons/intelligent.svg",
  },
  {
    name: "Students",
    url: "/dashboard/instructors/students",
    icon: "/icons/student.svg",
  },
  {
    name: "Reviews",
    url: "/dashboard/instructors/reviews",
    icon: "/icons/review.svg",
  },
  {
    name: "Payouts",
    url: "/dashboard/instructors/payouts",
    icon: "/icons/payment.svg",
  },
  {
    name: "Shop",
    url: "/dashboard/instructors/shop",
    icon: "/icons/shop.svg",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const userRole: UserRole = "instructor";

  return (
    <aside className="w-full h-screen overflow-y-auto md:w-[300px] bg-white p-6 flex flex-col shadow-md">
      {/* Logo */}
      <div className="flex items-center justify-between mb-6">
        <Image
          src="/images/logo.svg"
          alt="User"
          width={228}
          height={64}
          className="w-[228px] h-16"
        />
      </div>

      <nav className="flex-1 flex flex-col justify-between gap-6">
        {/* Top Links */}
        <ul className="space-y-8">
          {/* Student Links */}
          {userRole === ("student" as UserRole) &&
            studentLinks.map((link: SidebarLink) => (
              <li key={link.name}>
                <Link href={link.url}>
                  <button
                    className={`w-full text-left px-6 py-3.5 ${
                      link.url === pathname
                        ? "bg-yellow-primary"
                        : "bg-transparent hover:bg-hover-link"
                    } flex items-center gap-2 text-black-primary rounded-lg cursor-pointer`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={25}
                      height={25}
                      className="w-[25px] h-[25px]"
                    />
                    <span>{link.name}</span>
                  </button>
                </Link>
              </li>
            ))}
          {/* Instructor Links */}
          {userRole === ("instructor" as UserRole) &&
            instructorLinks.map((link: SidebarLink) => (
              <li key={link.name}>
                <Link href={link.url}>
                  <button
                    className={`w-full text-left px-6 py-3.5 ${
                      link.url === pathname
                        ? "bg-yellow-primary"
                        : "bg-transparent hover:bg-hover-link"
                    } flex items-center gap-2 text-black-primary rounded-lg cursor-pointer`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={25}
                      height={25}
                      className="w-[25px] h-[25px]"
                    />
                    <span>{link.name}</span>
                  </button>
                </Link>
              </li>
            ))}
        </ul>

        {/* Bottom Link */}
        <div>
          <button
            className={`w-full text-left px-6 py-3.5 border border-yellow-primary flex items-center gap-2 text-black-primary rounded-lg cursor-pointer`}
          >
            <Image
              src="/icons/logout.svg"
              alt="logout"
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
            />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}

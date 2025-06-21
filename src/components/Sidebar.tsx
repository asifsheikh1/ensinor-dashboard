"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLink {
  name: string;
  url: string;
  icon: string;
}

const sidebarLinks: SidebarLink[] = [
  { name: "Dashboard", url: "/dashboard", icon: "/icons/dashboard.svg" },
  { name: "Courses", url: "/dashboard/courses", icon: "/icons/book.svg" },
  { name: "My CV", url: "/dashboard/cv", icon: "/icons/cv.svg" },
  { name: "Quizzes", url: "/dashboard/quizzes", icon: "/icons/intelligent.svg" },
  { name: "Grades", url: "/dashboard/grades", icon: "/icons/mark-sheet.svg" },
  {
    name: "Certifications",
    url: "/dashboard/certifications",
    icon: "/icons/certificate.svg",
  },
  { name: "Settings", url: "/dashboard/settings", icon: "/icons/settings.svg" },
];

export default function Sidebar() {
  const pathname = usePathname();

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
          {sidebarLinks.map((link: SidebarLink) => (
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
              src='/icons/logout.svg'
              alt='logout'
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

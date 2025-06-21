"use client";

import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

interface SectionHeaderProps {
  title: string;
  description: string;
  leftContent: "form" | "download" | "viewCertification" | "null";
}

export default function SectionHeader({
  title,
  description,
  leftContent,
}: SectionHeaderProps) {
  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    console.log("Search text: ", event);
  };

  return (
    <section className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="space-y-[5px]">
        <h1 className="text-2xl font-semibold text-black-normal">{title}</h1>
        <p className="text-base font-normal text-black-primary">
          {description}
        </p>
      </div>

      <>
        {leftContent === "form" && (
          <form
            onSubmit={handleSearch}
            className="w-full max-w-[550px] h-fit flex justify-center items-center relative"
          >
            <IoSearch className="text-xl text-[#262626] absolute left-4" />
            <input
              type="text"
              placeholder="Search Courses"
              className="w-full h-[60px] px-4 py-2 pl-12 bg-white text-[#262626] placeholder:text-[#909090] rounded-l-full border border-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-[145px] h-[60px] bg-yellow-primary text-[#262626] font-semibold px-6 py-2 rounded-r-full hover:bg-yellow-500 transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>
        )}

        {leftContent === "download" && (
          <button
            className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg flex items-center gap-2.5`}
          >
            Download PDF
            <MdOutlineFileDownload className="text-2xl" />
          </button>
        )}

        {leftContent === "viewCertification" && (
          <button
            className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-white rounded-lg flex items-center gap-2.5`}
          >
            <Image
              src="/icons/certificate.svg"
              alt="Calendar"
              width={23}
              height={23}
            />
            <span> View Certification</span>
          </button>
        )}
      </>
    </section>
  );
}

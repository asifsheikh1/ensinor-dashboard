"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";
import {
  CreateNewCourseButton,
  DownloadButton,
  SearchForm,
  SimpleSearchForm,
  ViewCertificationButton,
} from "@/components/custom-ui/buttons/buttons";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  description: string;
  leftContent:
    | "form"
    | "simpleSearchForm"
    | "download"
    | "viewCertification"
    | "createNewCourse"
    | "null";
  options?: {
    name: "button" | "link" | "text";
    content: string;
    link?: string;
  };
}

export default function SectionHeader({
  title,
  description,
  leftContent,
  options = { name: "text", content: "", link: "" },
}: SectionHeaderProps) {
  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    console.log("Search text: ", event);
  };

  return (
    <section className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="w-full space-y-[5px]">
        <h1 className="text-2xl font-semibold text-black-normal">{title}</h1>
        <p className="text-base font-normal text-black-primary">
          {description}
        </p>
      </div>

      <>
        {leftContent === "form" && <SearchForm handleSearch={handleSearch} />}

        {leftContent === "download" && <DownloadButton />}

        {leftContent === "viewCertification" && <ViewCertificationButton />}

        {leftContent === "createNewCourse" && (
          <div className="flex items-center gap-8">
            {/* Search form */}
            <SimpleSearchForm handleSearch={handleSearch} />
            {/* Button */}
            <Link href={"/dashboard/instructors/courses/create-new-course"}>
              <CreateNewCourseButton />
            </Link>
          </div>
        )}
        {leftContent === "simpleSearchForm" && (
          <div className="w-full flex items-center lg:justify-end gap-6">
            <SimpleSearchForm handleSearch={handleSearch} />

            {/* Option Button */}
            {options?.name && options?.name === "button" && (
              <>
                {options?.link ? (
                  <Link href={options.link}>
                    <button
                      className={`w-full text-left px-6 py-3.5 border border-yellow-primary flex items-center gap-2 text-black-primary rounded-lg cursor-pointer`}
                    >
                      {options.content}
                    </button>
                  </Link>
                ) : (
                  <button
                    className={`w-fit text-left px-6 py-3.5 bg-yellow-primary flex items-center gap-2 text-black-primary rounded-lg cursor-pointer`}
                  >
                    {options.content}
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </>
    </section>
  );
}

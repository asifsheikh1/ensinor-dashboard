"use client";

import { StudentTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { CgUnblock } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { MdMailOutline } from "react-icons/md";

interface StudentTableProps {
  tHeads: string[];
  studentsData: StudentTypes;
}

export default function StudentTable({
  tHeads,
  studentsData,
}: StudentTableProps) {
  return (
    <div className="flex flex-col mt-6">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-lg">
              {/* T Head */}
              <thead className="bg-gray-background rounded-xl py-2">
                <tr>
                  {tHeads.map((head: string) => (
                    <th
                      key={head}
                      scope="col"
                      className="py-3.5 px-4 font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              {/* T Body */}
              <tbody className="">
                {Array.from({ length: 8 }).map(() => (
                  <tr
                    key={studentsData._id}
                    className="border-b border-[#606060]"
                  >
                    {/* Course Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={studentsData.image}
                          alt={studentsData.studentName}
                          width={62}
                          height={40}
                          className="w-[62px] h-10 rounded-xs"
                        />
                        <div className="space-y-2 text-black-primary">
                            <p className="text-base font-semibold">{studentsData.studentName}</p>
                            <p className="flex items-center gap-1">
                                <CiLocationOn className="text-lg" />
                                <span className="text-sm">{studentsData.address}</span>
                            </p>
                        </div>
                      </div>
                    </td>
                    {/* Progress */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{studentsData.progress}% Complete</p>
                      </div>
                    </td>
                    {/* Courses */}
                    <td className="px-6 py-4">
                      <div>
                        <span>
                          {studentsData.courses}
                        </span>
                      </div>
                    </td>
                    {/* Enrolled date */}
                    <td className="px-6 py-4">
                      <div>
                        <p>{studentsData.enrolledDate}</p>
                      </div>
                    </td>
                    {/* Action */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <button className="cursor-pointer  text-[#4BB54B] bg-[#C6E5C6] p-1.5 rounded-full">
                          <MdMailOutline className="text-2xl" />
                        </button>
                        <button className="cursor-pointer  text-[#D70000] bg-[#FF53536B] p-1 rounded-full">
                          <CgUnblock className="text-[26px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

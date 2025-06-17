import Image from "next/image";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";

export default function TopBar() {
  return (
    <section className="w-full h-[80px] bg-white px-6 flex justify-between items-center shadow-md">
      <h2 className="text-[32px] font-bold text-black-primary flex items-center gap-2">
        <IoMenuOutline className="text-5xl" />
        <span>Settings</span>
      </h2>
      {/* User Image */}
      <div className="w-fit h-fit border-2 border-[#FFB000] rounded-full">
        <Image
          src="/images/dashboard/user.jpg"
          alt="User"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full"
        />
      </div>
    </section>
  );
}

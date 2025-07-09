"use client";

import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "@/custom-style/style.css";
import Image from "next/image";

interface SpeakerTypes {
  name: string;
  designation: string;
  thumbnail: string;
}
interface EventScheduleTypes {
  name: string;
  date: string;
  thumbnail: string;
}

const speakers: SpeakerTypes[] = [
  { name: "Muskan Tanaz", designation: "UX Design Lead", thumbnail: "/images/dashboard/user-2.png" },
  { name: "Muskan Tanaz", designation: "UX Design Lead", thumbnail: "/images/dashboard/user-2.png" },
];

const eventSchedule: EventScheduleTypes[] = [
  { name: "Day-01", date: "Friday, 6 Jun, 2025", thumbnail: "/images/dashboard/user-2.png" },
  { name: "Day-02", date: "Friday, 6 Jun, 2025", thumbnail: "/images/dashboard/user-2.png" },
  { name: "Day-03", date: "Friday, 6 Jun, 2025", thumbnail: "/images/dashboard/user-2.png" },
];

export default function CreateEventAndSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [value, onChange] = useState<string | null>("10:00");
  const handleSubmit = () => {};

  return (
    <div className="p-6 space-y-6">
      <CardContent>
        <form onSubmit={handleSubmit} className="text-lg space-y-6">
          {/* 1st field group */}
          <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
            {/* Event Title */}
            <div className="md:col-span-2 grid gap-3">
              <Label htmlFor="fullName" className=" text-lg">
                Event Title
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Type event name "
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* Short Slogan */}
            <div className="md:col-span-2 grid gap-3">
              <Label htmlFor="fullName" className=" text-lg">
                Short Slogan
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Type short slogan "
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* Event thumbnails */}
            <div className="md:col-span-2 grid gap-3">
              <Label htmlFor="phoneNumber" className=" text-lg">
                Event thumbnails
              </Label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center w-full p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>

                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                  Upload course image here, or{" "}
                  <span className="text-[#5F83FA]">Browse</span>
                </h2>

                <p className="mt-2 text-sm tracking-wide text-gray-500 dark:text-gray-400">
                  Note: Only JPG, JPEG and PNG. Our suggested dimensions are
                  600px * 450px. Larger image will be cropped to 4:3 to fit our
                  thumbnails/previews.
                </p>

                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          {/* 2nd field group */}
          <div className="w-full p-6 bg-white rounded-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
              {/* Event Organized by */}
              <div className="lg:col-span-3 grid gap-3">
                <Label htmlFor="fullName" className=" text-lg">
                  Event Organized by
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Type organizer name "
                  className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                  required
                />
              </div>
              {/* Event price */}
              <div className="lg:col-span-3 grid gap-3">
                <Label htmlFor="fullName" className=" text-lg">
                  Event price
                </Label>
                <Input
                  id="fullName"
                  type="number"
                  placeholder="Enter event price"
                  className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                  required
                />
              </div>
              {/* Locations */}
              <div className="lg:col-span-2 grid gap-3">
                <Label htmlFor="fullName" className=" text-lg">
                  Locations
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="1205 Modhubag, Dhaka "
                  className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                  required
                />
              </div>
              {/* Date */}
              <div className="lg:col-span-2 grid gap-3">
                <Label htmlFor="birthDate" className="text-lg">Date Of Birth</Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date ? date : new Date())}
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                />
              </div>
              {/* Time */}
              <div className="lg:col-span-2 grid gap-3">
                <Label htmlFor="fullName" className=" text-lg">
                  Time
                </Label>
                <TimePicker
                  onChange={onChange}
                  value={value}
                  className="w-full h-[60px] px-5 py-4 bg-[#FFFFFF] text-[#2D2D2D] placeholder:text-[#999999] shadow-none border border-[#E6E6E6] rounded-[8px] input-field-text"
                />
              </div>
            </div>
            {/* Event Description */}
            <div className="lg:col-span-2 grid gap-3">
              <Label htmlFor="fullName" className=" text-lg">
                Event Description
              </Label>
              <Textarea
                id="fullName"
                placeholder="Type the event description here..."
                className="w-full h-[200px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
          </div>

          {/* 3rd field group */}
          <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
            {/* Speakers Slogan */}
            <div className="md:col-span-2 grid gap-3">
              <Label htmlFor="fullName" className=" text-lg">
                Speakers Slogan
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Type speakers slogan"
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* Speakers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakers.map((speaker: SpeakerTypes, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-gray-background rounded-lg flex items-center gap-4"
                >
                  <Image
                    src={speaker.thumbnail}
                    alt={speaker.name}
                    width={80}
                    height={62}
                    className="w-20 h-[62px]"
                  />
                  <div>
                    <h6 className="text-lg font-semibold text-black-normal">
                      {speaker.name}
                    </h6>
                    <p className="text-black-secondary">
                      {speaker.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4th field group */}
          <div className="w-full p-6 bg-white rounded-xl grid grid-cols-1 gap-6 md:gap-8">
            {/* Schedule Slogan */}
            <div className="grid gap-3">
              <Label htmlFor="fullName" className=" text-lg">
                Schedule Slogan
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Type schedule slogan"
                className="w-full h-[60px] px-3 py-2.5 bg-[#FFFFFF] text-black-normal text-base rounded-lg placeholder:text-[#999999] shadow-none border border-[#E6E6E6] input-field-text"
                required
              />
            </div>
            {/* Event Schedule */}
            <div className="grid grid-cols-1 gap-3">
              {eventSchedule.map((speaker: EventScheduleTypes, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-gray-background rounded-lg flex items-center gap-4"
                >
                  <Image
                    src={speaker.thumbnail}
                    alt={speaker.name}
                    width={80}
                    height={62}
                    className="w-20 h-[62px]"
                  />
                  <div>
                    <h6 className="text-lg font-semibold text-black-normal">
                      {speaker.name}
                    </h6>
                    <p className="text-black-secondary">
                      {speaker.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="col-span-2 w-full bg-yellow-primary text-black-primary text-lg font-medium py-3 rounded-lg hover:bg-yellow-500 cursor-pointer">
            Upload
          </button>
        </form>
      </CardContent>
    </div>
  );
}

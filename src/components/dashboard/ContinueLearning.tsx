import Image from "next/image";
import React from "react";

export default function ContinueLearning() {
  return (
    <section className="w-full bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-2xl font-semibold mb-6">Continue Learning</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[0, 1, 2].map((key: number) => (
          <div key={key} className="bg-gray-background p-6 rounded-xl space-y-4">
            <Image
              src="/images/dashboard/course-card.jpg"
              alt="Course"
              width={504}
              height={230}
              className="w-full h-auto mx-auto mb-2 rounded-xl"
            />
            <h4 className="text-xl text-black-primary font-semibold">Professional Graphic Design</h4>
            <p className="text-black-primary text-base font-normal">Design</p>
            <p className="text-sm font-normal text-black-secondary flex items-center justify-between">
                <span>0:36h 07m</span>
                <span>32% Complete</span>
            </p>
            <div className="w-full bg-gray-200 rounded">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: "32%" }}
              ></div>
            </div>
            <button className="mt-2 w-full bg-black text-white py-2.5 rounded-xl cursor-pointer">
              Continue
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

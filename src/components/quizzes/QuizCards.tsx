import { QuizTypes } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface QuizCardsProps {
  quizzesData: QuizTypes[];
}

export default function QuizCards({ quizzesData }: QuizCardsProps) {
  return (
    <section className="space-y-4">
      {quizzesData.map((quiz) => (
        <div
          key={quiz.quizName}
          className="w-full bg-white p-4 rounded-xl flex items-center justify-between gap-"
        >
          <div className="w-full space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-black-normal">
                {quiz.quizName}
              </h2>

              <div className="w-full flex items-center justify-between">
                {/* Date */}
                <p className="flex items-center gap-2">
                  <Image
                    src="/icons/calendar.svg"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Due: {quiz.date}</span>
                </p>
                {/* Duration */}
                <p className="flex items-center gap-2">
                  <Image
                    src="/icons/clock.svg"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Time limit: {quiz.duration}</span>
                </p>
                {/* Questions || Corrected Answers */}
                <>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/question.svg"
                      alt="Calendar"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span>Questions: {quiz.totalQuestion}</span>
                  </p>

                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/success.svg"
                      alt="Calendar"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span>
                      {quiz.corrected} of {quiz.totalQuestion} correct
                    </span>
                  </p>
                </>
              </div>
            </div>
            <p className="text-base font-normal text-black-normal">
              Attended: {quiz.attendance}
            </p>
          </div>
          <>
            {quiz.answeringStatus === "answered" ? (
              <div className="space-y-5">
                <div className="space-y-1">
                  {<h5 className="text-[#00A349] text-xl font-bold">95%</h5>}
                  {<h5 className="text-[#D77200] text-xl font-bold">95%</h5>}
                  <p className="text-sm font-normal text-black-secondary">
                    Score
                  </p>
                </div>
                <button className="px-3 5 py-3 bg-yellow-primary text-base font-normal text-black-semibold rounded-lg text-black-secondary">
                  Re-start
                </button>
              </div>
            ) : (
              <button className="px-3 5 py-3 bg-yellow-primary text-base font-normal text-black-semibold rounded-lg text-black-secondary">
                Start Quiz
              </button>
            )}
          </>
        </div>
      ))}
    </section>
  );
}

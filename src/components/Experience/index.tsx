"use client";
import { experienceProps } from "@/common/types";
import { ExperienceList } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";

export default function Experience() {
  const [company, setCompany] = useState<string>(ExperienceList[0].company);
  const handleCompanyClick = (newCompany: string) => {
    setCompany(newCompany);
  };
  return (
    <div className="h-full" id="work">
      <div className="text-5xl font-bold uppercase flex justify-center">
        Experience
      </div>
      <div className="flex gap-10 justify-center items-stretch my-20 h-fit">
        <div className="flex flex-col items-center">
          {ExperienceList.map((experienceEntry: experienceProps) => {
            return (
              <div key={experienceEntry.company} className="mb-8 text-3xl">
                <div
                  className={`${
                    experienceEntry.company === company
                      ? "text-secondary font-semibold underline"
                      : ""
                  } cursor-pointer`}
                  onClick={() => handleCompanyClick(experienceEntry.company)}
                >
                  {experienceEntry.company}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-0.5 h-max bg-black" />
        <div className="w-[500px]">
          {ExperienceList.map((experienceEntry: experienceProps) => {
            if (experienceEntry.company === company) {
              return (
                <div key={experienceEntry.company} className="mb-8">
                  <div className="text-3xl font-semibold mb-5">
                    {experienceEntry.role}{" "}
                    <span className="text-secondary">
                      @ {experienceEntry.company}
                    </span>
                  </div>
                  <div className="">{experienceEntry.timeline}</div>
                  <div className="mb-2">{experienceEntry.location}</div>
                  {experienceEntry.bullets.map((bullet: string) => {
                    return (
                      <li
                        key={bullet}
                        className="marker:text-secondary text-lg"
                      >
                        {bullet}
                      </li>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

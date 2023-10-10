import { experienceProps } from "@/common/types";
import { ExperienceList } from "@/utils/constants";

export default function Experience() {
  return (
    <div className="flex justify-center mt-20 md:flex-row flex-col" id="work">
      <div className="text-4xl md:mr-28 font-semibold">Experience</div>
      <div className="md:w-5/12 w-5/6 md:m-0 my-5 ml-3">
        {ExperienceList.map((experienceEntry: experienceProps) => {
          return (
            <div key={experienceEntry.company} className="mb-8">
              <div className="text-2xl font-medium">
                {experienceEntry.company}
              </div>
              <div className="text-xl">{experienceEntry.role}</div>
              <div className="">{experienceEntry.timeline}</div>
              <div className="mb-2">{experienceEntry.location}</div>
              {experienceEntry.bullets.map((bullet: string) => {
                return <li key={bullet}>{bullet}</li>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

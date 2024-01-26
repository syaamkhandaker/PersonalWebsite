import { projectProps } from "@/common/types";
import { ProjectList } from "@/utils/constants";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      className="flex justify-center mt-20 md:flex-row flex-col"
      id="projects"
    >
      <div className="text-4xl md:mr-28 font-semibold">Projects</div>
      <div className="md:w-5/12 w-11/12 md:m-0 my-5">
        {ProjectList.map((projectEntry: projectProps) => {
          return (
            <div
              key={projectEntry.name}
              className="hover:bg-gray-200 rounded-2xl mb-5"
            >
              <Link href={projectEntry.url} className="" target="_blank">
                <div className="p-8">
                  <div className="text-xl font-medium">{projectEntry.name}</div>
                  <div className="mb-2">{projectEntry.timeline}</div>
                  <div>{projectEntry.text}</div>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {projectEntry.skills.map((skill: string) => {
                      return (
                        <div
                          className="p-2 rounded-2xl border-[1px] border-black w-fit"
                          key={skill}
                        >
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { projectProps } from "@/common/types";
import { ProjectList } from "@/utils/constants";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col" id="projects">
      <div className="text-5xl flex justify-center font-semibold uppercase mb-20">
        Projects
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-wrap gap-5 w-3/4">
          {ProjectList.map((projectEntry: projectProps) => {
            return (
              <div
                key={projectEntry.name}
                className="border-secondary hover:bg-gray-200 border-4 rounded-2xl mb-5 w-96"
              >
                <Link href={projectEntry.url} className="" target="_blank">
                  <div className="p-8">
                    <div className="text-3xl font-semibold ">
                      {projectEntry.name}
                    </div>
                    <div className="mb-2 text-lg">{projectEntry.timeline}</div>
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
    </div>
  );
}

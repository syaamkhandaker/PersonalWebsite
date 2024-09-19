import { ChevronRight } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-full my-10" id="contact">
      <div className="flex justify-center text-5xl font-semibold uppercase mb-10">
        Get In Touch
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-11/12 md:w-5/12 text-center text-2xl font-extralight">
          Whether you&apos;d like to reach out to me for any potential new
          opportunities or just have questions about my experiences, my inbox is
          always open. I&apos;m currently still looking for any
          internships/part-time opportunities throughout the 2024-2025 school
          year.
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          href={"mailto:syaamkhandaker@gmail.com?subject=Hello"}
          target="_blank"
          className="py-4 px-6 bg-secondary rounded-xl text-white font-bold text-2xl shadow-md transition duration-100 ease-linear hover:scale-110 mt-5"
        >
          Contact <ChevronRight />
        </Link>
      </div>
      <div className="flex justify-center py-6 absolute bottom-5 ">
        <Link
          href="https://github.com/syaamkhandaker/PersonalWebsite"
          className="text-xs relative"
        >
          Designed & Built by Syaam Khandaker
        </Link>
      </div>
    </div>
  );
}

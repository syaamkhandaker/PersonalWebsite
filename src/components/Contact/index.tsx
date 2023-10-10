import { ChevronRight } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="my-10" id="contact">
      <div className="flex justify-center text-3xl font-semibold">
        Get In Touch
      </div>
      <div className="flex justify-center mt-5">
        <div className="text-lg w-5/6 md:w-1/3 text-center">
          Whether you&apos;d like to reach out to me for any potential new
          opportunities or just have questions about my experiences, my inbox is
          always open. I&apos;m currently still looking for any
          internships/part-time opportunities throughout the 2023-2024 school
          year.
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          href={"mailto:syaamkhandaker@gmail.com?subject=Hello"}
          target="_blank"
          className="bg-gray-200 px-6 py-3 rounded-2xl flex items-center"
        >
          Contact <ChevronRight />
        </Link>
      </div>
    </div>
  );
}

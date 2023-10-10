import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function Icons() {
  return (
    <div className="md:fixed left-[1/24] bottom-6">
      <div className="flex gap-5">
        <Link href={"https://github.com/syaamkhandaker"} target="_blank">
          <GitHubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/syaamkhandaker/"}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href={"mailto:syaamkhandaker@gmail.com?subject=Hello"}
          target="_blank"
        >
          <EmailIcon />
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center py-6">
      <Link
        href="https://github.com/syaamkhandaker/PersonalWebsite"
        className="text-xs"
      >
        Designed & Built by Syaam Khandaker
      </Link>
    </div>
  );
}

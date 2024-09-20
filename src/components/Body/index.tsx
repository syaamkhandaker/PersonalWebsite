import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

export default function Body() {
  return (
    <div className="h-full">
      <Nav />
      <div className="flex justify-center items-center mt-20">
        <div className="flex justify-center h-full">
          <Image
            src={"/photo.png"}
            width={500}
            height={500}
            alt="Photo of me :)"
          />
        </div>
        <div className="bg-white w-[500px] h-fit p-14 flex items-center flex-col -translate-x-32 translate-y-60">
          <div className="text-5xl font-bold py-10">Hey There!</div>
          <div className="text-2xl text-center">
            I’m Syaam, a junior studying Computer Science at Georgia Tech. Check
            out my portfolio to see the cool stuff I'm working on.
          </div>
          <Link
            href={"resume.pdf"}
            target="_blank"
            className="py-4 px-6 bg-secondary rounded-xl text-white font-bold text-2xl shadow-md transition duration-100 ease-linear hover:scale-110 mt-10"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

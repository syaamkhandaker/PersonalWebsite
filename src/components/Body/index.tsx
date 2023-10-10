import Image from "next/image";

export default function Body() {
  return (
    <div className="flex my-10 justify-center md:flex-row flex-col" id="about">
      <div className="flex justify-end md:mr-28">
        <Image
          src={"/photo.png"}
          width={400}
          height={400}
          className="rounded-full min-w-full"
          alt=""
        />
      </div>
      <div className=" md:w-1/3 flex justify-end items-center md:m-0 mt-10">
        <div>
          <div className="text-5xl md:text-7xl font-semibold mb-3 text-center">
            Hey there!
          </div>
          <div className="md:text-left text-center">
            I&apos;m a Computer Science sophomore at Georgia Tech. Check out my
            portfolio to see the cool stuff I&apos;m working on. I&apos;m all
            about creating projects that actually matter to people.
          </div>
        </div>
      </div>
    </div>
  );
}

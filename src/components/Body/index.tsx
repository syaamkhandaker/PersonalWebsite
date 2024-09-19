import Image from "next/image";
import Nav from "./Nav";

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
        <div className="bg-white w-[500px] h-[400px] p-10 flex items-center flex-col -translate-x-32 translate-y-60">
          <div className="text-5xl font-bold py-10">Hey There!</div>
          <div className="text-2xl text-center">
            I’m Syaam, a rising junior studying Computer Science at Georgia
            Tech. Check out my portfolio to see the cool stuff I'm working on.
          </div>
        </div>
      </div>
    </div>
  );
}

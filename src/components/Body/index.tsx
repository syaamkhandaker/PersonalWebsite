import Image from "next/image";
import Nav from "./Nav";

export default function Body() {
  return (
    <div className="h-full">
      <Nav />
      <div className="flex justify-center items-center">
        <div className="flex justify-center h-full">
          <Image
            src={"/photo.png"}
            width={400}
            height={400}
            alt="Photo of me :)"
          />
        </div>
      </div>
    </div>
  );
}

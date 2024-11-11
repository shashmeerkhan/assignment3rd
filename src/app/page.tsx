import Image from "next/image";
import pic1 from "../app/pictures/pic1.png";

export default function Home() {
  return (
    <div className="parent flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[var(--bgcolor)]  lg:px-8 overflow-hidden">
      {/* Text Section */}
      <div className="myname text-center lg:text-center  lg:mr-8 ">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#fcf6f6] mb-4">
          Hi, I am <span className="text-[#2a27ce] max-sm:text-xl"><br /> Shahmeer Khan</span>
        </h2>
        <h2 className="text-xl lg:text-3xl font-semibold text-[#fcf6f6]">A WEBSITE DEVELOPER</h2>
      </div>

      {/* Image Section */}
      <div className="mypic mt-8 lg:mt-0">
        <Image
          src={pic1}
          alt="Shahmeer Khan"
          width={600}
          height={400}
          className="rounded-lg "
        />
      </div>
    </div>
  );
}

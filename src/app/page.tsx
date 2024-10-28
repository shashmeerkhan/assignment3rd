import Image from "next/image";
import pic1 from "../app/pictures/pic1.png";

export default function Home() {
  return (
    <div className="parent">
      <div className="myname">
        <h1>
          Hi, <br />I am <span className="myspan">Shahmeer Khan</span>
        </h1>
        <h1>A WEBSITE DEVOLEPER</h1>
      </div>
      <div className="mypic">
        <Image src={pic1} alt="Shahmeer Khan" width={600} height={400} />
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo"> Shahmeer Khan</div>
        <nav>
          <Link href={"./"}>
            {" "}
            <button className="menuLinks" id="menuLinks">
              Portfolio
            </button>
          </Link>
          <Link href={"./about-us"}>
            {" "}
            <button className="menuLinks">About</button>
          </Link>
          <Link href={"./contact-us"}>
            {" "}
            <button className="menuLinks">Contact</button>
          </Link>
          <div className="menu-icon" id="menu-icon">
            &#9776;
          </div>
        </nav>
      </header>
     
    </div>
  );
}

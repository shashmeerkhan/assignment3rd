import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-[#2a27ce] px-4">
      {/* Navbar Start: Logo and Mobile Menu Button */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#2a27ce] rounded-box w-52 z-[1]"
          >
            <li>
              <Link href="/">
                <button className="text-white hover:text-orange-500">Portfolio</button>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <button className="text-white hover:text-orange-500">About</button>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <button className="text-white hover:text-orange-500">Projects</button>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <button className="text-white hover:text-orange-500">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-white text-xl ">
          Shahmeer Khan
        </a>
      </div>

      {/* Navbar Center: Menu Links for Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link href="/">
              <button className="text-white hover:text-orange-500">Portfolio</button>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <button className="text-white hover:text-orange-500">About</button>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <button className="text-white hover:text-orange-500">Projects</button>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <button className="text-white hover:text-orange-500">Contact</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End: Call to Action or Projects Button */}
      <div className="navbar-end">
        <Link href="/projects">
          <button className="btn bg-orange-500 text-white hover:bg-orange-600 max-sm:hidden" >Projects</button>
        </Link>
      </div>
    </div>
  );
}

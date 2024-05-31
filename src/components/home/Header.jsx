import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../logo.svg";

const Header = () => {
  const [menuOpened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(!menuOpened);
  };
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src="/assets/Logo.png" alt="logo" height={80} width={160} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* <nav aria-label="Global"> */}
            <ul
              className={`flex ${
                menuOpened ? "mobile-menu-link" : "menu-link"
              }`}
            >
              {/* <ul className="flex md:flex-row flex-col items-center gap-16 text-base font-semibold"> */}
              <li>
                <Link
                  className="text-[#899499] transition hover:text-primary"
                  to="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <a
                  className="text-[#899499] transition hover:text-primary"
                  href="#about"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-[#899499] transition hover:text-primary"
                  href="#steps"
                >
                  {" "}
                  How To{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-[#899499] transition hover:text-primary"
                  href="#footer"
                >
                  {" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
            {/* </nav> */}
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 ">
              <Link
                className="border-solid border-2 border-primary rounded-md bg-transparent  text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-black"
                to="/resume"
              >
                Build Now
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => handleClick()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

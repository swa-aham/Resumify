import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const SideNav = ({ sections, activeIndex, setactiveIndex }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const [open, setOpen] = useState(width > 600 ? true : false);

  return (
    <div className="flex absolute z-1 top-0 left-0 bg-gradient-to-b from-zinc-950 via-purple-900/40 to-purple-900/20">
      <div
        className={`${
          open ? "md:w-72 w-56" : "md:w-20 w-12"
        } md:p-5 p-[0.3rem] pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full 
          border-purple-500 bg-zinc-950 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="control"
        />
        <div className="flex gap-x-4 items-center">
          <Link to = "/">
            <img
              src="/assets/Logo.png"
              className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="pt-6">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`flex rounded-md cursor-pointer 
              ${index === activeIndex 
                ? "bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white" 
                : "text-gray-300 hover:bg-white/10"} 
              ${open ? "md:p-4 p-2" : "p-2"}
              transition-all duration-200 items-center gap-x-4 mt-4`}
              onClick={() => {
                setactiveIndex(index);
                if (width <= 600) setOpen(false);
              }}
            >
              <span className="text-xl">{section.src}</span>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-medium`}
              >
                {section.title}
              </span>
              <ChevronRight
                width={28}
                height={28}
                className={`${!open && "hidden"} ml-auto`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
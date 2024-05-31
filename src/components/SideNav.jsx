import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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
    <div className="flex absolute z-1 top-0 left-0 bg-[white] ">
      <div
        className={` ${
          open ? " md:w-72 w-56" : "md:w-20 w-12"
        }  md:p-5 p-[0.3rem]   pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="control"
        />
        <div className="flex gap-x-4 items-center">
          <Link to="/">
            <img
              src="/assets/Logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="pt-6">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`flex rounded-md align-middle cursor-pointer hover:bg-primary hover:text-[white] text-[#36454F] text-sm items-center gap-x-4 mt-4 border-[1px] border-[#dedede]
              ${index === activeIndex && "bg-primary text-[white]"} ${
                open ? "md:p-4 p-2" : "p-2"
              }`}
              onClick={() => {
                setactiveIndex(index);
                // console.log(width);
                if (width <= 600) setOpen(false);
              }}
            >
              {/* <img
                src={`/assets/${section.src}`}
                alt="icon"
                width={25}
                height={25}
              /> */}
              {section.src}
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 w-28 font-semibold text-medium text-inherit`}
              >
                {section.title}
              </span>
              <ChevronRight
                width={28}
                height={28}
                className={`${!open && "hidden"} right-4`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

{
  /* <div className="flex flex-col gap-4 mx-10  max-w-[300px] max-h-screen">
      {Object.keys(sections).map((key) => (
        <div className="sm:flex  ">
          <button
            className={`{
                rounded-lg border-[1px] border-[Grey] w-48 px-12 py-4 text-base text-center font-semibold 
                  ${
                    key == activeIndex
                      ? "bg-primary text-[white]"
                      : "bg-transparent"
                  }
              }`}
            onClick={() => {
              setactiveIndex(key);
              console.log(key);
              console.log(activeIndex);
            }}
          >
            {sections[key]}
          </button>
        </div>
      ))}
    </div> */
}

import React from "react";
import { Link } from "react-router-dom";

const How = () => {
  return (
    <div
      className="flex md:flex-row flex-col max-w-[1400px] mx-auto my-4 p-5 md:gap-52 gap-20"
      id="about"
    >
      {/* left */}
      <div className="">
        <img
          src="/assets/Resume.png"
          width={600}
          height={600}
          alt="Resume"
          className="drop-shadow-lg"
        />
      </div>
      {/* Right */}
      <div className="flex flex-col gap-12">
        <div className="text-primary text-xl font-semibold md:text-left text-center">
          HOW IT WORKS
        </div>
        <div className="text-[2.5rem]  leading-[3rem] font-semibold sm:text-left text-center">
          3 Steps. <br /> 5 Minutes.{" "}
        </div>
        <p className="max-w-[350px] text-lg  leading-7  text-[#71797E] md:text-left text-center mx-auto">
          Stop spending hours on crafting resumes. We do it for you. Give your Minutes, we'll save your hours.
        </p>

        <div className="sm:flex sm:gap-4 sm:text-left text-center">
          <Link
            className="rounded-full bg-primary px-12 py-4 text-base font-semibold text-[white] shadow"
            to="/resume"
          >
            Create Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default How;

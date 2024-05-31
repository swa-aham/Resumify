import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-between items-center w-[100%] mx-auto my-24 max-w-[900px] md:p-7 px-[20px]"
      id="home"
    >
      <h1 className="md:text-[3rem] text-[1.8rem] font-medium md:leading-[4rem] leading-[2rem] font-['Lexend'] text-center">
        <strong className="text-primary ">Resumify</strong> your resume and
        land your dream job!
      </h1>
      <p className="max-w-[550px] text-lg mt-3 pt-3 leading-8 text-center text-[#71797E]">
        Easily create the perfect resume for any job using <strong>Resumify</strong>. <br />
        Catch the attention of your future employer!
      </p>

      <div className="flex gap-5 mt-10 md:flex-row flex-col">
        <div className="sm:flex sm:gap-4 ">
          <Link
            className="rounded-full bg-primary px-12 py-4 text-base font-semibold text-[white] shadow"
            to="/resume"
          >
            Build Your Resume Now
          </Link>
        </div>
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded bg-transparent px-12 py-4 text-base font-semibold text-primary flex gap-1"
            href="https://youtube.com"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="play"
              className="w-7"
            >
              <g
                data-name="Layer 2"
                fill="#2451ff"
                class="color000000 svgShape"
              >
                <path
                  fill="#5073f9"
                  d="M58 32a25.88 25.88 0 0 1-7.62 18.38l-4.24-4.24a20 20 0 0 0 0-28.28l4.24-4.24A25.88 25.88 0 0 1 58 32Z"
                  class="colorf95c50 svgShape"
                ></path>
                <path
                  fill="#445ec3"
                  d="M50.38 50.38a26 26 0 0 1-36.76 0l4.24-4.24a20 20 0 0 0 28.28 0Z"
                  class="color44c3a0 svgShape"
                ></path>
                <path
                  fill="#6282fc"
                  d="m50.38 13.62-4.24 4.24a20 20 0 0 0-28.28 0l-4.24-4.24a26 26 0 0 1 36.76 0Z"
                  class="colorfcd462 svgShape"
                ></path>
                <path
                  fill="#2451ff"
                  d="M12 32a19.94 19.94 0 0 0 5.86 14.14l-4.24 4.24a26 26 0 0 1 0-36.76l4.24 4.24A19.94 19.94 0 0 0 12 32Z"
                  class="color2d93ba svgShape"
                ></path>
                <path
                  fill="#0639fc"
                  d="m41 32-18-9v18l18-9z"
                  class="colorfc0606 svgShape"
                ></path>
              </g>
            </svg>
            <h3 className="flex justify-center items-center text-center text-base">
              
            </h3>
          </a>
        </div>
      </div>
      <p className="max-w-[700px] text-base font-medium mt-1 pt-3 leading-8 text-center text-[#36454F]">
        <span className="w-2 h-2 text-[#339d5d] animate-pulse-slow">● </span>No
        signup or subscription needed
      </p>
    </div>
  );
};

export default Hero;

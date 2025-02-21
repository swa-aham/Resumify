import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-purple-900 min-h-screen">
      <div
        className="flex flex-col justify-between items-center w-[100%] mx-auto mt-28 mb-24 max-w-[900px] md:p-7 px-[20px] relative"
        id="home"
      >
        {/* Glass effect with darker transparency */}
        <div className="absolute inset-0 bg-grey/5 backdrop-blur-lg rounded-3xl" />
        
        <h1 className="md:text-[3rem] text-[1.8rem] font-medium md:leading-[4rem] leading-[2rem] font-['Lexend'] text-center text-white relative">
          <strong className="text-white">Build. Stand Out. Get Hired. Resumify</strong>
        </h1>
        <p className="max-w-[550px] text-lg mt-3 pt-3 leading-8 text-center text-white/80 relative">
          Easily create a perfect resume for any job using <strong>Resumify</strong>. <br />
          Catch the attention of your future employer!
        </p>

        <div className="flex gap-5 mt-10 md:flex-row flex-col relative">
          <div className="sm:flex sm:gap-4">
            <div className="flex gap-4">
              <Link
                className="rounded-full bg-primary px-12 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-600 transition-all"
                to="/resume"
              >
                Build Your Resume Now
              </Link>
              <Link
                className="rounded-full bg-gradient-to-r from-primary to-blue-600 px-12 py-4 text-base font-semibold text-white shadow-lg hover:from-blue-600 hover:to-primary transition-all relative group"
                to="https://roaster-by-resumify.streamlit.app/"
              >
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full animate-pulse font-bold">New!</span>
                Try Roaster
              </Link>
            </div>
          </div>
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-full bg-white/10 backdrop-blur-sm px-12 py-4 text-base font-semibold text-white flex gap-1 hover:bg-white/20 transition-all"
              href="https://youtube.com"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="play"
                className="w-7"
              >
                <g data-name="Layer 2" fill="#ffffff">
                  <path
                    fill="#ffffff"
                    d="M58 32a25.88 25.88 0 0 1-7.62 18.38l-4.24-4.24a20 20 0 0 0 0-28.28l4.24-4.24A25.88 25.88 0 0 1 58 32Z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M50.38 50.38a26 26 0 0 1-36.76 0l4.24-4.24a20 20 0 0 0 28.28 0Z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="m50.38 13.62-4.24 4.24a20 20 0 0 0-28.28 0l-4.24-4.24a26 26 0 0 1 36.76 0Z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M12 32a19.94 19.94 0 0 0 5.86 14.14l-4.24 4.24a26 26 0 0 1 0-36.76l4.24 4.24A19.94 19.94 0 0 0 12 32Z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="m41 32-18-9v18l18-9z"
                  ></path>
                </g>
              </svg>
              <h3 className="flex justify-center items-center text-center text-base">
                Watch Demo
              </h3>
            </a>
          </div>
        </div>
        <p className="max-w-[700px] text-base font-medium mt-1 pt-3 leading-8 text-center text-white/70 relative">
          <span className="w-2 h-2 text-purple-400 animate-pulse-slow">● </span>No
          signup or subscription needed
        </p>
      </div>
    </div>
  );
};

export default Hero;  
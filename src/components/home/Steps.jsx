import React, { useState } from "react";

const Steps = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div
      className="flex md:flex-row flex-col mt-4 p-5 gap-7 max-w-[1200px] mx-auto justify-around"
      id="steps"
    >
      <div
        className={` ${
          activeIndex === 1
            ? "bg-primary gap-12"
            : "bg-[#eaf0f0] gap-24 shadow-[0_8px_20px_rgba(0,0,0, .15)]"
        } flex flex-col  md:w-80  rounded-[1.8rem] p-7 transition-colors backdrop-blur-lg`}
        onClick={() => setActiveIndex(1)}
      >
        <div
          className={` ${
            activeIndex === 1
              ? " bg-[white] text-primary"
              : "bg-[black] text-[white]"
          }   flex items-center w-20 h-20 rounded-3xl justify-center font-semibold text-2xl`}
        >
          1.
        </div>
        {activeIndex === 1 ? (
          <div className="w-56 md:h-1 h-2 bg-[#d3d3d3] rounded-full">
            <div className="w-24 md:h-1 h-2 bg-[white] rounded-full"></div>
          </div>
        ) : null}
        <div
          className={` ${
            activeIndex === 1 ? "  text-[white]" : " text-[black]"
          }  flex flex-col gap-3`}
        >
          <h2 className="text-2xl font-semibold">
            Click on The Create Resume Button
          </h2>
          <p className="text-lg font-light leading-6">
            {" "}
            We've already choosen the best resume template for you
          </p>
        </div>
      </div>

      {/* card 2 */}
      <div
        className={` ${
          activeIndex === 2 ? "bg-primary gap-12" : "bg-[#eaf0f0] gap-24"
        } flex flex-col  md:w-80 rounded-[1.8rem] p-7 transition-colors`}
        onClick={() => setActiveIndex(2)}
      >
        <div
          className={` ${
            activeIndex === 2
              ? " bg-[white] text-primary"
              : "bg-[black] text-[white]"
          }  w-20 h-20 flex items-center rounded-3xl justify-center font-semibold text-2xl`}
        >
          2.
        </div>
        {activeIndex === 2 ? (
          <div className="w-56 md:h-1 h-2 bg-[#d3d3d3] rounded-full">
            <div className="w-40 md:h-1 h-2 bg-[white] rounded-full"></div>
          </div>
        ) : null}
        <div
          className={` ${
            activeIndex === 2 ? "  text-[white]" : " text-[black]"
          }  flex flex-col gap-3`}
        >
          <h2 className="text-2xl font-semibold">
            Enter Your Details through a simple form
          </h2>
          <p className="text-lg font-light leading-6">
            {" "}
            Make your own Resume easily and customize all content
          </p>
        </div>
      </div>

      {/* card 3 */}
      <div
        className={` ${
          activeIndex === 3 ? "bg-primary gap-12" : "bg-[#eaf0f0] gap-24"
        } flex flex-col md:w-80  rounded-[1.8rem] p-7 transition-colors`}
        onClick={() => setActiveIndex(3)}
      >
        <div
          className={` ${
            activeIndex === 3
              ? " bg-[white] text-primary"
              : "bg-[black] text-[white]"
          }  w-20 h-20 flex items-center rounded-3xl justify-center font-semibold text-2xl`}
        >
          3.
        </div>

        <div
          className={` ${
            activeIndex === 3 ? "  inline-block" : " hidden"
          } w-56 md:h-1 h-2 bg-[#d3d3d3] rounded-full `}
        >
          <div className="w-48 md:h-1 h-2 bg-[white] rounded-full"></div>
        </div>

        <div
          className={` ${
            activeIndex === 3 ? "  text-[white]" : " text-[black]"
          }  flex flex-col gap-3`}
        >
          <h2 className="text-2xl font-semibold">Done, Resume is Ready</h2>
          <p className="text-lg font-light leading-6">
            {" "}
            Your resume is ready to be downloaded as PDF
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;

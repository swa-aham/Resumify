import React from "react";

const Feature = () => {
  return (
    <div
      className="flex flex-col items-center justify-between  gap-6 mt-10"
      id="feature"
    >
      <h5 className="text-primary font-semibold text-base text-center">
        {" "}
        <span className="font-bold md:text-[3rem]">Features</span>
      </h5>
      <h1 className="font-bold md:text-[3.5rem] leading-snug text-2xl text-center md:w-[700px] px-5">
        Quick, Easy and Flexible Editing by Filling Data
      </h1>
      <div className="w-[70%] mt-5">
        <img src="/assets/preview.png" alt="laptopView" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Feature;

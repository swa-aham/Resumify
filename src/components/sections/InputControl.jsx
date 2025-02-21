import React from "react";

const InputControl = ({ label, detail, ...props }) => {
  return (
    <div className="flex flex-col md:mt-4 mt-3 w-72">
      {label && (
        <label className="font-semibold text-base md:mb-2 mb-[0.1rem] text-gray-300">
          {label}
        </label>
      )}
      <input
        {...props}
        {...props.register}
        required
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.07)',
          backdropFilter: 'blur(10px)',
        }}
        className={`${
          detail ? "md:min-w-[40rem]" : ""
        } md:h-12 h-8 max-w-[80%] md:min-w-72 w-[20rem] md:p-4 p-2 
        rounded-lg 
        border border-white/20 
        text-gray-200
        placeholder:text-gray-400
        focus:outline-none 
        focus:border-blue-500/50 
        focus:ring-2 
        focus:ring-blue-500/20
        transition-all duration-300
        hover:bg-white/10`}
      />
    </div>
  );
};

export default InputControl;
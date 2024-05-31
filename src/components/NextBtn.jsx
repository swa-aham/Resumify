import React from "react";

const NextBtn = () => {
  return (
    <div className="fixed bottom-20 right-40">
      <div className="sm:flex sm:gap-4 ">
        <button
          className="rounded-lg bg-primary px-6 py-3 text-base font-semibold flex gap-2 text-center text-[white] shadow"
          onClick={() =>
            activeIndex === 5
              ? setactiveIndex(0)
              : setactiveIndex(activeIndex + 1)
          }
        >
          Next
          <ChevronRight width={28} height={28} />
        </button>
      </div>
    </div>
  );
};

export default NextBtn;

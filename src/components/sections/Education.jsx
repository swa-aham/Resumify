import React, { useContext, useEffect } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { ResumeData } from "../../contexts/ResumeData";
import { useForm } from "react-hook-form";

const Education = ({ activeIndex, setactiveIndex }) => {
  const {
    educationCount,
    setEducationCount,
    deleteEduItem,
    updateEducation,
    resume,
  } = useContext(ResumeData);
  const { register, handleSubmit, reset } = useForm();

  const EducationSubmit = (data) => {
    updateEducation(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
    console.log(data);
  };
  resume.education.test = " ";

  useEffect(() => {
    reset((resume.education.test = ""));
  }, [deleteEduItem]);

  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(EducationSubmit)}
    >
      {Array.from({
        length: educationCount,
      }).map((j, i) => {
        return (
          <>
            {educationCount > 1 ? (
              <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                Education {i + 1}
              </h1>
            ) : (
              ""
            )}
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col">
              <InputControl
                label="Title"
                placeholder="eg. MS in Computer Science"
                register={register(`title${i}`)}
                defaultValue={resume.education[`title${i}`]}
              />
              <InputControl
                label="College/School Name"
                placeholder="eg. University of New York"
                register={register(`college${i}`)}
                defaultValue={resume.education[`college${i}`]}
              />
            </div>
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col mb-8">
              <InputControl
                label="Duration"
                placeholder="eg. Mar 2021 - Aug 2025"
                register={register(`duration${i}`)}
                defaultValue={resume.education[`duration${i}`]}
              />
              <InputControl
                label="Location"
                placeholder="eg: Manhattan, New York"
                register={register(`location${i}`)}
                defaultValue={resume.education[`location${i}`]}
              />
            </div>
          </>
        );
      })}
      {educationCount > 1 && (
        <div className="sm:flex sm:gap-4 ">
          <span
            className="rounded-xl bg-[white] md:px-6 md:py-3 px-3 py-1 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary hover:text-[white]"
            onClick={() => deleteEduItem(educationCount - 1)}
          >
            Delete
            <Trash width={20} height={20} />
          </span>
        </div>
      )}

      <div
        className="flex mt-8 gap-2 cursor-pointer"
        onClick={() =>
          educationCount < 2 ? setEducationCount((_) => _ + 1) : null
        }
      >
        <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1">
          Add one more education
        </span>
      </div>

      {/* prev button starts*/}
      <div className="flex justify-between my-10">
        <div className="sm:flex sm:gap-4">
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            onClick={() => {
              setactiveIndex(activeIndex - 1);
            }}
          >
            <ChevronLeft width={27} height={25} />
            <p className="flex items-center justify-center">Prev</p>
          </button>
        </div>

        <div className="sm:flex sm:gap-4">
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            type="submit"
          >
            <p className="flex items-center justify-center">Next</p>
            <ChevronRight width={27} height={25} />
          </button>
        </div>
      </div>

      {/* next button ends */}
    </form>
  );
};

export default Education;

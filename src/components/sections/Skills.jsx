import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../../contexts/ResumeData";

const Skills = ({ activeIndex, setactiveIndex }) => {
  const { updateSkills, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const skillSubmit = (data) => {
    updateSkills(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(skillSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Languages"
          placeholder="eg. C++, Python, SQL"
          register={register("languages")}
          defaultValue={resume.skills.languages}
        />

        <InputControl
          label="Frameworks"
          placeholder="eg. Next.js, Django"
          register={register("frameworks")}
          defaultValue={resume.skills.frameworks}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
        <InputControl
          label="Developer Tools"
          placeholder="eg. Git, Docker"
          register={register("tools")}
          defaultValue={resume.skills.tools}
        />
        <InputControl
          label="Database"
          placeholder=" eg. PostgreSQL, MongoDB"
          register={register("database")}
          defaultValue={resume.skills.database}
        />
      </div>

      {/* next button starts*/}
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

export default Skills;

import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ResumeData } from "../../contexts/ResumeData";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ activeIndex, setactiveIndex }) => {
  const { updatePersonal, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const PersonalSubmit = (data) => {
    updatePersonal(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
    console.log(data);
  };

  return (
    <form
      className="mt-2 md:mx-3 px-2"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(PersonalSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          type="text"
          label="First Name"
          name="firstName"
          placeholder="eg. John"
          register={register("firstName")}
          // onChange={handleSubmit(PersonalSubmit)}
          defaultValue={resume.personal.firstName}
        />

        <InputControl
          type="text"
          label="Last Name"
          name="LastName"
          placeholder="eg. Wick"
          register={register("lastName")}
          defaultValue={resume.personal.lastName}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="url"
          label="Linkedin Profile"
          placeholder="eg. www.linkedin.com/in/john-wick"
          register={register("linkedin")}
          defaultValue={resume.personal.linkedin}
        />
        <InputControl
          type="url"
          label="Github Profile"
          placeholder="eg. www.github.com/johnwick"
          register={register("github")}
          defaultValue={resume.personal.github}
        />
      </div>

      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="email"
          label="Email"
          placeholder="eg. johnwick@gmail.com"
          register={register("email")}
          defaultValue={resume.personal.email}
        />
        <InputControl
          type="text"
          label="Enter phone"
          placeholder="eg. 12345 67890"
          register={register("phone")}
          defaultValue={resume.personal.phone}
        />
      </div>

      {/* next button starts*/}
      <div className=" sm:gap-4 flex justify-end my-10">
        <button
          className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
          type="submit"
        >
          <p className="flex items-center justify-center">Next</p>
          <ChevronRight width={27} height={25} />
        </button>
      </div>
      {/* next button ends */}
    </form>
  );
};

export default PersonalInfo;

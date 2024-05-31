import { ChevronDown } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <div
      className="max-w-[800px] mx-auto flex flex-col items-center justify-between md:p-7 px-[20px] gap-6 mt-10"
      id="faq"
    >
      <h5 className="text-primary font-semibold text-base text-center"></h5>
      <h1 className="font-bold md:text-[3rem] leading-10 text-3xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="flow-root mt-12 md:w-[80%] w-[90%]">
        <div className="-my-8 divide-y divide-[grey]">
          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 ">
              <h2 className="text-base font-semibold ">What is Resumify?</h2>

              <span className="relative size-5 shrink-0">
                <ChevronDown />
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-[grey]">
              Resumify is an online platform designed to help individuals create
              professional resumes with ease. Our user-friendly interface
              empower users to craft standout resumes tailored to their unique
              skills and experiences. Whether you're a seasoned professional or
              a recent graduate, Resumify is here to assist you in showcasing your
              qualifications effectively.
            </p>
          </details>

          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 ">
              <h2 className="text-base font-semibold ">
                Is Resumify really free?
              </h2>

              <span className="relative size-5 shrink-0">
                <ChevronDown />
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-[grey]">
              At Resumify, all our services are completely free of charge. We
              believe in providing equal opportunities for everyone to create
              professional resumes without any financial barriers.
            </p>
          </details>

          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between ">
              <h2 className="text-base font-semibold">
                Will my Resume be made public?
              </h2>

              <span className="relative size-5 shrink-0">
                <ChevronDown />
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-[grey]">
              Your privacy is our top priority at Resumify. We do not store any of
              your resume data on our servers. When you create a resume using
              Resumify, all the information remains securely stored on your own
              computer or device.
            </p>
          </details>

          <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between ">
              <h2 className="text-base font-semibold">
                Do I have to choose a template?
              </h2>

              <span className="relative size-5 shrink-0">
                <ChevronDown />
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-[grey]">
              Our goal is to provide you with the tools and flexibility to
              create a standout resume that reflects your individuality and
              maximizes your chances of success in the job market, That's why
              we've carefully curated the best templates handpicked and verified
              by professionals and interviewers in various industries.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

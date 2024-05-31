import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React, { useContext, useEffect, useRef, useState } from "react";
import Rezume from "./Resume";
import { ResumeData } from "../contexts/ResumeData";

export default function Reflect() {
  const [width, setWidth] = useState(window.innerWidth);
  const { resume } = useContext(ResumeData);

  const downloadRef = React.createRef();
  useEffect(() => {
    downloadRef.current?.click();
  }, []);

  if (width < 768) {
    return (
      <PDFDownloadLink
        document={React.createElement(Rezume, { resume })}
        fileName="Resume.pdf"
        ref={downloadRef}
      >
        <div className="flex flex-col justify-center items-center w-[100%] mx-auto my-9  max-w-[1200px] md:p-3 px-[20px]">
          <div>
            <img src="/assets/success.gif" width={500} height={700} alt="gif" />
          </div>
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            type="submit"
          >
            Download Now
          </button>
        </div>
        {/* <div className="flex justify-center items-center">
          <div>

          </div>
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            type="submit"
          >
            <p className="flex items-center justify-center">Download</p>
          </button>
        </div> */}
      </PDFDownloadLink>
    );
  } else {
    return (
      <PDFViewer>
        <Rezume resume={resume} />
      </PDFViewer>
    );
  }
}

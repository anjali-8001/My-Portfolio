import Navbar from "@/components/Navbar";
import { IoIosCloudDownload } from "react-icons/io";

const Resume = () => {
  return (
    <div className="flex flex-col gap-5 w-[100vw] h-[100%] relative bg-[#0A0F29] ">
      {/* <Navbar /> */}

      <div className="flex flex-col gap-4 justify-center items-center h-screen lg:px-32 sm:px-16 px-8 pt-28">
        <iframe
          src="/assets/resume.pdf#view=FitV"
          className=" h-full w-full"
          style={{ border: "none" }}
          title="Resume"
        />
        <a
          href="/assets/resume.pdf"
          download="Anjali's_Resume.pdf"
          className="moving-border w-fit lg:px-8 px-4 lg:py-4 py-2 flex items-center justify-center gap-3 lg:text-xl sm:text-lg text-base text-[#E0E6ED] lg:my-4 my-2 rounded-2xl cursor-pointer "
        >
          <p className=""> Download</p>
          <IoIosCloudDownload />
        </a>
      </div>
    </div>
  );
};

export default Resume;

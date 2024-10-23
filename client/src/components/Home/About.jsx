// // 20C997

"use client";
import { useState, useRef } from "react";
import about from "../../../public/assets/AboutMe.json";
import Lottie from "lottie-react";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { delay, motion, useInView } from "framer-motion";
import { IoIosCloudDownload } from "react-icons/io";
import Link from "next/link";

const About = () => {
  const [selectedButton, setSelectedButton] = useState("personal");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef); // Tracks visibility

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      ref={sectionRef}
      className=" w-full flex flex-col py-20 h-[860px]"
      id="about"
    >
      <div className="flex flex-col items-center gap-3">
        <motion.h2
          className="text-center text-sm w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.6,
          }}
        >
          Get to know more{" "}
        </motion.h2>
        <motion.h2
          className="text-center text-5xl w-full font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.6,
            delay: 0,
          }}
        >
          About Me
        </motion.h2>
        <motion.hr
          className="bg-[#00BFFF] border border-[#00BFFF] text-center w-32 rounded-2xl h-1 mt-2"
          initial={{ width: 0 }}
          animate={isInView ? { width: "8rem" } : { width: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div
        className="h-[100%] w-full flex justify-between gap-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="w-[40%] flex justify-center items-center">
          <Lottie animationData={about} loop={true} />
        </div>
        <div className="w-[60%] flex flex-col gap-12 p-20">
          <div className="flex gap-2 rounded-full border border-[#00BFFF] p-2 w-fit">
            <motion.button
              className={`px-8 py-3 text-xl rounded-full font-bold ${
                selectedButton === "personal" && "bg-[#00BFFF] text-[#4B4F59]"
              }`}
              onClick={() => setSelectedButton("personal")}
              variants={buttonVariants}
              whileHover="hover"
            >
              Personal Info
            </motion.button>
            <motion.button
              className={`px-8 py-3 text-xl rounded-full font-bold ${
                selectedButton === "education" && "bg-[#00BFFF] text-[#4B4F59]"
              }`}
              onClick={() => setSelectedButton("education")}
              variants={buttonVariants}
              whileHover="hover"
            >
              Education
            </motion.button>
            <motion.button
              className={`px-8 py-3 text-xl rounded-full font-bold ${
                selectedButton === "experience" && "bg-[#00BFFF] text-[#4B4F59]"
              }`}
              onClick={() => setSelectedButton("experience")}
              variants={buttonVariants}
              whileHover="hover"
            >
              Experience
            </motion.button>
          </div>

          {/* Personal Info Section */}
          {selectedButton === "personal" && (
            <motion.div
              className="text-xl font-semibold flex flex-col gap-6 leading-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I'm Anjali, a recent B.Tech graduate in{" "}
                <span className="text-[#007BFF]">
                  Computer Science Engineering
                </span>{" "}
                with a passion for building cool stuff using the latest tech.
                I’ve been working with{" "}
                <span className="text-[#007BFF]">React.js</span> and{" "}
                <span className="text-[#007BFF]">Next.js</span> on the frontend
                and <span className="text-[#007BFF]">Node.js</span> on the
                backend, building exciting projects.
              </p>
              <p>
                I’m all about turning ideas into reality, from backend logic to
                front-end magic. I love diving into code, solving challenging
                problems, and constantly learning new things to push myself
                further.
              </p>
              {/* <a
                href="/assets/resume.pdf"
                download="Anjali's Resume.pdf"
                className="moving-border w-fit px-4 py-4 flex items-center justify-center gap-3 text-2xl"
              >
                <p className=""> Resume</p>
                <IoIosCloudDownload />
              </a> */}
              <Link
                href="/resume"
                className="moving-border w-fit px-8 py-4 flex items-center justify-center gap-3 text-xl text-[#E0E6ED] my-4 rounded-2xl cursor-pointer"
              >
                <p className=""> Resume</p>
                <IoIosCloudDownload />
              </Link>
            </motion.div>
          )}

          {/* Education Section */}
          {selectedButton === "education" && (
            <motion.div
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-16">
                <div class="h-[380px] w-[1px] bg-white relative ml-2">
                  <div class="w-[11px] h-[11px] rounded-full bg-[#007BFF] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                  <div class="w-[11px] h-[11px] rounded-full bg-[#007BFF] absolute -left-[5px] top-[205px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                </div>
                <div className="flex flex-col gap-16 items-start">
                  <div className="text-xl font-medium flex flex-col gap-3">
                    <p className="font-semibold text-[#007BFF]">
                      Dr. Akhilesh Das Gupta Institute of Professional Studies
                      <p className="text-[#007BFF]">(Affiliated to GGSIPU)</p>
                    </p>
                    <p className="text-lg">
                      BTech in Computer Science Engineering
                    </p>
                    <div className="flex items-center justify-between text-lg gap-2">
                      <div className="flex items-center gap-2">
                        <SlCalender />
                        <p className="">2020-2024</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <IoLocationOutline />
                        <p className="">Delhi, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-medium flex flex-col gap-3 w-full">
                    <p className="font-semibold text-[#007BFF]">
                      Modern Delhi Public School
                    </p>
                    <p className="text-lg">Senior Seconday</p>
                    <div className="flex items-center justify-between text-lg gap-2">
                      <div className="flex items-center gap-2">
                        <SlCalender />
                        <p className="">2018-2020</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <IoLocationOutline />
                        <p className="">Delhi NCR, India</p>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </motion.div>
          )}

          {/* Experience Section */}
          {selectedButton === "experience" && (
            <motion.div
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-16 ">
                <div class="h-[380px] w-[1px] bg-white relative ml-2">
                  <div class="w-[11px] h-[11px] rounded-full bg-[#007BFF] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                  <div class="w-[11px] h-[11px] rounded-full bg-[#007BFF] absolute -left-[5px] top-[175px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                </div>
                <div className="flex flex-col gap-16 items-start ">
                  <div className="text-xl font-medium flex flex-col gap-3">
                    <p className="font-semibold text-[#007BFF]">
                      SkyTrust IT Solutions
                    </p>
                    <p className="text-lg">Full Stack Developer Intern</p>
                    <div className="flex items-center justify-between text-lg gap-10">
                      <div className="flex items-center gap-2">
                        <SlCalender />
                        <p className="">May'24 - Oct'24</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <IoLocationOutline />
                        <p className="">Delhi, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-medium flex flex-col gap-3 w-full">
                    <p className="font-semibold text-[#007BFF]">BeatStore</p>
                    <p className="text-lg">Backend Developer Intern</p>
                    <div className="flex items-center justify-between text-lg gap-10">
                      <div className="flex items-center gap-2">
                        <SlCalender />
                        <p className="">Jan'24 - Feb'24</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <IoLocationOutline />
                        <p className="">Remote</p>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

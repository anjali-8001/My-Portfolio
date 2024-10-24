"use client";
import { useState } from "react";
import about from "../../../public/assets/AboutMe.json";
import Lottie from "lottie-react";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoIosCloudDownload } from "react-icons/io";
import Link from "next/link";

const About = () => {
  const [selectedButton, setSelectedButton] = useState("personal");

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
      // ref={sectionRef}
      className=" w-full flex flex-col lg:py-20 sm:py-16 py-12 lg:px-32 sm:px-16 px-8 lg:gap-20 gap-10"
      id="about"
    >
      <div className="flex flex-col items-center lg:gap-3 sm:gap-2 gap-1">
        <motion.h2
          className="text-center lg:text-sm text-xs w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.6,
          }}
        >
          Get to know more{" "}
        </motion.h2>
        <motion.h2
          className="text-center lg:text-5xl sm:text-3xl text-xl w-full font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
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
          className="bg-[#00BFFF] border border-[#00BFFF] text-center w-32 rounded-2xl h-1 lg:mt-2"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div
        className="h-[100%] w-full flex xl:flex-row  xl:justify-between flex-col justify-center items-center gap-20 relative"
        initial="hidden"
        animate={"visible"}
        variants={containerVariants}
      >
        <div className="hidden sm:block xl:w-[40%] w-[200px] justify-center items-center xl:relative absolute top-[-30px] right-[-30px]">
          <Lottie animationData={about} loop={true} />
        </div>
        <div className="xl:w-[60%] w-full flex flex-col lg:gap-12 gap-6 ">
          <div className="flex gap-2 rounded-full border border-[#00BFFF] lg:p-2 p-1 w-fit">
            <motion.button
              className={`lg:px-8 sm:px-4 px-2 lg:py-3 sm:py-2 py-1 lg:text-xl sm:text-base text-sm rounded-full font-bold ${
                selectedButton === "personal" && "bg-[#00BFFF] text-[#4B4F59]"
              }`}
              onClick={() => setSelectedButton("personal")}
              variants={buttonVariants}
              whileHover="hover"
            >
              Personal Info
            </motion.button>
            <motion.button
              className={`lg:px-8 sm:px-4 px-2 lg:py-3 sm:py-2 py-1 lg:text-xl sm:text-base text-sm rounded-full font-bold ${
                selectedButton === "education" && "bg-[#00BFFF] text-[#4B4F59]"
              }`}
              onClick={() => setSelectedButton("education")}
              variants={buttonVariants}
              whileHover="hover"
            >
              Education
            </motion.button>
            <motion.button
              className={`lg:px-8 sm:px-4 px-2 lg:py-3 sm:py-2 py-1 lg:text-xl sm:text-base text-sm rounded-full font-bold ${
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
              className="lg:text-xl sm:text-base text-sm font-semibold flex flex-col lg:gap-6 sm:gap-4 gap-2 lg:leading-8 sm:leading-6 leading-5 text-justify"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I&apos;m Anjali, a recent B.Tech graduate in{" "}
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
              <Link
                href="/resume"
                className="moving-border w-fit lg:px-8 px-4 lg:py-4 py-2 flex items-center justify-center gap-3 lg:text-xl sm:text-lg text-base text-[#E0E6ED] lg:my-4 my-2 rounded-2xl cursor-pointer"
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
              <div className="flex gap-12">
                <div class="h-[360px] w-[1px] bg-white relative ml-12">
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
              <div className="flex gap-12 ">
                <div class="h-[360px] w-[1px] bg-white relative ml-12">
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
                        <p className="">May&apos;24 - Oct&apos;24</p>
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
                        <p className="">Jan&apos;24 - Feb&apos;24</p>
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

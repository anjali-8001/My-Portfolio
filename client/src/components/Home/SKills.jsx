"use client";
import { motion } from "framer-motion";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaBootstrap } from "react-icons/fa";
import { useState } from "react";

const SKills = () => {
  const [hoveredTech1, setHoveredTech1] = useState(null);
  const [hoveredTech2, setHoveredTech2] = useState(null);
  const [hoveredTech3, setHoveredTech3] = useState(null);

  const techs = [
    { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: RiReactjsFill, color: "#61DAFB" },
    { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    // { name: "Bootstrap", icon: FaBootstrap, color: "#38B2AC" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "VsCode", icon: VscVscode, color: "#007ACC" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="lg:p-32 sm:p-16 p-8 w-full flex flex-col h-auto"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the component is in view
      transition={{ duration: 0.6 }}
      variants={containerVariants}
      id="skills"
    >
      <div className="flex flex-col items-center lg:gap-28 sm:gap-16 gap-8">
        <div className="flex flex-col items-center lg:gap-8 sm:gap-4 gap-2">
          <motion.h2
            className="text-center lg:text-5xl sm:text-3xl text-xl font-bold py-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#007BFF]">Technologies</span> I&apos;m Using
          </motion.h2>

          <motion.p
            className="sm:w-[400px] w-[300px] text-center font-bold sm:text-sm text-xs text-[#a2a2a2]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I work with a range of technologies to create efficient, scalable
            applications. Have a look at them.
          </motion.p>
        </div>

        {/* Grid of Tech Icons with Mouse Enter/Leave Animation */}
        <motion.div className="flex flex-col lg:gap-10 sm:gap-8 gap-6 items-center">
          <div className="flex lg:gap-10 sm:gap-8 gap-6 items-center justify-center flex-wrap xl:w-[1200px] w-full ">
            {techs.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={index}
                  className="lg:w-36 sm:w-28 w-20 lg:h-28 sm:h-20 h-16 flex items-center justify-center"
                  onMouseEnter={() => setHoveredTech1(index)}
                  onMouseLeave={() => setHoveredTech1(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`relative w-full h-full flex justify-center items-center rounded-xl bg-gradient-to-t from-[#1e222c] to-transparent border-2 border-[#7284bd] opacity-70 transition-opacity duration-300 p-5 ${
                      hoveredTech1 === index && "moving-border"
                    }`}
                    animate={{
                      rotateY: hoveredTech1 === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Front side with the icon */}
                    <div
                      className={`absolute w-full h-full rounded-xl flex items-center justify-center ${
                        hoveredTech1 === index && "hidden"
                      }`}
                    >
                      <Icon className="lg:text-5xl sm:text-4xl text-2xl" style={{ color: "blue" }} />
                    </div>

                    {/* Back side with the tech name */}
                    <div
                      className={`text-center w-full h-full rounded-xl flex items-center justify-center ${
                        hoveredTech1 !== index && "hidden"
                      }`}
                      style={{
                        transform:
                          hoveredTech1 === index
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                      }}
                    >
                      <span className="lg:text-2xl sm:text-xl text-sm font-semibold">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SKills;

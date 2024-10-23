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

  const techs1 = [
    { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: RiReactjsFill, color: "#61DAFB" },
    { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    // { name: "Bootstrap", icon: FaBootstrap, color: "#38B2AC" },
  ];

  const techs2 = [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
  ];

  const techs3 = [
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
      className="py-32 w-full flex flex-col h-auto"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the component is in view
      transition={{ duration: 0.6 }}
      variants={containerVariants}
      id="skills"
    >
      <div className="flex flex-col items-center gap-32">
        <div className="flex flex-col items-center gap-8">
          <motion.h2
            className="text-center text-5xl font-bold py-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           <span className="text-[#007BFF]">Technologies</span>  I&apos;m Using
          </motion.h2>

          <motion.p
            className="w-[400px] text-center font-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I work with a range of technologies to create efficient, scalable
            applications. Have a look at them.
          </motion.p>
        </div>

        {/* Grid of Tech Icons with Mouse Enter/Leave Animation */}
        <motion.div className="flex flex-col gap-10 items-center">
          <div className="flex justify-between gap-10 items-center">
            {techs1.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={index}
                  className="w-36 h-28 perspective flex items-center justify-center"
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
                      <Icon
                        className=""
                        style={{ color: "blue", fontSize: "3rem" }}
                      />
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
                      <span className="text-2xl font-semibold">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-between gap-10 items-center">
            {techs2.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={index}
                  className="w-36 h-28 perspective flex items-center justify-center"
                  onMouseEnter={() => setHoveredTech2(index)}
                  onMouseLeave={() => setHoveredTech2(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`relative w-full h-full flex justify-center items-center rounded-xl bg-gradient-to-t from-[#1e222c] to-transparent border-2 border-[#7284bd] opacity-70 transition-opacity duration-300 p-5 ${
                      hoveredTech2 === index && "moving-border"
                    }`}
                    animate={{
                      rotateY: hoveredTech2 === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Front side with the icon */}
                    <div
                      className={`absolute w-full h-full rounded-xl flex items-center justify-center ${
                        hoveredTech2 === index && "hidden"
                      }`}
                    >
                      <Icon
                        className=""
                        style={{ color: "blue", fontSize: "3rem" }}
                      />
                    </div>

                    {/* Back side with the tech name */}
                    <div
                      className={`text-center w-full h-full rounded-xl flex items-center justify-center ${
                        hoveredTech2 !== index && "hidden"
                      }`}
                      style={{
                        transform:
                          hoveredTech2 === index
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                      }}
                    >
                      <span className="text-2xl font-semibold">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-between gap-10 items-center">
            {techs3.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={index}
                  className="w-36 h-28 perspective flex items-center justify-center"
                  onMouseEnter={() => setHoveredTech3(index)}
                  onMouseLeave={() => setHoveredTech3(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`relative w-full h-full flex justify-center items-center rounded-xl bg-gradient-to-t from-[#1e222c] to-transparent border-2 border-[#7284bd] opacity-70 transition-opacity duration-300 p-5 ${
                      hoveredTech3 === index && "moving-border"
                    }`}
                    animate={{
                      rotateY: hoveredTech3 === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Front side with the icon */}
                    <div
                      className={`absolute w-full h-full rounded-xl flex items-center justify-center ${
                        hoveredTech3 === index && "hidden"
                      }`}
                    >
                      <Icon
                        className=""
                        style={{ color: "blue", fontSize: "3rem" }}
                      />
                    </div>

                    {/* Back side with the tech name */}
                    <div
                      className={`text-center w-full h-full rounded-xl flex items-center justify-center ${
                        hoveredTech3 !== index && "hidden"
                      }`}
                      style={{
                        transform:
                          hoveredTech3 === index
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                      }}
                    >
                      <span className="text-2xl font-semibold">
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

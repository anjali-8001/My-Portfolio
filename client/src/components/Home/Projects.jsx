"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ecommerce from "../../../public/assets/Ecommerce.png";
import doctor from "../../../public/assets/doctor.png";
import amazonclone from "../../../public/assets/amazonclone.png";
import nodejs from "../../../public/assets/nodejs.svg";
import reactjs from "../../../public/assets/reactjs.svg";
import html from "../../../public/assets/html.svg";
import css from "../../../public/assets/css.svg";
import stripe from "../../../public/assets/stripe.svg";
import redux from "../../../public/assets/redux.svg";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Ecommerce Website",
      desc: "This project is an e-commerce platform that delivers a seamless shopping experience.",
      image: ecommerce,
      tech: [reactjs, nodejs, css, stripe],
      github: "https://github.com/anjali-8001/UrbanGrace",
      website: "https://urbangrace.vercel.app/",
    },
    {
      title: "Doctor Management",
      desc: "It is a web application which facilitates easy management of doctors and appointments.",
      image: doctor,
      tech: [reactjs, nodejs, css, redux],
      github: "https://github.com/anjali-8001/doctor-appoint",
      website: "https://doctor-appoint-h13l.onrender.com",
    },
    {
      title: "Amazon Clone",
      desc: "This project is a visually accurate clone of Amazon's homepage, built using only HTML and CSS..",
      image: amazonclone,
      tech: [html, css],
      github: "https://github.com/anjali-8001/amazon-clone",
      website: "https://tangerine-biscochitos-3d30d6.netlify.app/",
    },
  ];

  // Define stagger animation for the container of projects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Define animation for individual project cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div
      className="lg:p-32 sm:p-16 p-8  w-full flex flex-col lg:gap-32 sm:gap-16 gap-8 h-auto"
      id="projects"
    >
      <div className="flex flex-col lg:gap-5 sm:gap-3 gap-1">
        <motion.h2
          className="lg:text-5xl sm:text-3xl text-xl font-bold py-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Personal Projects
        </motion.h2>
        <motion.hr
          className="bg-[#00BFFF] border border-[#00BFFF] text-center w-[100%] rounded-2xl h-1"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.div
        className="flex flex-col gap-10 items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex lg:gap-10 sm:gap-8 gap-6 justify-center flex-wrap items-center 2xl:w-[1500px]">
          {projects?.map((project, index) => {
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col  lg:gap-5 sm:gap-4 gap-3 bg-gradient-to-b from-[#000000d9] to-[#14141e] lg:w-[350px] sm:w-[300px] w-[280px] rounded-2xl lg:p-5 p-4 border-[3px] border-[#14141e] ${
                  hoveredProject === index && "moving-border-project"
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: 10, // Subtle 3D flip effect on hover
                  y: -10, // Slight lift for floating effect
                  transition: { duration: 0.4 },
                }}
              >
                <Image
                  src={project.image}
                  alt="project"
                  className="w-full h-auto rounded-lg"
                />
                <motion.div className="lg:text-xl sm:text-lg text-base font-semibold flex justify-between items-center w-full">
                  <p className=""> {project.title}</p>
                  <div className="flex gap-4 items-center">
                    <motion.a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <RiShareBoxFill className="text-xl" />
                    </motion.a>{" "}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                  </div>
                </motion.div>
                <motion.p className="text-[#838282] font-normal">
                  {project.desc}
                </motion.p>
                <div className="flex gap-4 flex-wrap mt-2 items-center">
                  {project?.tech?.map((tech, techIndex) => {
                    return (
                      <motion.div key={techIndex}>
                        <Image src={tech} className="sm:h-8 h-6 w-auto" alt="icon" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

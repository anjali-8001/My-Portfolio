"use client";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex flex-col sm:gap-5 gap-3 w-full lg:px-28 sm:px-14 px-6 lg:py-10 sm:py-8 py-6 lg:text-lg sm:text-sm text-xs">
      <hr />
      <div className="flex sm:flex-row flex-col justify-between items-center gap-2">
        <div className="flex flex-col gap-4">
          <p className="" style={{
              background: "linear-gradient(135deg, #00BFFF, #87CEEB, #00FFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Living, Learning and Growing</p>
        </div>
        <p className="">
          Copyrights@2024{" "}
          <span
            className=""
            style={{
              background: "linear-gradient(135deg, #00BFFF, #87CEEB, #00FFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Anjali Sharma
          </span>
        </p>

        <div className="flex items-center lg:gap-6 gap-3 sm:py-6 py-3">
          <motion.a
            href="https://www.linkedin.com/in/anjali-sharma-4086831b9/"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <CiLinkedin className="sm:w-7 w-5 h-auto" />
          </motion.a>
          <motion.a
            href="https://github.com/anjali-8001"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <FaGithub className="sm:w-6 w-4 h-auto" />
          </motion.a>{" "}
          <motion.a
            href="https://leetcode.com/u/anjali_8001/"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <SiLeetcode className="sm:w-6 w-4 h-auto" />
          </motion.a>{" "}
          <motion.a
            href="mailto:anjalisharma8001@gmail.com"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <LuMail className="sm:w-6 w-4 h-auto" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

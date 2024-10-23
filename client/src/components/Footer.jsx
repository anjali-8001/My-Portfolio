"use client";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 w-full px-24  py-10">
      <hr />
      <div className="flex justify-between items-center">
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

        <div className="flex  items-center gap-6 py-6">
          <motion.a
            href="https://www.linkedin.com/in/anjali-sharma-4086831b9/"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <CiLinkedin className="w-7 h-auto" />
          </motion.a>
          <motion.a
            href="https://github.com/anjali-8001"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <FaGithub className="w-6 h-auto" />
          </motion.a>{" "}
          <motion.a
            href="https://leetcode.com/u/anjali_8001/"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <SiLeetcode className="w-6 h-auto" />
          </motion.a>{" "}
          <motion.a
            href="mailto:anjalisharma8001@gmail.com"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <LuMail className="w-6 h-auto" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import React, { useEffect, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";

const HomeComponent = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Software Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ scale: [0, 1], opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full h-[100vh] flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-2xl">Hi This is</p>
        <h1
          className="text-7xl font-bold tracking-wider"
          style={{
            background: "linear-gradient(135deg, #00BFFF, #87CEEB, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ANJALI SHARMA
        </h1>
        <p className="text-4xl font-bold text-[#E0E6ED]">
          I'm a{" "}
          <span
            className=""
            style={{
              background: "linear-gradient(135deg, #007BFF, #00BFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {text}
          </span>
          <span className="blinking-cursor">|</span>
        </p>
        <div className="flex justify-center items-center gap-6 py-6">
          <motion.a
            href="https://www.linkedin.com/in/anjali-sharma-4086831b9/"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <CiLinkedin className="w-10 h-auto" />
          </motion.a>
          <motion.a
            href="https://github.com/anjali-8001"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <FaGithub className="w-8 h-auto" />
          </motion.a>{" "}
          <motion.a
            href="https://leetcode.com/u/anjali_8001/"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <SiLeetcode className="w-8 h-auto" />
          </motion.a>{" "}
          <motion.a
            href="mailto:anjalisharma8001@gmail.com"
            className=""
            whileHover={{ scale: 1.1 }}
            target="_blank"
          >
            <LuMail className="w-8 h-auto" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeComponent;

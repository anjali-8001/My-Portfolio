"use client";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaLaptopCode, FaCode, FaFileAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar collapsed */}
      <motion.div
        className="flex justify-center items-center bg-techy-gradient px-5 py-3 rounded-xl fixed top-4 w-fit self-end mx-4 backdrop-blur-sm shadow-md border border-[#183b60] z-[400] sm:hidden  "
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        exit={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "center" }}
      >
        {!isOpen && (
          <IoMdMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}

        {isOpen && (
          <p
            className="font-bold text-3xl"
            style={{
              background: "linear-gradient(135deg, #00BFFF, #87CEEB, #00FFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AS
          </p>
        )}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={navbarRef}
              className="flex flex-col justify-center lg:gap-10 sm:gap-6 gap-6 absolute top-20 rounded-3xl right-1 bg-techy-gradient lg:px-16 sm:px-12 px-10 lg:py-10 sm:py-8 py-6 z-50 backdrop-blur-sm shadow-md border border-[#183b60] lg:text-base sm:text-sm text-xs"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "center" }}
            >
              <motion.a
                href="/#home"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaHome />
                <span>HOME</span>
              </motion.a>
              <motion.a
                href="/#about"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <IoIosInformationCircle />
                <span>ABOUT</span>
              </motion.a>
              <motion.a
                href="/#projects"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaLaptopCode />
                <span>PROJECTS</span>
              </motion.a>
              <motion.a
                href="/#skills"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaCode />
                <span>SKILLS</span>
              </motion.a>
              <motion.a
                href="/#contact"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <IoMdContact className="" />
                <span>CONTACT</span>
              </motion.a>
              <motion.a
                href="/resume"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaFileAlt />
                <span>RESUME</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute w-full h-full inset-0 backdrop-blur-md transition-all duration-300 z-[300] sm:hidden block "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence>
      {/* Navbar full */}
      <div className="sm:flex flex-row gap-10 justify-between items-center bg-techy-gradient px-16 py-5 rounded-xl fixed top-4 w-[calc(100%-32px)] mx-4 z-50 backdrop-blur-sm shadow-md border border-[#183b60] hidden">
        <p className="lg:text-3xl text-2xl  font-semibold">
          <span
            style={{
              background: "linear-gradient(135deg, #00BFFF, #87CEEB, #00FFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AS
          </span>
        </p>
        <div className="flex lg:gap-10 gap-4 lg:text-sm text-xs font-semibold">
          <a
            href="/#projects"
            className="cursor-pointer flex gap-2 items-center hover:scale-[1.1] transition hover:font-bold"
          >
            <FaLaptopCode />
            <span>PROJECTS</span>
          </a>
          <a
            href="/#skills"
            className="cursor-pointer flex gap-2 items-center hover:scale-[1.1] transition hover:font-bold"
          >
            <FaCode />
            <span>SKILLS</span>
          </a>
          <a
            href="/#contact"
            className="cursor-pointer flex gap-2 items-center hover:scale-[1.1] transition hover:font-bold"
          >
            <IoMdContact className="text-lg" />
            <span>CONTACT</span>
          </a>
          <a
            href="/resume"
            className="cursor-pointer flex gap-2 items-center hover:scale-[1.1] transition hover:font-bold"
          >
            <FaFileAlt />
            <span>RESUME</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

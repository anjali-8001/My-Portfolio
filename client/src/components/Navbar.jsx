"use client";
import { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaLaptopCode, FaCode, FaFileAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Ref to track the navbar

  // Close navbar on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Effect to manage body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Clean up by resetting the overflow when the component unmounts or when isOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="flex justify-center items-center bg-techy-gradient px-5 py-3 rounded-xl fixed top-4 w-fit self-end mx-4 backdrop-blur-sm shadow-md border border-[#183b60] z-[400]"
        initial={{ opacity: 0, scaleX: 0 }} // Initial state for animation
        animate={{ opacity: 1, scaleX: 1 }} // Final state for animation
        exit={{ opacity: 0, scaleX: 0 }} // State when exiting
        transition={{ duration: 0.3 }} // Animation duration
        style={{ transformOrigin: "center" }} // Center expansion
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
              ref={navbarRef} // Attach the ref here
              className="flex flex-col justify-center lg:gap-10 sm:gap-6 gap-6 absolute top-20 rounded-3xl right-1 bg-techy-gradient lg:px-16 sm:px-12 px-10 lg:py-10 sm:py-8 py-6 z-50 backdrop-blur-sm shadow-md border border-[#183b60] lg:text-base sm:text-sm text-xs"
              initial={{ opacity: 0, x: 50 }} // Initial position off-screen
              animate={{ opacity: 1, x: 0 }} // Animate to visible position
              exit={{ opacity: 0, x: 50 }} // Animate back off-screen
              transition={{ duration: 0.3 }} // Animation duration
              style={{ transformOrigin: "center" }} // Center expansion
            >
              <motion.a
                href="#projects"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaLaptopCode />
                <span>PROJECTS</span>
              </motion.a>
              <motion.a
                href="#skills"
                className="cursor-pointer flex gap-2 items-center"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <FaCode />
                <span>SKILLS</span>
              </motion.a>
              <motion.a
                href="#contact"
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
            className="absolute w-full h-full inset-0 backdrop-blur-md transition-all duration-300 z-[300]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

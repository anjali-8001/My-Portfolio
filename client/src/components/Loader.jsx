"use client";
import { motion } from "framer-motion";

const Loader = () => {
  const hexagonVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 3,
        ease: "linear",
      },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0A0F29] z-[500]">
      <motion.div
        className="relative w-20 h-20"
        variants={hexagonVariants}
        animate="animate"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="absolute inset-0"
        >
          <polygon
            points="50,0 100,25 100,75 50,100 0,75 0,25"
            fill="none"
            stroke="#007BFF"
            strokeWidth="3"
          />
        </svg>
      </motion.div>

      <div
        className="absolute text-3xl font-bold"
        style={{
          background: "linear-gradient(135deg, #00BFFF, #87CEEB, #00FFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        AS
      </div>
    </div>
  );
};

export default Loader;

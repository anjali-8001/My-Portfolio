import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-10 justify-between items-center bg-techy-gradient px-16 py-5 rounded-xl fixed top-4 w-[calc(100%-32px)] mx-4 z-50 backdrop-blur-sm shadow-md border border-[#183b60]">
      <p className="text-2xl font-semibold">
        <span
          className="italic text-3xl"
          style={{
            background: "linear-gradient(135deg, #00BFFF, #87CEEB, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AS
        </span>
      </p>
      <div className="flex gap-10">
        <a href="#projects" className="cursor pointer">
          PROJECTS
        </a>
        <a href="#skills" className="cursor pointer">
          SKILLS
        </a>
        <a href="#contact" className="cursor pointer">
          CONTACT
        </a>
        <a href="/resume" className="cursor pointer">
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Navbar;

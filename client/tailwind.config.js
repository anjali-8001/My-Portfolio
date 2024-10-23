/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "techy-gradient":
          " linear-gradient(135deg, rgba(10, 15, 41, 0.9), rgba(0, 31, 63, 0.9), rgba(0, 39, 77, 0.9))",
        "darker-techy-gradient":
          "linear-gradient(145deg, #14081e, #46234e, #7e4f92)",
      },
    },
  },
  plugins: [],
};

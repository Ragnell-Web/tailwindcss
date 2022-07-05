/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html}", "./public/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.5rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primary: "#bada55",
        secondary: "#aeaeae",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        spin_slow: "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

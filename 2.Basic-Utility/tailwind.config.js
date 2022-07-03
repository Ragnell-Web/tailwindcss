/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html}","./public/**/*.js"],
  theme: {
    extend: {
      spacing: {
        "13": "3.5rem",
      },
      fontFamily: {
        inter:['Inter']
      },
      colors: {
        primary: "#bada55",
        secondary: "#aeaeae",
      },
    },
  },
  plugins: [],
}

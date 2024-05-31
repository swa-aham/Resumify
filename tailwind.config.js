/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 1s ease infinite",
      },
    },
    colors: {
      primary: "#2451ff",
      grey: "#eaf0f0",
    },
  },
  plugins: [],
};

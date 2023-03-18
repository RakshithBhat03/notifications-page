/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        White: "hsl(0, 0%, 100%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlueOne: "hsl(211, 68%, 94%)",
        lightGrayishBlueTwo: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)",
        Blue: "hsl(219, 85%, 26%)",
        Red: "hsl(1, 90%, 64%)",
      },
    },
  },
  plugins: [],
};

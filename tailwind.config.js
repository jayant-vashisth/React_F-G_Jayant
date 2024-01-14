/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "gray-500": "#7F7F7F",
        "border-gray-200": "#E5E5E5",
        customRed: "#FF0000",
        bgColor: "#ECEFF0",

        dark: {
          "border-gray-700": "#1A202C",
          "text-gray-400": "#A0AEC0",
        },
      },
    },
    backgroundColor: {
      "blue-500": "#3490dc",
      "blue-700": "#2779bd",
      white: "#fff",
      "bg-gray-50": "#f9fafb",
      "bg-gray-800": "#2d3748",
      "bg-gray-100": "#f7fafc",
      "bg-gray-800": "#2d3748",
      bgColor: "#ECEFF0",
      darkBlue: "#082142",
    },
    fontFamily: {
      customFont: ["inter"],
    },
    fontSize: {
      "custom-sm": "12px",
      "custom-md": "14px",
      "custom-lg": "18px",
      "custom-xl": "22px",
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};

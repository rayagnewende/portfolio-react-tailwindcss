/* eslint-disable no-unused-vars */
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },

        animation: {
          slider: "slide 35s linear infinite",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

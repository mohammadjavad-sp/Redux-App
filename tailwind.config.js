const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        pinarB: "pinar-bold",
        pinarEB: "pinar-extraBold",
        yekanT: "yekan-thin",
        yekanL: "yekan-light",
        yekanM: "yekan-medium",
        yekanB: "yekan-bold",
        yekanEB: "yekan-extraBold",
        yekanN: "yekan-num",
      },
      colors: {
        rang1: "#2A2D53",
        dark1: "#242A38",
        dark2: "#2F3542",
        dark3: "#111827",
      },
    },
    container: {
      center: true,
    },
  },
  darkMode: "class",
  plugins: [flowbite.plugin()],
};

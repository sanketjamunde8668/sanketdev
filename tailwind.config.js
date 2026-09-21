/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E1A",
        surface: "#0F1424",
        surface2: "#141A2E",
        line: "#232B45",
        muted: "#8B93A7",
        fog: "#C7CCDB",
        paper: "#EDEFF5",
        gold: "#D4A24C",
        goldSoft: "#E8C784",
        rust: "#C96A4B",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

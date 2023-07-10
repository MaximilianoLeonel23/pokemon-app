/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        type: {
          fire: "#F9B47D",
          water: "#9AC4E6",
          grass: "#A0D499",
          bug: "#BBDB86",
          fairy: "#F8D5F5",
          normal: "#CED2D5",
          dragon: "#6BABE9",
          psychic: "#FE9AA1",
          ghost: "#7C8ABE",
          ground: "#E49D7B",
          steel: "#7EA1B6",
          flying: "#B1C4E9",
          ice: "#9CDED1",
          electric: "#F5E27F",
          rock: "#C4BA8D",
          dark: "#736D83",
          fighting: "#DE7693",
          poison: "#C59BDD",
          other: "#fafafa",
        },
      },
    },
  },
  plugins: [],
};

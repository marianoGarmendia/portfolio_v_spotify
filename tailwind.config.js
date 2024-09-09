/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        black_light: "#121212",
        gray_dark: "#161618",
        project:
          "linear-gradient(0deg, rgba(31,58,65,1) 0%, rgba(18,34,38,1) 100%);",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito Sans Variable", "sans-serif"],
        rubik: "Rubik Variable",
      },
      textColor: {
        text_gray: "rgb(127, 129, 136)",
        text_opacity: "#9CA4A6",
      },
      borderColor: {
        border_gray: "#9CA4A6",
      },
    },
  },
  plugins: [],
};

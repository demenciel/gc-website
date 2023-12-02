/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd0d7",
        background: "#242424",
        cta: "#f6e5e5",
        text: "#fff",
      },
      height: {
        "1/2-screen": "50vh",
        "1/3-screen": "33.333333vh",
        "2/3-screen": "66.666667vh",
        "1/4-screen": "25vh",
        "3/4-screen": "75vh",
        "full-screen": "100vh",
      },
      width: {
        "1/2-screen": "50vw",
        "1/3-screen": "33.333333vw",
        "2/3-screen": "66.666667vw",
        "1/4-screen": "25vw",
        "3/4-screen": "75vw",
      },
      padding: {
        "section-padding": " 0rem 4rem",
        "section-padding-lg": "0rem 6rem ",
        "section-padding-xl": "0rem 8rem",
      },
      screens: {
        xs: "480px", // Extra small devices (portrait phones)
        sm: "640px", // Small devices (landscape phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // Extra extra large devices (larger desktops)
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      serif: ['Montserrat', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
    },
    defaultFontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#202020",
        background: "#fff",
        background2: "#efefef",
        cta: "#202020",
        text: "#202020",
        title: "#202020",
        body: "#8d6b5b",
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
        md: "811px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // Extra extra large devices (larger desktops)
      },
    },
  },
  plugins: [],
};

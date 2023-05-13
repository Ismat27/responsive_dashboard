/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        body: "18px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        dashboardLayout: "1fr auto",
      },
      screens: {
        "1.5xl": "1440px",
      },
    },
    colors: {
      red: "#EA5455",
      primary: "#68ed2f",
      orange: "#FF9F43",
      white: "#FFFFFF",
      success: "#37CB79",
      green: "#37CB79",
      secondary: "#7367F0",
      redLight: "rgba(234, 84, 85, 0.3)",
      orangeLight: "rgba(255, 159, 67, 0.3)",
      lightBlue: "rgba(115, 103, 240, 0.2)",
      black: {
        100: "#363740",
        200: "#4B465C",
        300: "#4A4B53",
      },
      gray: {
        100: "#F5F5F5",
        200: "#DBDADE",
        300: "#979797",
      },
    },
  },
  plugins: [],
};

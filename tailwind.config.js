/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        xs: "330px", //small phone
        sm: "580px", //large phone
        md: "768px", //tab, ipad
        lg: "1024px", //small laptop
        xl: "1280px", //large laptop
        "2xl": "1620px", //desktop
      },

      colors: {
        black: "#000000",
        white: "#FFFFFF",
        base: "#F3FBFF",
        primary: "#0D5169",
        secondary: "#DEF4FF",
        accent: "#119CCA",
      },
    },
  },
  plugins: [require("daisyui")],

  safelist: ["bg-secondary", "bg-primary"],
};

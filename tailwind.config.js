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
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
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

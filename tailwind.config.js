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
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
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
        green: "#409E6F",
        red: "#E44A3E",
        corn: "#FEF7C6",
      },
    },
  },
  plugins: [require("daisyui")],

  safelist: ["bg-secondary", "bg-primary"],
};

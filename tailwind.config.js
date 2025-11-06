const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   primary: {
      //     DEFAULT: "#25A499",
      //     light: "#39AFA5",
      //     soft: "#AFDFDF",
      //   },
      //   secondary: {
      //     light: "#F2FFFF",
      //     pale: "#D6EEEE",
      //   },
      //   text: {
      //     dark: "#121212",
      //     gray: "#39302F",
      //     light: "#F6FAF9",
      //   },
      // },
    },
  },
  plugins: [],
};

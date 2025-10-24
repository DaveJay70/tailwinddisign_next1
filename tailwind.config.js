    const defaultTheme = require('tailwindcss/defaultTheme');

    module.exports = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
          },
        },
      },
      plugins: [],
    };
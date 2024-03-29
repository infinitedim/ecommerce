/* eslint-disable global-require */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        "neue-machina": ["Neue Machina", "sans-serif"],
      },
      colors: ({ colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        "custom-black": {
          900: "#0a0c0f",
          800: "#1a1c1f",
          700: "#2a2c2f",
          600: "#3a3c3f",
          500: "#4a4c4f",
          400: "#5a5c5f",
          300: "#6a6c6f",
          200: "#7a7c7f",
          100: "#8a8c8f",
          50: "#9a9c9f",
        },
        "custom-white": {
          900: "#fafcff",
          800: "#eaecef",
          700: "#dadcdf",
          600: "#cacccf",
          500: "#babcbf",
          400: "#aaacaf",
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

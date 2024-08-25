const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.fuchsia,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        blue: colors.blue,
        teal: colors.teal,
        orange: colors.orange,
        red: colors.red,
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        glow: "0 0 15px rgba(139, 92, 246, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

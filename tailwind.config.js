/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui"],
        serif: ["Inter", "ui-serif", "serif"],
      },
      colors: {
        "dark-blue": "#07133B",
        green: "#1ACD77",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-to-tr":
          "radial-gradient(115% 30% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["playfair-display", "serif"],
        roboto: ["roboto", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

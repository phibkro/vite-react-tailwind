/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      laptop: "1024px",
      desktop: "1440px"
    },
    extend: {},
  },
  plugins: [],
}

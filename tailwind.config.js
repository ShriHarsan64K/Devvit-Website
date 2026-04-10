/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'devvit-bg':     '#0E0E0E',
        'devvit-purple': '#A7A5FF',
        'devvit-orange': '#FF7439',
        'devvit-white':  '#FFFFFF',
      },
      fontFamily: {
        lexend:  ['Lexend', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

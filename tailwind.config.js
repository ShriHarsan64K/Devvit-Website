/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from Devvit Style Guide
        'devvit-bg':      '#0E0E0E',  // Background
        'devvit-purple':  '#A7A5FF',  // Primary accent
        'devvit-orange':  '#FF7439',  // Secondary accent
        'devvit-white':   '#FFFFFF',  // Text primary
      },
      fontFamily: {
        // Style guide fonts
        'lexend':  ['Lexend', 'sans-serif'],         // Display / headings
        'inter':   ['Inter', 'sans-serif'],           // Body text
        'grotesk': ['"Space Grotesk"', 'sans-serif'], // Labels / small text
      },
      fontSize: {
        // Style guide sizes
        'display':  ['128px', { lineHeight: '1' }],  // Black 160 (hero)
        'heading':  ['72px',  { lineHeight: '1.1' }], // Bold 72
        'subhead':  ['48px',  { lineHeight: '1.2' }], // Extra bold 48
        'title':    ['30px',  { lineHeight: '1.3' }], // Bold 30
        'body-lg':  ['24px',  { lineHeight: '1.5' }], // Regular 24
        'body':     ['16px',  { lineHeight: '1.6' }], // Regular 16
        'body-sm':  ['14px',  { lineHeight: '1.6' }], // Regular 14
        'label':    ['12px',  { lineHeight: '1.4' }], // Bold/Regular 12
      },
      fontWeight: {
        'regular':    '400',
        'bold':       '700',
        'extrabold':  '800',
        'black':      '900',
      },
      backgroundColor: {
        'primary': '#0E0E0E',
      },
    },
  },
  plugins: [],
}
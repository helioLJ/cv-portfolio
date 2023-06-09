/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
      },

      backgroundImage: {
        'card-gradient':
          'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
      },
    },
  },
  plugins: [],
}

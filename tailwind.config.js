/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h2: '6.25rem',
        h3: '2.875rem'
      },
      colors: {
        'dark_gray': '#323332',
        'gray': '#939598',
        'light_gray': '#C4C4C4',
        'middle_gray': '#70706F',
      },
      letterSpacing: {
        normal: '0.03em',
      },
      lineHeight: {
        'big': '3.9375rem',
        'middle': '3,375rem'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'boo-blue': '#ECF5FE',
        'boo-gray-hard' : '#161616',
        'boo-btn-bg': '#00B8EC',
        'boo-btn-bg-hover': '#007799',
        'boo-str-description': '#686767',
        'boo-blue-2': '#CCF1FB'
      }
    },
  },
  plugins: [],
}


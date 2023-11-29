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
    // screens: {
    //   xs: '480px',
    //   sm: '680px',
    //   md: '940px',
    //   lg: '1024px',
    //   xl: '1440px',
    // },
    extend: {
      colors: {
        'boo-blue': '#ECF5FE',
        'boo-gray-hard' : '#161616',
        'boo-btn-bg': '#00B8EC',
        'boo-btn-bg-hover': '#007799',
        'boo-str-description': '#686767',
        'boo-blue-2': '#CCF1FB',
        'boo-mobile': '#6EB7FF',
        'boo-desktop': '#AEA1FF',
        'boo-web': '#63D4DC',
        'boo-green': '#24DE9C',
        'boo-bg': '#F4F4F4',
        'boo-alert': '#FFC700',
        'boo-alert-bg': '#ffc7001f',
        'boo-red': '#F51E01',
        'boo-blue-green': '#C8F8F9'
      }
    },
  },
  plugins: [],
}


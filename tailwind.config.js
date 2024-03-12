/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-black': '#222B3B',
        'c-gray': '#8B8FA8',
        'c-blue': '#161D2F',
        'c-dark-blue':'#19222C',
        'c-green': '#7AAB79',
        'c-white': '#F5F5F7',
      },
      fontSize: {
        "h-lg": ['38px'],
        "h-med": ['32px'],
        "h-sm": ['22px'],
        "h-xsm": ['18px'],
        "b-med": ['16px'],
        "b-sm": ['12px'],
      },
      fontWeight: {
        "light": ['300'],
        "medium": ['400'],
      },
      screens: {
        'tablet': '768px',
        'desktop': '1280px',
      },
      padding: {
        'phone': '12px',
        'tablet': '16px',
        'desktop': '24px',
      },
    },
  },
  plugins: [],
};

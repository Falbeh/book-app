/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif', 'system-ui'],
    },
    extend: {
      boxShadow: {
        'top-inner': 'inset 0 4px 3px -3px rgb(0 0 0 / 10%), inset 0 4px 2px -2px rgb(0 0 0 / 7%)',
        'bottom-outer': '0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%)'
      },
      colors: {
        'app-dark': "#1B1B1B",
        'app-dark-light': "#282828"
      },
      spacing: {
        'screen-80': '80vh',
				'screen-75': '75vh',
				'screen-60': '60vh',
				'screen-50': '50vh',
				'screen-40': '40vh',
				'screen-30': '30vh',
      }
    },
  },
  plugins: [],
}

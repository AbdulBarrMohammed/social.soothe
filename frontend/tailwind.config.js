/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      padding: {
        '30px': '30px',
      },
      colors: {
        pink: 'rgb(242, 175, 212)',
        lightRed: 'rgb(237, 111, 133)',
        lightOrange: 'rgb(242, 169, 86)',
        myBlue: 'rgb(88, 168, 248)',
        myYellow: 'rgb(247, 208, 70)'
      },
    },
  },
  plugins: [],
}

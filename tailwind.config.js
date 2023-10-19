/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        'tt-octos': ['TTOctos',  'sans-serif'],
        'rfdewi': ['RFDewi',  'sans-serif'],
      },
      textColor: {
        'nimbl-gray': 'rgba(22, 22, 23, 0.50)',
        'nimbl-black': '#161617',
      }
    },
    container: {
      center: true,
      padding: {
          DEFAULT: "20px",
          xl: 0,
      },
      screens: {
          '2xl': "1690px",
      },
  },
  },
  plugins: [],
}


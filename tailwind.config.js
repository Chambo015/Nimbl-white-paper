/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      sm: "645px",
      md: "770px",
      lg: "1025px",
      xl: "1290px",
      "2xl": "1540px",
      "3xl": "1700px",
  },
    extend: {
      fontFamily: {
        'tt-octos': ['TTOctos', 'sans-serif'],
        rfdewi: ['RFDewi', 'sans-serif'],
      },
      textColor: {
        'nimbl-gray': 'rgba(22, 22, 23, 0.50)',
        'nimbl-black': '#161617',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        "3xl": 0,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1690px',
      },
    },
  },
  plugins: [],
};

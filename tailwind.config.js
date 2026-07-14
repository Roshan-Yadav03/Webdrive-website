/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1:'#262626',
        primary2:'#9A9A9A',
        primary3:'#4E4E4E'
      },
      animation: {
        'border-pulse': 'border-pulse 1.5s infinite',
      },
      keyframes: {
        'border-pulse': {
          '0%, 100%': { borderColor: '#0ea5e9' },
          '50%': { borderColor: '#facc15' },
        },
      },
    },

  },
  plugins: [],
}


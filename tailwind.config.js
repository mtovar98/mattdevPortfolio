/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#2563EB',
        textPrimary: '#FFFFFF',
      },
      fontFamily: {
        robotoMono: ['"Roboto Mono"', 'monospace'],
      },
      animation: {
        "slider-smooth": "slider-smooth 28s ease-in-out infinite",
      },
      keyframes: {
        "slider-smooth": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(-75%)" },
          "100%": { transform: "translateX(0)" }, // Regresa al inicio
        },
      },
    },
  },
  plugins: [],
};

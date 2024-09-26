/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - 30px))' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(calc(-50% - 30px))' },
          to: { transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'top-union': "url('/src/images/bg-top.png')",
        'bottom-union': "url('src/images/bg-bottom.png')"
      },
      colors: {
        'blue1': 'rgba(51, 122, 234, 1)',
        'blue2': 'rgba(79, 55, 234, 1)',
        'purple': 'rgba(143, 38, 233, 1)',
        'white-tint': 'rgba(255, 255, 255, 0.02)', 
      }
    },
  },
  plugins: [],
}

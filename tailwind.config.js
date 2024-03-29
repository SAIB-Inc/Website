/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'top-union': "url('/src/images/bg-top.png')",
        'bottom-union': "url('src/images/bg-bottom.png')"
      }
    },
  },
  plugins: [],
}

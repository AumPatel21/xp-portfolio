/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('/public/assets/xp.png')"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      header: ["Header", "sans-serif"],
      body: ["Body", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      'black': '#18151a',
      'white': '#ffffff',
      'orange': '#EB8B2B',
      'gray': '#e2e8f0',
    },
    backgroundImage: {
      'aboutusmobile' : "url('/src/assets/img/aboutus.png')",
      'aboutusmd': "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxxs': '280px',
      'xxs': '375px',
      'xs': '390px',
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    fontFamily:{
      header: ["Header", "sans-serif"],
      body: ["Body", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      'black': '#18151a',
      'white': '#ffffff',
      'orange': '#FCBA08',
      'gray': '#e2e8f0',
      'lightgray': '#94a3b8',
      'yellow': '#EB8B2B',
    },
    backgroundImage: {
      'aboutusmobile' : "url('/src/assets/img/aboutus.png')",
      'facebookbg': "url('/src/assets/img/facebook_bg.jpg')",
      'aboutusmd': "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
    },
  },
  plugins: [],
}
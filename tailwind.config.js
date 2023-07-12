module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        '13':'3.25rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'yblue': '#1fb6ff',
        'ypink': '#ff49db',
        'yorange': '#ff7849',
        'ygreen': '#13ce66',
        'ygray-dark': '#273444',
        'ygray': '#8492a6',
        'ygray-light': '#d3dce6',
        'ytwitter':'#4F48E2',
        'ylblue':'#00AEEF',
      },
      rounded:{
        '50':"50px"
      }
    },
  },
  plugins: [],
}
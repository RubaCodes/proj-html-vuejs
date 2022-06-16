module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-background': '#1f1e38',
        'water-green': '#39ffbf',
      },
      fontFamily: {
        sans: ['Inter', 'Sans-serif'],
      },
      backgroundImage: {
        'hero-pattern':
          "url('/src/assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg')",
        'strategy-pattern':
          "url('/src/assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg')",
        'get-started-banner':
          "url('/src/assets/img/business-people-working-together-on-project-and-B3MZ4TX.jpg')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('/src/assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg')",
        'strategy-pattern':
          "url('/src/assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg')",
      },
    },
  },
  plugins: [],
};

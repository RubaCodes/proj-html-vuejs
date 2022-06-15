module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('/src/assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./**/*.html", "./*.html", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: {
      'sans': ['Inter var'],
    }
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
}

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'white-to-orange': 'linear-gradient(135deg, white, orange)',
      }),
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
    fontFamily: {
      display: [
        'ChelseaMarket',
        'Arial',
        'Trebuchet MS',
        'Verdana',
        'sans-serif',
      ],
      body: ['Arial', 'Trebuchet MS', 'Verdana', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi'],
  },
}

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
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

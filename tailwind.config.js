module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#333333',
      'primary-dark': '#222222',
      secondary: '#3D56B2',
      alternate: '#fcf7f1',
      'off-white': '#faeddf',
    },
  },
  extend: {},
  plugins: [],
}

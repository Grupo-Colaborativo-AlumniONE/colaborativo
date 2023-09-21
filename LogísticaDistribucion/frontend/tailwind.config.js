/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#3898ec',
        colorSecondary: 'rgb(161, 163, 247)',
        backgroundPrimary: '#16161a',
        backgroundSecondary: '#232629',
        backgroundCard: '#232629',
        fontPrimary: '#fffffe',
        titleColor: '#94a1b2',
        btnColor: '#3898ec',
        btnHover: '#535bf2',
        btnColorText: '#fffffe',
        linkColor: '#3898ec',
        visitedLinkColor: '#535bf2'
      },
      fontFamily: {
        sans: 'sans-serif'
      },
      screens: {
        xs: '530px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xll: '1400px',
        '2xl': '1536px'
      }
    }
  },
  plugins: []
}

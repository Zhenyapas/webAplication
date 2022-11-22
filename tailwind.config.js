

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    container: {
      center: true,
    },



    extend: {
      fontFamily: {
        'roboto': "'Roboto', sans-serif",
        'proxima':"'ProximaNova', sans-serif",
        'proximaThin':"'ProximaNovaThin', sans-serif",
      },
      colors: {
        primary: '#3A4562',
        secondary:  'rgba(56, 65, 93, 0.82)',
        shape: '#38415D',
      }, 
      fontSize: {
      'h2': ['1.5rem', {
        lineHeight: '1.875rem',
        letterSpacing: '-0.75px',
        fontWeight: '700',
      }],
      'h1': ['1.75rem', {
        lineHeight: '2.125rem',
        letterSpacing: '0.413333px',
        fontWeight: '700',
      }],
      },
      screens: {
        pc: '1147px'
      }
    },

 },
  plugins: [],
 
}
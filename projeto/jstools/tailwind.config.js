module.exports = {
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
  purge: {
      enabled: true, 
      content: [
          '../**/templates/*.html',
          '../**/templates/**/*.html'
      ]
  },
  theme: {
    extend: {
      colors: {
        colora: '#FFB310',
        colorb: '#6F684E',
        colorc: '#FA0026',
        colord: '#42361E',
      },
      fontFamily: {
        kirk: ['Nunito']
      }
    },
  },
  variants: {},
  plugins: [],
}
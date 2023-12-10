const colors = require('./src/colors.ts');

module.exports = {
  colors,
  fonts: {
    fontSizes: {
      '2xl': 32,
      xl: 24,
      lg: 18,
      base: 16,
      sm: 12
    },
    fontWeights: {
      regular: '400',
      bold: '700'
    },
    fontFamilies: {
      default: 'Nunito'
    },
    lineHeights: {
      heading: '1.25',
      base: '1.6'
    }
  },
  radii: {
    full: 9999,
    lg: 12,
    md: 8
  },
  spacing: {
    px: 1,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
    20: 80
  }
};

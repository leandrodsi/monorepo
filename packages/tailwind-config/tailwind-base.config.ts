const tokens = require('@repo/tokens/index.ts');

module.exports = {
  theme: {
    colors: tokens.colors,
    spacing: tokens.spacing,
    borderRadius: tokens.radii,
    fontWeight: tokens.fonts.fontWeights,
    fontFamily: {
      sans: tokens.fonts.fontFamilies.default
    },
    fontSize: tokens.fonts.fontSizes,
    lineHeight: tokens.fonts.lineHeights,
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    }
  },
  plugins: []
};

const theme = require('@repo/tokens/rn-tokens.ts');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    ...theme,
    colors: {
      ...theme.colors,
      pink: colors.pink,
      purple: colors.purple,
      green: colors.green,
      orange: colors.orange
    }
  },
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}']
};

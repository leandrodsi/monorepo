const theme = require('@repo/tokens/next-tokens');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    ...theme,
    colors: {
      ...theme.colors,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      orange: colors.orange,
      green: colors.green
    }
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [
    plugin(({ theme, addUtilities }: any) => {
      const gradientBg = {} as { [key: string]: { [key: string]: string } };
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color][100];
          const color2 = colors[color][500];
          gradientBg[`.gradient-${color}`] = {
            background: `linear-gradient(148deg, ${color1} 0%, ${color2} 40%)`
          };
        }
      }
      addUtilities(gradientBg);
    })
  ]
};

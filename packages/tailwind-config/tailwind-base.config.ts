import { colors, fonts, radii, spacing } from '@repo/tokens';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors,
    spacing,
    borderRadius: radii,
    fontWeight: fonts.fontWeights,
    fontFamily: {
      sans: fonts.fontFamilies.default
    },
    fontSize: fonts.fontSizes,
    lineHeight: fonts.lineHeights,
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    }
  },
  plugins: []
};
export default config;

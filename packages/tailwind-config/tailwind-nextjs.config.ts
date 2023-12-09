import { Config } from 'tailwindcss/types/config';
import baseConfig from './tailwind-base.config';

const config: Config = {
  ...baseConfig,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ]
};

export default config;

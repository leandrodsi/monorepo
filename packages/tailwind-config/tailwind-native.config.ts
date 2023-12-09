import { Config } from 'tailwindcss/types/config';
import baseConfig from './tailwind-base.config';

const config: Config = {
  ...baseConfig,
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js, jsx, ts, tsx}']
};

export default config;

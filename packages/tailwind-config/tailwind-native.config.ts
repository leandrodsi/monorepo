const baseConfig = require('./tailwind-base.config.ts');

module.exports = {
  ...baseConfig,
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}']
};

const config = require('@repo/tailwind-config/tailwind-native.config.ts');

module.exports = {
  ...config,
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/modules/**/*.{js,jsx,ts,tsx}',
    './src/**/*.*.{js,jsx,ts,tsx}'
  ]
};

const { mergeConfig } = require('vite');
const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
};

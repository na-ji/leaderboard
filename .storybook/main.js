const { mergeConfig } = require('vite');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const EnvironmentPlugin = require('vite-plugin-environment').default;
const { config: appConfig } = require('node-config-ts');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
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
      resolve: {
        alias: {
          'node-config-ts': 'node-config-ts/iso',
        },
      },
      define: {
        __CONFIG__: appConfig,
      },
      plugins: [tsconfigPaths(), new EnvironmentPlugin({ IS_STORYBOOK: '1' })],
    });
  },
};

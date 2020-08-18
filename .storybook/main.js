module.exports = {
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          // modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            outputStyle: 'expanded',
            sourceMap: true,
            sourceMapContents: true,
            includePaths: ['../node_modules'],
          },
        },
      },
    },
    '@storybook/addon-essentials',
    '../storybook-addons/design-addon/register.js'
  ],
  stories: ['../packages/**/__stories__/**/*.stories.(js|mdx)'],
};

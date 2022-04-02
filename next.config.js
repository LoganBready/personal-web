/* eslint-disable no-undef */

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },

  webpackDevMiddleware: (config) => {
    return config;
  },

  async redirects() {
    // You can populate this with redirects as required
    return [
      // {
      // 	source: '/',
      // 	destination: '/campaigns',
      // 	permanent: false,
      // },
    ];
  },
};

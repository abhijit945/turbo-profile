const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
  },
};

module.exports = withNextra(nextConfig);

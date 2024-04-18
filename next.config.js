/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['.'],
  },
  // ------ styled-components ------
  compiler: {
    styledComponents: true,
  },
  // ------ next/image ------
  // images: {
  //   domains: ['htmlcolorcodes.com'],
  // },
  // ------ svgr ------
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;

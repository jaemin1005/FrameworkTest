const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  typescript: {
    tsconfigPath: "tsconfig.json"
  },
}

module.exports = withVanillaExtract(nextConfig)
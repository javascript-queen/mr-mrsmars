/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  optimizeFonts: false,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
}

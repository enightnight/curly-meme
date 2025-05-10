// next.config.js
const nextConfig = {
  reactStrictMode: true, // Activar el modo estricto de React (recomendado)
  webpack(config) {
    config.resolve.alias['nextra'] = require.resolve('nextra'); // Configuración para Nextra
    return config; // Retornar la configuración de Webpack modificada
  },
};

module.exports = nextConfig;

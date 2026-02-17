/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/mitra-nusarasa',
    assetPrefix: '/mitra-nusarasa/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;

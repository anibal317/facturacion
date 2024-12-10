// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
//     images: { unoptimized: true }
// };

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: { unoptimized: true },
};

export default nextConfig;
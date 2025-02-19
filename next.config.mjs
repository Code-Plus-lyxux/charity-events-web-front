/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["picsum.photos", "localhost"],
    },
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;

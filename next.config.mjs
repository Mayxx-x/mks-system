/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mks-sistemas.nyc3',
                port: '',
                pathname: '/products/ipadair.webp',
            },
        ],
    },
};

export default nextConfig;

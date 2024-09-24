/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname:'/*dominio*/',
                pathname:'/**',
                port:'',
            }
        ],
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'www.w3.org'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            }
        ],
    }
    
    
}

module.exports = nextConfig

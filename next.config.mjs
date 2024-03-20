/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ['localhost'],
        },
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
};

export default nextConfig;

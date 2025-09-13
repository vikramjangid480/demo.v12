/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      }
    ],
  },
  async rewrites() {
    return [
      // Direct PHP file access (existing functionality)
      {
        source: '/getBlogs.php',
        destination: 'http://localhost:8000/getBlogs.php',
      },
      {
        source: '/getCategories.php',
        destination: 'http://localhost:8000/getCategories.php',
      },
      {
        source: '/getBanner.php',
        destination: 'http://localhost:8000/getBanner.php',
      },
      {
        source: '/addBlog.php',
        destination: 'http://localhost:8000/addBlog.php',
      },
      {
        source: '/login.php',
        destination: 'http://localhost:8000/login.php',
      },
      // API routes for frontend calls
      {
        source: '/api/getBlogs.php',
        destination: 'http://localhost:8000/getBlogs.php',
      },
      {
        source: '/api/getCategories.php',
        destination: 'http://localhost:8000/getCategories.php',
      },
      {
        source: '/api/getBanner.php',
        destination: 'http://localhost:8000/getBanner.php',
      },
      {
        source: '/api/addBlog.php',
        destination: 'http://localhost:8000/addBlog.php',
      },
      {
        source: '/api/auth/login',
        destination: 'http://localhost:8000/login.php',
      },
      // Catch-all for any other /api/* routes
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/:path*',
      },
    ]
  },
  env: {
    BACKEND_URL: process.env.NODE_ENV === 'production' 
      ? 'https://your-backend-domain.com' 
      : 'http://localhost:8000',
  },
}

module.exports = nextConfig
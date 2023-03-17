/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/profile/my-questions',
        permanent: false,
      },
      {
        source: '/profile/favorites',
        destination: '/profile/favorites/subjects',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

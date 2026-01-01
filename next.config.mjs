import mdx from '@next/mdx';

const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Static export for GitHub Pages
  output: 'export',
  // Base path for GitHub Pages (repository name)
  basePath: '/testing',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default withMDX(nextConfig);

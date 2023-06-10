/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
   env: {
      BACKEND_URL: "/resume-app/",
   },
   images: { unoptimized: true },
   output: "export",
   // Optional: Add a trailing slash to all paths `/about` -> `/about/`
   // trailingSlash: true,
   // Optional: Change the output directory `out` -> `dist`
   // distDir: 'dist',
};
module.exports = nextConfig;

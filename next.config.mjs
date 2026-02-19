/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    unoptimized: true,
    remotePatterns:[

      {
        protocol: "https",
        hostname: "files.stripe.com",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;

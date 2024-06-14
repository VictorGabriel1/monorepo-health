/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXTAUTH_SECRET: "SECRET",
  },
};

export default nextConfig;

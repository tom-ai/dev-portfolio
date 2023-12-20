/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "github.com",
      "sophia-aws-s3-images-bucket.s3.eu-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;

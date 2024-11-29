const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'schiopraulimages.s3.eu-north-1.amazonaws.com',
        },
      ],
    },
  };
  
  export default nextConfig;
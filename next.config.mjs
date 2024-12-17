/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Разрешаем загрузку изображений с этого хоста
      },
    ],
  },
};

export default nextConfig;

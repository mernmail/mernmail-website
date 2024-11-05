/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	cacheMaxMemorySize: 0,
	poweredByHeader: false
};

export default nextConfig;

const isExport = process.env.STATIC_EXPORT === '1';

module.exports = {
	reactStrictMode: true,
	swcMinify: true,

	// GitHub Pages temporary deployment: STATIC_EXPORT=1 produces a static
	// export in `out/`. The default build (Vercel) is unchanged.
	...(isExport ? { output: 'export', trailingSlash: true } : {}),

	images: {
		unoptimized: isExport,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**'
			},
		],
	},

	experimental: {
		forceSwcTransforms: true,
	},
};

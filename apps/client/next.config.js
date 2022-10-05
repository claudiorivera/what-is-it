const withTM = require("next-transpile-modules")([]);

const apiBaseUrl = process.env.SERVER_BASE_URL || "http://localhost:8000";

module.exports = withTM({
	reactStrictMode: true,
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/tf",
					destination: apiBaseUrl,
				},
			],
		};
	},
});

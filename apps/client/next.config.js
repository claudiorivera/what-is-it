const withTM = require("next-transpile-modules")([]);

module.exports = withTM({
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/tf",
          destination: "http://localhost:8000",
        },
      ],
    };
  },
});

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/health",
        permanent: false,
      },
    ];
  },
};

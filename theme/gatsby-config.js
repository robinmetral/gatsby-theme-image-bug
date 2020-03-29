module.exports = ({ title }) => {
  return {
    siteMetadata: {
      title
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `assets`,
          path: `src/assets`
        }
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`
    ]
  };
};

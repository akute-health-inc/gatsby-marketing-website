const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, GOOGLE_ANALYTICS_ID } = process.env;

module.exports = {
  siteMetadata: {
    title: `Gatsby Marketing Website`,
    description: `Marketing website for any small business`,
    author: ``,
    name: "",
    tagline: "",
    githubLink: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GOOGLE_ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/sitemap.xml", "/robots.txt"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

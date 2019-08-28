const dotenv = require('dotenv')
const { BLOCKS } = require('@contentful/rich-text-types')

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_HOST,
  GOOGLE_ANALYTICS_ID,
  SITE_URL,
} = process.env

module.exports = {
  siteMetadata: {
    title: `Gatsby Marketing Website`,
    description: `Marketing website for any small business`,
    author: ``,
    name: '',
    tagline: '',
    githubLink: '',
    siteUrl: SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
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
        host: CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GOOGLE_ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/sitemap.xml', '/robots.txt'],
      },
    },
    // {
    //   resolve: `@contentful/gatsby-transformer-contentful-richtext`,
    //   options: {
    //     renderOptions: {
    //       renderNode: {
    //         [BLOCKS.EMBEDDED_ASSET]: node => {
    //           return `<img src="${node.data.target.fields.file['en-US'].url}" />`
    //         }
    //       },
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

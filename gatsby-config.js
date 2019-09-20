//postcss transforms extends syntaxes and features into modern, broweser-friendly css
//for bootsrap
const cssnext = require("postcss-cssnext")
module.exports = {
  siteMetadata: {
    title: `Monica Arroyo Website`,
    siteUrl: `https://monicaarroyo.com`,
    description: `This is potfolio I build using gatsby and react`,
    author: `monica.arroyo1319@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    //`gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Monica Arroyo`,
        short_name: `Monica Arroyo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {},
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,

    {
      resolve: `gatsby-plugin-resolve-src`,
      options: {
        addSassLoader: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          cssnext({
            features: {
              autoprefixer: false,
            },
          }),
        ],
        precision: 8,
        includePaths: ["src/scss"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //error tracking - from gatsby tutorial
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: `https://6ca33f31794b46528038032e9918edb7@sentry.io/1476832`,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

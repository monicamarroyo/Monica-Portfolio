//postcss transforms extends syntaxes and features into modern, broweser-friendly css
//for bootsrap
const cssnext = require('postcss-cssnext')
module.exports = {
  siteMetadata: {
    title: `Monica Arroyo Website`,
    description: `This is potfolio I build using gatsby and react`,
    author: `monica.arroyo1319@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-esling`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options : {
        
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,

    {
      resolve: `gatsby-plugin-resolve-src`,
      options : {
        addSassLoader: false
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [cssnext()],
        precision: 8,
        includePaths: ['src/scss']
      }
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options : {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-souce-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    //error tracking
    {
      resolve: 
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
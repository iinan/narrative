const proxy = require('http-proxy-middleware')

exports.siteMetadata = {
  title: 'Narative',
  siteUrl: 'https://xnarrative.netlify.app',
  pathPrefix: `/`,
}

exports.plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-typescript`,
  `gatsby-transformer-remark`,
  'gatsby-plugin-netlify',
  'gatsby-plugin-netlify-cache',
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: process.env.NODE_ENV === 'development',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets/`,
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://narative.co',
      sitemap: 'https://narative.co/sitemap.xml',
      policy: [{ userAgent: '*', disallow: ['/.netlify/'] }],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-118232427-1',
    },
  },
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: '2183075648607369',
    },
  },

]

// For lambda functions
exports.developMiddleware = app => {
  app.use(
    '/.netlify/functions/',
    proxy({
      target: 'http://localhost:9000',
      pathRewrite: {
        '/.netlify/functions/': '',
      },
    })
  )
}

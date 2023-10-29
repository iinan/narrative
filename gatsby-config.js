require('dotenv').config()

const proxy = require('http-proxy-middleware')

exports.siteMetadata = {
  title: 'Narative',
  siteUrl: 'https://xnarrative.netlify.app',
  pathPrefix: `/`,
}

exports.plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-image`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
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
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.416e5w1d4ih6,
      accessToken: process.env.S7hwctZWI58QDGdmIu4O3f7A2psu67FtbWtyn78avKQ,
      environment: process.env.master,
    },
  },

  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Narative',
      short_name: 'Narative',
      start_url: '/',
      background_color: '#111216',
      theme_color: '#111216',
      display: 'standalone',
      icon: 'src/assets/favicon/favicon.png',
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

  // These are our local plugins that can be found within ./plugins
  'gatsby-transformer-enhance-contentful',
  'gatsby-transformer-contentful-rich-text-html-renderer',
  `gatsby-plugin-twitter`,
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

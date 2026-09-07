const path = require('path')
const { createPages } = require('./gatsby/createPages')

exports.createPages = createPages

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@sections': path.resolve(__dirname, 'src/sections'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@typings': path.resolve(__dirname, 'src/types'),
        '@data': path.resolve(__dirname, 'src/data'),
      },
    },
  })
}

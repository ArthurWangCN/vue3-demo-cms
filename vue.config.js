const path = require('path')


const webpack = require('webpack')

module.exports = {
  devServer: {
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://lianghj.top:8888/api/private/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}

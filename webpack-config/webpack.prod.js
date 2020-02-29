const {smart} = require('webpack-merge')

const webpackBaseConf = require('./webpack.base.js')

module.exports = smart(webpackBaseConf, {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map'
})
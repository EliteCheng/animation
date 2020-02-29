const path = require('path')
const webpack = require('webpack')
const {smart} = require('webpack-merge')

const webpackBaseConf = require('./webpack.base.js')

module.exports = smart(webpackBaseConf, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: webpackBaseConf.output.path,
        open: false,
        port: 31366,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    optimization: {
        usedExports: true
    }
})
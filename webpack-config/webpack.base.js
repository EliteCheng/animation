const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {
    mainPath,
    htmlPath,
} = require('../svg-animation/config')

module.exports = {
    entry: {
        main: [mainPath],
    },
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, '../build-static/')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            '@babel/plugin-transform-runtime',
                            {
                                'absoluteRuntime': false,
                                'corejs': 3,
                                'helpers': true,
                                'regenerator': true,
                                'useESModules': false,
                                'version': '7.0.0-beta.0'
                            }
                        ]
                    ]
                }
            },
            exclude: /node_modules/
        },]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: htmlPath
        })
    ]
}



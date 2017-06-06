const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './scripts/main.js'
        // the entry point of our app
    ],
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
    ],
};
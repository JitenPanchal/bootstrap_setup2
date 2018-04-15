const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


let pathsToClean = ['dist'];

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/app.js",
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new ExtractTextPlugin( { filename: 'css/style.css'}),
        new HtmlWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: 'src/images/*', to: path.resolve(__dirname,"dist/images"), force: true, flatten: true },
            { from: 'src/**/*.html'},
            
          ]),
    ]
};

module.exports = config;
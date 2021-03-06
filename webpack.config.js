const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const OUTPUT_FOLDER = path.join(__dirname, 'dist')
const INDEX_HTML = path.join(__dirname, '/index.html')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: OUTPUT_FOLDER,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin([{from: 'app.yaml'}]),
        new HtmlWebpackPlugin({template: INDEX_HTML}),
        new CleanWebpackPlugin(),
    ],
    devtool: 'source-map',
}

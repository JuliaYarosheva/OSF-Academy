const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js'
    },
    devServer: {
        publicPath : '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/images/[name].[ext]',
                    },
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/fonts/[name].[ext]',
                    },
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
            publicPath: '../../',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/productDetailsPage.html',
            filename: 'pages/productDetailsPage.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/categoryLandingPage.html',
            filename: 'pages/categoryLandingPage.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/404Page.html',
            filename: 'pages/404Page.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/cartPage.html',
            filename: 'pages/cartPage.html'
        }),
        new CopyWebpackPlugin([
            {from:'static/images',to:'static/images'}
        ])
    ],
    resolve: {
        extensions: [".js", ".css", ".png"],
        modules: ["node_modules"]
    },
};

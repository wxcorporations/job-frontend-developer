const path = require('path');

// plugins
// =========================================================
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    entry: {
        app: './index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[fullhash].js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass|css)$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[hash][ext]'
                }
            },
            {
                test: /\.(mp3|wav|ogg)$/i,
                type: 'asset/resource',

                generator: {
                    filename: 'media/[name][ext][query]',
                },
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HtmlWebpackPlugin({ template: './src/index.html', scriptLoading: 'blocking' }),
        new ReactRefreshWebpackPlugin(),
    ]
};

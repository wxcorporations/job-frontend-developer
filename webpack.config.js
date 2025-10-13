const { readFileSync } = require('fs')
const path = require('path');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = {
    entry: {
        app: './index.tsx',
    },
    mode: 'development',
    // mode: 'production',
    devtool: 'source-map',
    performance: {
        hints: false,
        maxAssetSize: 50000,
        maxEntrypointSize: 50000,
    },
    optimization: {
        concatenateModules: true,
        removeAvailableModules: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: true,
                    mangle: true,
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true
    },
    devServer: {
        historyApiFallback: true,
        host: 'octoplay.com',
        port: 3000,
        allowedHosts: [
            '.octoplay.com',
            '.ngrok-free.app',
            '.lhr.life'
        ],
        server: {
            type: 'https',
            options: {
                key: readFileSync(path.resolve(__dirname, './.key/octoplay.com+3-key.pem')),
                cert: readFileSync(path.resolve(__dirname, './.key/octoplay.com+3.pem')),
            }
        },
        hot: true,
        open: true,
        static: {
            directory: path.join(__dirname, 'public')
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
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
        ]
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ReactRefreshWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
            openAnalyzer: false,
        }),
    ]
};

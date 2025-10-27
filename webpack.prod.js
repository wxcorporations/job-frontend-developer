const { readFileSync } = require('fs')
const { merge } = require('webpack-merge')

const path = require('path');
const glob = require('glob');
const CONFIG_COMMONS = require('./webpack.commons.js');

const TerserPlugin = require('terser-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

const CONFIG_PROD = {
    mode: 'production',
    // devtool: 'source-map',
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
    devServer: {
        historyApiFallback: true,
        // host: 'octoplay.com',
        host: '0.0.0.0',
        port: 3000,
        allowedHosts: [
            '.dash-corp.com.br',
            '.ngrok-free.app',
            '.lhr.life'
        ],
        server: {
            type: 'https',
            options: {
                key: readFileSync(path.resolve(__dirname, './.key/dash-corp.com.br+2-key.pem')),
                cert: readFileSync(path.resolve(__dirname, './.key/dash-corp.com.br+2.pem')),
            }
        },
        hot: true,
        open: true,
        static: {
            directory: path.join(__dirname, 'public')
        },
    },
    module: {
        rules: []
    },
    plugins: [
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
        }),
        new HtmlCriticalWebpackPlugin({
            base: path.join(path.resolve(__dirname), 'dist/'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565
        }),
        new HtmlCriticalWebpackPlugin(
            {
                base: path.join(path.resolve(__dirname), 'dist/'),
                src: 'index.html',
                dest: 'index.html',
                inline: true,
                minify: true,
                extract: true,
                width: 1280,
                height: 800
            }
        ),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
            openAnalyzer: false,
        }),
    ]
};

module.exports = merge(CONFIG_COMMONS, CONFIG_PROD)
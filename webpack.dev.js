const { readFileSync } = require('fs')
const { merge } = require('webpack-merge');

const path = require('path');
const CONFIG_COMMONS = require('./webpack.commons.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CONFIG_DEV = {
    mode: 'development',
    devtool: 'eval-source-map',
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
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
            openAnalyzer: false,
        }),
    ]
};

module.exports = merge(CONFIG_COMMONS, CONFIG_DEV);
const { readFileSync } = require('fs')
const { merge } = require('webpack-merge')

const path = require('path');
const glob = require('glob');
const CONFIG_COMMONS = require('./webpack.commons.js');

const TerserPlugin = require('terser-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const CONFIG_PROD = {
    mode: 'production',
    devtool: false,
    performance: {
        hints: false,
        maxAssetSize: 50000,
        maxEntrypointSize: 50000,
    },
    optimization: {
        // concatenateModules: true,
        usedExports: true,
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
        splitChunks: {
            chunks: 'all',  // Aplica a todos os chunks (sync/async)
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-.*)[\\/]/,
                    name: 'react-vendor',
                    priority: 20,        // Maior prioridade que vendors genérico
                    minSize: 30000,      // ~30KB mínimo
                    reuseExistingChunk: true
                },
                vendors: {
                    chunks: 'all',
                    name: 'vendors',                // Nome do chunk gerado
                    test: /[\\/]node_modules[\\/]/,  // Separa apenas node_modules
                    priority: -10,                  // Prioridade sobre outros grupos
                    minSize: 50000,                 // Mínimo 50KB para criar chunk
                },
                common: {
                    test: /[\\/]src[\\/]/,
                    name: 'common',
                    minChunks: 2,  // Mínimo 2 entradas usando
                    priority: -20
                },
                styles: {
                    test: /\.css$/,
                    name: 'styles',
                    chunks: 'all',
                }
            },

        },
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
        new HtmlCriticalWebpackPlugin({
            base: path.join(path.resolve(__dirname), 'dist/'),
            src: 'index.html',
            dest: 'index.html',
            inline: true,
            minify: true,
            extract: true,
            width: 1280,
            height: 800
        }),
        new CompressionPlugin({
            test: /\.(js|css|html|svg)$/i, // Arquivos a serem comprimidos
            filename: '[path][base].gz',   // Nome do arquivo comprimido
            algorithm: 'gzip',             // Algoritmo: 'gzip', 'brotliCompress', ou custom
            threshold: 10240,              // Tamanho mínimo (em bytes) para comprimir
            minRatio: 0.8,                 // Razão mínima de compressão
            deleteOriginalAssets: false,   // Manter arquivos originais (true para excluir)
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
            openAnalyzer: false,
        }),
    ]
};

module.exports = merge(CONFIG_COMMONS, CONFIG_PROD)
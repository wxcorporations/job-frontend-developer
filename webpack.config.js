const path = require('path');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {
    entry: {
        app: './index.tsx',
        vendor: './modules/vendor/index.ts',
        libs: './modules/lib/index.ts'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true
    },
    devServer: { 
        historyApiFallback: true,
        static: './dist',
        hot: true,
        port: 3000,
        open: true
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new ReactRefreshWebpackPlugin(),
    ]
};

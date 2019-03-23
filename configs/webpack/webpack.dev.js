const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(
    commonConfig,
    {
        mode: "development",
        entry: {
            vendor: ['react', 'react-dom'],
            bundle: './index.tsx'
        },
        output: {
            filename: 'js/[name].[hash].js',
            publicPath: '/'   
        },
        devtool: "cheap-module-eval-source-map",
        plugins: [
            new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        ],
        devServer: {
            port: 8080,
            hot: true,
            compress: true,
            contentBase: 'dist',
            overlay: true
        }
    }
);
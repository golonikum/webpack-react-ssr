const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

function setupDevtool() {
    return IS_DEV ? 'eval' : false;
}

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader'],
        }],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html')})
    // ],
    // devServer: {
    //     port: 3000,
    //     open: true,
    //     hot: IS_DEV,
    // },
    devtool: setupDevtool(),
};
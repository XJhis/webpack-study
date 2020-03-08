var path =require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        port:3000,
        progress: true,
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ]

}
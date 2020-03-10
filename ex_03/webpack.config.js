//node的核心模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Cleaning up the /dist folder
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//将css从style标签提取成一个外部link标签的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
//压缩提取出来的css的插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); 


// console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    devServer: {
        progress: true, //进度条，
        contentBase: './build',
        /**
         * moke数据
         */
        before(app) {

            app.get('/api/user', (req, res) => {
                res.json({
                    name: '熊炬辉',
                    age: 25
                })
            })
        },
        // proxy: {
        //     // '/api': 'http://localhost:3000/',
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         /**
        //          *  //后端接口没有api
        //          * 我们自己加上/api/代表这是请求，
        //          * 代理的时候去掉/api/
        //          */
        //         pathRewrite: {'^/api' : ''} 
        //     }
        // }
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    // mode: 'development',
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'myApp',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    module: { //模块
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                            //会在有用背景图的地方加上这个前缀
                            // publicPath: '../'
                        }
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: false,
                        outputPath: './img/',
                    },
                }, ],
            },

        ]
    },



}
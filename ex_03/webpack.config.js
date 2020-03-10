//node的核心模块
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

//Cleaning up the /dist folder
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//将css从style标签提取成一个外部link标签的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//压缩js的插件
//terser 简洁的
const TerserJSPlugin = require('terser-webpack-plugin');

//压缩提取出来的css的插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); 


// console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    // devServer: {
    //     port: 3000, //本地端口,
    //     progress: true, //进度条，
    //     contentBase: './build',
    //     open: true,
    //     compress: true,
    // },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    mode: 'development',
    // mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',
        //输出路径必须是一个绝对路径 
        //这里也可以直接用path.resolve('build');
        path: path.resolve(__dirname, 'build'),
        // publicPath: '/assets/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //Html的title
            title: 'myApp',
            //生成的html的名字
            filename: 'index.html',
            //使用模板的相对路径
            template: './src/index.html',
            //js后面加hash值
            // hash: true,
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    module: { //模块
        rules: [{
                test: /\.css$/, //这里是正则，不要加引号！！！
                //css-loader是
                // use: ['style-loader', 'css-loader'],
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // outputPath: './css'  //不起作用哈

                            //会在有用背景图的地方加上这个前缀
                            // publicPath: 'http://www.baidu.com'
                        }
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.js$/, //这里是正则，不要加引号！！！ 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    //这里的配置详见根目录下的.babelrc
                    // options: { //用babel-loader 
                    //    presets: [
                    //        '@babel/preset-env'
                    //    ]
                    // }
                },
            },
            {
                //使用的时候必须要加载jquery才会暴露到全局，不然就是unfined
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            //一般不用这个loader,用下面的url-loader
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             outputPath: 'images',
            //             // publicPath: '//static.lieni.com/'
            //         },
            //     }, ],
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // limit: 60 * 1024,
                        limit: false,
                        //打包之后图片存放路径
                        outputPath: './img',
                        //图片加cdn
                        publicPath: './img/'
                    },
                }, ],
            },

        ]
    },
    //通过CDN加载的脚本，在这里可以设置不打包到项目中
    externals: {
        jquery: 'jQuery'
    }


}
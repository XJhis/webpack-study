//node的核心模块
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log(path.resolve(__dirname, 'dist'))

module.exports = {
    // devServer: {
    //     port: 3000, //本地端口,
    //     progress: true, //进度条，
    //     contentBase: './build',
    //     open: true,
    //     compress: true,
    // },
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',
        //输出路径必须是一个绝对路径 
        //这里也可以直接用path.resolve('build');
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            //Html的title
            title: 'myApp',
            //生成的html的名字
            filename: 'index.html',
            //使用模板的相对路径
            template: './src/index.html',
            //js后面加hash值
            // hash: true,
        })
    ],
    module: { //模块
        rules: [{
            test: '/\.css$/',
            //css-loader是
            use: ['style-loader', 'css-loader'],
        }]
    }

}
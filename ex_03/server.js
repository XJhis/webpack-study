const express = require('express');

const webpack = require('webpack');

const webapckConfig = require('./webpack.config');


//服务端使用webpack
const middle = require('webpack-dev-middleware');

let compile = webpack(webapckConfig);

let app = express();

app.use( middle(compile) );

app.get('/api/user', (req, res) => {
    res.json({
        name: '熊炬辉',
        age: 26
    })
})



app.listen(3000, () => {
    console.log('server is running...')

})
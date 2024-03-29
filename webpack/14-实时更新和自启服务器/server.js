const express = require('express');
const webpack = require('webpack'); // 引入webpack库
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const complier = webpack(config); // webpack编译器

const app = express();

app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}));

app.listen(3000, () => { // http://localhost:3000/
    console.log('server is running');
});